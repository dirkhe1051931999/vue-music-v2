// 歌曲链接
// /song/url?id=33894312
module.exports = async (query, request) => {
  const ids = String(query.id).split(',');
  const data = {
    ids: JSON.stringify(ids),
    br: parseInt(query.br || 999000),
  };
  const res = await request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/song/enhance/player/url',
  });
  // 根据id排序
  const result = res.body.data;
  result.sort((a, b) => {
    return ids.indexOf(String(a.id)) - ids.indexOf(String(b.id));
  });
  return {
    status: 200,
    body: {
      code: 200,
      data: result,
    },
  };
};