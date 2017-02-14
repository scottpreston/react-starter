module.exports = function() {
    return {
      entry: {
        'app': ['./index.js'],
        'vendor': ['moment', 'jquery','bootstrap']
        },
        output: {
          filename: '[name].bundle.js',
          path: 'dist/'
        }
    }
}
