'use strict';

var csso = require('gulp-csso');
var rename = require('gulp-rename');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');


gulp.task('styles', function(){
    return gulp.src(['./css/*.css', '!./css/*.min.css'])
        .pipe(csso())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css'))
});


gulp.task('scripts', function(){
    return gulp.src(['./js/*.js', '!./js/*.min.js'])
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./js'))
});


// Gulp task to minify all files
gulp.task('default', function() {
    runSequence(
      'styles',
      'scripts'
    );
  });

  //Gulp Watch
  gulp.task('watch', function(){
      gulp.watch('./js/*.js', ['scripts'])
  });