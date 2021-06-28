// Webpack configuration
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s?)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|webp|gif)$/,
        use: ['url-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.woff(2)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: '[name].[ext]',
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
