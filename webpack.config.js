const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    // webpack will take the files from ./src/index
    entry: './src/index.tsx',

    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [

            // we use babel-loader to load our jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
