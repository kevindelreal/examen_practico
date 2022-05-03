<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Prospecto;

class Estatus extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'estatus';

    protected $fillable = [
        'nombre'
    ];

    public function prospectos()
    {
        return $this->BelongsTo(Prospecto::class);
    }
}
