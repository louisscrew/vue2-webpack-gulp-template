var config = require('./config.js');//得到配置文件
var path = require('path');//引用path模块
var webpack = require('webpack')//引用webpack模块
//引入通用的配置文件
var webpackBaseConfig = require("./webpack.base.config.js");
//额外创建dev的独立实例
var webpackDevConfig = new webpackBaseConfig();
module.exports = webpackDevConfig;
//添加mock测试数据的拦截器模块
module.exports.entry.vendors.push('../test/mockdata/MockMain.js');
