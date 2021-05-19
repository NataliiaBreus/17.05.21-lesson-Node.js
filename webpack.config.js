const path = require ('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(_dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'MY AWESOME WEBPACK CONFIG',
            template: './index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};