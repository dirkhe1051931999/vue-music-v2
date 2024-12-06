module.exports.CONFIG = {
  port: process.env.PORT || 3001,
  cacheTime: '2 minutes',
  specialRoutes: {
    'daily_signin.js': '/daily_signin',
    'fm_trash.js': '/fm_trash',
    'personal_fm.js': '/personal_fm',
  },
  resourceTypeMap: {
    0: 'R_SO_4_', //  歌曲
    1: 'R_MV_5_', //  MV
    2: 'A_PL_0_', //  歌单
    3: 'R_AL_3_', //  专辑
    4: 'A_DJ_1_', //  电台,
    5: 'R_VI_62_', //  视频
    6: 'A_EV_2_', // 动态
    7: 'A_DR_14_', // 电台
  },
  osMap: {
    pc: {
      os: 'pc',
      appver: '3.0.18.203152',
      osver: 'Microsoft-Windows-10-Professional-build-22631-64bit',
      channel: 'netease',
    },
    linux: {
      os: 'linux',
      appver: '1.2.1.0428',
      osver: 'Deepin 20.9',
      channel: 'netease',
    },
    android: {
      os: 'android',
      appver: '8.20.20.231215173437',
      osver: '14',
      channel: 'xiaomi',
    },
    iphone: {
      os: 'iPhone OS',
      appver: '9.0.90',
      osver: '16.2',
      channel: 'distribution',
    },
  },
  WNMCID: (function () {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < 6; i++) randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    return `${randomString}.${Date.now().toString()}.01.0`;
  })(),
  userAgentMap: {
    weapi: {
      pc: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0',
    },
    linuxapi: {
      linux: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
    },
    api: {
      pc: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 Chrome/91.0.4472.164 NeteaseMusicDesktop/3.0.18.203152',
      android: 'NeteaseMusic/9.1.65.240927161425(9001065);Dalvik/2.1.0 (Linux; U; Android 14; 23013RK75C Build/UKQ1.230804.001)',
      iphone: 'NeteaseMusic 9.0.90/5038 (iPhone; iOS 16.2; zh_CN)',
    },
  },
};