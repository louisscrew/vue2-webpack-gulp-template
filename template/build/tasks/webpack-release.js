var config = require('../config.js');//得到配置文件
var path = require('path');//引用path模块
var gulp = require('gulp'); //加载gulp模块
var gutil = require('gulp-util');//gulp工具模块

var webpack = require("webpack");//引入webpack模块
var webpackReleaseConfig = require("../webpack.release.config.js");

//添加webpack的发布任务
gulp.task('webpack-release',function () {
    var config = Object.create(webpackReleaseConfig);
    webpack(config, function(err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }
        gutil.log("[webpack]", stats.toString({}));
    });
});
