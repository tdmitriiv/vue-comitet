import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import baseConfig from './webpack.config';

export default merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: 'style-[hash].css'
    })
  ]
})
