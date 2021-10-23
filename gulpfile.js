// Imports always go at the top.
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
// import sass from 'gulp-sass';

// var sass = require('gulp-sass')(require('sass'));

function compileSass(done) {
    return gulp.src('sass/**/*.scss') //* or ** means grabbing everthing in the Sass folder.
        .pipe(sass().on('error', sass.logError)) // Run all our sass files through the imagemin engine.
        .pipe(gulp.dest('css')); // Save the compiled CSS file in its directory.

    done();
}

function squashImages(done) {
	gulp.src('images/*') //* or ** means grabbing everthing in the images folder.
        .pipe(imagemin()) // Run every image through the imagemin engine.
        .pipe(gulp.dest('images/dist')) // Put the optimized images here.

    done();
}

function sayHi(done) {
    console.log('Hello from Gulp! Easy Peasy!');

    //You can do all kinds of fun stuff here!
    done();
}

export {
    sayHi as hello,
    squashImages as boom,
    compileSass as compile
}