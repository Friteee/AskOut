'use strict';

import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import templateCache from 'gulp-angular-templatecache';
import htmlhint from "gulp-htmlhint";

gulp.task('angularjs:html', () => {
  /* Template */
  gulp.src(['src/angularjs/**/*.html', '!src/angularjs/elements/*.html', '!src/angularjs/components/*.html', '!src/angularjs/components/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlhint({
      "doctype-first": false,
      "attr-no-duplication": false
    }))
    .pipe(htmlhint.reporter())
    .pipe(templateCache({
      module: 'app.templates',
      standalone: true
    }))
    .pipe(gulp.dest('temp/angularjs/js'))

  /* Index */
  return gulp.src(['src/angularjs/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest('temp/angularjs/'))
});


gulp.task('build:angularjs:html', () => {
  /* Template */
  gulp.src(['src/angularjs/**/*.html', '!src/angularjs/elements/*.html', '!src/angularjs/components/*.html', '!src/angularjs/components/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlhint({
      "doctype-first": false,
      "attr-no-duplication": false
    }))
    .pipe(htmlhint.reporter())
    .pipe(templateCache({
      module: 'app.templates',
      standalone: true
    }))
    .pipe(gulp.dest('dist/angularjs/js'))

  /* Index */
  return gulp.src(['src/angularjs/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest('dist/angularjs/'))
});
