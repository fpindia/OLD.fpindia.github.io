const gulp = require("gulp");
const postcss = require("gulp-postcss");
const path = require("path");

function css() {
  return gulp
    .src("src/*.css")
    .pipe(postcss([require("tailwindcss"), require("autoprefixer")]))
    .pipe(gulp.dest("css"));
}

function defaultTask(cb) {
  gulp.watch("src/*.css", css);
  cb();
}

gulp.task("css", function() {
  return css();
});

exports.default = defaultTask;
