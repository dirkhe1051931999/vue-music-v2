const express = require('express');
const bodyParser = require('body-parser');
const request = require('./util/request');
const { middleware: cache } = require('apicache');

// 配置常量
const CONFIG = {
  port: process.env.PORT || 3001,
  cacheTime: '2 minutes',
  specialRoutes: {
    'daily_signin.js': '/daily_signin',
    'fm_trash.js': '/fm_trash',
    'personal_fm.js': '/personal_fm',
  },
};
// 模块
const modules = {
  'album.js': require('./module/album.js'),
  'album_newest.js': require('./module/album_newest.js'),
  'album_sublist.js': require('./module/album_sublist.js'),
  'artists.js': require('./module/artists.js'),
  'artist_album.js': require('./module/artist_album.js'),
  'artist_desc.js': require('./module/artist_desc.js'),
  'artist_list.js': require('./module/artist_list.js'),
  'artist_mv.js': require('./module/artist_mv.js'),
  'artist_sub.js': require('./module/artist_sub.js'),
  'artist_sublist.js': require('./module/artist_sublist.js'),
  'banner.js': require('./module/banner.js'),
  'batch.js': require('./module/batch.js'),
  'captch_register.js': require('./module/captch_register.js'),
  'captch_sent.js': require('./module/captch_sent.js'),
  'captch_verify.js': require('./module/captch_verify.js'),
  'check_music.js': require('./module/check_music.js'),
  'comment.js': require('./module/comment.js'),
  'comment_album.js': require('./module/comment_album.js'),
  'comment_dj.js': require('./module/comment_dj.js'),
  'comment_event.js': require('./module/comment_event.js'),
  'comment_hot.js': require('./module/comment_hot.js'),
  'comment_like.js': require('./module/comment_like.js'),
  'comment_music.js': require('./module/comment_music.js'),
  'comment_mv.js': require('./module/comment_mv.js'),
  'comment_playlist.js': require('./module/comment_playlist.js'),
  'comment_video.js': require('./module/comment_video.js'),
  'daily_signin.js': require('./module/daily_signin.js'),
  'digitalAlbum_purchased.js': require('./module/digitalAlbum_purchased.js'),
  'dj_banner.js': require('./module/dj_banner.js'),
  'dj_category_excludehot.js': require('./module/dj_category_excludehot.js'),
  'dj_category_recommend.js': require('./module/dj_category_recommend.js'),
  'dj_catelist.js': require('./module/dj_catelist.js'),
  'dj_detail.js': require('./module/dj_detail.js'),
  'dj_hot.js': require('./module/dj_hot.js'),
  'dj_paygift.js': require('./module/dj_paygift.js'),
  'dj_program.js': require('./module/dj_program.js'),
  'dj_program_detail.js': require('./module/dj_program_detail.js'),
  'dj_recommend.js': require('./module/dj_recommend.js'),
  'dj_recommend_type.js': require('./module/dj_recommend_type.js'),
  'dj_sub.js': require('./module/dj_sub.js'),
  'dj_sublist.js': require('./module/dj_sublist.js'),
  'dj_today_perfered.js': require('./module/dj_today_perfered.js'),
  'event.js': require('./module/event.js'),
  'event_del.js': require('./module/event_del.js'),
  'event_forward.js': require('./module/event_forward.js'),
  'fm_trash.js': require('./module/fm_trash.js'),
  'follow.js': require('./module/follow.js'),
  'hot_topic.js': require('./module/hot_topic.js'),
  'like.js': require('./module/like.js'),
  'likelist.js': require('./module/likelist.js'),
  'login.js': require('./module/login.js'),
  'login_cellphone.js': require('./module/login_cellphone.js'),
  'login_refresh.js': require('./module/login_refresh.js'),
  'login_status.js': require('./module/login_status.js'),
  'logout.js': require('./module/logout.js'),
  'lyric.js': require('./module/lyric.js'),
  'msg_comments.js': require('./module/msg_comments.js'),
  'msg_forwards.js': require('./module/msg_forwards.js'),
  'msg_notices.js': require('./module/msg_notices.js'),
  'msg_private.js': require('./module/msg_private.js'),
  'msg_private_history.js': require('./module/msg_private_history.js'),
  'mv_all.js': require('./module/mv_all.js'),
  'mv_detail.js': require('./module/mv_detail.js'),
  'mv_exclusive_rcmd.js': require('./module/mv_exclusive_rcmd.js'),
  'mv_first.js': require('./module/mv_first.js'),
  'mv_sub.js': require('./module/mv_sub.js'),
  'mv_sublist.js': require('./module/mv_sublist.js'),
  'mv_url.js': require('./module/mv_url.js'),
  'personalized.js': require('./module/personalized.js'),
  'personalized_djprogram.js': require('./module/personalized_djprogram.js'),
  'personalized_mv.js': require('./module/personalized_mv.js'),
  'personalized_newsong.js': require('./module/personalized_newsong.js'),
  'personalized_privatecontent.js': require('./module/personalized_privatecontent.js'),
  'personal_fm.js': require('./module/personal_fm.js'),
  'playlist_catlist.js': require('./module/playlist_catlist.js'),
  'playlist_create.js': require('./module/playlist_create.js'),
  'playlist_detail.js': require('./module/playlist_detail.js'),
  'playlist_hot.js': require('./module/playlist_hot.js'),
  'playlist_subscribe.js': require('./module/playlist_subscribe.js'),
  'playlist_subscribers.js': require('./module/playlist_subscribers.js'),
  'playlist_tracks.js': require('./module/playlist_tracks.js'),
  'playlist_update.js': require('./module/playlist_update.js'),
  'playmode_intelligence_list.js': require('./module/playmode_intelligence_list.js'),
  'program_recommend.js': require('./module/program_recommend.js'),
  'recommend_resource.js': require('./module/recommend_resource.js'),
  'recommend_songs.js': require('./module/recommend_songs.js'),
  'related_allvideo.js': require('./module/related_allvideo.js'),
  'related_playlist.js': require('./module/related_playlist.js'),
  'resource_like.js': require('./module/resource_like.js'),
  'scrobble.js': require('./module/scrobble.js'),
  'search.js': require('./module/search.js'),
  'search_hot.js': require('./module/search_hot.js'),
  'search_multimatch.js': require('./module/search_multimatch.js'),
  'search_suggest.js': require('./module/search_suggest.js'),
  'send_playlist.js': require('./module/send_playlist.js'),
  'send_text.js': require('./module/send_text.js'),
  'setting.js': require('./module/setting.js'),
  'share_resource.js': require('./module/share_resource.js'),
  'simi_artist.js': require('./module/simi_artist.js'),
  'simi_mv.js': require('./module/simi_mv.js'),
  'simi_playlist.js': require('./module/simi_playlist.js'),
  'simi_song.js': require('./module/simi_song.js'),
  'simi_user.js': require('./module/simi_user.js'),
  'song_detail.js': require('./module/song_detail.js'),
  'song_url.js': require('./module/song_url.js'),
  'toplist.js': require('./module/toplist.js'),
  'toplist_artist.js': require('./module/toplist_artist.js'),
  'toplist_detail.js': require('./module/toplist_detail.js'),
  'top_album.js': require('./module/top_album.js'),
  'top_artists.js': require('./module/top_artists.js'),
  'top_list.js': require('./module/top_list.js'),
  'top_mv.js': require('./module/top_mv.js'),
  'top_playlist.js': require('./module/top_playlist.js'),
  'top_playlist_highquality.js': require('./module/top_playlist_highquality.js'),
  'top_song.js': require('./module/top_song.js'),
  'user_audio.js': require('./module/user_audio.js'),
  'user_cloud.js': require('./module/user_cloud.js'),
  'user_cloud_del.js': require('./module/user_cloud_del.js'),
  'user_cloud_detail.js': require('./module/user_cloud_detail.js'),
  'user_detail.js': require('./module/user_detail.js'),
  'user_dj.js': require('./module/user_dj.js'),
  'user_event.js': require('./module/user_event.js'),
  'user_followeds.js': require('./module/user_followeds.js'),
  'user_follows.js': require('./module/user_follows.js'),
  'user_playlist.js': require('./module/user_playlist.js'),
  'user_record.js': require('./module/user_record.js'),
  'user_subcount.js': require('./module/user_subcount.js'),
  'user_update.js': require('./module/user_update.js'),
  'video_detail.js': require('./module/video_detail.js'),
  'video_group.js': require('./module/video_group.js'),
  'video_group_list.js': require('./module/video_group_list.js'),
  'video_sub.js': require('./module/video_sub.js'),
  'video_url.js': require('./module/video_url.js'),
  'weblog.js': require('./module/weblog.js'),
};

