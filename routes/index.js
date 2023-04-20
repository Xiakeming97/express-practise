var express = require('express');
var router = express.Router();
const db = require('../db/db'); // 导入db模块


/* GET home page. */
router.get('/', function(req, res, next) {  // 使用db对象进行数据库操作
  try {
    db.query('SELECT id,name FROM user LIMIT 1', (err, results) => {
      if (err) throw err;
      res.send(
        {
          code:200,
          data:results
        }
      )
    });
  } catch (error) {
    console.log(13123);
    console.error(error);
  }
});

module.exports = router;