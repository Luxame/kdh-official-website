var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('default', function () {
    gulp.src('./public/images/**/*.png')
    .pipe(imageResize({
      width : 2560,
      height : 1600,
      upscale : false,
      quality: 0.6,
      format : 'jpeg'
    }))
    .pipe(gulp.dest('./public/images'));
});
