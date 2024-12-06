// 私人 DJ
// /aidj/content/rcmd
/* {"extInfo":"{\"lastRequestTimestamp\":1692358373509,\"lbsInfoList\":[{\"lat\":40.23076381,\"lon\":129.07545186,\"time\":1692358543},{\"lat\":40.23076381,\"lon\":129.07545186,\"time\":1692055283}],\"listenedTs\":false,\"noAidjToAidj\":true}","header":"{}"} */
// let a = {
//   extInfo: {
//     lastRequestTimestamp: 1692358373509,
//     lbsInfoList: [
//       {
//         lat: 40.23076381,
//         lon: 129.07545186,
//         time: 1692358543,
//       },
//       { lat: 40.23076381, lon: 129.07545186, time: 1692055283 },
//     ],
//     listenedTs: false,
//     noAidjToAidj: true,
//   },
//   header: '{}',
// };
module.exports = (query, request) => {
  var extInfo = {};
  if (query.latitude !== undefined) {
    extInfo.lbsInfoList = [
      {
        lat: query.latitude,
        lon: query.longitude,
        time: Date.parse(new Date()) / 1000,
      },
    ];
  }
  extInfo.noAidjToAidj = false;
  extInfo.lastRequestTimestamp = new Date().getTime();
  extInfo.listenedTs = false;
  const data = {
    extInfo: JSON.stringify(extInfo),
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    url: '/api/aidj/content/rcmd/info',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};