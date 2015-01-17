var gulp    		= require('gulp'); 				// Gulp
var path 			= require('path');
var uglify  		= require('gulp-uglify'); 		// Plugin for uglifing javascript
var sass            = require('gulp-sass'); 		// Package to compile scss files
var rename			= require('gulp-rename'); 		// Plugin for renaming files
var autoprefixer   	= require('gulp-autoprefixer'); // Plugin to vendor prefix css
var notify 			= require("gulp-notify"); 		// Plugin to send notifications to the operating system

var srcPath 		= 'src/';				// Path to the source files
var distPath 		= 'dist/';				// Path to the distribution files

// Paths that gulp should watch
var watchPaths		= {
	scripts: 	[srcPath+'js/*.js'],
	sass: 		[srcPath+'sass/*.scss']
};



// Task for sass files
gulp.task('sass', function () {
	gulp
	.src(srcPath + 'sass/styles.scss')
	.pipe(sass())
	.on("error", notify.onError({
		message: 	"Error: <%= error.message %>",
		title: 		"Error running sass task"
	}))
	.pipe(autoprefixer({
		browsers: 	['> 1%', 'last 2 versions'],
		cascade: 	false
	}))
	.on("error", notify.onError({
		message: 	"Error: <%= error.message %>",
		title: 		"Error running sass task"
	}))
	.pipe(gulp.dest(distPath + 'css'));

});

// Javscript task
gulp.task('scripts', function(){
	gulp
	.src(srcPath + 'js/*.js')
	.pipe(gulp.dest(distPath + 'js'))
	.pipe(uglify())
	.on("error", notify.onError({
		message: 	"Error: <%= error.message %>",
		title: 		"Error running scripts task"
	}))
	.pipe(rename({
		suffix: 	'.min'
	}))
	.pipe(gulp.dest(distPath + 'js'));
});


// Watch task
gulp.task('watch', function() {
	gulp.watch(watchPaths.scripts, ['scripts']);
	gulp.watch(watchPaths.sass, ['sass']);
});

// Default task
gulp.task('default', ['scripts', 'sass', 'watch']);
