const path = require("path"),
    del = require("del");

const gulp = require("gulp"),
    watch = require("gulp-watch"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat");

const postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssDeclarationSorter = require("css-declaration-sorter"),
    postcssPresetEnv = require("postcss-preset-env"),
    cssnano = require("cssnano"),
    less = require("gulp-less"),
    sass = require("gulp-sass");

sass.compiler = require("node-sass");

const merge = require("merge-stream");

const paths = {
    src: {
        root: path.join(__dirname),
        less: path.join(__dirname, "less"),
    },
    dist: {
        root: path.join(__dirname),
        css: path.join(__dirname, "css"),
    },
};

const postcssPlugins = [
    cssDeclarationSorter({ order: "smacss" }),
    postcssPresetEnv(),
    cssnano({
        presets: [
            "default",
            {
                discardComments: {
                    removeAll: true,
                },
            },
        ],
    }),
    autoprefixer({
        browsers: ['last 14 versions'],
    }),
];

const styles = () => {
    const info = {
        name: "style.css",
    };

    const lessStream = gulp
        .src(path.join(paths.src.less, "style.less"))
        .pipe(sourcemaps.init())
        .pipe(less());

    

    const mergedStream = merge(lessStream)
        .pipe(concat(info.name))
        //.pipe(gulpautoprefixer({browsers: ['last 14 versions']}))
        .pipe(postcss(postcssPlugins))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(paths.dist.css));

    return mergedStream;
};

const clean = () => {
    const files = [
        path.join(paths.dist.css, "style.css"),
        path.join(paths.dist.css, "style.css.map"),
    ];

    return del(files);
};

const selectedClean = (files) => {
    return del(files);
};

const watchFiles = () => {
    watch(
        ["./less/**/*.less"],
        gulp.series(
            selectedClean.bind(this, [
                path.join(paths.dist.css, "style.css"),
                path.join(paths.dist.css, "style.css.map"),
            ]),
            styles
        )
    );
};
const baseTaskDev = gulp.series(clean, gulp.parallel(styles));

const dev = gulp.series(baseTaskDev, watchFiles);

exports.dev = dev;
