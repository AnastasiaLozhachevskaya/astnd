var gulp = require('gulp'),
  sass = require('gulp-sass'),
  prefixer = require('gulp-autoprefixer'),
  rigger = require('gulp-rigger'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

sass.compiler = require('node-sass');

var config = {
  server: {
    baseDir: './build',
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: 'Frontend_Devil',
};

gulp.task('sass', function () {
  return gulp.src('./app/assets/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(prefixer())
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({stream: true}));
});

gulp.task('html', function () {
  return gulp.src('./app/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('./build'))
    .pipe(reload({stream: true}));
});

gulp.task('watch', function(){
  watch(['./app/*.html', './app/**/*.html'], function(event, cb) {
    gulp.start('html');
  });
  watch(['./app/assets/styles/**/**/*.scss'], function(event, cb) {
    gulp.start('sass');
  });
  // watch([path.watch.js], function(event, cb) {
  //   gulp.start('js:build');
  // });
});

gulp.task('webserver', function () {
  browserSync(config);
});

gulp.task('default', ['sass', 'html', 'webserver', 'watch']);
