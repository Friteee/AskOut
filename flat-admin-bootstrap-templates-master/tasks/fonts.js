var gulp = require("gulp")

const fonts = {
  'font-awesome': 'node_modules/font-awesome/fonts/*',
  'ionicons': 'node_modules/ionicons/dist/fonts/*'
}

gulp.task('fonts', ['fonts:font-awesome']);
gulp.task('build:fonts', ['build:fonts:font-awesome']);

gulp.task('fonts:font-awesome', function () {
  return gulp.src(fonts['font-awesome'])
    .pipe(gulp.dest('temp/html/assets/fonts'))
    .pipe(gulp.dest('temp/angularjs/assets/fonts'))
});

gulp.task('build:fonts:font-awesome', function () {
  return gulp.src(fonts['font-awesome'])
    .pipe(gulp.dest('dist/html/assets/fonts'))
    .pipe(gulp.dest('dist/angularjs/assets/fonts'))
});


gulp.task('fonts:ionicons', function () {
  return gulp.src(fonts['ionicons'])
    .pipe(gulp.dest('temp/html/assets/fonts/ionicons'))
});