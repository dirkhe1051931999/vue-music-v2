//声音搜索
// /voicelist/list/search?limit=30&offset=0&name=测试&type=0&voiceFeeType=0&radioId=29730819
module.exports = (query, request) => {
  const data = {
    limit: query.limit || '200',
    offset: query.offset || '0',
    name: query.name || null,
    displayStatus: query.displayStatus || null,
    type: query.type || null,
    voiceFeeType: query.voiceFeeType || null,
    radioId: query.voiceListId,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/voice/workbench/voice/list',
  });
};