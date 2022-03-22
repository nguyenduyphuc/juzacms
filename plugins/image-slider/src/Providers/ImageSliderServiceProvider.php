<?php

namespace Juzaweb\ImageSlider\Providers;

use Juzaweb\Support\ServiceProvider;

class ImageSliderServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $viewPath = __DIR__ .'/../resources/views';
        $langPath = __DIR__ . '/../resources/lang';
        $domain = 'juim';

        if (is_dir($viewPath)) {
            $this->loadViewsFrom($viewPath, $domain);
        }

        if (is_dir($langPath)) {
            $this->loadTranslationsFrom($langPath, $domain);
        }
    }
}