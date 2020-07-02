//const  = require('');
const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const htmlValidator = require('gulp-w3c-html-validator');
const bemValidator = require('gulp-html-bem-validator');

module.exports = function pug2html(cb) {
	return gulp.src('src/pages/*pug')
	.pipe(plumber())
	.pipe(pug())
	.pipe(htmlValidator())
	.pipe(gulp.dest('build'))
}