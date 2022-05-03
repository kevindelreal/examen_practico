@extends('layouts.app')

@section('title', "Información del prospectos")

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header text-white bg-dark">
                    <h5 class="mb-0">Información del prospectos</h5> 
                </div>

                <div class="card-body">
                    @csrf
                    {{ method_field('POST') }}
            
                    <div class="row">
                        <div class="col-md-4">
                            <!-- Nombre -->
                            <div class="form-group">
                                <dt for="name">Nombre:</dt>
                                <dd>{{ $prospecto->nombre }}</dd>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <!-- Primer Apellido -->
                            <div class="form-group">
                                <dt for="name">Primer Apellido:</dt>
                                <dd>{{ $prospecto->primer_apellido }}</dd>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <!-- Segundo Apellido -->
                            <div class="form-group">
                                <dt for="name">Segundo Apellido:</dt>
                                <dd>{{ $prospecto->segundo_apellido }}</dd>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <!-- Calle -->
                            <div class="form-group">
                                <dt for="name">Calle:</dt>
                                <dd>{{ $prospecto->calle }}</dd>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <!-- Numero -->
                            <div class="form-group">
                                <dt for="name">Numero:</dt>
                                <dd>{{ $prospecto->numero }}</dd>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <!-- Colonia -->
                            <div class="form-group">
                                <dt for="name">Colonia:</dt>
                                <dd>{{ $prospecto->colonia }}</dd>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <!-- Codigo Postal -->
                            <div class="form-group">
                                <dt for="name">Codigo Postal:</dt>
                                <dd>{{ $prospecto->codigo_postal }}</dd>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <!-- Telefono -->
                            <div class="form-group">
                                <dt for="name">Telefono:</dt>
                                <dd>{{ $prospecto->telefono }}</dd>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <!-- RFC -->
                            <div class="form-group">
                                <dt for="name">RFC:</dt>
                                <dd>{{ $prospecto->rfc }}</dd>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <dt for="name">Estatus:</dt>
                                <dd>{{ $prospecto->estatus->nombre }}</dd>
                            </div>
                        </div>

                        @if ($prospecto->estatus->id == 3)
                            <div class="col-md-4" id="observaciones">
                                <dt for="name">Observaciones:</dt>
                                
                                <dd>{{ $prospecto->observaciones }}</dd>
                            </div>
                        @endif
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            @foreach ($archivos as $value)
                                <a class="btn btn-primary" target="_blank" href="{{ $value->url_path }}">
                                    {{ $value->nombre }}
                                </a>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-12">
                    <a href="{{ route('prospecto.index') }}"
                        class="btn btn-primary btn-block mt-2">
                        Volver
                    </a>
                </div>
            </div>
        </div>
    </div>
@endsection