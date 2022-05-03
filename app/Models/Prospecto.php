<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Archivo;
use App\Models\Estatus;

class Prospecto extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'prospectos';

    protected $fillable = [
        'nombre',
        'primer_apellido',
        'segundo_apellido',
        'calle',
        'numero',
        'colonia',
        'codigo_postal',
        'telefono',
        'rfc'
    ];

    public function archivos()
    {
        return $this->hasMany(Archivo::class)->orderBy('created_at', 'desc');;
    }

    public function estatus()
    {
        return $this->belongsTo(Estatus::class);
    }
}
