<?php declare(strict_types=1);

namespace InteractionDesignFoundation\HtmlCard;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\View;
use Laravel\Nova\Card;

class HtmlCard extends Card // phpcs:ignore SlevomatCodingStandard.Classes.RequireAbstractOrFinal.ClassNeitherAbstractNorFinal
{
    /**
     * The width of the card (1/3, 1/2, or full).
     * @var string
     */
    public $width = self::ONE_THIRD_WIDTH;

    /** @inheritDoc */
    public function __construct(string | null $component = null)
    {
        parent::__construct($component);

        $this->withMeta([
            'center' => false,
            'withoutCardStyles' => false,
            'withBasicStyles' => false,
            'content' => '',
        ]);
    }

    /** @inheritDoc */
    public function component(): string
    {
        return 'html-card';
    }

    /** Set HTML code to display in a card. */
    public function html(string $htmlContent): static
    {
        return $this->withMeta(['content' => $htmlContent]);
    }

    /** Set Markdown code to display in a card (converted into HTML). */
    public function markdown(string $markdownContent): static
    {
        /** @var \InteractionDesignFoundation\HtmlCard\MarkdownConverter $converter */
        $converter = App::make(MarkdownConverter::class);

        $htmlContent = $converter::parse($markdownContent)->toHtml();

        return $this->html($htmlContent);
    }

    /**
     * Use blade view file to render Card content.
     * @param array<string, mixed> $viewData
     * @phpcsSuppress SlevomatCodingStandard.TypeHints.DisallowMixedTypeHint.DisallowedMixedTypeHint
     */
    public function view(string $view, array $viewData = []): static
    {
        $htmlContent = View::make($view, $viewData)->render();

        return $this->html($htmlContent);
    }

    /** Center card's content. */
    public function center(bool $centerContent = true): static
    {
        return $this->withMeta(['center' => $centerContent]);
    }

    /** Whether to use standard Nova Card styles for a card (background, padding, etc). */
    public function withoutCardStyles(bool $withoutStyles = true): static
    {
        return $this->withMeta(['withoutCardStyles' => $withoutStyles]);
    }

    /** Whether to add basic styles for HTML content */
    public function withBasicStyles(bool $withBasicStyles = true): static
    {
        return $this->withMeta(['withBasicStyles' => $withBasicStyles]);
    }
}
