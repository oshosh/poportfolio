const prdEnv = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.devtool = 'inline-source-map';
      return webpackConfig;
    }
  },
  babel: {
    plugins: [
      [
        'transform-remove-console',
        { exclude: ['info', 'error'] },
      ],
    ],
  },
}

const devEnv = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.module.rules.push({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      });
      
      webpackConfig.devtool = 'hidden-source-map';
      return webpackConfig;
    }
  },
  babel: {
    presets: [
      ['@babel/preset-env', '@babel/preset-react']
    ],
  },
}

const env = process.env.NODE_ENV === 'dev' ? devEnv : prdEnv;
module.exports = env;