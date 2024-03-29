/*
 * @Author: XiaKeMing xiakeming97@gmail.com
 * @Date: 2023-10-11 13:57:28
 * @LastEditors: XiaKeMing xiakeming97@gmail.com
 * @LastEditTime: 2023-12-08 16:43:52
 * @FilePath: /express-practise/app.js
 * @Description: 主入口
 * 
 * Copyright (c) 2023 by XIAKEMING, All Rights Reserved. 
 */

// 导入所需模块
const createError = require('http-errors'); // 用于创建HTTP错误的模块
const express = require('express'); // Express框架
const path = require('path'); // 处理文件路径的模块
const fs = require('fs');
const cookieParser = require('cookie-parser'); // 解析cookie的中间件
const logger = require('morgan'); // 记录HTTP请求日志的中间件
const db = require('./db/db'); // 导入db模块
const multer = require('multer');
const responseHandler =  require('./middlewares/formatResponse.js'); // 导入请求结果统一返回中间件

// 导入路由模块
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const uploadRouter = require('./routes/upload');


const app = express(); // 创建Express应用程序

// 设置视图引擎
app.set('views', path.join(__dirname, 'views')); // 指定视图文件的存放路径
app.set('view engine', 'jade'); // 使用jade作为模板引擎

// 使用中间件
app.use(express.static(path.join(__dirname, 'public'))); // 指定静态文件目录
app.use(express.static(path.join(__dirname, 'files'))); // 指定静态文件目录
app.use(logger('dev')); // 记录HTTP请求日志
app.use(express.json()); // 解析请求体中的JSON数据
app.use(express.urlencoded({ extended: false })); // 解析请求体中的URL编码数据
app.use(cookieParser()); // 解析cookie

app.use((req, res, next) => {
  responseHandler.handleSuccess(req, res, next);
}); // 统一返回请求结果
app.use((req, res, next) => {
  responseHandler.handleError(req, res, next);
}); // 统一返回请求结果

// 使用路由 读取 
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/login', loginRouter);
  app.use('/upload', uploadRouter);


// 捕获404错误并转发到错误处理中间件
app.use(function(req, res, next) {
next(createError(404));
});

// 错误处理中间件
app.use(function(err, req, res, next) {
// 设置本地变量，仅在开发环境中提供错误信息
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// 渲染错误页面
res.status(err.status || 500);
res.render('error');
});

module.exports = app; // 导出应用程序对象