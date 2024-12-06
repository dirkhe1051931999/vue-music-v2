// 播客声音排序
//  /voicelist/trans?limit=30&offset=0&radioId=29730819&programId=0&position=1
module.exports = (query, request) => {
  const data = {
    limit: query.limit || '200', // 每页数量
    offset: query.offset || '0', // 偏移量
    radioId: query.radioId || null, // 电台id
    programId: query.programId || '0', // 节目id
    position: query.position || '1', // 排序编号
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/voice/workbench/radio/program/trans',
  });
};