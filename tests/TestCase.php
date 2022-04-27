<?php declare(strict_types=1);

namespace InteractionDesignFoundation\HtmlCard\Tests;

use InteractionDesignFoundation\HtmlCard\CardServiceProvider;
use Orchestra\Testbench\TestCase as OrchestraTestCase;

abstract class TestCase extends OrchestraTestCase
{
    public function setUp(): void
    {
        parent::setUp();
    }

    /** @inheritDoc */
    protected function getPackageProviders($app): array
    {
        return [
            CardServiceProvider::class,
        ];
    }
}
