# koa

 Koa -- 基于 Node.js 平台的下一代 web 开发框架

https://koa.bootcss.com/#introduction

学习廖雪峰老师案例
https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471087582981d6c0ea265bf241b59a04fa6f61d767f6000

nunjucks
https://mozilla.github.io/nunjucks/cn/api.html

环境： node > 7.6.0版本 + koa2

安装 

创建 koa-demo 文件

新建 package.json

创建 一个app.js

 cd koa-demo
 
   npm install

   npm start === node run app.js

打开losthost:3000

so easy

![image](https://www.hijs.cc/img/koa.png)

加了数据库配置

![image](https://www.hijs.cc/img/QQ%BD%D8%CD%BC20171214180031.png)

效果

![image](https://www.hijs.cc/img/QQ%CD%BC%C6%AC20171214182356.png)

首页装了mysql 在本地建数据库 koa 表 list users

这个可自行发挥 也可链接自己服务器

``` javascript
var config = {
    dialect: 'mysql',
    database: 'koa',
    username: 'root',
    password: '123456',
    host: '127.0.0.1',
    port: 3306
};

module.exports = config;
``` javascript


下载本项目到本地

npm install

npm start

http://localhost:3000

撒花 完结
