var gulp = require('gulp');
var size = require('gulp-size');
var notify = require('gulp-notify');
var imageResize = require('gulp-image-resize');
var parallel = require("concurrent-transform");
var os = require("os");

gulp.task('default', function () {
    var s = size({
      showFiles: true,
      pretty: true
    });

    return gulp.src('./public/images-origin/**/*.{png,jpg}')
    .pipe(s)
    .pipe(parallel(imageResize({
      width : 2560,
      height : 1600,
      upscale : false,
      quality: 0.6,
      imageMagick: true
    }), os.cpus().length))
    .pipe(notify({
        onLast: true,
        message: function () {
            return 'Total size ' + s.prettySize;
        }
    }))
    .pipe(gulp.dest('./public/images'));
});
