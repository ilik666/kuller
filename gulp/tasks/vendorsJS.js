const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'node_modules/svg4everybody/dist/svg4everybody.min.js',
  'node_modules/swiper/js/swiper.min.js',
  // 'node_modules/masonry-layout/dist/masonry.pkgd.min.js',
  // 'node_modules/lightcase/src/js/lightcase.js',
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('dist/web/js/vendor/'))
    : cb();
};
