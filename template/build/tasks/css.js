var config = require('../config.js');//得到配置文件
var path = require('path');//引用path模块
var gulp = require('gulp'); //加载gulp模块
//postcss插件模块
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');//样式浏览器兼容插件，补全各个浏览器的差异
var cssnext = require('cssnext');//可以使用未来的css语法
var precss = require('precss');//使样式拥有less、sass的语法
var atImport = require('postcss-import');//允许css可以使用import加载其他的文件
var mqpacker = require('css-mqpacker');//强化css的媒体查询
var cssnano = require('cssnano');//用来压缩css
var plumber = require('gulp-plumber');//在执行时出错时不退出进程的插件

//得到gulpfile路径当前文件所属目录
var gulpfilePath = path.resolve(__dirname,'../');
//处理样式的任务
var cssProcessor = [
    atImport
    ,autoprefixer({ browers: ['last 2 versions', 'ie >= 9', '> 5% in CN'] })
    ,cssnext
    ,precss
];
//css匹配glob 得到的是相对路径
var cssSrcPath = path.join(path.relative(gulpfilePath, config.path.staticSrcPath), "/**/*.css");
//css输出的glob相对路径
var cssDestPath = path.relative(gulpfilePath, config.path.staticDistPath);

//开发环境的css处理
var cssDevTask = function () {
    return  gulp.src(cssSrcPath)
            .pipe(plumber())
            .pipe(postcss(cssProcessor))
            .pipe(gulp.dest(cssDestPath));
}
gulp.task('css:dev',cssDevTask);



//发布模式的样式处理
var cssReleaseTask = function () {
    //发布模式的处理需要压缩
    cssProcessor.push(cssnano({
        // 关闭cssnano的autoprefixer选项，不然会和前面的autoprefixer冲突
        autoprefixer: false,
        reduceIdents: false,
        zindex: false,
        discardUnused: false,
        mergeIdents: false
    }));
    return  gulp.src(cssSrcPath)
            .pipe(plumber())
            .pipe(postcss(cssProcessor))
            .pipe(gulp.dest(cssDestPath));
}
//注册
gulp.task('css:release',cssReleaseTask);



module.exports = {
    cssDevTask:cssDevTask
    ,cssReleaseTask:cssReleaseTask
};
