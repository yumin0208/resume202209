const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'resume202209'
    ? '/resume202209-sub-path/'
    : '/',
    outputDir: 'resume202209-sub-path'
})
