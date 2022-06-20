const {series, watch, parallel, task, dest, src} = require('gulp');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug-3');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

task('clean', function () {
    return src('./public/*', {read: false})
        .pipe(clean());
});

task('scripts', function() {
    return src('./src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('./public/script.js'))
});

task('scss', function() {
    return src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(dest('./public/style.css'));
});

task('pug', function() {
    return src('./src/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(dest('./public/'));
});

task('img', function (){
    return src('./src/img/**/*')
        .pipe(dest('./public/img/'))
});

const build = series('clean', parallel('scripts', 'scss', 'pug', 'img'))

task('dev', function() {
    browserSync.init({
        server: "./public"
    });
    watch(["src/*.scss", "src/*.js", "src/**/*.pug"], build).on("change", browserSync.reload)
});

exports.build= build;
exports.dev=series(build, "dev")
