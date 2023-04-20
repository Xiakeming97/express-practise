var express = require('express');
var router = express.Router();

const db = require('../db/db'); // 导入db模块

/* GET users listing. */
router.get('/', function(req, res, next) {
  // 使用db对象进行数据库操作
  try {
    db.query('SELECT * FROM user', (err, results) => {
      if (err) throw err;
      console.log(results);
    });
    res.send('respond with a resource');
  } catch (error) {
    console.log(13123);
    console.error(error);
  }
});

module.exports = router;
