var gulpSequence = require('gulp-sequence')//让任务能按照顺序执行的插件
var config = require('../config.js');//得到配置文件
var path = require('path');//引用path模块
var gulp = require('gulp'); //加载gulp模块

//导入css的任务
var cssTask = require("./css.js");
//导出clean任务
var cleanTask = require("./clean.js");
//移动文件的任务
var moveTask = require("./movefile.js");
//webpack-dev的开发任务
var webpackDev = require("./webpack-dev.js");
//webpack-dev的发布任务
var webpackRelease = require("./webpack-release.js");


//得到gulp文件所属的地方
var gulpfilePath = path.resolve(__dirname,'../');
//执行开发任务
gulp.task('development',function(){
    gulpSequence('clean', 'movefile', 'css:dev', function(){
        //并执行观察样式的变化
        var watchCssSrcPath = path.join(path.relative(gulpfilePath, config.path.staticSrcPath), "/**/*.css");
        gulp.watch(watchCssSrcPath, ['css:dev']);
        gulp.start("webpack-dev");
    });
});

//执行发版任务
gulp.task('release',gulpSequence('clean', 'movefile', 'css:release','webpack-release'));
