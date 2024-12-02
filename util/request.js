const encrypt = require('./crypto');
const request = require('request');
const queryString = require('querystring');
const PacProxyAgent = require('pac-proxy-agent');
const zlib = require('zlib');
const randomUseragent = require('random-useragent');

request.debug = process.env.NODE_ENV === 'development';

const formatCookie = (cookie) => {
  if (typeof cookie === 'object') {
    return Object.keys(cookie)
      .map((key) => {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(cookie[key]);
        return `${encodedKey}=${encodedValue}`;
      })
      .join('; ');
  }
  return cookie;
};
// 处理不同的加密方式
const handleCrypto = (options, data, headers, url, method) => {
  switch (options.crypto) {
    case 'weapi': {
      const csrfToken = (headers['Cookie'] || '').match(/_csrf=([^(;|$)]+)/);
      data.csrf_token = csrfToken ? csrfToken[1] : '';
      return {
        data: encrypt.weapi(data),
        url: url.replace(/\w*api/, 'weapi'),
        headers,
      };
    }
    case 'linuxapi': {
      return {
        data: encrypt.linuxapi({
          method,
          url: url.replace(/\w*api/, 'api'),
          params: data,
        }),
        url: 'https://music.163.com/api/linux/forward',
        headers: {
          ...headers,
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
        },
      };
    }
    case 'eapi': {
      const cookie = options.cookie || {};
      const header = {
        osver: cookie.osver,
        deviceId: cookie.deviceId,
        appver: cookie.appver || '6.1.1',
        versioncode: cookie.versioncode || '140',
        mobilename: cookie.mobilename,
        buildver: cookie.buildver || Date.now().toString().substr(0, 10),
        resolution: cookie.resolution || '1920x1080',
        __csrf: cookie['__csrf'] || '',
        os: cookie.os || 'android',
        channel: cookie.channel,
        requestId: `${Date.now()}_${Math.floor(Math.random() * 1000)
          .toString()
          .padStart(4, '0')}`,
      };

      // 添加音乐相关cookie
      if (cookie.MUSIC_U) header.MUSIC_U = cookie.MUSIC_U;
      if (cookie.MUSIC_A) header.MUSIC_A = cookie.MUSIC_A;

      headers.Cookie = Object.keys(header)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(header[key])}`)
        .join('; ');

      data.header = header;
      return {
        data: encrypt.eapi(options.url, data),
        url: url.replace(/\w*api/, 'eapi'),
        headers,
        encoding: null,
      };
    }
    default:
      return { data, url, headers };
  }
};

const handleSettings = ({ method, url, headers, data, options }) => {
  const settings = {
    method,
    url,
    headers,
    body: queryString.stringify(data),
  };

  // 处理代理
  if (/\.pac$/i.test(options.proxy)) {
    settings.agent = new PacProxyAgent(options.proxy);
  } else {
    settings.proxy = options.proxy;
  }

  return settings;
};

const createRequest = (method, url, data, options) => {
  return new Promise((resolve, reject) => {
    let headers = {
      'User-Agent': randomUseragent.getRandom(),
      'Content-Type': method.toUpperCase() === 'POST' ? 'application/x-www-form-urlencoded' : null,
      Referer: url.indexOf('music.163.com') !== -1 ? 'https://music.163.com' : null,
      Cookie: options.cookie ? formatCookie(options.cookie) : null,
    };
    // 处理加密
    const cryptoResult = handleCrypto(options, data, headers, url, method);
    data = cryptoResult.data;
    url = cryptoResult.url;
    // 处理代理
    const settings = handleSettings({ method, url, headers, data, options });
    if (cryptoResult.encoding !== undefined) {
      settings.encoding = cryptoResult.encoding;
    }
    // 发送请求
    request(settings, (err, res, body) => {
      const response = { status: 500, body: {}, cookie: [] };
      switch (true) {
        // 处理错误情况
        case !!err: {
          response.status = 502;
          response.body = { code: 502, msg: err.stack };
          reject(response);
          break;
        }

        // 处理正常响应
        default: {
          response.cookie = (res.headers['set-cookie'] || []).map((x) => x.replace(/\s*Domain=[^(;|$)]+;*/, ''));
          try {
            switch (options.crypto) {
              // 处理eapi加密方式
              case 'eapi': {
                zlib.unzip(body, function (err, buffer) {
                  const _buffer = err ? body : buffer;
                  try {
                    try {
                      response.body = JSON.parse(encrypt.decrypt(_buffer).toString());
                      response.status = response.body.code || res.statusCode;
                    } catch (e) {
                      response.body = JSON.parse(_buffer.toString());
                      response.status = res.statusCode;
                    }
                  } catch (e) {
                    response.body = _buffer.toString();
                    response.status = res.statusCode;
                  }
                  response.status = 100 < response.status && response.status < 600 ? response.status : 400;
                  response.status === 200 ? resolve(response) : reject(response);
                });
                return false;
              }

              // 处理其他加密方式
              default: {
                response.body = JSON.parse(body);
                response.status = response.body.code || res.statusCode;
                break;
              }
            }
          } catch (e) {
            response.body = body;
            response.status = res.statusCode;
          }

          if (response.status === 200) {
            resolve(response);
          } else if (response.status <= 100 || response.status >= 600) {
            response.status = 400;
            reject(response);
          } else {
            reject(response);
          }
        }
      }
    });
  });
};

module.exports = createRequest;