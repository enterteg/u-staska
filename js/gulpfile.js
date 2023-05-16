var gulp = require('gulp'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    stylus = require('gulp-stylus');
    autoprefixer = require('gulp-autoprefixer');

gulp.task('pug', function() {
  gulp.src('../app/*.pug')
  .pipe(plumber())
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest('../build'))
  .pipe(livereload());
});

gulp.task('stylus', function(){
  gulp.src('../styles/*.stylus')
  .pipe(plumber())
  .pipe(stylus())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('../build'))
  .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('../styles/*.stylus', ['stylus']);
  gulp.watch('../app/*.pug', ['pug']);
});

gulp.task('default', ['pug', 'stylus', 'watch']);

