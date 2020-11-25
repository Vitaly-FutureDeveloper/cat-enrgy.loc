//const  = require('');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const gulpPugBeautify = require('gulp-pug-beautify');
const cleanBF = require('./clean');

const beaut = function(cb, fileForBeauty) {
	return fileForBeauty
	.pipe(plumber())
	.pipe(gulpPugBeautify({ omit_empty: true }))
	.pipe(gulp.dest('src/pages/' + cb + '.pug'))
}

module.exports = function pugBeauty(cb) {
	var fileForBeauty = gulp.src('src/pages/' + cb + '.pug');
	
	return fileForBeauty
		.pipe(plumber())
		.pipe(gulpPugBeautify({ 
			omit_empty: true, 
			fill_tab: true 
		}))

		.pipe(gulp.dest('./beauty'))
};