<?php declare(strict_types=1);

namespace IDF\HtmlCard\Tests;

use IDF\HtmlCard\CardServiceProvider;
use Orchestra\Testbench\TestCase as OrchestraTestCase;

abstract class TestCase extends OrchestraTestCase
{
    public function setUp(): void
    {
        parent::setUp();
    }

    protected function getPackageProviders($app)
    {
        return [
            CardServiceProvider::class,
        ];
    }
}
