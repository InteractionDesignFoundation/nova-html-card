<?php declare(strict_types=1);

namespace InteractionDesignFoundation\HtmlCard\Tests;

use Illuminate\Support\Facades\App;
use InteractionDesignFoundation\HtmlCard\MarkdownConverter;

#[\PHPUnit\Framework\Attributes\CoversClass(\InteractionDesignFoundation\HtmlCard\CardServiceProvider::class)]
final class CardServiceProviderTest extends TestCase
{
    #[\PHPUnit\Framework\Attributes\Test]
    public function it_registers_markdown_converter_implementation(): void
    {
        $converter = App::make(MarkdownConverter::class);

        $this->assertInstanceOf(MarkdownConverter::class, $converter);
    }
}
