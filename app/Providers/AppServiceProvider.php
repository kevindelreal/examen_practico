<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

use Faker\Generator as FakerGenerator;
use PhpCfdi\Rfc\RfcFaker;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // ...
        $this->app->extend(FakerGenerator::class, function($generator) {
            $generator->addProvider(new RfcFaker());
            return $generator;
        });
        // ...
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }
}
