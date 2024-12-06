// 获取临时登录凭证
// /register/anonimous

const CryptoJS = require('crypto-js');
const path = require('path');
const fs = require('fs');

const ID_XOR_KEY_1 = '3go8&$8*3*3h0k(2)2';

function cloudmusic_dll_encode_id(some_id) {
  let xoredString = '';
  for (let i = 0; i < some_id.length; i++) {
    const charCode = some_id.charCodeAt(i) ^ ID_XOR_KEY_1.charCodeAt(i % ID_XOR_KEY_1.length);
    xoredString += String.fromCharCode(charCode);
  }
  const wordArray = CryptoJS.enc.Utf8.parse(xoredString);
  const digest = CryptoJS.MD5(wordArray);
  return CryptoJS.enc.Base64.stringify(digest);
}

module.exports = async (query, request) => {
  const deviceIdPath = path.resolve(__dirname, '../', 'deviceid');
  const deviceId = fs.existsSync(deviceIdPath) ? fs.readFileSync(deviceIdPath, 'utf-8').split('\n')[0] : '';
  const encodedId = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(`${deviceId} ${cloudmusic_dll_encode_id(deviceId)}`));
  const data = {
    username: encodedId,
  };
  let result = await request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/register/anonimous',
    cookie: query.cookie,
    proxy: query.proxy,
  });
  if (result.body.code === 200) {
    result = {
      status: 200,
      body: {
        ...result.body,
        cookie: result.cookie.join(';'),
      },
      cookie: result.cookie,
    };
  }
  return result;
};