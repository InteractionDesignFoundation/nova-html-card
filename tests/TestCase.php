<?php declare(strict_types=1);

namespace InteractionDesignFoundation\HtmlCard\Tests;

use InteractionDesignFoundation\HtmlCard\CardServiceProvider;
use Orchestra\Testbench\TestCase as OrchestraTestCase;

abstract class TestCase extends OrchestraTestCase
{
    /** @inheritDoc */
    protected function getPackageProviders($app): array
    {
        return [
            CardServiceProvider::class,
        ];
    }
}
