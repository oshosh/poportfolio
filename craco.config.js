const { whenDev } = require('@craco/craco')
const path = require('path')

module.exports = {
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'entry',
          corejs: {
            version: 3,
            proposals: true
          }
        },
      ],
    ],
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = 'build'
      
      webpackConfig.output = {
        ...webpackConfig.output,
        ...{
          filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
          chunkFilename: 'static/js/[name].js'
        },
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
      }

      webpackConfig.devtool = false

      webpackConfig.optimization.splitChunks = {
        ...webpackConfig.optimization.splitChunks,
        ...{
          chunks: 'all',
          name: true
        }
      }

      return webpackConfig
    }
  },
};