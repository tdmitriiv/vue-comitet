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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
