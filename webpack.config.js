const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    entry: [
        './src/js/index.js',
        './src/css/style.scss'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
        {
            test: /\.scss$/,
            include: path.resolve(__dirname, 'src/css'),
            use: [
                {
                    loader: "style-loader",
                    options: {}
                },
                {
                    loader: "css-loader",
                    options: {}
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                }
            }]
        },
        {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: ['img:src', 'link:href']
                }
            }
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            use: [
                'file-loader'
            ]
        },
        // {
        //     test: /\.(png|jpg|gif)$/i,
        //     use: [
        //         {
        //             loader: 'url-loader',
        //             options: {
        //                 limit: 100000,
        //             },
        //         },
        //     ],
        // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'src/indexn.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js"
        }),
        new CleanWebpackPlugin()
    ]
};
