'use strict';
 
const exec = require('child_process').exec;
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./themes/casper/static/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./themes/casper/static/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./themes/casper/static/css/*.scss', ['sass']);
});

gulp.task('hugo',function() {
    exec('hugo server -t casper', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
});

gulp.task('dev', ['hugo', 'sass:watch']); 

gulp.task('default', ['hugo']); 

