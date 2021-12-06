<?php declare(strict_types=1);

namespace IDF\HtmlCard;

use Illuminate\Contracts\Support\DeferrableProvider;
use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class CardServiceProvider extends ServiceProvider implements DeferrableProvider
{
    /**
     * Bootstrap any application services.
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('html-card', __DIR__.'/../dist/js/card.js');
        });
    }

    /** @inheritDoc */
    public function register(): void
    {
        $this->app->singleton(MarkdownConverter::class, LaravelMarkdownConverter::class);
    }

    /** @inheritDoc */
    public function provides(): array
    {
        return [
            MarkdownConverter::class,
        ];
    }
}
