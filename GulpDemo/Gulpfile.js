var gulp    = require('gulp'),
    gutil    = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
gulp.task('js', function () {
    gulp.src('./Src/Scripts/*.js')
        .pipe(uglify())
        .pipe(concat('finalController.js'))
        .pipe(gulp.dest('./Build/Scripts'));
});