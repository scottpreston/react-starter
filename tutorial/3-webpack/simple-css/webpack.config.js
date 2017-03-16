const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './app.js',
  module: {
   rules: [
     {
       test: /\.css$/,
       use: [ 'css-loader' ],
       use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
     }
   ]
 },
 plugins: [
        new ExtractTextPlugin('styles.css'),
 ],
  output: {
    filename: 'bundle.js'
  }
}
