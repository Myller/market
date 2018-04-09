const gulp = require('gulp'); // init gulp
const autoprefixer = require('gulp-autoprefixer'); // init gulp-autoprefixer
const concat = require('gulp-concat'); // init gulp-concat

// Autoprefixer

gulp.task('autoprefixer', function () {
    gulp.src('source/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('app/css'))
});

// concat all css files

gulp.task('concat-css', function () {
    gulp.src([
        'app/css/fonts.css,',
        'app/css/reset.css',
        'app/css/components/*.css',
        'app/css/pages/*.css'
        ])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('app/css'))
})


gulp.task('watch', ['autoprefixer', 'concat-css'], function () {
        gulp.watch('source/css/**/*.css', ['autoprefixer'] )
        gulp.watch('app/css/**/*.css', ['concat-css']);
})

//default
gulp.task('default', ['watch'])
