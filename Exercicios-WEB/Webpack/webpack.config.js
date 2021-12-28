const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssEctractPlugin = require('mini-css-extract-plugin')
const OptmizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')



module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000,

    },
    optimization: {
        minimizer: [
            new OptmizeCSSAssetsPlugin({}),
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            })
        ]
    },
    plugins: [
        new MiniCssEctractPlugin({ //Cirando os Parametros
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssEctractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a TAG <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader'
            ]
        }]
    }
}