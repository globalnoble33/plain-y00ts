const { src, dest, parallel, series, watch } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

const scriptSource = 'src/scripts/**';

const scriptPath = 'dist/scripts';

const scripts = [
  'src/scripts/*.js',
];

function js () {
  return src(scripts)
    .pipe(plumber())
    .pipe(concat('scripts.js'))
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify({ mangle: false }))
    .pipe(dest(scriptPath));
}

exports.default = parallel(js);
