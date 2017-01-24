const gulp = require('gulp');

const postcss = require('gulp-postcss');
const lostgrid = require('lost');

gulp.task('styles', () => {
  gulp.src('source/main.css')
    .pipe(postcss([
      lostgrid()
    ]))
    .pipe(gulp.dest('build'));
});

gulp.task('default', () => {
  gulp.start('styles');
});