// 中间件
const corsMiddleware = (req, res, next) => {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.header({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8',
    });
  }
  next();
};

const cookieParser = (req, res, next) => {
  req.cookies = {};
  const cookieHeader = req.headers.cookie || '';
  cookieHeader.split(/\s*;\s*/).forEach((pair) => {
    const [key, value] = pair.split('=').map((part) => decodeURIComponent(part.trim()));
    if (key && value) {
      req.cookies[key] = value;
    }
  });
  next();
};

// 路由处理
const handleRoute = (route, handler) => {
  return async (req, res) => {
    try {
      const query = { ...req.query, ...req.body, cookie: req.cookies };
      const answer = await handler(query, request);
      res.append('Set-Cookie', answer.cookie);
      res.status(answer.status).send(answer.body);
    } catch (answer) {
      console.log('[ERR]', decodeURIComponent(req.originalUrl));
      if (answer.body.code === '301') {
        answer.body.msg = '需要登录';
      }
      res.append('Set-Cookie', answer.cookie);
      res.status(answer.status).send(answer.body);
    }
  };
};

// 应用设置
const app = express();

// 中间件配置
app.use(corsMiddleware);
app.use(cookieParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cache(CONFIG.cacheTime, (req, res) => res.statusCode === 200));

// 路由配置
try {
  Object.entries(modules).forEach(([file, handler]) => {
    const route = CONFIG.specialRoutes[file] || '/' + file.replace(/\.js$/i, '').replace(/_/g, '/');
    app.use(route, handleRoute(route, handler));
  });
} catch (e) {
  console.error('路由配置出错', e);
}

// 启动服务器
app.server = app.listen(CONFIG.port, () => {
  console.log(`server running @ http://localhost:${CONFIG.port}`);
});

module.exports = app;