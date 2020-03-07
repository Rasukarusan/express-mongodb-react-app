import createError = require('http-errors');
import express = require('express');
import { Request, Response, NextFunction } from "express";
import path = require('path');
import cookieParser = require('cookie-parser');
import logger = require('morgan');
import cors = require('cors');
import mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const orderRouter = require('./routes/orders');
const app = express();

mongoose.connect('mongodb://mongodb:27017/test', {useNewUrlParser: true});
mongoose.connection.on('error', error => {
  console.log('DB接続エラー: ', error);
});
mongoose.connection.once('open', () => {
  console.log('DB接続OK!!');
})

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/orders', orderRouter)

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
