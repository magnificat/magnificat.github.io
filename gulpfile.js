var fs = require('fs');
var fold = require('fold-to-ascii').fold;
var del = require('del');
var path = require('path');

var gulp = require('gulp');
var wrapper = require('gulp-wrapper');
var rename = require('gulp-simple-rename');

function fileContents (path) {
  return fs.readFileSync(path, {encoding: 'utf-8'});
}


gulp.task('build', ['html']);

gulp.task('html', ['html:clean'], function () {
  return gulp.src('raw/**/*.ditty')
    .pipe(wrapper({
      header: fileContents('build/header.html'),
      footer: fileContents('build/footer.html'),
    }))
    .pipe(rename(function (relativePath) {
      return fold(relativePath
        .split(path.sep).pop()
        .toLowerCase()
        .replace(/^\d+\.\s*(?!\/)/, '')
        .replace(/\s+/g, '-')
        .replace(/\s*\.ditty$/, '/index.html')
      );
    }))
    .pipe(gulp.dest('.'))
  ;
});

gulp.task('html:clean', function (done) {
  del('pl', done);
});
