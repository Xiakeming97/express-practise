/*
 * @Author: XiaKeMing xiakeming97@gmail.com
 * @Date: 2023-10-11 13:57:28
 * @LastEditors: XiaKeMing xiakeming97@gmail.com
 * @LastEditTime: 2023-12-08 16:48:36
 * @FilePath: /express-practise/routes/login.js
 * @Description: 
 * 
 * Copyright (c) 2023 by XIAKEMING, All Rights Reserved. 
 */
var express = require('express');
var router = express.Router();

const db = require('../db/db'); // 导入db模块

/* GET users listing. */
router.post('/', (req, res) => {
  console.log(req.body, '登录参数'); // 使用req.body来获取POST请求的参数
  const {name,password} = req.body
  console.log(name,password)
  if(password === '123'){
    res.handleError()
  }else{
    res.handleSuccess({ name, password }, '登录成功', 200);
  }
});


module.exports = router;
