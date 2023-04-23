var express = require('express');
var router = express.Router();

const db = require('../db/db'); // 导入db模块

/* GET users listing. */
router.post('/', (req, res) => {
  console.log(req,'登录参数');
  res.send('你现在是登陆页');
});


module.exports = router;
