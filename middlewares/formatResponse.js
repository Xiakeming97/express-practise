/*
 * @Author: XiaKeMing xiakeming97@gmail.com
 * @Date: 2023-12-08 14:34:43
 * @LastEditors: XiaKeMing xiakeming97@gmail.com
 * @LastEditTime: 2023-12-08 16:45:36
 * @FilePath: /express-practise/middlewares/formatResponse.js
 * @Description: 请求结果统一返回
 *
 * Copyright (c) 2023 by XIAKEMING, All Rights Reserved.
 */

/**
 * 响应处理器类
 */
class ResponseHandler {
  static handleSuccess(req, res, next) {
    res.handleSuccess = (data, message = '成功', statusCode = 200) => {
      const responseObject = {
        status: true,
        code: statusCode,
        message: message,
        data: data,
      };
      res.json(responseObject);
    };
    next();
  }

  static handleError(req, res, next) {
    res.handleError = (errorMessage = '发生错误', statusCode = 500) => {
      const responseObject = {
        status: false,
        code: statusCode,
        message: errorMessage,
        data: null,
      };
      res.status(statusCode).json(responseObject);
    };
    next();
  }
}


/**
 * 响应处理器实例
 */
// const responseHandler = new ResponseHandler();
module.exports = ResponseHandler;
