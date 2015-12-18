var webpack = require('webpack');

module.exports = {
  entry: [
    './src/react-cityPicker.js' // Your appʼs entry point
  ],
  output: {
    path: __dirname + '/dist/',
    filename: 'react-cityPicker.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /(\.jsx|\.js)$/,
        loaders: ['babel?presets[]=es2015&presets[]=react'],
        exclude: /node_modules/
      }
    ]
  }
  //plugins: plugins
};