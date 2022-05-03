<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Archivo extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'archivos';

    protected $fillable = [
        'prospecto_id',
        'nombre',
        'ruta_archivo'
    ];

    public function getUrlPathAttribute()
    {
        return Storage::url($this->ruta_archivo);
    }
}
