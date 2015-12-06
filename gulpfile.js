var gulp = require('gulp');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var watch = require('gulp-watch');
var concat = require('gulp-concat-util');
var flatten = require('gulp-flatten');
var del = require('del');
//var rsync = require('gulp-rsync');


gulp.task('erase', function (callback) {
    //del(['build'], callback);
    callback();
});

gulp.task('concat', ['erase'], function () {
    var stream = gulp.src('src/public/modules/**/*.js')
            //
            .pipe(concat('app.js', {
                process: function (src) {
                    src = "(function(){\n" + src;
                    src = src + "\n})();";
                    return src;
                }
            }))
            //
            .pipe(gulp.dest('./build/public/js'));
    return stream;
});

gulp.task('copyViews', ['erase'], function () {
    //copy html files
    var strem = gulp.src('src/public/modules/**/*.html')
            .pipe(flatten())
            .pipe(gulp.dest('./build/public/views/'));
    
    return strem;
});

gulp.task('copyHtml', ['erase'], function () {
    //copy html files
    var strem = gulp.src(['src/public/index.html'])
            .pipe(gulp.dest('./build/public/'));
    
    return strem;
});

gulp.task('copyVendor', ['erase'], function() {
    var stream = gulp.src(['src/public/vendor/**/*'])
                    .pipe(gulp.dest('./build/public/vendor'))
})

gulp.task('copyServer', ['erase'], function () {
    //copy server files
    var strem = gulp.src(['src/**/*', '!src/public/**/*'])
            .pipe(gulp.dest('./build/'));
    
    return strem;
});

/**
 * Copy files and folder to server
 * via rsync
 */
// gulp.task('rsync', function() {
//   return gulp.src('build/**')
//     .pipe(rsync({
//         destination: '/home/maycon/node/danubio/back/files',
//         root: 'build/',
//         hostname: 'mzmserver.com',
//         username: 'root',
//         incremental: true,
//         progress: true,
//         relative: true,
//         emptyDirectories: true,
//         recursive: true,
//         clean: true,
//         exclude: ['.DS_Store'],
//         include: []
//       }));
// });


gulp.task('default', ['concat', 'copyViews', 'copyHtml', 'copyServer', 'copyVendor'], function () {
    gulp.watch(['src/public/**/*.html'], ['copyViews', 'copyHtml']);
    gulp.watch(['src/public/**/*.js'], ['concat']);
    gulp.watch(['src/server.js', 'src/app/**/*.js', 'src/config/**/*.js'], ['copyServer']);
});

// gulp.task('deploy', ['rsync']);

