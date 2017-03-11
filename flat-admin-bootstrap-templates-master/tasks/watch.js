import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task("watch", () => {
  gulp.watch(["./src/**/*.sass"], ["sass", "refresh"])
  gulp.watch(["./src/**/*.html",  '!./src/angularjs/**/*.html'], ["html", "refresh"])
})

gulp.task("angularjs:watch", () => {
  gulp.watch(['./src/angularjs/**/*.html'], ["angularjs:html", "refresh"])
})