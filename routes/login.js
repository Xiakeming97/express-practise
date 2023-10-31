var express = require('express');
var router = express.Router();

const db = require('../db/db'); // 导入db模块

/* GET users listing. */
router.post('/', (req, res) => {
  console.log(req.body, '登录参数'); // 使用req.body来获取POST请求的参数
  const {name,password} = req.body
  console.log(name,password)
  res.send('你现在是登陆页');
});


module.exports = router;
