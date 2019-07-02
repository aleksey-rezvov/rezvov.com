const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-plugin');

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
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: ['img:src', 'link:href']
                }
            }
        },
        {
            test: /\.(png|svg|jpg|gif)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/'
                }
            }]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }],
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
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename:'404.html',
            template: 'src/404.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: 'src/.htaccess'},
            { from: 'src/robots.txt'},
        ]),
        //https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400
        // new GoogleFontsPlugin({
        //     fonts: [
        //         {
        //             family: "Montserrat",
        //             variants: [
        //                 "400",
        //                 "700",
        //             ]
        //         },
        //         {
        //             family: "Roboto",
        //             "variants": [
        //                 "100",
        //                 "300",
        //                 "400"
        //             ]
        //         }
        //     ],
        //     formats: [
        //         "woff",
        //         "woff2"
        //     ]
        // })
    ]
};
