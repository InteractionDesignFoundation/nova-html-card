<?php declare(strict_types=1);

namespace InteractionDesignFoundation\HtmlCard\Tests;

use Illuminate\Support\Facades\App;
use InteractionDesignFoundation\HtmlCard\MarkdownConverter;

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
