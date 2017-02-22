//编译环境的配置文件
var path = require('path');//引用path模块

//各个路径的配置
var distStr = "dist";
var distRootPath = path.resolve(__dirname, "../"+distStr)
var pathBean = {
    distRootPath:distRootPath//发布目录绝对路径
    ,staticSrcPath:path.resolve(__dirname, "../static")//静态资源目录
    ,staticDistPath:path.resolve(__dirname, "../"+distStr+"/static")//静态dist资源目录
};

// var s = path.join("./src", "stylesheets", '/**/*.{css}')
// console.log(s)
exports.path = pathBean;


//webpack的配置
exports.webpack = {
    outputPath:distRootPath
    ,serverHost:'localhost'//如果要想其他电脑也能访问，可以设置成0.0.0.0
    ,serverPort:8080
    ,publicPath:'/'+distStr+'/'//webpack中用到的public
};
