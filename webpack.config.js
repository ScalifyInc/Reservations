const path = require('path');

module.exports = {
  entry: './client/reservation.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
    library: 'ReservationsModule',
  },
  module: {
    rules: [
      {
        test: /(\.m?js$|\.m?jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.otf$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
};
