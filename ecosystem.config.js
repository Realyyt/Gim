module.exports = {
  apps: [{
    name: 'Gim',
    script: 'node_modules/.bin/next',
    args: 'start',
    cwd: '/root/Gims/Gim',  // Add your full project path here
    instances: 1,
    exec_mode: 'fork',
    autorestart: false,
    watch: false,
    env: {
      PORT: 3001,
      NODE_ENV: 'production'
    }
  }]
}
