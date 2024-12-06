// /voicelist/list?voiceListId=29730819
module.exports = (query, request) => {
  const data = {
    limit: query.limit || '200',
    offset: query.offset || '0',
    voiceListId: query.voiceListId,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/voice/workbench/voices/by/voicelist',
  });
};