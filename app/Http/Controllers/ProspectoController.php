<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prospecto;
use App\Models\Archivo;
use App\Models\Estatus;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProspectoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('prospectos.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $estatus = Estatus::all();

        return view('prospectos.create', compact('estatus'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $estatus = 1; // Enviado

        $prospecto = new Prospecto();
        $prospecto->estatus_id = $estatus;
        $prospecto->nombre = $request->nombre;
        $prospecto->primer_apellido = $request->primer_apellido;
        $prospecto->segundo_apellido = $request->segundo_apellido;
        $prospecto->calle = $request->calle;
        $prospecto->numero = $request->numero;
        $prospecto->colonia = $request->colonia;
        $prospecto->codigo_postal = $request->codigo_postal;
        $prospecto->telefono = $request->telefono;
        $prospecto->rfc = $request->rfc;

        if($prospecto->save()){
            $count_archivo = count($request->nombre_archivo);

            for($i = 0; $i < $count_archivo; $i++){
                $prospecto_id = $prospecto->id;
                $file = $request->file('archivo')[$i];
                $name = $request->nombre_archivo[$i];
                $extension = $file->getClientOriginalExtension();

                Storage::putFileAs('public', $file, "usuario_".$prospecto_id."_".$name.".".$extension);
                $archivo = new Archivo();
                $archivo->prospecto_id = $prospecto_id;
                $archivo->nombre = $name;
                $archivo->ruta_archivo = Storage::putFileAs('public', $file, "usuario_".$prospecto_id."_".$name.".".$extension);
                $archivo->save();
            }
        }

        return redirect()->route('prospecto.index')->with('info', 'Prospecto guardado con éxito');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $prospecto = Prospecto::find($id);
        $archivos = Archivo::where('prospecto_id', $id)->get();
        $estatus = Estatus::all();

        return view('prospectos.show', compact('prospecto', 'archivos', 'estatus'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $prospecto = Prospecto::find($id);
        $archivos = Archivo::where('prospecto_id', $id)->get();
        $estatus = Estatus::all();

        return view('prospectos.edit', compact('prospecto', 'archivos', 'estatus'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $prospecto = Prospecto::find($id);
        $prospecto->estatus_id = $request->estatus;
        $prospecto->nombre = $request->nombre;
        $prospecto->primer_apellido = $request->primer_apellido;
        $prospecto->segundo_apellido = $request->segundo_apellido;
        $prospecto->calle = $request->calle;
        $prospecto->numero = $request->numero;
        $prospecto->colonia = $request->colonia;
        $prospecto->codigo_postal = $request->codigo_postal;
        $prospecto->telefono = $request->telefono;
        $prospecto->rfc = $request->rfc;
        $prospecto->observaciones = $request->observaciones;
        $prospecto->save();
        
        return redirect()->route('prospecto.index')->with('info', 'Prospecto actualizado con éxito');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function prospectos_datatable()
    {
        $data = Prospecto::select(
                DB::raw('
                prospectos.id,
                estatus.nombre as estatus_nombre,
                prospectos.nombre,
                prospectos.primer_apellido,
                prospectos.segundo_apellido,
                prospectos.calle,
                prospectos.numero,
                prospectos.colonia,
                prospectos.codigo_postal,
                prospectos.telefono,
                prospectos.rfc,
                prospectos.observaciones'))
                ->join("estatus","estatus.id", "=", "prospectos.estatus_id")
                ->get();

        return Datatables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function($row){
                $route_show = route('prospecto.show', $row["id"]);
                $route_edit = route('prospecto.edit', $row["id"]);
                $route_destroy = route('prospecto.destroy', $row["id"]);
                $csrf_field = csrf_field();
                $method_field = method_field("DELETE");

                $btn = '
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <a href='.$route_show.' class="edit btn btn-info btn-sm mr-2"><i class="fa fa-info"></i></a>
                            
                            <a href='.$route_edit.' class="edit btn btn-warning btn-sm mr-2"><i class="fa fa-pencil"></i></a>
                            
                            <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target=#exampleModal_'.$row["id"].'> <i class="fa fa-trash"></i> </button>
                                        
                            <!-- Modal  Confirmacion-->
                            <div class="modal fade" id=exampleModal_'.$row["id"].' tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title text-center" id="exampleModalLabel">Confirmacion para eliminar el puerto: '.$row['nombre'].'</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        
                                        <form method="post" action='.$route_destroy.'>
                                            '.$csrf_field.'
                                            '.$method_field.'
                                            <div class="modal-body">
                                                <p class="text-center">¿Estás seguro(a) que quieres eliminar el registro?</p>
                                            </div>
                                            
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-success" style="width:80px;">Si</button>
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ';

                return $btn;
            })
            ->rawColumns(['action'])
            ->make(true);
    }
}
