const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require("webpack");

gulp.task('default', ["esify","webpack"], () => {

});

gulp.task('esify', (callback)=> {
  return gulp.src('index.js')
      .pipe(babel({
          presets: ['es2015']
      }))
      .pipe(gulp.dest('dist'));
});

gulp.task("webpack", ["esify"], function(callback) {
    webpack({
        context: __dirname + "/dist",
        entry: "./index",
        output: {
            path: __dirname + "/browser",
            filename: "bundle.js"
        }
    }, (err) => {
      if (err) console.dir(err);
    });
    callback();
});
