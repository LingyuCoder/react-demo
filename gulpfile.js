'use strict';
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const open = require('open');
const express = require('express');
const gulp = require('gulp');
const path = require('path');
const del = require('del');
const env = require('gulp-env');

gulp.task('clean', cb => del(['dist'], cb));

gulp.task('build', ['clean'], () => {
  return gulp.src('./src/**/*.jsx')
    .pipe(env.set({
      NODE_ENV: 'production'
    }))
    .pipe(gulpWebpack(require('./webpack.pub')))
    .pipe(gulp.dest('dist'));
});

gulp.task('dev', cb => {
  env({
    NODE_ENV: 'development'
  });
  const config = require('./webpack.dev');
  const app = express();
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.get('/pages/index.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
  });
  app.get('/pages/demo.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'pages', 'demo.html'));
  });
  app.listen(3000, 'localhost', function(err) {
    if (err) {
      console.log(err);
      return;
    }
    open('http://localhost:3000/pages/index.html');
    cb();
  });
});

gulp.task('default', ['build']);
