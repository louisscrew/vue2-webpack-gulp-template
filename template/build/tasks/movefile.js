
var gulp = require('gulp'); //加载gulp模块
var path = require('path');//引用path模块
var config = require('../config.js');//得到配置文件
var gulpfilePath = path.resolve(__dirname,'../');

//移动文件出了css意外的所有静态资源
var srcPath = path.join(path.relative(gulpfilePath, config.path.staticSrcPath), "/**/*");
var noIncludePath = "!" + path.join(path.relative(gulpfilePath, config.path.staticSrcPath), "/**/*.css");
var destPath = path.relative(gulpfilePath, config.path.staticDistPath);
// console.log(noIncludePath)
var movefileTask = function () {
    return  gulp.src([srcPath,noIncludePath])
            .pipe(gulp.dest(destPath));
}
gulp.task('movefile',movefileTask);
module.exports = movefileTask;
