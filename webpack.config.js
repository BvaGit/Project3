const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    devServer: {
        port: 8080
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader", "sass-loader"
            ],
        },
        {
            test: /\.(jpg|jpeg|png|svg)/,
            use: ['file-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
                
            }
        },
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        }
    ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
         }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
    ]
}