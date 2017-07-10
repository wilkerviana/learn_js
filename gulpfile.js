'use strict';

var gulp = require('gulp'),
	view = require('gulp-pug'),
	style = require('gulp-stylus'),
  copy = require('gulp-copy'),
  clean = require('gulp-clean'),
  plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
  jshint = require('gulp-jshint'),
	browserSync = require('browser-sync');

// Gulp tasks
gulp.task('browserSync',function(){
	browserSync.init({
		server:{
			baseDir: 'dist'
		}
	});
	// watch files on Browsersync
	gulp.watch('src/**/*').on('change', function(event){
    gulp.src('src/style/*.styl')
        .pipe(plumber({
          handleError: function(error) {
            console.log(error);
            this.emit('end');
          }
        }))
        .pipe(style({
          compress: true
        }))
        .pipe(gulp.dest('dist/css'));

    gulp.src('src/view/*.pug')
        .pipe(view({
          pretty: true
        }))
        .pipe(gulp.dest('dist/')); 

    gulp.src('src/script/*.js')
      .pipe(jshint())
      .pipe(gulp.dest('dist/js'));
    });

	  gulp.watch('dist/**/*').on('change', browserSync.reload);
});

// default task on gulp
gulp.task('default',['browserSync']);
