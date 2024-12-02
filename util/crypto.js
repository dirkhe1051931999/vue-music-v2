const crypto = require('crypto');

// 常量配置
const CRYPTO_CONFIG = {
  iv: Buffer.from('0102030405060708'),
  presetKey: Buffer.from('0CoJUm6Qyw8W8jud'),
  linuxapiKey: Buffer.from('rFgB&h#%2?^eDg:Q'),
  eapiKey: 'e82ckenh8dichen8',
  base62: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgtQn2JZ34ZC28NWYpAUd98iZ37BUrX/aKzmFbt7clFSs6sXqHauqKWqdtLkF2KexO40H1YTX8z2lSgBBOAxLsvaklV8k4cBFK9snQXE9/DDaFt6Rr7iVZMldczhC0JNgTz+SHXT6CBHuX3e9SdB1Ua44oncaTWz7OBGLbCiK45wIDAQAB
-----END PUBLIC KEY-----`,
};

// 加密工具函数
const CryptoUtils = {
  aesEncrypt(buffer, mode, key, iv) {
    const cipher = crypto.createCipheriv('aes-128-' + mode, key, iv);
    return Buffer.concat([cipher.update(buffer), cipher.final()]);
  },

  rsaEncrypt(buffer, key) {
    buffer = Buffer.concat([Buffer.alloc(128 - buffer.length), buffer]);
    return crypto.publicEncrypt(
      { key, padding: crypto.constants.RSA_NO_PADDING }, buffer);
  },

  createSecretKey(size) {
    return crypto.randomBytes(size).
      map(n => CRYPTO_CONFIG.base62.charAt(n % 62).charCodeAt());
  },
};

// API加密方法
const ApiEncryption = {
  weapi(object) {
    const text = JSON.stringify(object);
    const secretKey = CryptoUtils.createSecretKey(16);
    const encryptedText = CryptoUtils.aesEncrypt(Buffer.from(text), 'cbc',
      CRYPTO_CONFIG.presetKey, CRYPTO_CONFIG.iv).toString('base64');

    return {
      params: CryptoUtils.aesEncrypt(Buffer.from(encryptedText), 'cbc',
        secretKey, CRYPTO_CONFIG.iv).toString('base64'),
      encSecKey: CryptoUtils.rsaEncrypt(secretKey.reverse(),
        CRYPTO_CONFIG.publicKey).toString('hex'),
    };
  },

  linuxapi(object) {
    const text = JSON.stringify(object);
    return {
      eparams: CryptoUtils.aesEncrypt(Buffer.from(text), 'ecb',
        CRYPTO_CONFIG.linuxapiKey, '').toString('hex').toUpperCase(),
    };
  },

  eapi(url, object) {
    const text = typeof object === 'object' ? JSON.stringify(object) : object;
    const message = `nobody${url}use${text}md5forencrypt`;
    const digest = crypto.createHash('md5').update(message).digest('hex');
    const data = `${url}-36cd479b6b5-${text}-36cd479b6b5-${digest}`;

    return {
      params: CryptoUtils.aesEncrypt(Buffer.from(data), 'ecb',
        CRYPTO_CONFIG.eapiKey, '').toString('hex').toUpperCase(),
    };
  },

  decrypt(cipherBuffer) {
    const decipher = crypto.createDecipheriv('aes-128-ecb',
      CRYPTO_CONFIG.eapiKey, '');
    return Buffer.concat([decipher.update(cipherBuffer), decipher.final()]);
  },
};

module.exports = {
  weapi: ApiEncryption.weapi,
  linuxapi: ApiEncryption.linuxapi,
  eapi: ApiEncryption.eapi,
  decrypt: ApiEncryption.decrypt,
};