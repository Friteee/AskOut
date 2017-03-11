'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import source from 'vinyl-source-stream';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import autoprefixer from 'autoprefixer';
import stripCssComments from 'gulp-strip-css-comments';
import htmlhint from "gulp-htmlhint";


gulp.task("demo", ["demo:sass", "demo:html", "demo:watch"]);
gulp.task("build:demo", ["build:demo:sass", "build:demo:html"]);

gulp.task("demo:watch", () => {
  gulp.watch(["./demo/demo.sass"], ["demo:sass", "refresh"])
  gulp.watch(["./demo/index.html"], ["demo:html", "refresh"])
})

gulp.task("demo:sass", () => {
  return demoSass("./demo/demo.sass", "./temp/")
});

gulp.task("build:demo:sass", () => {
  return demoSass("./demo/demo.sass", "./dist/")
});

gulp.task('demo:html', () => {
  return demoHtml(['demo/index.html'], 'temp')
});

gulp.task('build:demo:html', () => {
  return demoHtml(['demo/index.html'], 'dist')
});

function demoHtml(file, dest) {
  return gulp.src(file)
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest(dest))
}

function demoSass(file, dest) {
  return gulp.src(file)
    .pipe(plumber({errorHandler: notify.onError(
      {
        title: "CSS Error: Line <%= error.line %>",
        message: "<%= error.message %>"
      })
    }))
    .pipe(sass())
    .pipe(postcss([ 
      autoprefixer({ browsers: ['last 2 versions'] })
    ]))
    .pipe(stripCssComments())
    .pipe(gulp.dest(dest))
}