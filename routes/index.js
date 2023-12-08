/*
 * @Author: XiaKeMing xiakeming97@gmail.com
 * @Date: 2023-10-11 13:57:28
 * @LastEditors: XiaKeMing xiakeming97@gmail.com
 * @LastEditTime: 2023-12-08 17:33:24
 * @FilePath: /express-practise/routes/index.js
 * @Description: 首页
 * 
 * Copyright (c) 2023 by XIAKEMING, All Rights Reserved. 
 */
var express = require('express');
var router = express.Router();
const db = require('../db/db'); // 导入db模块


/* GET home page. */
router.get('/', (req, res,next) => {
  db.query('SELECT * FROM `cs`', (err, result) => {
    if (err) {
      console.log(err);
      res.json({
        code: 1,
        msg: '查询失败'
      });
    } else {
      res.json({
        code: 0,
        msg: '查询成功',
        data: result
      });
    }
  });
});


module.exports = router;