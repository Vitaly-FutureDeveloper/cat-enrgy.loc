//const  = require('');
const gulp = require('gulp');
const eslint = require('eslint');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");

module.exports = function scripts(cb){
	gulp.src('src/scripts/main.js')
		//.pipe(eslint())
		//.pipe(eslint.format())
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(terser())
		.pipe(sourcemaps.write())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('build/js'))
	return cb()
}