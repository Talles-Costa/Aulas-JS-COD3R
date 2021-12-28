const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    gulp.src('src/calculadora.js', 'src/testeCalculadora.js')
        .pipe(babel({
            comments: false,
            presets: ["ENV"]
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/JS'))

    return cb()
}

function fim(cb) {
    console.log('Fim!!')
    return cb()
}

module.exports.default = series(transformacaoJS, fim)