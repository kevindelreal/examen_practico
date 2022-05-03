@extends('layouts.app')

@section('title', "Área de evaluación de prospectos")

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-8">
            <form method="post" action="{{ route('prospecto.update', $prospecto->id) }}" style="font-size:13px" onsubmit="return validarForm();">
                <div class="card">
                    <div class="card-header text-white bg-dark">
                        <h5 class="mb-0">Área de evaluación de prospectos</h5> 
                    </div>

                    <div class="card-body">
                        @csrf
                        {{ method_field('PUT') }}
                
                        <div class="row">
                            <div class="col-md-4">
                                <!-- Nombre -->
                                <div class="form-group">
                                    <label for="name">Nombre:</label>
                                    <input class="form-control form-control-sm" id="nombre" name="nombre" type="text" value="{{ $prospecto->nombre }}" placeholder="Ej: Juan Carlos" required>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <!-- Primer Apellido -->
                                <div class="form-group">
                                    <label for="name">Primer Apellido:</label>
                                    <input class="form-control form-control-sm" id="primer_apellido" name="primer_apellido" type="text" value="{{ $prospecto->primer_apellido }}" placeholder="Ej: Martinez" required>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <!-- Segundo Apellido -->
                                <div class="form-group">
                                    <label for="name">Segundo Apellido:</label>
                                    <input class="form-control form-control-sm" id="segundo_apellido" name="segundo_apellido" type="text" value="{{ $prospecto->segundo_apellido }}" placeholder="Ej: Perez">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <!-- Calle -->
                                <div class="form-group">
                                    <label for="name">Calle:</label>
                                    <input class="form-control form-control-sm" id="calle" name="calle" type="text" value="{{ $prospecto->calle }}" placeholder="Ej: Rio Presidio" required>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <!-- Numero -->
                                <div class="form-group">
                                    <label for="name">Numero:</label>
                                    <input class="form-control form-control-sm" id="numero" name="numero" type="text" value="{{ $prospecto->numero }}" placeholder="134" required>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <!-- Colonia -->
                                <div class="form-group">
                                    <label for="name">Colonia:</label>
                                    <input class="form-control form-control-sm" id="colonia" name="colonia" type="text" value="{{ $prospecto->colonia }}" placeholder="Ej: Las Fuentes" required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-2">
                                <!-- Codigo Postal -->
                                <div class="form-group">
                                    <label for="name">Codigo Postal:</label>
                                    <input class="form-control form-control-sm" id="codigo_postal" name="codigo_postal" type="text" value="{{ $prospecto->codigo_postal }}" placeholder="Ej: 81245" required>
                                </div>
                            </div>

                            <div class="col-md-5">
                                <!-- Telefono -->
                                <div class="form-group">
                                    <label for="name">Telefono:</label>
                                    <input class="form-control form-control-sm" id="telefono" name="telefono" type="text" value="{{ $prospecto->telefono }}" placeholder="Ej: ###-##-##-###" required>
                                </div>
                            </div>

                            <div class="col-md-5">
                                <!-- RFC -->
                                <div class="form-group">
                                    <label for="name">RFC:</label>
                                    <input class="form-control form-control-sm" id="rfc" name="rfc" type="text" value="{{ $prospecto->rfc }}" placeholder="Ej: THNE471011RV2" required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Estatus:</label>
                                    <select class="form-control form-control" id="estatus" name="estatus">
                                        <option value="{{ $prospecto->estatus->id }}" hidden selected>{{ $prospecto->estatus->nombre }}</option>
                                        <option value="">Seleccionar</option>
                                        
                                        @foreach ($estatus as $value)
                                            @if ($value->id <> 1)
                                                <option value="{{ $value->id }}">{{ $value->nombre }}</option>
                                            @endif
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6" id="observaciones" style="display: none">
                                <label for="name">Observaciones:</label>
                                <textarea 
                                class="form-control"
                                name="observaciones"
                                rows="2"
                                required>{{ $prospecto->observaciones }}</textarea>
                            </div>
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
                    <div class="col-md-6">
                        <button class="btn btn-success btn-block mt-2" type="submit" id="btn-enviar">Enviar</button>
                    </div>
        
                    <div class="col-md-6">
                        <a href="{{ route('prospecto.index') }}"
                            class="btn btn-secondary btn-block mt-2">
                            Volver
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('script')
    <script>
        $(document).ready(function() {
            let estatus = $('#estatus').val();
            
            if(estatus == 3){
                $('#observaciones').show();
            }

            $('#estatus').on('change', function() {
                if(this.value == 3){
                    $('#observaciones').show();
                }
                else 
                {
                    $('#observaciones').val('');
                    $('#observaciones').hide();
                }
            });
        });
    </script>
@endsection