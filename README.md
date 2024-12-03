# 网易云音乐 API

## dev & build

```json
{
  "dev": "nodemon index.js",
  "build": "webpack --config webpack.config.js",
  "start": "node dist/bundle.js",
  "pm2": "pm2 start ecosystem.config.js"
}
```