var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("concat_js_files",function () {
   gulp.src("./src/scripts/*.js")
       .pipe(concat("final.js"))
       .pipe(gulp.dest("./dest/scripts"));
});