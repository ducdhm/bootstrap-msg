const path = require('path');
const argv = require('yargs').argv;
const packageJson = require('./package.json');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const WrapperPlugin = require('wrapper-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const BANNER = `${packageJson.title} v${packageJson.version} | Copyright (c) 2016-present ${packageJson.author}`;

if (argv.prod) {
    process.env.NODE_ENV = 'production';
}
let PROD = process.env.NODE_ENV === 'production';

module.exports = {
    mode: PROD ? 'production' : 'development',
    devtool: PROD ? 'source-map' : 'inline-source-map',

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: packageJson.libraryName,
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: `js/${packageJson.name}.js`,
        globalObject: `typeof self !== 'undefined' ? self : this`,
    },

    optimization: {
        minimizer: [
            new TerserJSPlugin({
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                    },
                },
            }),
        ],
    },

    plugins: PROD ? [
        new webpack.BannerPlugin(BANNER),
        new WrapperPlugin({
            test: /\.css$/,
            footer: `/*# sourceMappingURL=${packageJson.name}.css.map */`,
        }),
        new MiniCssExtractPlugin({
            filename: `css/${packageJson.name}.css`,
        }),
    ] : [
        new MiniCssExtractPlugin({
            filename: `css/${packageJson.name}.css`,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'string-replace-loader',
                        options: {
                            multiple: [
                                {
                                    search: '@{version}',
                                    replace: packageJson.version,
                                },
                                {
                                    search: '\\n\\s+',
                                    replace: '',
                                    flags: 'g',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    externals: {
        jquery: {
            amd: 'jquery',
            root: '$',
            commonjs: 'jquery',
            commonjs2: 'jquery',
        },
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js'],
    },
};
