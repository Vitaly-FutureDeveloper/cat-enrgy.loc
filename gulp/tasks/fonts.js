//const  = require('');
const gulp = require('gulp');

module.exports = function fonts(cb){
	gulp.src('src/fonts/**/*.*')

	.pipe(gulp.dest('build/css/fonts'))
	return cb()
}