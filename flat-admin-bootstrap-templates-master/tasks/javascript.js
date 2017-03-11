import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import watchify from 'watchify';
import gutil from 'gulp-util';

function build(file, watch, dest) {
  var props = {
    entries: [file],
    extensions: ['.js'],
    debug : true,
    fast: true, 
    'insert-globals': true,
    fullPaths: true,
    cache: {},
    packageCache: {},
    ignore: /(bower_components)|(node_modules)/,
    ignoreWatch: ['**/node_modules/**', '**/bower_components/**'],
  };

  var bundler = watch ? watchify(browserify(props)) : browserify(props);
  bundler.transform(babelify)

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', function(e) {
        console.log(e)
      })
      .pipe(source('app.js'))
      .pipe(gulp.dest(dest))
      .on('end', function(){ 
        gutil.log('Done!'); 
      });
  }

  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  return rebundle();
}

gulp.task("js:watch", function() {
  return build('./src/app.js', true, './temp/html/assets/js/');
});

gulp.task("angularjs:js:watch", function() {
  return build('./src/angularjs/js/app.js', true, './temp/angularjs/js/');
});


gulp.task("build:js", function() {
  return build('./src/app.js', false, './dist/html/assets/js/');
});

gulp.task("build:angularjs:js", function() {
  return build('./src/angularjs/js/app.js', false, './dist/angularjs/js/');
});