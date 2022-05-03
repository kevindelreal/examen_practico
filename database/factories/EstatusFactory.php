<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Estatus;

class EstatusFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $estatus = $this->faker->randomElement(["Autorizado", "Rechazado", "Enviado"]);

        return [
            'nombre' => $estatus,
        ];
    }
}
