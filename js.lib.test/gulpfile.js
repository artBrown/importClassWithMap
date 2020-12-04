const
  fs = require('fs'),
  gulp = require('gulp'),
  babel = require('gulp-babel'),
  less = require('gulp-less'),
  path = require('path'),
  rollup = require('gulp-rollup'),
  rename = require('gulp-rename'),
  del = require('del'),
  mocha = require('gulp-mocha'),
  noop = require('gulp-noop'),
  browserify = require('browserify'),
  devBuild = (process.env.NODE_ENV !== 'production'),
  src = 'src/',
  es5 = 'es5/',
  bld = 'build/',
  dst = 'dist/',
  idx = 'index.js',
  name = 'js.lib.js',
  base = 'index.js',
  stay = 'bundle.js',
  stop = 'main.js',
  knot = 'js/',
  afterAllFiles = '**/*',
  afterAll = '**',
  afterAllJs = '**/*.js',
  srcPath = src + knot,
  es5Path = es5,
  es5PathFile = es5Path + base,
  bldPathFile = bld + stay,
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  htmlclean = require('gulp-htmlclean'),
  deporder = require('gulp-deporder'),
  terser = require('gulp-terser'),
  stripdebug = devBuild ? null : require('gulp-strip-debug'),
  sourcemaps = devBuild ? require('gulp-sourcemaps') : null,
  lm = 'local_modules/',
  utils = {n: 'utils', p: 'utils/', i: 'utils.js'},
  utilsNode = {n: 'utils.node', p: 'utils.node/', i: 'utils.node.js'},
  serializers = {n: 'serializers', p: 'serializers/', i: 'serializers.js'};
const babeler = () => {
  // https://gulpjs.com/docs/en/getting-started/async-completion
  return Promise.resolve([
    {b: src, s: es5, p: src + knot + afterAllJs},
    {b: src, s: lm + utils.p + dst, p: lm + utils.p + utils.i},
    {b: src, s: lm + utilsNode.p + dst, p: lm + utilsNode.p + utilsNode.i},
    {b: src, s: lm + serializers.p + dst, p: lm + serializers.p + serializers.i},
  ]
    .forEach(async e => await _js({b: e.b, s: e.s}, e.p)));
};
exports.babeler = babeler;

function _js(graf, path) {
  return gulp.src([path])
    // return gulp.src(src + 'js/**/*')
    .pipe(babel({
      presets: ['@babel/preset-env'],
      plugins: ["@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-transform-destructuring"]
    }))
    .pipe(sourcemaps ? sourcemaps.init() : noop())
    .pipe(deporder())
    // .pipe(concat('main.js'))
    .pipe(stripdebug ? stripdebug() : noop())
    .pipe(terser())
    .pipe(sourcemaps ? sourcemaps.write() : noop())
    .pipe(gulp.dest(graf.s));
}

function browserifier() {
  return browserify(es5PathFile)
    .transform("babelify", {
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-transform-destructuring"]
    })
    .bundle()
    .pipe(fs.createWriteStream(bldPathFile));
}

exports.browserifier = browserifier;

function _html() {
  const out = bld + 'html/';
  return gulp.src(src + 'html/**/*')
    .pipe(newer(out))
    .pipe(devBuild ? noop() : htmlclean())
    .pipe(gulp.dest(out));
}

function _css() {
  const out = bld + 'css/';
  return gulp.src(src + './less/**/*.less')
    // .pipe(less())
    .pipe(less({
      paths: [path.join(__dirname, 'node_modules')]
    }))
    .pipe(gulp.dest(out));
}

function _img() {
  const out = bld + 'img/';
  return gulp.src(src + 'img/**/*')
    .pipe(newer(out))
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(out));
}

function umd() { // https://www.andreaverlicchi.eu/create-a-javascript-library-using-es2015-modules-gulp-rollup-jest/
  return gulp.src(es5 + afterAllJs)
    .pipe(sourcemaps.init())
    .pipe(rollup({
      output: {
        format: "umd",
        name: stop
      },
      input: es5 + idx
    }))
    .pipe(sourcemaps.write())
    .pipe(rename(name))
    .pipe(gulp.dest(dst));
}

exports.umd = umd;

function dit() {
  const _es5 = es5 + afterAll,
    _bld = bld + afterAll,
    _dst = dst + afterAll,
    _lm = [lm + utils.p + dst, lm + utilsNode.p + dst, lm + serializers.p + dst];
  return del([_es5, _bld, _dst, ..._lm]);
}

exports.dit = dit;
// exports.run = gulp.series(_js, _html, _css, _img);
exports.build = gulp.series(babeler, browserifier, umd);

function watch(done) {
  gulp.watch(src + 'js/**/*', _js);
  gulp.watch(src + 'html/**/*', _html);
  gulp.watch(src + 'less/**/*', _css);
  gulp.watch(src + 'img/**/*', _img);
  done();
}

exports.watch = watch;
exports.test = () => (
  gulp.src('test/test.js', {read: false})
    // `gulp-mocha` needs file-paths so you can't have any plugins before it
    .pipe(mocha())
);
exports.default = gulp.series(exports.build, exports.watch);
