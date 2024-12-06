// 歌单导入 - 任务状态
// /playlist/import/task/status?id=123834369
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {
      taskIds: JSON.stringify([query.id]),
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/playlist/import/task/status/v2',
    }
  );
};