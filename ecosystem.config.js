module.exports = {
  apps: [
    {
      name: '163music-proxy',
      script: 'bundle.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      exec_mode: 'cluster',
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '1m',
      out_file: './logs/out.log', // 指定标准输出日志文件
      error_file: './logs/error.log', // 指定错误输出日志文件
      log_date_format: 'YYYY-MM-DD HH:mm Z', // 日志时间格式
    },
  ],
};