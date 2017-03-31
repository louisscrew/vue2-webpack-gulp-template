/*
https://webpack.js.org/configuration/   webpackpa
path.resolve(__dirname, "src/lib") 前面第一个参数是当前路径，后面是当前第一个参数相对的路径，最后返回绝对路径
path.resolve(__dirname) 返回当前路径的绝对路径
*/

var config = require('./config.js');//得到配置文件
var path = require('path');//引用path模块
var webpack = require('webpack')//引用webpack模块

module.exports = function(){
    return {
        entry: {
            build:['../src/main.js']//入口文件
            ,vendors: ['jquery']
        },
        output: {
            path: config.webpack.outputPath,
            publicPath: config.webpack.publicPath,
            filename: '[name].js'
        },
        module: {
            rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }]
        },
        resolve: {
            modules: [
                "node_modules",
                path.resolve(__dirname, "../src/lib")
            ],
            alias: {
                'vue$': 'vue/dist/vue.common.js'
                ,'jquery': 'jquery/jquery-1.11.3.js'
            }
        },
        devServer: {
            historyApiFallback: true,
            noInfo: true
        },
        performance: {
            hints: false
        },
        devtool: '#eval-source-map',
        plugins:[
            new webpack.HotModuleReplacementPlugin(),
            // //第三方插件 分离的插件
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendors",
                filename: "vendors.js"
            })
        ]
    };
};
