# Nova HTML Card

Adds a card to the Nova dashboard with any arbitrary HTML content.

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require idf/nova-html-card
```

Then, register your new link in the `cards` method of the `NovaServiceProvider` or your `ResourceTool` class.

```php
public function cards()
{
    return [ 
        (new HtmlCard())->width('1/3')->html('<h1>Hello World!</h1>'),
        (new HtmlCard())->width('1/3')->markdown('# Hello World!'),
        (new HtmlCard())->width('1/3')->view('cards.hello', ['name' => 'World']),
     ];
}
```

## Options
 - `->html('string')`: Set HTML or plain content.
 - `->markdown('string')`: Set Markdown content that will be converted into HTML.
 - `->view('path.to.view', [])`: Specify blade view file and optionally pass an array of data to view.
