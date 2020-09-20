import merge from 'webpack-merge';
import baseConfig from './webpack.config';
import webpack from 'webpack'

export default merge(baseConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
