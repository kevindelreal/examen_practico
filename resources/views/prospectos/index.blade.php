@extends('layouts.app')

@section('title', "Prospectos")

@section('content')
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header text-white bg-primary">
                <div class="d-inline p-2 bg-primary text-white" style="font-size: 20px;">
                    Prospectos
                </div>
                
                <a href="{{ route('prospecto.create') }}"
                class="btn btn-sm btn-success float-right">
                Nuevo Prospecto
                </a>
            </div>

            <div class="card-body">
                <table id="myTable" class="table table-responsive-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Primer Apellido</th>
                            <th>Segundo Apellido</th>
                            <th class="text-center">Estatus</th>
                            <th class="text-center">Acción</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection

@section('script')
    <script src="{{ asset('js/jquery.dataTables.js') }}"></script>
    <script src="{{ asset('js/dataTables.bootstrap4.js') }}"></script>

    <script>
        $(document).ready(function() {
            var table = $('#myTable').DataTable({
                processing: true,
                serverSide: true,
                ajax: "{{ route('prospecto.prospectos_datatable') }}",
                columns: [
                    {data: 'id', name: 'id'},
                    {data: 'nombre', name: 'nombre'},
                    {data: 'primer_apellido', name: 'primer_apellido'},
                    {data: 'segundo_apellido', name: 'segundo_apellido'},
                    {data: 'estatus_nombre', name: 'estatus_nombre', sClass: "text-center"},
                    {
                        data: 'action', 
                        name: 'action', 
                        orderable: false, 
                        searchable: false,
                        sClass: "text-center"
                    },
                ]
            });
        });
    </script>
@endsection
