<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProspectoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/prospectos', [ProspectoController::class, 'index'])->name('prospecto.index');
Route::get('/prospectos-datatable', [ProspectoController::class, 'prospectos_datatable'])->name('prospecto.prospectos_datatable');
Route::get('/prospecto/create', [ProspectoController::class, 'create'])->name('prospecto.create');
Route::get('/prospecto/edit/{id}', [ProspectoController::class, 'edit'])->name('prospecto.edit');
Route::get('/prospecto/show/{id}', [ProspectoController::class, 'show'])->name('prospecto.show');

Route::post('/prospecto/store', [ProspectoController::class, 'store'])->name('prospecto.store');
Route::put('/prospecto/update/{id}', [ProspectoController::class, 'update'])->name('prospecto.update');

Route::delete('prospecto/{id}', [ProspectoController::class, 'destroy'])->name('prospecto.destroy');

