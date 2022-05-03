<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProspectosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prospectos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('estatus_id');
            $table->string("nombre", 100);
            $table->string("primer_apellido", 100);
            $table->string("segundo_apellido", 100);
            $table->string("calle");
            $table->string("numero");
            $table->string("colonia");
            $table->string("codigo_postal", 20);
            $table->string("telefono", 15);
            $table->string("rfc")->unique();
            $table->longText("observaciones")->nullable();
            
            $table->foreign('estatus_id')->references('id')->on('estatus');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prospectos');
    }
}
