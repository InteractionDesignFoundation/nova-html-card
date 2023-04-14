<?php declare(strict_types=1);

namespace InteractionDesignFoundation\HtmlCard;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class CardServiceProvider extends ServiceProvider // phpcs:ignore SlevomatCodingStandard.Classes.RequireAbstractOrFinal.ClassNeitherAbstractNorFinal
{
    /**
     * Bootstrap any application services.
     * @return void
     */
    public function boot()
    {
        Nova::serving(static function (ServingNova $event) {
            Nova::script('html-card', __DIR__.'/../dist/js/card.js');
        });
    }

    /** @inheritDoc */
    public function register(): void
    {
        $this->app->singleton(MarkdownConverter::class, LaravelMarkdownConverter::class);
    }
}
