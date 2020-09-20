import merge from 'webpack-merge';
import baseConfig from './webpack.config';

export default merge(baseConfig, {
  mode: 'production',
})
