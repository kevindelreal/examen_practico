<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Prospecto;

class ProspectoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $estatus = $this->faker->randomElement([1, 2, 3]);
        $observaciones = '';

        if($estatus == 2){
            $observaciones = "Prospecto rechazado";
        }
        
        return [
            'estatus_id' => $estatus,
            'nombre' => $this->faker->name,
            'primer_apellido' => $this->faker->lastName,
            'segundo_apellido' => $this->faker->lastName,
            'calle' => $this->faker->streetAddress,
            'numero' => $this->faker->numerify('####'),
            'colonia' => $this->faker->city,
            'codigo_postal' => $this->faker->numerify('####'),
            'telefono' => $this->faker->unique()->numerify('668-##-##-###'),
            'rfc' => $this->faker->mexicanRfcFisica(),
            'observaciones' => $observaciones,
        ];
    }
}
