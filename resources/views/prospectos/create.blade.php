@extends('layouts.app')

@section('title', "Nuevo Prospecto")

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-8">
            <form method="post" action="{{ route('prospecto.store') }}" style="font-size:13px" accept-charset="UTF-8" enctype="multipart/form-data">
                <div class="card">
                    <div class="card-header text-white bg-dark">
                        <h5 class="mb-0">Nuevo Prospecto</h5> 
                    </div>

                    <div class="card-body">
                        @csrf
                        {{ method_field('POST') }}
                
                        <div class="row">
                            <div class="col-md-4">
                                <!-- Nombre -->
                                <div class="form-group">
                                    <label for="name">Nombre:</label>
                                    <input class="form-control form-control-sm" id="nombre" name="nombre" type="text" placeholder="Ej: Juan Carlos" >
                                </div>
                            </div>

                            <div class="col-md-4">
                                <!-- Primer Apellido -->
                                <div class="form-group">
                                    <label for="name">Primer Apellido:</label>
                                    <input class="form-control form-control-sm" id="primer_apellido" name="primer_apellido" type="text" placeholder="Ej: Martinez" >
                                </div>
                            </div>

                            <div class="col-md-4">
                                <!-- Segundo Apellido -->
                                <div class="form-group">
                                    <label for="name">Segundo Apellido:</label>
                                    <input class="form-control form-control-sm" id="segundo_apellido" name="segundo_apellido" type="text" placeholder="Ej: Perez">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <!-- Calle -->
                                <div class="form-group">
                                    <label for="name">Calle:</label>
                                    <input class="form-control form-control-sm" id="calle" name="calle" type="text" placeholder="Ej: Rio Presidio" >
                                </div>
                            </div>

                            <div class="col-md-2">
                                <!-- Numero -->
                                <div class="form-group">
                                    <label for="name">Numero:</label>
                                    <input class="form-control form-control-sm" id="numero" name="numero" type="text" placeholder="134" >
                                </div>
                            </div>

                            <div class="col-md-4">
                                <!-- Colonia -->
                                <div class="form-group">
                                    <label for="name">Colonia:</label>
                                    <input class="form-control form-control-sm" id="colonia" name="colonia" type="text" placeholder="Ej: Las Fuentes" >
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-2">
                                <!-- Codigo Postal -->
                                <div class="form-group">
                                    <label for="name">Codigo Postal:</label>
                                    <input class="form-control form-control-sm" id="codigo_postal" name="codigo_postal" type="text" placeholder="Ej: 81245" >
                                </div>
                            </div>

                            <div class="col-md-5">
                                <!-- Telefono -->
                                <div class="form-group">
                                    <label for="name">Telefono:</label>
                                    <input class="form-control form-control-sm" id="telefono" name="telefono" type="text" placeholder="Ej: ###-##-##-###" >
                                </div>
                            </div>

                            <div class="col-md-5">
                                <!-- RFC -->
                                <div class="form-group">
                                    <label for="name">RFC:</label>
                                    <input class="form-control form-control-sm" id="rfc" name="rfc" type="text" placeholder="Ej: THNE471011RV2" >
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Estatus:</label>
                                    <select class="form-control form-control" id="estatus" name="estatus">
                                        <option value="">Seleccionar</option>
                                        
                                        @foreach ($estatus as $value)
                                            <option value="{{ $value->id }}">{{ $value->nombre }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <button type="button" class="btn btn-sm btn-primary mr-2" id="agregar_archivo">
                                    <i class="fa fa-plus"> </i> Agregar Archivo
                                </button>

                                <button type="button" class="btn btn-sm btn-danger" id="eliminar_archivo">
                                    <i class="fa fa-trash"> </i> Eliminar Archivo
                                </button>
                            </div>
                        </div>

                        <div class="mt-2" id="archivos_prospecto"></div>
                    </div>
                </div>

                <div class="row mt-2">
                    <div class="col-md-6">
                        <button class="btn btn-success btn-block mt-2" type="submit" id="btn-enviar">Enviar</button>
                    </div>
        
                    
                    <div class="col-md-6">
                        <button type="button" class="btn btn-secondary btn-block mt-2" data-toggle="modal" data-target=#modalSalir> Salir </button>
                                    
                        <!-- Modal  Confirmacion-->
                        <div class="modal fade" id=modalSalir tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-center" id="exampleModalLabel">Confirmación para salir de la captura</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    
                                    <div class="modal-body">
                                        <p class="text-center">¿Estás seguro(a) que desea salir? si sale perderá toda la captura</p>
                                    </div>
                                    
                                    <div class="modal-footer">
                                        <a href="{{ route('prospecto.index') }}" type="button" class="btn btn-primary">Confirmar</a>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('script')
    <script>
        $(document).ready(function() {
            $('#agregar_archivo').click(function(){
                let a = Math.round(Math.random()*100000);
                let div = document.createElement('div');
                div.setAttribute('class', 'archivo_prospecto_rows animated fadeInDown');

                div.innerHTML =
                    '<div class="row"> '+
                        '<div class="custom-control custom-checkbox ml-3 mr-3"> '+
                            '<input type="checkbox" value="" '+
                            'class="custom-control-input case_archivo_prospecto1" '+
                            'name="id_gasto" id="check_archivo_prospecto_' + a + '"/>' +
                    
                            '<label class="custom-control-label" for="check_archivo_prospecto_' + a + '"></label> '+
                        '</div> '+
                        
                        '<div class="col-md-4">'+
                            '<div class="form-group">'+
                                '<label for="name">Nombre Archivo:</label>'+
                                '<input class="form-control form-control-sm" id="nombre_archivo" name="nombre_archivo[]" type="text">'+
                            '</div>'+
                        '</div>'+

                        '<div class="col-md-4">'+
                            '<div class="form-group">'+
                                '<label for="name">Archivo:</label>'+
                                '<input id="archivo" name="archivo[]" type="file">'+
                            '</div>'+
                        '</div>'+
                    '</div>';

                document.getElementById('archivos_prospecto').append(div);
            });

            $('#eliminar_archivo').click(function(){
                $('.case_archivo_prospecto1:checkbox:checked').parents(".archivo_prospecto_rows").remove();
            });
        });
    </script>
@endsection