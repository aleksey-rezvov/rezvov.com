const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

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
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
            })
        ],
    },
    module: {
        rules: [
        {
            test: /\.scss$/,
            include: path.resolve(__dirname, 'src/css'),
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
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
                },
            ]
        },
        {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: ['img:src', 'link:href'],
                    interpolate: true
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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/html/views/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            filename:'find-cto.html',
            template: './src/html/views/find-cto.html',
            title: "Найду CTO для вашего проекта",
            minify: {
                collapseWhitespace: true
            }
        }),
        new SitemapPlugin('https://rezvov.com', [
            '/',
            '/find-cto'
            ], {
            lastMod: true,
            }
        ),
        new HtmlWebpackPlugin({
            filename:'404.html',
            template: 'src/html/views/404.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new CopyPlugin([{
            to: 'yandex_eba83ee651ca233d.html',
            from: 'src/html/yandex_eba83ee651ca233d.html',
        }]),
        new CopyPlugin([{
            to: 'googledfcc307aa0d9094c.html',
            from: 'src/html/googledfcc307aa0d9094c.html',
        }]),
        new MiniCssExtractPlugin({
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: 'src/robots.txt'},
        ]),
    ]
};
