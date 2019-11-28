let mix = require('laravel-mix')

mix
    .setPublicPath('dist')
    .js('resources/js/card.js', 'js')

if (mix.inProduction()) {
    mix.version();
}
