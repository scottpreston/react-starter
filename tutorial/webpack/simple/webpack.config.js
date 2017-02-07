module.exports = {
  entry: './app.js',
  module: {
   rules: [
     {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
     }
   ]
 },
  output: {
    filename: 'bundle.js'
  }
}
