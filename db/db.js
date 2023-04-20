// 导入MySQL模块
const mysql = require('mysql');

// 导入MySQL连接配置
const config = require('./config');

// 创建连接池
const pool = mysql.createPool(config);

// 导出模块，包含一个query函数用于执行SQL查询语句
module.exports = {
query: (sql, values) => {
return new Promise((resolve, reject) => {
// 从连接池中获取连接
pool.getConnection((err, connection) => {
if (err) {
// 如果获取连接失败，返回错误信息
reject(err);
} else {
// 如果获取连接成功，执行SQL查询语句
connection.query(sql, values, (err, rows) => {
if (err) {
// 如果查询失败，返回错误信息
reject(err);
} else {
// 如果查询成功，返回查询结果
resolve(rows);
}
// 释放连接
connection.release();
});
}
});
});
}
};