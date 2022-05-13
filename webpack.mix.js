// eslint-disable-next-line no-undef
const mix = require('laravel-mix');

require('./nova.mix');

mix
    .setPublicPath('dist')
    .js('resources/js/card.js', 'js')
    .vue({version: 3})
    .nova('interaction-design-foundation/nova-html-card')

if (mix.inProduction()) {
    mix.version();
}
