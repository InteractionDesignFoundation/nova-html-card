<?php declare(strict_types=1);

namespace InteractionDesignFoundation\HtmlCard;

interface MarkdownConverter
{
    /**
     * Parse the given Markdown text into HTML.
     * @param string $text
     * @return \Illuminate\Support\HtmlString
     * @phpcsSuppress SlevomatCodingStandard.TypeHints.ParameterTypeHint.MissingNativeTypeHint
     */
    public static function parse($text);
}
