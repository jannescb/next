const mix = require('laravel-mix');
const path = require('path');

mix.ts('resources/js/app.ts', 'public/js').vue();
mix.postCss('resources/css/app.css', 'public/css', [require('tailwindcss')]);

mix.webpackConfig({
    resolve: {
        alias: {
            vue: path.resolve('./node_modules/vue'),
        },
    },
});
