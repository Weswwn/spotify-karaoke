const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [{
            test: /\.m?jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
        }]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    devServer: {
        port: 3000,
        contentBase: "./public",
        hot: true,
        allowedHosts: [
            'localhost',
        ],
    },
    plugins: [new ESLintPlugin({
        emitError: true,
        emitWarning: true
    })]
};