var gulp = require('gulp'); //加载gulp模块
var del = require('del');//删除的模块
var path = require('path');//引用path模块
var config = require('../config.js');//得到配置文件
//将要删除的目录
var delPath = config.path.distRootPath;
//清空所有dist目录的方法
var cleanTask = function () {
    return del.sync(delPath, {force: true});
}
gulp.task('clean', cleanTask);
module.exports = cleanTask;
