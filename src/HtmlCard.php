<?php

namespace IDF\HtmlCard;

use Illuminate\Mail\Markdown;
use Laravel\Nova\Card;

class HtmlCard extends Card
{
    /**
     * The width of the card (1/3, 1/2, or full).
     *
     * @var string
     */
    public $width = '1/3';

    /**
     * Create a new element.
     *
     * @param  string|null  $component
     * @return void
     */
    public function __construct($component = null)
    {
        parent::__construct($component);

        $this->withMeta([
            'content' => '',
        ]);
    }

    /** @inheritDoc */
    public function component()
    {
        return 'html-card';
    }

    /**
     * Set HTML code to display in a card
     *
     * @param string $htmlContent
     *
     * @return HtmlCard
     */
    public function html(string $htmlContent)
    {
        return $this->withMeta(['content' => $htmlContent]);
    }

    /**
     * Set Markdown code to display in a card (converted into HTML)
     *
     * @param string $htmlContent
     *
     * @return HtmlCard
     */
    public function markdown(string $markdownContent)
    {
        $htmlContent = Markdown::parse($markdownContent)->toHtml();

        return $this->html($htmlContent);
    }
}
