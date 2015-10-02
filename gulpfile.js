var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('default', function () {
    gulp.src(['./public/images-origin/**/*.png','./public/images-origin/**/*.jpeg'])
    .pipe(imageResize({
      width : 2560,
      height : 1600,
      upscale : false,
      quality: 0.6,
      imageMagick: true
    }))
    .pipe(gulp.dest('./public/images'));
});
