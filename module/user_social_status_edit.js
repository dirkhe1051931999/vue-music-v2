// 用户状态 - 编辑
// /user/social/status/edit?type=0&iconUrl=&content=测试状态&actionUrl=
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {
      content: JSON.stringify({
        type: query.type,
        iconUrl: query.iconUrl,
        content: query.content,
        actionUrl: query.actionUrl,
      }),
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/social/user/status/edit',
    }
  );
};