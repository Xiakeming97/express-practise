const express = require('express');
const multer = require('multer');
const router = express.Router();

// 配置文件上传
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 设置文件保存的目录
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // 设置文件名
  }
});

const upload = multer({ storage: storage });

// 处理文件上传请求
router.post('/', upload.single('file'), (req, res) => {
  if (req.file) {
    // 文件上传成功
    res.status(200).json({ message: '文件上传成功' });
  } else {
    // 文件上传失败
    res.status(400).json({ message: '上传文件失败' });
  }
});

module.exports = router;
