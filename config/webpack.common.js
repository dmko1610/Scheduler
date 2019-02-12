import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import webpack from 'webpack'
const { resolvePath, ROOT_DIR } = require('./utils').default

const appTsConfig = resolvePath('tsconfig.json')

module.exports = {
  entry: {
    app: './src/index'
  },
  resolve: {
    extensions: ['.css', '.ts', '.tsx', '.js', '.json'],    
    plugins: [new TsconfigPathsPlugin({ configFile: appTsConfig })],
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg|png)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /icons-(192|512)\.png$/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /apple_splash_(640|750|1125|1242)\.png$/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /manifest\.json$/,
        type: 'javascript/auto',
        use: 'file-loader?name=[name].[ext]',
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: ROOT_DIR,
    }),
    new HtmlWebpackPlugin({
      title: 'COPT store',
      template: './src/index.html',
    }),
    new webpack.ProvidePlugin({
      Promise: ['es6-promise', 'Promise']
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: resolvePath('dist'),
  },
}