var Mock = require('mockjs');//引入mockjs模块

Mock.mock('/test', {    //匹配.json文件，可执行匹配成功的参数
  'list|1-10': [{      //数据模板
         'id|+1': 1,
         'email': '@EMAIL',
         'regexp3': /\d{5,10}/
     }]
 });
