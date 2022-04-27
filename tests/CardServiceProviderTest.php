<?php declare(strict_types=1);

namespace InteractionDesignFoundation\HtmlCard\Tests;

use InteractionDesignFoundation\HtmlCard\MarkdownConverter;
use Illuminate\Support\Facades\App;

/** @covers \InteractionDesignFoundation\HtmlCard\CardServiceProvider */
final class CardServiceProviderTest extends TestCase
{
    /** @test */
    public function it_registers_markdown_converter_implementation(): void
    {
        $converter = App::make(MarkdownConverter::class);

        $this->assertInstanceOf(MarkdownConverter::class, $converter);
    }
}
