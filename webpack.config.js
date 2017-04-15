const webpack = require("webpack");
const path = require("path");

var DEV = path.resolve(__dirname+"/app");
var OUTPUT = path.resolve(__dirname+"/public");

var config = {
  entry: DEV + '/index.js',
  output: {
    path: OUTPUT,
    filename: "bundle.js"
  },
  devServer:{
    inline: true,
    contentBase: 'public',
    historyApiFallback: true
  },
  module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react', 'stage-2']
            }
         },
         {
	    test: /\.css$/,
	    loader: "style-loader!css-loader"
         }
      ]
   }
};

module.exports = config;
