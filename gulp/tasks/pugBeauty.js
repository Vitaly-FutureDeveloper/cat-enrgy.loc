//const  = require('');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const gulpPugBeautify = require('gulp-pug-beautify');
const cleanBF = require('./clean');

//module.exports.cleanBF = gulp.series(clean.bind(null, 'build/img'));
//
const beaut = function(cb, fileForBeauty) {
	return fileForBeauty
	.pipe(plumber())
	.pipe(gulpPugBeautify({ omit_empty: true }))
	/*.pipe(beautify_html({
		"indent_size": 2
	}))*/
	//.pipe(del('src/pages/' + cb + '.pug'))
	//.pipe(clean('src/pages/' + cb + '.pug'))
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
		/*.pipe(beautify_html({
			"indent_size": 2
		}))*/
		//.pipe(del('src/pages/' + cb + '.pug'))
		//.pipe(clean('src/pages/' + cb + '.pug'))
		//.pipe(rename('beauty')
		.pipe(gulp.dest('./beauty'))
};