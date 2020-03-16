# Nova HTML Card

[![Latest Stable Version](https://poser.pugx.org/idf/nova-html-card/v/stable)](https://packagist.org/packages/idf/nova-html-card)
[![Total Downloads](https://poser.pugx.org/idf/nova-html-card/downloads)](https://packagist.org/packages/idf/nova-html-card)

Adds a card to the Laravel Nova dashboard with any arbitrary HTML content.

![image](https://user-images.githubusercontent.com/5278175/60386958-35899080-9aa5-11e9-8e1f-b29e95c80d2c.png)

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require idf/nova-html-card
```

## Usage

[Register your new card](https://nova.laravel.com/docs/2.0/customization/cards.html#registering-cards).

```php
use IDF\HtmlCard\HtmlCard;

public function cards()
{
    return [ 
        (new HtmlCard())->width('1/3')->html('<h1>Hello World!</h1>'),
        (new HtmlCard())->width('1/3')->markdown('# Hello World!'),
        (new HtmlCard())->width('1/3')->view('cards.hello', ['name' => 'World']),
     ];
}
```

### Options
 - Set content
     - `->html('<h1>Hello!</h1>')`: Set HTML or plain content.
     - `->markdown('# Hello!')`: Set Markdown content that will be converted into HTML.
     - `->view('path.to.view', [])`: Specify blade view file and optionally pass an array of data to view.
 - Styling
    - `->center(false)`: Center card's content. `false` by default. 
    - `->withoutCardStyles(true)`: Whether to use standard Nova Card styles for a card (background, padding, etc). `false` by default.
    - `->forceFullWidth(true)`: Force the card to be full width. A fix for [nova cards order](https://github.com/laravel/nova-issues/issues/1895). 


## Why this package?
There are a few packages with similar functionality.
Our package provides an API to cover all cases covered by these packages plus additionally provides some unique features like:
 - markdown support
 - easy switch between class Nova-card look and raw-HTML look
 - Simple, Laravel-like API

## Changelog

Please see [Releases](https://github.com/InteractionDesignFoundation/nova-html-card/releases) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Compiling Assets

```bash
# Compile and minify your assets:
npm run prod

# Compile your assets for local development:
npm run dev

# Run the NPM "watch" command to auto-compile your assets when they are changed:
npm run watch
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
