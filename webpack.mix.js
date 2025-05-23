const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.js('./themes/NewsTheme/src/js/app.js', './themes/NewsTheme/dist/js')
   .sass('./themes/NewsTheme/src/scss/main.scss', './themes/NewsTheme/dist/css')
   .options({
      postCss: [
        require('@tailwindcss/postcss'),
        require('autoprefixer'),
      ],
     processCssUrls: false
   });

// Version the output files in production
if (mix.inProduction()) {
    mix.version();
}

mix.webpackConfig({ watchOptions: { ignored: /node_modules|dist|mix-manifest.json/, }, });