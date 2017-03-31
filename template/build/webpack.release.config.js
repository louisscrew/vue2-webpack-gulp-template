var config = require('./config.js');//得到配置文件
var path = require('path');//引用path模块
var webpack = require('webpack')//引用webpack模块
//引入通用配置
var webpackBaseConfig = require("./webpack.base.config.js");
//额外创建实例
var webpackReleaseConfig = new webpackBaseConfig();
//导出模块
module.exports = webpackReleaseConfig;
//在原有的基础上扩展模块
module.exports.devtool = '#source-map';
// http://vue-loader.vuejs.org/en/workflow/production.html
module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    })
]);
