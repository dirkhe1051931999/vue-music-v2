module.exports = {
  apps: [{
    name: "163music-proxy",
    script: "bundle.js",
    instances: 1,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    },
    autorestart: true,
    max_restarts: 10,
    min_uptime: "1m"
  }]
}