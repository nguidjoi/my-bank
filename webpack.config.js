const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/components/index.js',
    devtool: "inline-source-map",
    devServer: {
        contentBase: './app',
        open: true,
        hot: true,
        stats: 'verbose',
        port: 2108
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/js')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            }
        }]
    },
    plugins: [new HtmlWebpackPlugin({
            title: 'Mybank',
            hash: true,
            template: './index.ejs',
            favicon: './app/favicon.ico',
            filename: '../index.html'
        }), new ExtractTextPlugin({
            filename: 'bundles.css',
            disable: false,
            allChunks: true
        }), new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()
        //, new UglifyJsPlugin()
    ]

};