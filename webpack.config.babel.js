import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import Dotenv from 'dotenv-webpack';
import manifest from './public/manifest.json';

export default {
  entry: ['babel-polyfill', './src/index.jsx'],
  module: {
    rules: [
      { test: /\.html$/, use: ['html-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(js|jsx)$/,
        resolve: { extensions: ['.js', '.jsx'] },
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, 'src', 'Utils'),
      Components: path.resolve(__dirname, 'src', 'Components'),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'TODO',
      template: './public/index.html',
      favicon: './public/memo.png',
    }),
    new ManifestPlugin({
      seed: manifest,
    }),
    new Dotenv(),
  ],
};
