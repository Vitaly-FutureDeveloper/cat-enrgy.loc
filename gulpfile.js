//const  = require('');
const gulp = require('gulp');
const pug2html = require('./gulp/tasks/pug2html');
const styles = require('./gulp/tasks/styles');
const image = require('./gulp/tasks/image');
const clean = require('./gulp/tasks/clean');
const scripts = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const server = require('browser-sync').create();

const pugBeauty = require('./gulp/tasks/pugBeauty');
//Переменная для pugBeauty >>
var beautyFile = 'includes/index/poster';
//Переменная для pugBeauty <<

module.exports.html = gulp.series(pug2html);
module.exports.styles = gulp.series(styles);
module.exports.js = gulp.series(scripts);
module.exports.fonts = gulp.series(fonts);
module.exports.img = gulp.parallel(image.minify, image.webp, image.sprite);
module.exports.clean = gulp.series(clean.bind(null, 'build/img'));

module.exports.pugBeauty = gulp.series(pugBeauty.bind(null, beautyFile));

module.exports.serve = function (cb){
	server.init({
		server: 'build',
		notify: false,
		open: true,
		cors: true
	});

	gulp.watch('src/img/**/*.{gif,png,jpg,jpeg,svg,webp}', gulp.series(clean.bind(null, 'build/img'),gulp.parallel(image.minify, image.webp, image.sprite))).on('change', server.reload);

	gulp.watch('src/pages/**/*.pug', gulp.series(pug2html)).on('change', server.reload);

	gulp.watch('src/scripts/**/*.js', gulp.series(scripts)).on('change', server.reload);
	//gulp.watch('src/pages/**/*.scss', gulp.series(styles)).on('change', server.reload);

	gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)));
	gulp.watch('src/fonts/*.*', gulp.series(fonts)).on('change', server.reload);

	gulp.watch('build/*.html').on('change', server.reload);

	return cb();
};
