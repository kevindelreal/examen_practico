<?php

namespace Database\Seeders;

use App\Models\Prospecto;
use App\Models\Estatus;
use Carbon\Factory;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Estatus::factory(3)->create()->each(function ($estatus) {
            Prospecto::factory(5)->create([
                'estatus_id' => $estatus->id
            ]);
        });
    }
}
