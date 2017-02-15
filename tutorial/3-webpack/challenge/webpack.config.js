module.exports = function() {
    return {
        entry: {
            'app': ['./index.js'],
            'vendor': ['moment', 'jquery']
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }]
        },
        output: {
            filename: '[name].bundle.js',
            path: 'dist/'
        }
    }
}