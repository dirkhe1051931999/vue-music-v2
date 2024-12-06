// 编辑用户信息
// /user/update?gender=0&signature=测试签名&city=440300&nickname=123&birthday=1525918298004&province=440000
module.exports = (query, request) => {
  const data = {
    avatarImgId: '0',
    birthday: query.birthday,
    city: query.city,
    gender: query.gender,
    nickname: query.nickname,
    province: query.province,
    signature: query.signature,
  };
  return request('POST', `https://music.163.com/weapi/user/profile/update`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};