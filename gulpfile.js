/*=============================================================*/
//                        Required                             //
/*=============================================================*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
//var uglify = require('gulp-uglifyjs');
/*=============================================================*/


/*=============================================================*/
//                        Uglify Task                          //
/*=============================================================*/
gulp.task('uglify', function() {
  gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
/*=============================================================*/


/*=============================================================*/
//                        Compress Task                        //
/*=============================================================*/
gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
/*=============================================================*/


/*=============================================================*/
//                        Browser-Sync Tasks                   //
/*=============================================================*/
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    }); 
    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
//    gulp.watch("./*.scss").on('change', browserSync.reload);
});
/*=============================================================*/


/*=============================================================*/
//                        Sass Task                            //
/*=============================================================*/
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});
/*=============================================================*/


/*=============================================================*/
//                        Sass Watch Task                      //
/*=============================================================*/
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
/*=============================================================*/


/*=============================================================*/
//                        Default Task                         //
/*=============================================================*/
gulp.task('default', ['serve']);
/*=============================================================*/

