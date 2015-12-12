var fs = require('fs');
var del = require('del');

var gulp = require('gulp');
var wrapper = require('gulp-wrapper');
var rename = require('gulp-simple-rename');
var slugify = require('./build/slugify.js')

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
    .pipe(rename(slugify))
    .pipe(gulp.dest('.'))
  ;
});

gulp.task('html:clean', function (done) {
  del('pl', done);
});
