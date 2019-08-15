const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
 gulp.task('styles', () =>
      gulp.src('css/styles.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build'))
);

  gulp.task('watch', () =>
  gulp.watch('css/styles.css', gulp.series('styles'))
); 
