const gulp = require('gulp')

const postcss = require('gulp-postcss')
const lostgrid = require('lost')

const sass = require('gulp-sass')

gulp.task('styles', () => {
  gulp.src('source/main.scss')
    // 1. SCSS must be transpiled before PostCSS
    .pipe(sass().on('error', sass.logError))
    // 2. Now PostCSS can be transpiled
    .pipe(postcss([
      lostgrid()
    ]))
    .pipe(gulp.dest('build'))
})

gulp.task('default', () => {
  gulp.start('styles')
})
