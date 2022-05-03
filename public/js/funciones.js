// ------------------------------------------------------ PAQUETES PROPIEDADES ----------------------------------------------------------//
function agregar_paquete_ft() {
    let cont = $(".paquetes_rows").length;
    let a = cont + 1;

    let div = document.createElement('div');
    div.setAttribute('class', 'paquetes_rows animated fadeInDown');

    div.innerHTML =
        '<div class="form-row"> '+
        '   <div class="form-group col-md"> '+
        '       <div class="text-center"> '+
        '           <label class="font-weight-bold">Seleccionar:</label> '+
        '       </div> '+

        '       <div class="custom-control custom-checkbox text-center">' +
        '           <input class="custom-control-input case_paquete1" name="id_gasto" id="check_paquete_' + a + '" type="checkbox" value="" Onchange="seleccionarCheckboxPaquete(this.value)"/>' +
        '           <label class="custom-control-label" for="check_paquete_' + a + '"></label>' +
        '       </div>' +
        '   </div>' +

        '   <div class="form-group col-md"> '+
        '       <div class="text-center"> '+
        '           <label class="font-weight-bold">Paquete:</label> '+
        '       </div> '+

        '       <div class="text-center"> '+
        '           <label class="font-weight-bold">' + a + '</label> '+
        '       </div> '+
        '   </div> '+

        '   <div class="form-group col-md"> '+
        '       <div class="text-right"> '+
        '           <label class="font-weight-bold">Cantidad:</label> '+
        '       </div> '+

        '      <input class="form-control form-control-sm text-right" id="cantidad_paquete_' + a + '" name="cantidad_paquete[]" onkeypress="return SoloNumeros(event);"/>' +
        '   </div>' +

            // FT
        '   <div class="form-group col-md"> '+
        '       <div class="text-right"> '+
        '           <label class="font-weight-bold">Tipo de Contenedor:</label> '+
        '       </div> '+

        '      <select class="form-control form-control-sm" id="ft_paquete_' + a + '" name="ft_paquete[]" type="text" dir="rtl"/>' +
        '      <option id="seleccionar" value="" readonly selected> Seleccionar </option>' +
               // Opciones //
        '      <option id="seleccionar" value="" readonly selected> Seleccionar </option>' +
        '      <optgroup label=DC>' +
                  '<option id="'+ a +'" value="DC 20"> DC 20 </option>' +
                  '<option id="'+ a +'" value="DC 40"> DC 40 </option>' +
                  '<option id="'+ a +'" value="DC 45"> DC 45 </option>' +
        '      </optgroup>'+

        '      <optgroup label=RF>'+
                  '<option id="'+ a +'" value="RF 20"> RF 20 </option>' +
                  '<option id="'+ a +'" value="RF 40"> RF 40 </option>' +
        '      </optgroup>'+

        '      <optgroup label=OT>'+
                  '<option id="'+ a +'" value="OT 20"> OT 20 </option>' +
                  '<option id="'+ a +'" value="OT 40"> OT 40 </option>' +
        '      </optgroup>'+

        '      <optgroup label=FR>'+
                  '<option id="'+ a +'" value="FR 20"> FR 20 </option>' +
                  '<option id="'+ a +'" value="FR 40"> FR 40 </option>' +
        '      </optgroup>'+

        '      <optgroup label=IMO>'+
                  '<option id="'+ a +'" value="IMO 20"> IMO 20 </option>' +
                  '<option id="'+ a +'" value="IMO 40"> IMO 40 </option>' +
        '      </optgroup>'+

        '      <optgroup label=HQ>'+
                  '<option id="'+ a +'" value="HQ 40"> HQ 40 </option>' +
        '      </optgroup>'+
               // Opciones //
        '      </select>' +
        '   </div> '+
        '</div> '+
        '<hr>';
    
    document.getElementById('paquetes_ft').append(div);

}


function agregar_paquete() {
    let cont = $(".paquetes_rows").length;
    let a = cont + 1;

    let div = document.createElement('div');
    div.setAttribute('class', 'paquetes_rows animated fadeInDown');

    div.innerHTML =
        '<div class="form-row"> '+
            /* Seleccionar */
        '   <div class="form-grup col-md"> '+
        '       <div class="my-1 text-center"> '+
        '           <label class="font-weight-bold">Seleccionar:</label> '+
        '       </div> '+

        '       <div class="custom-control custom-checkbox text-center">' +
        '           <input class="custom-control-input case_paquete1" name="id_gasto" id="check_paquete_' + a + '" type="checkbox" value="" Onchange="seleccionarCheckboxPaquete(this.value)"/>' +

        '           <label class="custom-control-label" for="check_paquete_' + a + '"></label>' +
        '       </div>' +
        '   </div>' +

            /* Paquete */
        '   <div class="form-grup col-md"> '+
        '       <div class="my-1 text-center"> '+
        '           <label class="font-weight-bold">Paquete:</label> '+
        '       </div> '+

        '       <div class="my-1 text-center"> '+
        '           <label class="font-weight-bold">' + a + '</label> '+
        '       </div> '+
        '   </div> '+

            /* Cantidad */
        '   <div class="form-grup col-md"> '+
        '       <div class="text-right"> '+
        '           <label class="my-1 font-weight-bold">Cantidad:</label> '+
        '       </div> '+

        '       <input class="form-control form-control-sm text-right" id="cantidad_paquete_' + a + '" name="cantidad_paquete[]" onkeypress="return SoloNumeros(event);" onblur="calculo_paquetes(' + a + ')" /> '+
        '   </div>' +

            /* Largo */
        '   <div class="form-grup col-md"> '+
        '       <div class="text-right"> '+
        '           <label class="my-1 font-weight-bold">Largo:</label> '+
        '       </div> '+

        '       <input class="form-control form-control-sm text-right" id="largo_paquete_' + a + '" name="largo_paquete[]" onkeypress="return SoloNumeros(event);" onblur="calculo_paquetes(' + a + ')" /> '+
        '   </div>' +

            /* Ancho */
        '   <div class="form-group col-md"> '+
        '       <div class="text-right"> '+
        '           <label class="my-1 font-weight-bold">Ancho:</label> '+
        '       </div> '+

        '       <input class="form-control form-control-sm text-right" id="ancho_paquete_' + a + '" name="ancho_paquete[]" onkeypress="return SoloNumeros(event);" onblur="calculo_paquetes(' + a + ')" />' +
        '   </div>' +

            /* Alto */
        '   <div class="form-group col-md"> '+
        '       <div class="text-right"> '+
        '           <label class="my-1 font-weight-bold">Alto:</label> '+
        '       </div> '+

        '       <input class="form-control form-control-sm text-right" id="alto_paquete_' + a + '" name="alto_paquete[]" onkeypress="return SoloNumeros(event);" onblur="calculo_paquetes(' + a + ')" />' +
        '   </div>' +

            /* Volumen */
        '   <div class="form-group col-md"> '+
        '       <div class="text-right"> '+
        '           <label class="my-1 font-weight-bold">Volumen:</label> '+
        '       </div> '+

        '       <input class="form-control form-control-sm text-right" id="volumen_paquete_' + a + '" name="volumen_paquete[]" onkeypress="return SoloNumeros(event);" readonly/>' +
        '   </div>' +

            /* Peso */
        '   <div class="form-group col-md"> '+
        '       <div class="text-right"> '+
        '       <label class="my-1 font-weight-bold">Peso:</label> '+
        '       </div> '+

        '       <input class="form-control form-control-sm text-right" id="peso_paquete_' + a + '" name="peso_paquete[]" onkeypress="return SoloNumeros(event);" onblur="calculo_paquetes(' + a + ')" />' +
        '   </div>' +
        '</div>';
    
    document.getElementById('paquetes').append(div);

}


function eliminar_paquete() {
    $('.case_paquete1:checkbox:checked').parents(".paquetes_rows").remove();

    return calculo_paquetes();
}


function eliminar_paquetes_bd() {
    let idsArr = [];
    $(".checkbox_paquete:checked").each(function () {
        idsArr.push($(this).attr('data-id'));
    });

    if (idsArr.length <= 0) {
        Swal.fire({
            type: 'info',
            text: 'Selecciona al menos un registro.',
          })
    } 
    else{
        Swal.fire({
            text: "¿Estás seguro(a), quieres borrar el registro(s) seleccionado(s)?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
            }).then((result) => {
            if (result.value) {
            let strIds = idsArr.join(",");

            $.ajax({
                url: "/delete-paquetes",
                type: 'DELETE',
                data: 'ids=' + strIds,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    if (data['status'] == true) {
                        $(".checkbox_paquete:checked").each(function () {
                            $(this).parents(".paquetes_rows").remove();
                            Swal.fire(
                                'Eliminado!',
                                'No olvide actualizar la cotización.',
                                'success'
                            )

                            return calculo_paquetes();
                        });
                    } 
                    else {
                        Swal.fire({
                            type: 'error',
                            text: 'Algo salio mal.',
                        })
                    }
                },

                error: function (data) {
                    alert(data.responseText);
                }
            });

            }
        });
    }
}


function calculo_paquetes(a) {
    let volumen_paquete = 0;
    
    // volumen //
    $("#volumen_paquete_" + a).val(parseFloat($("#cantidad_paquete_" + a).val() * $("#largo_paquete_" + a).val() * $("#ancho_paquete_" + a).val() * $("#alto_paquete_" + a).val()).toFixed(2));

    $("input[id^='volumen_paquete_']").each(function () {
        volumen_paquete += Number($(this).val());
    });

    $("#total_volumen_paquete").val(parseFloat(volumen_paquete).toFixed(2));

    // peso //
    const rowsPaquetes = $('.paquetes_rows');

    let pesoTotal = 0;
    for (let i = 0; i < rowsPaquetes.length; i++) {
        const paquete = rowsPaquetes[i];
        const cantidadPaquete = !paquete.querySelector('input[id^="cantidad_paquete_"').value.trim() ? 0 : Number(paquete.querySelector('input[id^="cantidad_paquete_"').value);
        const pesoPaquete = !paquete.querySelector('input[id^="peso_paquete_"').value.trim() ? 0 : Number(paquete.querySelector('input[id^="peso_paquete_"').value);
        const subtotalPeso = cantidadPaquete * (pesoPaquete);
        
        pesoTotal += subtotalPeso;
        
    }

    $("#total_peso_paquete").val(parseFloat(pesoTotal).toFixed(2));
}


function asignar_caracteristicas() {
    total_volumen_paquete = $("#total_volumen_paquete").val();
    total_peso_paquete = $("#total_peso_paquete").val();

    $("#cantidad_volumen").val(total_volumen_paquete);
    $("#cantidad_peso").val(total_peso_paquete);
}


function seleccionarCheckboxPaquete(valor) {
    if (valor == "") {
        $("#eliminar_registro_paquete").hide();
        $("#eliminar_renglon_paquete").show();
        $('#eliminar_renglon_paquete').attr('hidden', false);
        $('#eliminar_renglon_paquete').removeAttr('style'); // se elimina el atributo style para que no lo ponga debajo del boton de agregar
        $('.case_paquete2').prop("checked", false);
    } else {
        $("#eliminar_renglon_paquete").hide();
        $("#eliminar_registro_paquete").show();
        $('#eliminar_registro_paquete').attr('hidden', false);
        $('#eliminar_registro_paquete').removeAttr('style');
        $('.case_paquete1').prop("checked", false);
    }
}


// ------------------------------------------------------  GASTOS EN LOGISTICA INTERNACIONAL --------------------------------------------//
function agregar_gasto_logistica() {
    $.ajax({
        type: "GET",
        url: '/autocompletar', // de aqui traemos los conceptos
        success: function (data) {
            let a = Math.round(Math.random()*100000);
            
            let lote_carga = $("#lote_carga").val();
            let operacion = $("#operacion").val();
            let unidades = "";

            let opciones = "";
            let conceptos = JSON.parse(data); // los convertimons a json

            conceptos.forEach(function (element, index) { // recorremos los conceptos 
                let tipo_gasto = element.tipo_gasto;
                let operacion_contable = element.operacion_contable;
                let concepto = element.nombre;

                if (tipo_gasto == "Logistica" && operacion_contable == "Ingreso" ){
                    coordinacion_importacion = concepto.includes("Coordinación Logística Importación");
                    coordinacion_exportacion = concepto.includes("Coordinación Logística Exportación");

                    if(operacion == "Importación" || operacion == "Comercialización"){
                        if(coordinacion_importacion){
                            concepto_a_mostrar = concepto;
                        }
                        else{
                            if(coordinacion_exportacion){
                                return;
                            }
                            else{
                                eliminar_palabra_servicio = concepto.replace("Servicio de ", "");
                                eliminar_palabras_internacional = eliminar_palabra_servicio.replace("Internacional", "");
                                concepto_a_mostrar = eliminar_palabras_internacional;
                            }
                        }
                    }

                    if(operacion == "Exportación"){
                        if(coordinacion_exportacion){
                            concepto_a_mostrar = concepto;
                        }
                        else{
                            if(coordinacion_importacion){
                                return;
                            }
                            else{
                                eliminar_palabra_servicio = concepto.replace("Servicio de ", "");
                                eliminar_palabras_internacional = eliminar_palabra_servicio.replace("Internacional", "");
                                concepto_a_mostrar = eliminar_palabras_internacional;
                            }
                        }
                    }

                    opciones += '<option id="' + index + '" value="' + element.clave_magaya + '">' + concepto_a_mostrar + '</option>';
                } 
            });

            switch (lote_carga) {
                case "FTL":
                    unidades =  '<option id="'+ a +'" value="Remolque"> Remolque </option>' +
                                '<option id="'+ a +'" value="BOL"> BOL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;

                case "LTL":
                    unidades =  '<option id="'+ a +'" value="Peso-Facturable"> Peso-Facturable </option>' +
                                '<option id="'+ a +'" value="BOL"> BOL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
                
                case "FCL":
                    unidades =  '<option id="'+ a +'" value="Cont"> Cont </option>' +
                                '<option id="'+ a +'" value="BL"> BL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
                
                case "LCL":
                    unidades =  '<option id="'+ a +'" value="w/m"> w/m </option>' +
                                '<option id="'+ a +'" value="BL"> BL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
                
                case "AER":
                    unidades =  '<option id="'+ a +'" value="Peso-Facturable"> Peso-Facturable </option>' +
                                '<option id="'+ a +'" value="AWB"> AWB </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
            
                default:
                    Swal.fire({
                        type: 'warning',
                        text: 'Debe seleccionar un lote de carga.',
                      })
                      return;
                    break;
            }
            
            let div = document.createElement('div');
            div.setAttribute('class', 'gasto_logistica_rows animated fadeInDown');
            
            div.innerHTML =
                '<div class="form-row"> '+
                    /* Botones */
                '   <div class="form-group col-md-2 my-4"> '+
                '       <div class="btn-group" role="group" aria-label="Basic example"> '+
                            /* Checkbox */
                '           <div class="custom-control custom-checkbox mr-3"> '+
                '               <input type="checkbox" value="" '+
                '               class="custom-control-input case_gasto_logistica1" '+
                '               name="id_gasto" id="check_gasto_logistica_' + a + '" '+
                '               Onchange="seleccionarCheckboxLogistica(this.value,'+ a +')"/>' +
                    
                '               <label class="custom-control-label" for="check_gasto_logistica_' + a + '"></label> '+
                '           </div> '+

                            /* Detalles */
                '           <div class="mr-3"> '+
                '               <button type="button" class="btn btn-sm btn-info" data-toggle="collapse" data-target="#detalles_renglon_logistica_'+a+'">Detalles</button> '+
                '           </div> '+

                            /* Notas */
                '           <div class="mr-3"> '+
                '               <button type="button" class="btn btn-info btn-sm" '+
                '                   id="boton_notas_logistica_'+a+'" hidden '+
                '                   data-toggle="modal" data-target="#modal_boton_notas_logistica_'+a+'">'+
                '                   <i class="fa fa-file"></i>'+
                '               </button> '+
                '           </div> '+
                '       </div> '+
                '   </div> '+

                    /* Tipo de Gasto */
                '   <input class="form-control form-control-sm" hidden id="tipo_gasto_logistica_' + a + '" name="tipo_gasto[]" type="text" value="Logistica"/>' +

                    /* Concepto */
                '   <div class="form-group col-md-3"> '+
                '      <label>Concepto:</label> '+
                '      <div class="form-group">'+
                '          <select class="form-control form-control-sm" '+
                '          id="concepto_gasto_logistica_' + a + '" '+
                '          name="concepto_gasto_logistica[]" type="text" '+
                '          onChange="habilitar_ft(this.value,'+a+'); agregar_modal_gastos_logistica(this.value,'+ "'nuevo'" +','+ a +')" '+ 
                '          required/>' +
                            /* Opciones */
                '          <option disabled value="" selected> Seleccionar </option>' +
                                opciones +
                            /* Opciones */
                '          </select>' +
                '      </div>'+
                '   </div> '+

                    /* FT */
                '   <div class="form-group col-md-1"> '+
                '       <label>Flete:</label> '+
                '       <select class="form-control form-control-sm" '+
                '       id="ft_gasto_logistica_' + a + '" '+
                '       name="ft_gasto_logistica[]" '+
                '       type="text"'+
                '       readonly required/>' +
                        /* Opciones */
                '       <option id="seleccionar" value="" readonly selected> Seleccionar </option>' +
                '       <optgroup label=DC>' +
                '           <option id="'+ a +'" value="DC 20"> DC 20 </option>' +
                '           <option id="'+ a +'" value="DC 40"> DC 40 </option>' +
                '           <option id="'+ a +'" value="DC 45"> DC 45 </option>' +
                '       </optgroup>'+

                '       <optgroup label=RF>'+
                '           <option id="'+ a +'" value="RF 20"> RF 20 </option>' +
                '           <option id="'+ a +'" value="RF 40"> RF 40 </option>' +
                '       </optgroup>'+

                '       <optgroup label=OT>'+
                '           <option id="'+ a +'" value="OT 20"> OT 20 </option>' +
                '           <option id="'+ a +'" value="OT 40"> OT 40 </option>' +
                '       </optgroup>'+

                '       <optgroup label=FR>'+
                '           <option id="'+ a +'" value="FR 20"> FR 20 </option>' +
                '           <option id="'+ a +'" value="FR 40"> FR 40 </option>' +
                '       </optgroup>'+

                '       <optgroup label=IMO>'+
                '           <option id="'+ a +'" value="IMO 20"> IMO 20 </option>' +
                '           <option id="'+ a +'" value="IMO 40"> IMO 40 </option>' +
                '       </optgroup>'+

                '       <optgroup label=HQ>'+
                '           <option id="'+ a +'" value="HQ 40"> HQ 40 </option>' +
                '       </optgroup>'+
                        /* Opciones */
                '       </select>' +
                '   </div> '+
                
                    /* Unidad */
                '   <div class="form-group col-md-1"> '+
                '       <label>Unidad:</label> '+
                '       <select class="form-control form-control-sm" '+
                '       id="unidad_gasto_logistica_' + a + '" '+
                '       name="unidad_gasto_logistica[]" '+
                '       type="text" required/>' + 
                            /* Opciones */
                '           <option disabled value="" selected> Seleccionar </option>' +
                                unidades +
                            /* Opciones */
                '       </select>' +
                '   </div> '+

                    /* Cantidad */
                '   <div class="form-group col-md-1"> '+
                '       <label>Cantidad:</label> '+
                '       <input class="form-control form-control-sm text-right" '+
                '       id="cantidad_gasto_logistica_' + a + '" '+
                '       name="cantidad_gasto_logistica[]" type="text" '+
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_logistica(' + a + ')" '+
                '       required/>' +
                '   </div> '+

                    /* Costo Unitario */
                '   <div class="form-group col-md-2"> '+
                '       <label>Costo Unitario:</label> '+
                '       <input class="form-control form-control-sm text-right" type="text" '+
                '       id="costo_unitario_gasto_logistica_' + a + '" '+
                '       name="costo_unitario_gasto_logistica[]" '+
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_logistica(' + a + ')" '+ 
                '       step="0.1" placeholder="$0.00" required/>' +
                '   </div> '+

                    /* Precio Unitario */
                '   <div class="form-group col-md-2"> '+
                '       <label>Precio Unitario:</label> '+
                '       <input class="form-control form-control-sm text-right" type="text" '+
                '       id="precio_unitario_gasto_logistica_' + a + '" '+
                '       name="precio_unitario_gasto_logistica[]" ' +
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_logistica(' + a + ')" '+
                '       step=".01" value="0.00" required/>' +
                '   </div>' +
                '</div>' +
                

                /* Detalles Operaciones */
                '<div id="detalles_renglon_logistica_' + a + '" class="collapse"> '+
                '    <div class="form-row"> '+
                        /* Margen de Contribucion Unitario */
                '       <div class="form-group col-md-2"> '+
                '           <label>Margen Contribucion Unitario:</label> '+
                '           <input class="form-control form-control-sm text-right" type="text" '+
                '           id="margen_contribucion_unitario_gasto_logistica_' + a + '" '+
                '           name="margen_contribucion_unitario_gasto_logistica[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div> '+

                        /* Subtotal Costo */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Costo:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_costo_gasto_logistica_' + a + '" '+
                '           name="subtotal_costo_gasto_logistica[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Subtotal Ingreso */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Ingreso:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_ingreso_gasto_logistica_' + a + '" '+
                '           name="subtotal_ingreso_gasto_logistica[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Subtotal Margen Contribucion */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Margen de Contribucion:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_margen_contribucion_gasto_logistica_' + a + '" '+
                '           name="subtotal_margen_contribucion_gasto_logistica[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Porcentaje Margen de Contribucion */
                '       <div class="form-group col-md-2"> '+
                '           <label>% Margen de Contribucion:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="porc_margen_contribucion_gasto_logistica_' + a + '" '+
                '           name="porc_margen_contribucion_gasto_logistica[]" ' +
                '           step=".01" placeholder="%0.00" readonly/>' +
                '       </div>' +

                        /* Porcentaje Margen de Venta */
                '       <div class="form-group col-md-2"> '+
                '           <label>% Margen de Venta:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="porc_margen_venta_gasto_logistica_' + a + '" '+
                '           name="porc_margen_venta_gasto_logistica[]" ' +
                '           step=".01" placeholder="%0.00" readonly/>' +
                '       </div>' +
                '    </div> '+
                '</div> '+

                '<hr id="division">';

            document.getElementById('gastos_logistica').append(div);
        }
    });
}


function agregar_modal_gastos_logistica(valor, accion, a){
    let texto = "";
    let notas = "";
    let modal = "";
    let check_modal_gasto_logistica = '<div class="col-margen-checkbox" hidden>' +
        '<div class="custom-control custom-checkbox text-center">' +
            '<input class="custom-control-input case_modal_gasto_logistica1" '+
            'name="id_gasto" '+
            'id="check_modal_gasto_logistica_' + a + '" '+
            'type="checkbox" value="" '+
            'Onchange="seleccionarCheckboxLogistica(this.value, '+ a +')"/>' +
            '<label class="custom-control-label" for="check_modal_gasto_logistica_' + a + '"></label>' +
        '</div>' +
    '</div>';

    
    switch (valor) {
        case "TER-FTN-NAC-ING":
        case "TER-FTI-EXT-ING":
        case "TER-FTI-INT-ING":
        case "MAR-FTE-INT-ING":
        case "AER-FTE-INT-ING":
            $('#modal_logistica_'+a).remove();
            $('#modal_boton_notas_logistica_'+a).remove();

            modal = document.createElement('div');
            modal.setAttribute("class", "modal_gasto_logistica_rows");
            modal.setAttribute("id", "modal_logistica_" + a);

            //Aplica para cualquier lote de carga
            texto = "";
            notas = check_modal_gasto_logistica +
            '<input class="form-control form-control-sm" '+
            'id="notas_pdf_gasto_logistica_'+a+'" '+
            'name="notas_pdf_gasto_logistica[]" type="text" '+
            'value="'+texto+'">';

            $('#notas_pdf_gasto_logistica_'+a).val(texto);
            
            $('#boton_notas_logistica_'+a).attr('hidden', false);
            $('#boton_notas_logistica_'+a).removeAttr('style');
        break;

        default:
            $('#modal_logistica_'+a).remove();
            $('#modal_boton_notas_logistica_'+a).remove();

            modal = document.createElement('div');
            modal.setAttribute("class", "modal_gasto_logistica_rows");
            modal.setAttribute("id", "modal_logistica_" + a);

            texto = "";
            notas = check_modal_gasto_logistica +
            '<input class="form-control form-control-sm" '+
            'id="notas_pdf_gasto_logistica_'+a+'" '+
            'name="notas_pdf_gasto_logistica[]" type="text" '+
            'value="">';

            $('#notas_pdf_gasto_logistica_'+a).val(texto);
            $('#boton_notas_logistica_'+a).attr('hidden', true);
        break;
    }
    
    
    // Modal Notas PDF
    modal.innerHTML = 
    '<div class="modal fade" id="modal_boton_notas_logistica_'+a+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog modal-dialog-centered" role="document">'+
            '<div class="modal-content">'+
                '<div class="modal-header">'+
                    '<h5 class="modal-title" id="exampleModalLongTitle">Leyenda:</h5>'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                    '</button>'+
                '</div>'+
                '<div class="modal-body">'+
                    '<div class="form-group">'+
                        notas +
                    '</div>'+
                '</div>'+
                '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-sm btn-success" data-dismiss="modal">Guardar</button>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';

    if(accion == "nuevo"){
        document.getElementById('ventana_modal_gastos_logistica').append(modal);
    }
    
    if(accion == "editar"){
        document.getElementById('editar_modal_logistica_'+a).append(modal);
    }
}


function eliminar_gastos_logistica() {
    $('.case_gasto_logistica1:checkbox:checked').parents(".gasto_logistica_rows").remove();
    $('.case_modal_gasto_logistica1:checkbox:checked').parents(".modal_gasto_logistica_rows").remove();

    return operaciones_gastos_logistica();
}
 

function eliminar_gastos_logistica_bd() {
    let idsArr = [];
    $(".checkbox_logistica:checked").each(function () {
        idsArr.push($(this).attr('data-id'));
    });

    if (idsArr.length <= 0) {
        Swal.fire({
            type: 'info',
            text: 'Selecciona al menos un registro.',
          })
    } 
    else {
        Swal.fire({
            text: "¿Estás seguro(a), quieres borrar el registro(s) seleccionado(s)?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
            }).then((result) => {
            if (result.value) {
        
            let strIds = idsArr.join(",");

            $.ajax({
                url: "/delete-gastos",
                type: 'DELETE',
                data: 'ids=' + strIds,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    if (data['status'] == true) {
                        $(".checkbox_logistica:checked").each(function () {
                            $(this).parents(".gasto_logistica_rows").remove();

                            Swal.fire(
                                'Eliminado!',
                                'No olvide actualizar la cotización.',
                                'success'
                            )

                            return operaciones_gastos_logistica();
                        });

                    } else {
                        Swal.fire({
                            type: 'error',
                            text: 'Algo salio mal.',
                        })
                    }
                },

                error: function (data) {
                    alert(data.responseText);
                }
            });

            }
        });
    }
}


function operaciones_gastos_logistica(a) {
    let cantidad_gasto_logistica = $("#cantidad_gasto_logistica_" + a).val();
    let costo_unitario_gasto_logistica = $("#costo_unitario_gasto_logistica_" + a).val();
    let precio_unitario_gasto_logistica = $("#precio_unitario_gasto_logistica_" + a).val();

    // Operaciones //
    let margen_contribucion_unitario_gasto_logistica = precio_unitario_gasto_logistica - costo_unitario_gasto_logistica;

    let subtotal_costo_gasto_logistica = costo_unitario_gasto_logistica * cantidad_gasto_logistica;
    let subtotal_ingreso_gasto_logistica = precio_unitario_gasto_logistica * cantidad_gasto_logistica;

    let porc_margen_venta_gasto_logistica = (precio_unitario_gasto_logistica / costo_unitario_gasto_logistica - 1) * 100; 

    let subtotal_margen_contribucion_gasto_logistica = margen_contribucion_unitario_gasto_logistica * cantidad_gasto_logistica;
    let porc_margen_contribucion_gasto_logistica = (subtotal_margen_contribucion_gasto_logistica / subtotal_ingreso_gasto_logistica) * 100 ;
    // Operaciones // 

    if(costo_unitario_gasto_logistica == 0 && precio_unitario_gasto_logistica == 0){
        margen_contribucion_unitario_gasto_logistica = 0;
        subtotal_costo_gasto_logistica = 0;
        subtotal_ingreso_gasto_logistica = 0;
        subtotal_margen_contribucion_gasto_logistica = 0;
        porc_margen_contribucion_gasto_logistica = 0;
        porc_margen_venta_gasto_logistica = 0;
    }

    if(costo_unitario_gasto_logistica > 0 && precio_unitario_gasto_logistica <= 0){
        porc_margen_contribucion_gasto_logistica = -100;
    }

    if(costo_unitario_gasto_logistica <= 0 && precio_unitario_gasto_logistica > 0){
        porc_margen_venta_gasto_logistica = 100;
    }

    $("#margen_contribucion_unitario_gasto_logistica_" + a).val(parseFloat(margen_contribucion_unitario_gasto_logistica ).toFixed(2));
    $("#subtotal_costo_gasto_logistica_" + a).val(parseFloat(subtotal_costo_gasto_logistica).toFixed(2));
    $("#subtotal_ingreso_gasto_logistica_" + a).val(parseFloat(subtotal_ingreso_gasto_logistica).toFixed(2));
    $("#porc_margen_contribucion_gasto_logistica_" + a).val(parseFloat(porc_margen_contribucion_gasto_logistica).toFixed(2));
    $("#subtotal_margen_contribucion_gasto_logistica_" + a).val(parseFloat(subtotal_margen_contribucion_gasto_logistica).toFixed(2));
    $("#porc_margen_venta_gasto_logistica_" + a).val(parseFloat(porc_margen_venta_gasto_logistica).toFixed(2));
    
    let total_costo_gasto_logistica = 0;
    let total_ingreso_gasto_logistica = 0;
    let total_subtotales_margen_contribucion_gasto_logistica = 0;
    let total_porc_margen_contribucion_gasto_logistica = 0;
    let total_porc_margen_venta_gasto_logistica = 0;
    
    // Sumatoria Costos Gastos Logistica
    $("input[id^='subtotal_costo_gasto_logistica_']").each(function () {
        total_costo_gasto_logistica += Number($(this).val());
    });

    // Sumatoria Ingresos Gastos Logistica
    $("input[id^='subtotal_ingreso_gasto_logistica_']").each(function () {
        total_ingreso_gasto_logistica += Number($(this).val());
    });

    // Sumatoria Subtotal Margen Unitario 
    $("input[id^='subtotal_margen_contribucion_gasto_logistica_']").each(function () {
        total_subtotales_margen_contribucion_gasto_logistica += Number($(this).val());
    });


    // Operaciones //
    total_porc_margen_venta_gasto_logistica = (total_ingreso_gasto_logistica / total_costo_gasto_logistica - 1) * 100;
    total_porc_margen_contribucion_gasto_logistica = (total_subtotales_margen_contribucion_gasto_logistica / total_ingreso_gasto_logistica) * 100;
    
    if(total_costo_gasto_logistica == 0 && total_ingreso_gasto_logistica == 0){
        total_porc_margen_contribucion_gasto_logistica = 0;
        total_porc_margen_venta_gasto_logistica = 0;
    }

    if(total_costo_gasto_logistica > 0 && total_ingreso_gasto_logistica <= 0){
        total_porc_margen_contribucion_gasto_logistica = -100;
        total_porc_margen_venta_gasto_logistica = -100;
    }

    if(total_costo_gasto_logistica <= 0 && total_ingreso_gasto_logistica > 0){
        total_porc_margen_contribucion_gasto_logistica = 100;
        total_porc_margen_venta_gasto_logistica = 100;
    }
    // Operaciones //
    $("#total_costo_gastos_logistica").val("$"+parseFloat(total_costo_gasto_logistica).toFixed(2));
    $("#total_ingreso_gastos_logistica").val("$"+parseFloat(total_ingreso_gasto_logistica).toFixed(2));
    $("#total_subtotales_margen_contribucion_gastos_logistica").val("$" + parseFloat(total_subtotales_margen_contribucion_gasto_logistica).toFixed(2));

    $("#total_porc_margen_contribucion_gastos_logistica").val("%" + parseFloat(total_porc_margen_contribucion_gasto_logistica).toFixed(2));
    $("#total_porc_margen_venta_gastos_logistica").val("%" + parseFloat(total_porc_margen_venta_gasto_logistica).toFixed(2));

    total_cotizacion();
}


function seleccionarCheckboxLogistica(valor, a) {
    if (valor == "") {
        $("#eliminar_registro_gasto_logistica").hide();
        $("#eliminar_renglon_gasto_logistica").show();
        $('#eliminar_renglon_gasto_logistica').attr('hidden', false);
        $('#eliminar_renglon_gasto_logistica').removeAttr('style'); // se elimina el atributo style para que no lo ponga debajo del boton de agregar
        $('.case_gasto_logistica2').prop("checked", false);

        if($('#check_gasto_logistica_' + a).is(':checked')) {
            $('#check_modal_gasto_logistica_' + a).prop("checked", true);
        }
        else{
            $('#check_modal_gasto_logistica_' + a).prop("checked", false);
        }
    } 
    else {
        $("#eliminar_renglon_gasto_logistica").hide();
        $("#eliminar_registro_gasto_logistica").show();
        $('#eliminar_registro_gasto_logistica').attr('hidden', false);
        $('#eliminar_registro_gasto_logistica').removeAttr('style');
        $('.case_gasto_logistica1').prop("checked", false);
    }
}


// ------------------------------------------------------- GASTOS DE ORIGEN -------------------------------------------------------------//
function agregar_gasto_origen() {
    $.ajax({
        type: "GET",
        url: '/autocompletar', // de aqui traemos los conceptos
        success: function (data) {
            let a = Math.round(Math.random()*100000);

            let lote_carga = $("#lote_carga").val();
            let unidades = "";

            let conceptos = JSON.parse(data); // los convertimons a json
            let opciones = "";
            let operacion = document.getElementById('operacion').value;

            conceptos.forEach(function (element, index) { // recorremos los conceptos 
            let tipo_gasto = element.tipo_gasto;
            let operacion_contable = element.operacion_contable;
            let concepto = element.nombre;

            if(operacion == "Exportación"){
                if (tipo_gasto == "Nacional" && operacion_contable == "Ingreso"){
                    eliminar_palabra_servicio_de = concepto.replace("Servicio de ", "");
                    eliminar_palabra_servicio = eliminar_palabra_servicio_de.replace("Servicio ", "");
                    eliminar_palabra_internacional = eliminar_palabra_servicio.replace("Internacional", "");
                    eliminar_palabra_nacional = eliminar_palabra_internacional.replace("Nacional", "");

                    concepto_a_mostrar = eliminar_palabra_nacional;

                    clave_magaya = element.clave_magaya;
                    opciones += '<option id="' + index + '" value="' + element.clave_magaya + '">' + concepto_a_mostrar + '</option>';
                }
            }

            if(operacion == "Importación" || operacion == "Comercialización"){
                if (tipo_gasto == "Extranjero" && operacion_contable == "Ingreso"){
                    eliminar_palabra_servicio_de = concepto.replace("Servicio de ", "");
                    eliminar_palabra_servicio = eliminar_palabra_servicio_de.replace("Servicio ", "");
                    eliminar_palabra_internacional = eliminar_palabra_servicio.replace("Internacional", "");
                    eliminar_palabra_extranjero = eliminar_palabra_internacional.replace("Extranjero", "");

                    concepto_a_mostrar = eliminar_palabra_extranjero;

                    clave_magaya = element.clave_magaya;
                    opciones += '<option id="' + index + '" value="' + element.clave_magaya + '">' + concepto_a_mostrar + '</option>';
                }
            }
                
            });

            switch (lote_carga) {
                case "FTL":
                    unidades =  '<option id="'+ a +'" value="Remolque"> Remolque </option>' +
                                '<option id="'+ a +'" value="BOL"> BOL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>'+
                                '<option id="'+ a +'" value="Pallet"> Pallet </option>';
                    break;

                case "LTL":
                    unidades =  '<option id="'+ a +'" value="Peso-Facturable"> Peso-Facturable </option>' +
                                '<option id="'+ a +'" value="BOL"> BOL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>'+
                                '<option id="'+ a +'" value="Pallet"> Pallet </option>';
                    break;
                
                case "FCL":
                    unidades =  '<option id="'+ a +'" value="Cont"> Cont </option>' +
                                '<option id="'+ a +'" value="BL"> BL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>'+
                                '<option id="'+ a +'" value="Pallet"> Pallet </option>';
                    break;
                
                case "LCL":
                    unidades =  '<option id="'+ a +'" value="w/m"> w/m </option>' +
                                '<option id="'+ a +'" value="BL"> BL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>'+
                                '<option id="'+ a +'" value="Pallet"> Pallet </option>';
                    break;
                
                case "AER":
                    unidades =  '<option id="'+ a +'" value="Peso-Facturable"> Peso-Facturable </option>' +
                                '<option id="'+ a +'" value="AWB"> AWB </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>'+
                                '<option id="'+ a +'" value="Pallet"> Pallet </option>';
                    break;
            
                default:
                    Swal.fire({
                        type: 'warning',
                        text: 'Debe seleccionar un lote de carga.',
                      })
                      return;
                    break;
            }

            let div = document.createElement('div');
            div.setAttribute('class', 'gasto_origen_rows animated fadeInDown');
        
            div.innerHTML =
                /* Checkbox */
                '<div class="form-row"> '+
                '   <div class="form-group col-md-2 my-4"> '+
                '      <div class="btn-group" role="group" aria-label="Basic example"> '+
                '          <div class="custom-control custom-checkbox mr-3"> '+
                '              <input type="checkbox" value="" '+
                '              class="custom-control-input case_gasto_origen1" '+
                '              name="id_gasto" id="check_gasto_origen_' + a + '" '+
                '              Onchange="seleccionarCheckboxOrigen(this.value,'+ a +')"/>' +
                    
                '              <label class="custom-control-label" for="check_gasto_origen_' + a + '"></label> '+
                '          </div> '+

                '          <div class="mr-3"> '+
                '              <button type="button" class="btn btn-sm btn-info" data-toggle="collapse" data-target="#detalles_renglon_origen_'+a+'">Detalles</button> '+
                '          </div> '+

                '          <div class="mr-3"> '+
                '              <button type="button" class="btn btn-info btn-sm" '+
                '                  id="boton_notas_origen_'+a+'" hidden '+
                '                  data-toggle="modal" data-target="#modal_boton_notas_origen_'+a+'">'+
                '                  <i class="fa fa-file"></i>'+
                '              </button> '+
                '          </div> '+
                '      </div> '+
                '   </div> '+

                    /* Tipo de Gasto */
                '   <input class="form-control form-control-sm" hidden id="tipo_gasto_origen_' + a + '" name="tipo_gasto[]" type="text" value="Origen"/>' +

                    /* Concepto */
                '   <div class="form-group col-md-4"> '+
                '      <label>Concepto:</label> '+
                '      <div class="form-group">'+
                '          <select class="form-control form-control-sm" '+
                '          id="concepto_gasto_origen_' + a + '" '+
                '          name="concepto_gasto_origen[]" type="text" '+
                '          onChange="reset_uom_origen('+ a +'); agregar_modal_gastos_origen(this.value,'+ "'nuevo'" +','+ a +')" '+ 
                '          required/>' +
                            /* Opciones */
                '          <option disabled value="" selected> Seleccionar </option>' +
                                opciones +
                            /* Opciones */
                '          </select>' +
                '      </div>'+
                '   </div> '+

                    /* Unidad */
                '   <div class="form-group col-md-1"> '+
                '       <label>Unidad:</label> '+
                '       <select class="form-control form-control-sm" '+
                '       id="unidad_gasto_origen_' + a + '" '+
                '       name="unidad_gasto_origen[]" '+
                '       type="text" required/>' + 
                            /* Opciones */
                '           <option disabled value="" selected> Seleccionar </option>' +
                                unidades +
                            /* Opciones */
                '       </select>' +
                '   </div> '+

                    /* Cantidad */
                '   <div class="form-group col-md-1"> '+
                '       <label>Cantidad:</label> '+
                '       <input class="form-control form-control-sm text-right" '+
                '       id="cantidad_gasto_origen_' + a + '" '+
                '       name="cantidad_gasto_origen[]" type="text" '+
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_origen(' + a + ')" '+
                '       required/>' +
                '   </div> '+

                    /* Costo Unitario */
                '   <div class="form-group col-md-2"> '+
                '       <label>Costo Unitario:</label> '+
                '       <input class="form-control form-control-sm text-right" type="text" '+
                '       id="costo_unitario_gasto_origen_' + a + '" '+
                '       name="costo_unitario_gasto_origen[]" '+
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_origen(' + a + ')" '+ 
                '       step="0.1" placeholder="$0.00" required/>' +
                '   </div> '+

                    /* Precio Unitario */
                '   <div class="form-group col-md-2"> '+
                '       <label>Precio Unitario:</label> '+
                '       <input class="form-control form-control-sm text-right" type="text" '+
                '       id="precio_unitario_gasto_origen_' + a + '" '+
                '       name="precio_unitario_gasto_origen[]" ' +
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_origen(' + a + ')" '+
                '       step=".01" value="0.00" required/>' +
                '   </div>' +
                '</div>' +
                

                /* Detalles Operaciones */
                '<div id="detalles_renglon_origen_' + a + '" class="collapse"> '+
                '    <div class="form-row"> '+
                        /* Margen de Contribucion Unitario */
                '       <div class="form-group col-md-2"> '+
                '           <label>Margen Contribucion Unitario:</label> '+
                '           <input class="form-control form-control-sm text-right" type="text" '+
                '           id="margen_contribucion_unitario_gasto_origen_' + a + '" '+
                '           name="margen_contribucion_unitario_gasto_origen[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div> '+

                        /* Subtotal Costo */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Costo:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_costo_gasto_origen_' + a + '" '+
                '           name="subtotal_costo_gasto_origen[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Subtotal Ingreso */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Ingreso:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_ingreso_gasto_origen_' + a + '" '+
                '           name="subtotal_ingreso_gasto_origen[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Subtotal Margen Contribucion */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Margen de Contribucion:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_margen_contribucion_gasto_origen_' + a + '" '+
                '           name="subtotal_margen_contribucion_gasto_origen[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Porcentaje Margen de Contribucion */
                '       <div class="form-group col-md-2"> '+
                '           <label>% Margen de Contribucion:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="porc_margen_contribucion_gasto_origen_' + a + '" '+
                '           name="porc_margen_contribucion_gasto_origen[]" ' +
                '           step=".01" placeholder="%0.00" readonly/>' +
                '       </div>' +

                        /* Porcentaje Margen de Venta */
                '       <div class="form-group col-md-2"> '+
                '           <label>% Margen de Venta:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="porc_margen_venta_gasto_origen_' + a + '" '+
                '           name="porc_margen_venta_gasto_origen[]" ' +
                '           step=".01" placeholder="%0.00" readonly/>' +
                '       </div>' +
                '    </div> '+
                '</div> '+

                '<hr>';

            document.getElementById('gastos_origen').append(div);
        }
    });
}


function agregar_modal_gastos_origen(valor, accion, a){
    let operacion = $("#operacion").val();
    let lote_carga = $("#lote_carga").val();
    let texto = "";
    let notas = "";
    let modal = "";
    let check_modal_gasto_origen = '<div class="col-margen-checkbox" hidden>' +
        '<div class="custom-control custom-checkbox text-center">' +
            '<input class="custom-control-input case_modal_gasto_origen1" '+
            'name="id_gasto" '+
            'id="check_modal_gasto_origen_' + a + '" '+
            'type="checkbox" value="" '+
            'Onchange="seleccionarCheckboxOrigen(this.value, '+ a +')"/>' +
            '<label class="custom-control-label" for="check_modal_gasto_origen_' + a + '"></label>' +
        '</div>' +
    '</div>';

    if(operacion == "Exportación"){
        switch (valor) {
            case "SEG-MER-NAC-ING":
                $('#modal_origen_'+a).remove();
                $('#modal_boton_notas_origen_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_origen_rows");
                modal.setAttribute("id", "modal_origen_" + a);

                //Aplica para cualquier lote de carga
                texto = "** 0.60 % del valor asegurado o USD 90 mínimo";
                notas = check_modal_gasto_origen +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_gasto_origen_'+a+'" '+
                'name="notas_pdf_gasto_origen[]" type="text" '+
                'value="'+texto+'">';

                $('#notas_pdf_gasto_origen_'+a).val(texto);
                
                $('#boton_notas_origen_'+a).attr('hidden', false);
                $('#boton_notas_origen_'+a).removeAttr('style');
            break;
            
            case "MAN-PRV-NAC-ING":
                $('#modal_origen_'+a).remove();
                $('#modal_boton_notas_origen_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_origen_rows");
                modal.setAttribute("id", "modal_origen_" + a);

                switch (lote_carga) {
                    case "LCL":
                        texto = "**Estimado";
                        notas = check_modal_gasto_origen +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_origen_'+a+'" '+
                        'name="notas_pdf_gasto_origen[]" type="text" '+
                        'value="'+texto+'">';
                        
                        $('#notas_pdf_gasto_origen_'+a).val(texto);
                        
                        $('#boton_notas_origen_'+a).attr('hidden', false);
                        $('#boton_notas_origen_'+a).removeAttr('style');
                    break;

                    case "FCL":
                        texto = "**Estimado";
                        notas = check_modal_gasto_origen +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_origen_'+a+'" '+
                        'name="notas_pdf_gasto_origen[]" type="text" '+
                        'value="'+texto+'">';
                        
                        $('#notas_pdf_gasto_origen_'+a).val(texto);
                        
                        $('#boton_notas_origen_'+a).attr('hidden', false);
                        $('#boton_notas_origen_'+a).removeAttr('style');
                    break;
                
                    default:
                        texto = "";
                        notas = check_modal_gasto_origen +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_origen_'+a+'" '+
                        'name="notas_pdf_gasto_origen[]" type="text" '+
                        'value="">';
    
                        $('#boton_notas_origen_'+a).attr('hidden', true);
                        $('#notas_pdf_gasto_origen_'+a).val(texto);
                    break;
                }
            break;

            case "DES-DAD-NAC-ING":
            case "DES-DAD-EXT-ING":
                $('#modal_origen_'+a).remove();
                $('#modal_boton_notas_origen_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_origen_rows");
                modal.setAttribute("id", "modal_origen_" + a);

                switch (lote_carga) {
                    case "FCL":
                        texto = "** 0.18 % del Valor Aduana + Gastos + Impuestos o 200 USD mínimo";
                        notas = check_modal_gasto_origen +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_origen_'+a+'"'+
                        'name="notas_pdf_gasto_origen[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_origen_'+a).val(texto);
                    
                        $('#boton_notas_origen_'+a).attr('hidden', false);
                        $('#boton_notas_origen_'+a).removeAttr('style');
                    break;
                
                    default:
                        texto = "";
                        notas = check_modal_gasto_origen +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_origen_'+a+'" '+
                        'name="notas_pdf_gasto_origen[]" type="text" '+
                        'value="">';
    
                        $('#boton_notas_origen_'+a).attr('hidden', true);
                        $('#notas_pdf_gasto_origen_'+a).val(texto);
                    break;
                }
            break;

            case "TER-FTI-EXT-ING":
            case "TER-FTN-NAC-ING":
                texto = "";
                $('#modal_origen_'+a).remove();
                $('#modal_boton_notas_origen_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_origen_rows");
                modal.setAttribute("id", "modal_origen_" + a);

                notas = check_modal_gasto_origen +
                '<select class="form-control form-control-sm" '+
                'id="select_gasto_origen_'+a+'" '+
                'name="notas_pdf_gasto_origen[]">'+
                    '<option value="" selected> Seleccionar </option>'+ 
                    '<option value="Sencillo"> Sencillo </option>'+ 
                    '<option value="Full"> Full </option>'+
                    '<option value="Liner Terms - All Truck"> Liner Terms - All Truck </option>'+
                    '<option value="Liner Terms - Rail+Truck"> Liner Terms - Rail+Truck </option>'+
                    '<option value="Paquetería"> Paquetería </option>'+
                    '<option value="Carga Consolidada"> Carga Consolidada </option>'+
                '</select>';
                
                $('#boton_notas_origen_'+a).attr('hidden', false);
                $('#boton_notas_origen_'+a).removeAttr('style');
            break;

            default:
                $('#modal_origen_'+a).remove();
                $('#modal_boton_notas_origen_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_origen_rows");
                modal.setAttribute("id", "modal_origen_" + a);

                texto = "";
                notas = check_modal_gasto_origen +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_gasto_origen_'+a+'" '+
                'name="notas_pdf_gasto_origen[]" type="text" '+
                'value="">';

                $('#boton_notas_origen_'+a).attr('hidden', false);
                $('#boton_notas_origen_'+a).removeAttr('style');
            break;
        }
    }

    if(operacion == "Importación" || operacion == "Comercialización"){
        switch (valor) {
            case "COO-COM-EXT-ING":
            case "COO-COM-NAC-ING":
                $('#modal_origen_'+a).remove();
                $('#modal_boton_notas_origen_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_origen_rows");
                modal.setAttribute("id", "modal_origen_" + a);

                //Aplica para cualquier lote de carga
                texto = "** 5% del Valor Aduana + Impuestos o mínimo 250 USD";
                notas = check_modal_gasto_origen +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_gasto_origen_'+a+'" '+
                'name="notas_pdf_gasto_origen[]" type="text" '+
                'value="'+texto+'">';

                $('#notas_pdf_gasto_origen_'+a).val(texto);
                
                $('#boton_notas_origen_'+a).attr('hidden', false);
                $('#boton_notas_origen_'+a).removeAttr('style');
            break;

            case "DIS-ALM-EXT-ING":
                $('#modal_origen_'+a).remove();
                $('#modal_boton_notas_origen_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_origen_rows");
                modal.setAttribute("id", "modal_origen_" + a);

                switch (lote_carga) {
                    case "LTL":
                        texto = "** 3 días libres, Costo por Pallet por Mes";
                        notas = check_modal_gasto_origen +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_origen_'+a+'"'+
                        'name="notas_pdf_gasto_origen[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_origen_'+a).val(texto);
            
                        $('#boton_notas_origen_'+a).attr('hidden', false);
                        $('#boton_notas_origen_'+a).removeAttr('style');
                    break;

                    case "FTL":
                        texto = "** 3 días libres, Costo por Pallet por Mes";
                        notas = check_modal_gasto_origen +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_origen_'+a+'"'+
                        'name="notas_pdf_gasto_origen[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_origen_'+a).val(texto);
            
                        $('#boton_notas_origen_'+a).attr('hidden', false);
                        $('#boton_notas_origen_'+a).removeAttr('style');
                    break;
                
                    default:
                        texto = "";
                        notas = check_modal_gasto_origen +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_origen_'+a+'" '+
                        'name="notas_pdf_gasto_origen[]" type="text" '+
                        'value="">';
    
                        $('#boton_notas_origen_'+a).attr('hidden', true);
                        $('#notas_pdf_gasto_origen_'+a).val(texto);
                    break;
                }
            break;

            case "MAN-ALM-NAC-ING":
            case "MAN-ALM-EXT-ING":
                $('#modal_origen_'+a).remove();
                $('#modal_boton_notas_origen_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_origen_rows");
                modal.setAttribute("id", "modal_origen_" + a);

                switch (lote_carga) {
                    case "LTL":
                    case "FTL":
                        texto = "** Maniobra por Pallet";
                        notas = check_modal_gasto_origen +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_origen_'+a+'"'+
                        'name="notas_pdf_gasto_origen[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_origen_'+a).val(texto);
            
                        $('#boton_notas_origen_'+a).attr('hidden', false);
                        $('#boton_notas_origen_'+a).removeAttr('style');
                    break;
                
                    default:
                        texto = "";
                        notas = check_modal_gasto_origen +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_origen_'+a+'" '+
                        'name="notas_pdf_gasto_origen[]" type="text" '+
                        'value="">';
    
                        $('#boton_notas_origen_'+a).attr('hidden', true);
                        $('#notas_pdf_gasto_origen_'+a).val(texto);
                    break;
                }
            break;

            case "TER-FTI-EXT-ING":
            case "TER-FTN-NAC-ING":
                texto = "";
                $('#modal_origen_'+a).remove();
                $('#modal_boton_notas_origen_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_origen_rows");
                modal.setAttribute("id", "modal_origen_" + a);

                notas = check_modal_gasto_origen +
                '<select class="form-control form-control-sm" '+
                'id="select_gasto_origen_'+a+'" '+
                'name="notas_pdf_gasto_origen[]">'+
                    '<option value="" selected> Seleccionar </option>'+ 
                    '<option value="Sencillo"> Sencillo </option>'+ 
                    '<option value="Full"> Full </option>'+
                    '<option value="Liner Terms - All Truck"> Liner Terms - All Truck </option>'+
                    '<option value="Liner Terms - Rail+Truck"> Liner Terms - Rail+Truck </option>'+
                    '<option value="Paquetería"> Paquetería </option>'+
                    '<option value="Carga Consolidada"> Carga Consolidada </option>'+
                '</select>';
                
                $('#boton_notas_origen_'+a).attr('hidden', false);
                $('#boton_notas_origen_'+a).removeAttr('style');
            break;
        
            default:
                $('#modal_origen_'+a).remove();
                $('#modal_boton_notas_origen_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_origen_rows");
                modal.setAttribute("id", "modal_origen_" + a);

                texto = "";
                notas = check_modal_gasto_origen +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_gasto_origen_'+a+'" '+
                'name="notas_pdf_gasto_origen[]" type="text" '+
                'value="">';

                $('#boton_notas_origen_'+a).attr('hidden', false);
                $('#boton_notas_origen_'+a).removeAttr('style');
            break;
        }
    }
    
    // Modal Notas PDF
    modal.innerHTML = 
    '<div class="modal fade" id="modal_boton_notas_origen_'+a+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog modal-dialog-centered" role="document">'+
            '<div class="modal-content">'+
                '<div class="modal-header">'+
                    '<h5 class="modal-title" id="exampleModalLongTitle">Leyenda:</h5>'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                    '</button>'+
                '</div>'+
                '<div class="modal-body">'+
                    '<div class="form-group">'+
                        notas +
                    '</div>'+
                '</div>'+
                '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-sm btn-success" data-dismiss="modal">Guardar</button>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';

    if(accion == "nuevo"){
        document.getElementById('ventana_modal_gastos_origen').append(modal);
    }
    
    if(accion == "editar"){
        document.getElementById('editar_modal_origen_'+a).append(modal);
    }
}


function eliminar_gastos_origen() {
    $('.case_gasto_origen1:checkbox:checked').parents(".gasto_origen_rows").remove();
    $('.case_modal_gasto_origen1:checkbox:checked').parents(".modal_gasto_origen_rows").remove();

    return operaciones_gastos_origen();
}


function eliminar_gastos_origen_bd() {
    let idsArr = [];
    $(".checkbox_gasto_origen:checked").each(function () {
        idsArr.push($(this).attr('data-id'));
    });

    if (idsArr.length <= 0) {
        Swal.fire({
            type: 'info',
            text: 'Selecciona al menos un registro.',
          })
    } 
    else {
        Swal.fire({
            text: "¿Estás seguro(a), quieres borrar el registro(s) seleccionado(s)?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
            }).then((result) => {
            if (result.value) {

            let strIds = idsArr.join(",");

            $.ajax({
                url: "/delete-gastos",
                type: 'DELETE',
                data: 'ids=' + strIds,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    if (data['status'] == true) {
                        $(".checkbox_gasto_origen:checked").each(function () {
                            $(this).parents(".gasto_origen_rows").remove();
                            Swal.fire(
                                'Eliminado!',
                                'No olvide actualizar la cotización.',
                                'success'
                            )

                            return operaciones_gastos_origen();
                        });
                        
                    } 
                    else {
                        Swal.fire({
                            type: 'error',
                            text: 'Algo salio mal.',
                        })
                    }
                },

                error: function (data) {
                    alert(data.responseText);
                }
            });

            }
        });
    }
}


function operaciones_gastos_origen(a) {
    let cantidad_gasto_origen = $("#cantidad_gasto_origen_" + a).val();
    let costo_unitario_gasto_origen = $("#costo_unitario_gasto_origen_" + a).val();
    let precio_unitario_gasto_origen = $("#precio_unitario_gasto_origen_" + a).val();

    // Operaciones //
    let margen_contribucion_unitario_gasto_origen = precio_unitario_gasto_origen - costo_unitario_gasto_origen;

    let subtotal_costo_gasto_origen = costo_unitario_gasto_origen * cantidad_gasto_origen;
    let subtotal_ingreso_gasto_origen = precio_unitario_gasto_origen * cantidad_gasto_origen;
    let subtotal_margen_contribucion_gasto_origen = margen_contribucion_unitario_gasto_origen * cantidad_gasto_origen;

    let porc_margen_contribucion_gasto_origen = (subtotal_margen_contribucion_gasto_origen / subtotal_ingreso_gasto_origen) * 100 ;
    let porc_margen_venta_gasto_origen = (precio_unitario_gasto_origen / costo_unitario_gasto_origen - 1) * 100; 
    // Operaciones // 

    if(costo_unitario_gasto_origen == 0 && precio_unitario_gasto_origen == 0){
        margen_contribucion_unitario_gasto_origen = 0;
        subtotal_costo_gasto_origen = 0;
        subtotal_ingreso_gasto_origen = 0;
        subtotal_margen_contribucion_gasto_origen = 0;
        porc_margen_contribucion_gasto_origen = 0;
        porc_margen_venta_gasto_origen = 0;
    }

    if(costo_unitario_gasto_origen > 0 && precio_unitario_gasto_origen <= 0){
        porc_margen_contribucion_gasto_origen = -100;
    }

    if(costo_unitario_gasto_origen <= 0 && precio_unitario_gasto_origen > 0){
        porc_margen_venta_gasto_origen = 100;
    }

    $("#margen_contribucion_unitario_gasto_origen_" + a).val(parseFloat(margen_contribucion_unitario_gasto_origen ).toFixed(2));
    $("#subtotal_costo_gasto_origen_" + a).val(parseFloat(subtotal_costo_gasto_origen).toFixed(2));
    $("#subtotal_ingreso_gasto_origen_" + a).val(parseFloat(subtotal_ingreso_gasto_origen).toFixed(2));
    $("#porc_margen_contribucion_gasto_origen_" + a).val(parseFloat(porc_margen_contribucion_gasto_origen).toFixed(2));
    $("#subtotal_margen_contribucion_gasto_origen_" + a).val(parseFloat(subtotal_margen_contribucion_gasto_origen).toFixed(2));
    $("#porc_margen_venta_gasto_origen_" + a).val(parseFloat(porc_margen_venta_gasto_origen).toFixed(2));
    
    let total_costo_gasto_origen = 0;
    let total_ingreso_gasto_origen = 0;
    let total_subtotales_margen_contribucion_gasto_origen = 0;
    let total_porc_margen_contribucion_gasto_origen = 0;
    let total_porc_margen_venta_gasto_origen = 0;
    
    // Sumatoria Costos Gastos origen
    $("input[id^='subtotal_costo_gasto_origen_']").each(function () {
        total_costo_gasto_origen += Number($(this).val());
    });

    // Sumatoria Ingresos Gastos origen
    $("input[id^='subtotal_ingreso_gasto_origen_']").each(function () {
        total_ingreso_gasto_origen += Number($(this).val());
    });

    // Sumatoria Subtotal Margen Unitario 
    $("input[id^='subtotal_margen_contribucion_gasto_origen_']").each(function () {
        total_subtotales_margen_contribucion_gasto_origen += Number($(this).val());
    });


    // Operaciones //
    total_porc_margen_venta_gasto_origen = (total_ingreso_gasto_origen / total_costo_gasto_origen - 1) * 100;
    total_porc_margen_contribucion_gasto_origen = (total_subtotales_margen_contribucion_gasto_origen / total_ingreso_gasto_origen) * 100;
    
    if(total_costo_gasto_origen == 0 && total_ingreso_gasto_origen == 0){
        total_porc_margen_contribucion_gasto_origen = 0;
        total_porc_margen_venta_gasto_origen = 0;
    }

    if(total_costo_gasto_origen > 0 && total_ingreso_gasto_origen <= 0){
        total_porc_margen_contribucion_gasto_origen = -100;
        total_porc_margen_venta_gasto_origen = -100;
    }

    if(total_costo_gasto_origen <= 0 && total_ingreso_gasto_origen > 0){
        total_porc_margen_contribucion_gasto_origen = 100;
        total_porc_margen_venta_gasto_origen = 100;
    }
    // Operaciones //
    $("#total_costo_gastos_origen").val("$"+parseFloat(total_costo_gasto_origen).toFixed(2));
    $("#total_ingreso_gastos_origen").val("$"+parseFloat(total_ingreso_gasto_origen).toFixed(2));
    $("#total_subtotales_margen_contribucion_gastos_origen").val("$" + parseFloat(total_subtotales_margen_contribucion_gasto_origen).toFixed(2));

    $("#total_porc_margen_contribucion_gastos_origen").val("%" + parseFloat(total_porc_margen_contribucion_gasto_origen).toFixed(2));
    $("#total_porc_margen_venta_gastos_origen").val("%" + parseFloat(total_porc_margen_venta_gasto_origen).toFixed(2));

    total_cotizacion();
}


function seleccionarCheckboxOrigen(valor, a) {
    if (valor == "") {
        $("#eliminar_registro_gasto_origen").hide();
        $("#eliminar_renglon_gasto_origen").show();
        $('#eliminar_renglon_gasto_origen').attr('hidden', false);
        $('#eliminar_renglon_gasto_origen').removeAttr('style'); // se elimina para que no lo ponga debajo del boton de agregar
        $('.case_gasto_origen2').prop("checked", false);

        if($('#check_gasto_origen_' + a).is(':checked')) {
            $('#check_modal_gasto_origen_' + a).prop("checked", true);
        }
        else{
            $('#check_modal_gasto_origen_' + a).prop("checked", false);
        }

    } else {
        $("#eliminar_renglon_gasto_origen").hide();
        $("#eliminar_registro_gasto_origen").show();
        $('#eliminar_registro_gasto_origen').attr('hidden', false);
        $('#eliminar_registro_gasto_origen').removeAttr('style'); // se elimina para que no lo ponga debajo del boton de agregar
        $('.case_gasto_origen1').prop("checked", false);
    }
}


function reset_uom_origen(valor) {
    document.getElementById("unidad_gasto_origen_"+valor).value = "";
}


// ------------------------------------------------------- GASTOS DE DESTINO -------------------------------------------------------------//
function agregar_gasto_destino() {
    $.ajax({
        type: "GET",
        url: '/autocompletar', // de aqui traemos los conceptos
        success: function (data) {
            let a = Math.round(Math.random()*100000);

            let lote_carga = $("#lote_carga").val();
            let unidades = "";

            let conceptos = JSON.parse(data); // los convertimons a json
            let opciones = "";
            let operacion = document.getElementById('operacion').value;

            conceptos.forEach(function (element, index) { // recorremos los conceptos 
            let tipo_gasto = element.tipo_gasto;
            let operacion_contable = element.operacion_contable;
            let concepto = element.nombre;
            
            if(operacion == "Exportación"){
                if (tipo_gasto == "Extranjero" && operacion_contable == "Ingreso"){
                    eliminar_palabra_servicio_de = concepto.replace("Servicio de ", "");
                    eliminar_palabra_servicio = eliminar_palabra_servicio_de.replace("Servicio ", "");
                    eliminar_palabra_internacional = eliminar_palabra_servicio.replace("Internacional", "");
                    eliminar_palabra_extranjero = eliminar_palabra_internacional.replace("Extranjero", "");

                    concepto_a_mostrar = eliminar_palabra_extranjero;

                    opciones += '<option id="' + index + '" value="' + element.clave_magaya + '">' + concepto_a_mostrar + '</option>';
                }
            }
            
            if(operacion == "Importación" || operacion == "Comercialización"){
                if (tipo_gasto == "Nacional" && operacion_contable == "Ingreso"){
                    eliminar_palabra_servicio_de = concepto.replace("Servicio de ", "");
                    eliminar_palabra_servicio = eliminar_palabra_servicio_de.replace("Servicio ", "");
                    eliminar_palabra_internacional = eliminar_palabra_servicio.replace("Internacional", "");
                    eliminar_palabra_nacional = eliminar_palabra_internacional.replace("Nacional", "");

                    concepto_a_mostrar = eliminar_palabra_nacional;

                    opciones += '<option id="' + index + '" value="' + element.clave_magaya + '">' + concepto_a_mostrar + '</option>';
                }
            }
            });

            switch (lote_carga) {
                case "FTL":
                    unidades =  '<option id="'+ a +'" value="Remolque"> Remolque </option>' +
                                '<option id="'+ a +'" value="BOL"> BOL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>'+
                                '<option id="'+ a +'" value="Pallet"> Pallet </option>';
                    break;

                case "LTL":
                    unidades =  '<option id="'+ a +'" value="Peso-Facturable"> Peso-Facturable </option>' +
                                '<option id="'+ a +'" value="BOL"> BOL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>'+
                                '<option id="'+ a +'" value="Pallet"> Pallet </option>';
                    break;
                
                case "FCL":
                    unidades =  '<option id="'+ a +'" value="Cont"> Cont </option>' +
                                '<option id="'+ a +'" value="BL"> BL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>'+
                                '<option id="'+ a +'" value="Pallet"> Pallet </option>';
                    break;
                
                case "LCL":
                    unidades =  '<option id="'+ a +'" value="w/m"> w/m </option>' +
                                '<option id="'+ a +'" value="BL"> BL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>'+
                                '<option id="'+ a +'" value="Pallet"> Pallet </option>';
                    break;
                
                case "AER":
                    unidades =  '<option id="'+ a +'" value="Peso-Facturable"> Peso-Facturable </option>' +
                                '<option id="'+ a +'" value="AWB"> AWB </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>'+
                                '<option id="'+ a +'" value="Pallet"> Pallet </option>';
                    break;
            
                default:
                    Swal.fire({
                        type: 'warning',
                        text: 'Debe seleccionar un lote de carga.',
                      })
                      return;
                    break;
            }

            let div = document.createElement('div');
            div.setAttribute('class', 'gasto_destino_rows animated fadeInDown');

            div.innerHTML =
                '<div class="form-row"> '+
                '   <div class="form-group col-md-2 my-4"> '+
                '      <div class="btn-group" role="group" aria-label="Basic example"> '+
                            /* Checkbox */
                '           <div class="custom-control custom-checkbox mr-3"> '+
                '               <input type="checkbox" value="" '+
                '               class="custom-control-input case_gasto_destino1" '+
                '               name="id_gasto" id="check_gasto_destino_' + a + '" '+
                '               Onchange="seleccionarCheckboxDestino(this.value,'+ a +')"/>' +
                    
                '               <label class="custom-control-label" for="check_gasto_destino_' + a + '"></label> '+
                '           </div> '+

                            /* Boton Notas */
                '           <div class="mr-3"> '+
                '               <button type="button" class="btn btn-sm btn-info" data-toggle="collapse" data-target="#detalles_renglon_destino_'+a+'">Detalles</button> '+
                '           </div> '+

                            /* Detalles */
                '           <div class="mr-3"> '+
                '               <button type="button" class="btn btn-info btn-sm" '+
                '                   id="boton_notas_destino_'+a+'" hidden '+
                '                   data-toggle="modal" data-target="#modal_boton_notas_destino_'+a+'">'+
                '                   <i class="fa fa-file"></i>'+
                '               </button> '+
                '           </div> '+
                '       </div> '+
                '   </div> '+

                    /* Tipo de Gasto */
                '   <input class="form-control form-control-sm" hidden id="tipo_gasto_destino_' + a + '" name="tipo_gasto[]" type="text" value="Destino"/>' +

                    /* Concepto */
                '   <div class="form-group col-md-4"> '+
                '       <label>Concepto:</label> '+
                '       <div class="form-group">'+
                '           <select class="form-control form-control-sm" '+
                '           id="concepto_gasto_destino_' + a + '" '+
                '           name="concepto_gasto_destino[]" type="text" '+
                '           onChange="reset_uom_destino('+ a +'); agregar_modal_gastos_destino(this.value,'+ "'nuevo'" +','+ a +')" '+ 
                '           required/>' +
                            /* Opciones */
                '           <option disabled value="" selected> Seleccionar </option>' +
                                opciones +
                            /* Opciones */
                '           </select>' +
                '       </div>'+
                '   </div> '+

                    /* Unidad */
                '   <div class="form-group col-md-1"> '+
                '       <label>Unidad:</label> '+
                '       <select class="form-control form-control-sm" '+
                '       id="unidad_gasto_destino_' + a + '" '+
                '       name="unidad_gasto_destino[]" '+
                '       type="text" required/>' + 
                            /* Opciones */
                '           <option disabled value="" selected> Seleccionar </option>' +
                                unidades +
                            /* Opciones */
                '       </select>' +
                '   </div> '+

                    /* Cantidad */
                '   <div class="form-group col-md-1"> '+
                '       <label>Cantidad:</label> '+
                '       <input class="form-control form-control-sm text-right" '+
                '       id="cantidad_gasto_destino_' + a + '" '+
                '       name="cantidad_gasto_destino[]" type="text" '+
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_destino(' + a + ')" '+
                '       required/>' +
                '   </div> '+

                    /* Costo Unitario */
                '   <div class="form-group col-md-2"> '+
                '       <label>Costo Unitario:</label> '+
                '       <input class="form-control form-control-sm text-right" type="text" '+
                '       id="costo_unitario_gasto_destino_' + a + '" '+
                '       name="costo_unitario_gasto_destino[]" '+
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_destino(' + a + ')" '+ 
                '       step="0.1" placeholder="$0.00" required/>' +
                '   </div> '+

                    /* Precio Unitario */
                '   <div class="form-group col-md-2"> '+
                '       <label>Precio Unitario:</label> '+
                '       <input class="form-control form-control-sm text-right" type="text" '+
                '       id="precio_unitario_gasto_destino_' + a + '" '+
                '       name="precio_unitario_gasto_destino[]" ' +
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_destino(' + a + ')" '+
                '       step=".01" value="0.00" required/>' +
                '   </div>' +
                '</div>' +
                

                /* Detalles Operaciones */
                '<div id="detalles_renglon_destino_' + a + '" class="collapse"> '+
                '    <div class="form-row"> '+
                        /* Margen de Contribucion Unitario */
                '       <div class="form-group col-md-2"> '+
                '           <label>Margen Contribucion Unitario:</label> '+
                '           <input class="form-control form-control-sm text-right" type="text" '+
                '           id="margen_contribucion_unitario_gasto_destino_' + a + '" '+
                '           name="margen_contribucion_unitario_gasto_destino[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div> '+

                        /* Subtotal Costo */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Costo:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_costo_gasto_destino_' + a + '" '+
                '           name="subtotal_costo_gasto_destino[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Subtotal Ingreso */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Ingreso:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_ingreso_gasto_destino_' + a + '" '+
                '           name="subtotal_ingreso_gasto_destino[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Subtotal Margen Contribucion */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Margen de Contribucion:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_margen_contribucion_gasto_destino_' + a + '" '+
                '           name="subtotal_margen_contribucion_gasto_destino[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Porcentaje Margen de Contribucion */
                '       <div class="form-group col-md-2"> '+
                '           <label>% Margen de Contribucion:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="porc_margen_contribucion_gasto_destino_' + a + '" '+
                '           name="porc_margen_contribucion_gasto_destino[]" ' +
                '           step=".01" placeholder="%0.00" readonly/>' +
                '       </div>' +

                        /* Porcentaje Margen de Venta */
                '       <div class="form-group col-md-2"> '+
                '           <label>% Margen de Venta:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="porc_margen_venta_gasto_destino_' + a + '" '+
                '           name="porc_margen_venta_gasto_destino[]" ' +
                '           step=".01" placeholder="%0.00" readonly/>' +
                '       </div>' +
                '    </div> '+
                '</div> '+

                '<hr>';
            
            document.getElementById('gastos_destino').append(div);
        }
    });
}


function agregar_modal_gastos_destino(valor, accion, a){
    let operacion = $("#operacion").val();
    let lote_carga = $("#lote_carga").val();
    let texto = "";
    let notas = "";
    let modal = "";

    let check_modal_gasto_destino = '<div class="col-margen-checkbox" hidden>' +
        '<div class="custom-control custom-checkbox text-center">' +
            '<input class="custom-control-input case_modal_gasto_destino1" '+
            'name="id_gasto" '+
            'id="check_modal_gasto_destino_' + a + '" '+
            'type="checkbox" value="" '+
            'Onchange="seleccionarCheckboxDestino(this.value, '+ a +')"/>' +
            '<label class="custom-control-label" for="check_modal_gasto_destino_' + a + '"></label>' +
        '</div>' +
    '</div>';

    if(operacion == "Exportación"){
        switch (valor) {
            case "TER-FTI-EXT-ING":
            case "TER-FTN-NAC-ING":
                texto = "";
                $('#modal_destino_'+a).remove();
                $('#modal_boton_notas_destino_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_destino_rows");
                modal.setAttribute("id", "modal_destino_" + a);

                notas = check_modal_gasto_destino +
                '<select class="form-control form-control-sm" '+
                'id="select_gasto_destino_'+a+'" '+
                'name="notas_pdf_gasto_destino[]">'+
                    '<option value="" selected> Seleccionar </option>'+ 
                    '<option value="Sencillo"> Sencillo </option>'+ 
                    '<option value="Full"> Full </option>'+
                    '<option value="Liner Terms - All Truck"> Liner Terms - All Truck </option>'+
                    '<option value="Liner Terms - Rail+Truck"> Liner Terms - Rail+Truck </option>'+
                    '<option value="Paquetería"> Paquetería </option>'+
                    '<option value="Carga Consolidada"> Carga Consolidada </option>'+
                '</select>';
                
                $('#boton_notas_destino_'+a).attr('hidden', false);
                $('#boton_notas_destino_'+a).removeAttr('style');
            break;
        
            default:
                $('#modal_destino_'+a).remove();
                $('#modal_boton_notas_destino_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("id", "modal_destino_" + a);

                texto = "";
                notas = check_modal_gasto_destino +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_gasto_destino_'+a+'" '+
                'name="notas_pdf_gasto_destino[]" type="text" '+
                'value="">';

                $('#boton_notas_destino_'+a).attr('hidden', false);
                $('#boton_notas_destino_'+a).removeAttr('style');
            break;
        }
    }

    if(operacion == "Importación" || operacion == "Comercialización"){
        switch (valor) {
            case "SEG-MER-NAC-ING":
                $('#modal_destino_'+a).remove();
                $('#modal_boton_notas_destino_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("id", "modal_destino_" + a);

                //Aplica para cualquier lote de carga
                texto = "** 0.60 % del valor asegurado o USD 90 mínimo";
                notas = check_modal_gasto_destino +
                '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_destino_'+a+'" '+
                        'name="notas_pdf_gasto_destino[]" type="text" '+
                        'value="'+texto+'">';

                $('#notas_pdf_gasto_destino_'+a).val(texto);
                
                $('#boton_notas_destino_'+a).attr('hidden', false);
                $('#boton_notas_destino_'+a).removeAttr('style');
            break;

            case "COO-COM-NAC-ING":
                $('#modal_destino_'+a).remove();
                $('#modal_boton_notas_destino_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("id", "modal_destino_" + a);

                //Aplica para cualquier lote de carga
                texto = "** 5% del Valor Aduana + Impuestos o mínimo 250 USD";
                notas = check_modal_gasto_destino +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_gasto_destino_'+a+'" '+
                'name="notas_pdf_gasto_destino[]" type="text" '+
                'value="'+texto+'">';

                $('#notas_pdf_gasto_destino_'+a).val(texto);
                
                $('#boton_notas_destino_'+a).attr('hidden', false);
                $('#boton_notas_destino_'+a).removeAttr('style');
            break;

            case "MAN-PRV-NAC-ING":
                $('#modal_destino_'+a).remove();
                $('#modal_boton_notas_destino_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("id", "modal_destino_" + a);

                switch (lote_carga) {
                    case "LTL":
                        texto = "** Hasta 5 líneas en factura a partir de la sexta 7.5 USD por línea adicional";
                        notas = check_modal_gasto_destino + 
                        '<input class="form-control form-control-sm" '+
                                'id="notas_pdf_gasto_destino_'+a+'" '+
                                'name="notas_pdf_gasto_destino[]" type="text" '+
                                'value="'+texto+'">';
                        
                        $('#notas_pdf_gasto_destino_'+a).val(texto);
                        
                        $('#boton_notas_destino_'+a).attr('hidden', false);
                        $('#boton_notas_destino_'+a).removeAttr('style');
                    break;

                    case "FTL":
                        texto = "** Hasta 5 líneas en factura a partir de la sexta 7.5 USD por línea adicional";
                        notas = check_modal_gasto_destino + 
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_destino_'+a+'" '+
                        'name="notas_pdf_gasto_destino[]" type="text" '+
                        'value="'+texto+'">';
                        
                        $('#notas_pdf_gasto_destino_'+a).val(texto);
                        
                        $('#boton_notas_destino_'+a).attr('hidden', false);
                        $('#boton_notas_destino_'+a).removeAttr('style');
                    break;
                    
                    case "LCL":
                        texto = "**Estimado";
                        notas = check_modal_gasto_destino + 
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_destino_'+a+'" '+
                        'name="notas_pdf_gasto_destino[]" type="text" '+
                        'value="'+texto+'">';
                        
                        $('#notas_pdf_gasto_destino_'+a).val(texto);
                        
                        $('#boton_notas_destino_'+a).attr('hidden', false);
                        $('#boton_notas_destino_'+a).removeAttr('style');
                    break;

                    case "FCL":
                        texto = "**Estimado";
                        notas = check_modal_gasto_destino + 
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_destino_'+a+'" '+
                        'name="notas_pdf_gasto_destino[]" type="text" '+
                        'value="'+texto+'">';
                        
                        $('#notas_pdf_gasto_destino_'+a).val(texto);
                        
                        $('#boton_notas_destino_'+a).attr('hidden', false);
                        $('#boton_notas_destino_'+a).removeAttr('style');
                    break;
                
                    default:
                        texto = "";
                        notas = check_modal_gasto_destino + 
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_destino_'+a+'" '+
                        'name="notas_pdf_gasto_destino[]" type="text" '+
                        'value="">';
        
                        $('#boton_notas_destino_'+a).attr('hidden', true);
                        $('#notas_pdf_gasto_destino_'+a).val(texto);
                    break;
                }
            break;

            case "DES-DAD-NAC-ING":
            case "DES-DAD-EXT-ING":
                $('#modal_destino_'+a).remove();
                $('#modal_boton_notas_destino_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("id", "modal_destino_" + a);

                switch (lote_carga) {
                    case "AER":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 75 USD o 250 USD mínimo";
                        notas = check_modal_gasto_destino + 
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_gasto_destino_'+a+'"'+
                        'name="notas_pdf_gasto_destino[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_destino_'+a).val(texto);
                    
                        $('#boton_notas_destino_'+a).attr('hidden', false);
                        $('#boton_notas_destino_'+a).removeAttr('style');
                    break;
                    
                    case "LTL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 75 USD o 250 USD mínimo";
                        notas = check_modal_gasto_destino + 
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_gasto_destino_'+a+'"'+
                        'name="notas_pdf_gasto_destino[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_destino_'+a).val(texto);
                    
                        $('#boton_notas_destino_'+a).attr('hidden', false);
                        $('#boton_notas_destino_'+a).removeAttr('style');
                    break;

                    case "FTL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 75 USD o 250 USD mínimo";
                        notas = check_modal_gasto_destino + 
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_gasto_destino_'+a+'"'+
                        'name="notas_pdf_gasto_destino[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_destino_'+a).val(texto);
                    
                        $('#boton_notas_destino_'+a).attr('hidden', false);
                        $('#boton_notas_destino_'+a).removeAttr('style');
                    break;
                    
                    case "LCL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 170 USD o 290 USD mínimo";
                        notas = check_modal_gasto_destino + 
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_gasto_destino_'+a+'"'+
                        'name="notas_pdf_gasto_destino[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_destino_'+a).val(texto);
                    
                        $('#boton_notas_destino_'+a).attr('hidden', false);
                        $('#boton_notas_destino_'+a).removeAttr('style');
                    break;

                    case "FCL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 170 USD o 290 USD mínimo";
                        notas = check_modal_gasto_destino + 
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_gasto_destino_'+a+'"'+
                        'name="notas_pdf_gasto_destino[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_destino_'+a).val(texto);
                    
                        $('#boton_notas_destino_'+a).attr('hidden', false);
                        $('#boton_notas_destino_'+a).removeAttr('style');
                    break;
                
                    default:
                        texto = "";
                        notas = check_modal_gasto_destino + 
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_gasto_destino_'+a+'" '+
                        'name="notas_pdf_gasto_destino[]" type="text" '+
                        'value="">';
    
                        $('#boton_notas_destino_'+a).attr('hidden', true);
                        $('#notas_pdf_gasto_destino_'+a).val(texto);
                    break;
                }
            break;

            case "TER-FTI-EXT-ING":
            case "TER-FTN-NAC-ING":
                texto = "";
                $('#modal_destino_'+a).remove();
                $('#modal_boton_notas_destino_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_destino_rows");
                modal.setAttribute("id", "modal_destino_" + a);

                notas = check_modal_gasto_destino +
                '<select class="form-control form-control-sm" '+
                'id="select_gasto_destino_'+a+'" '+
                'name="notas_pdf_gasto_destino[]">'+
                    '<option value="" selected> Seleccionar </option>'+ 
                    '<option value="Sencillo"> Sencillo </option>'+ 
                    '<option value="Full"> Full </option>'+
                    '<option value="Liner Terms - All Truck"> Liner Terms - All Truck </option>'+
                    '<option value="Liner Terms - Rail+Truck"> Liner Terms - Rail+Truck </option>'+
                    '<option value="Paquetería"> Paquetería </option>'+
                    '<option value="Carga Consolidada"> Carga Consolidada </option>'+
                '</select>';
                
                $('#boton_notas_destino_'+a).attr('hidden', false);
                $('#boton_notas_destino_'+a).removeAttr('style');
            break;

            default:
                $('#modal_destino_'+a).remove();
                $('#modal_boton_notas_destino_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("id", "modal_destino_" + a);

                texto = "";
                notas = check_modal_gasto_destino +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_gasto_destino_'+a+'" '+
                'name="notas_pdf_gasto_destino[]" type="text" '+
                'value="">';

                $('#boton_notas_destino_'+a).attr('hidden', false);
                $('#boton_notas_destino_'+a).removeAttr('style');
            break;
        }
    }
    
    // Modal Notas PDF
    modal.innerHTML = 
    '<div class="modal fade" id="modal_boton_notas_destino_'+a+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog modal-dialog-centered" role="document">'+
            '<div class="modal-content">'+
                '<div class="modal-header">'+
                    '<h5 class="modal-title" id="exampleModalLongTitle">Leyenda:</h5>'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                    '</button>'+
                '</div>'+
                '<div class="modal-body">'+
                    '<div class="form-group">'+
                        notas +
                    '</div>'+
                '</div>'+
                '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-sm btn-success" data-dismiss="modal">Guardar</button>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';

    if(accion == "nuevo"){
        document.getElementById('ventana_modal_gastos_destino').append(modal);
    }
    
    if(accion == "editar"){
        document.getElementById('editar_modal_destino_'+a).append(modal);
    }
}


function eliminar_gastos_destino() {
    $('.case_gasto_destino1:checkbox:checked').parents(".gasto_destino_rows").remove();
    $('.case_modal_gasto_destino1:checkbox:checked').parents(".modal_gasto_destino_rows").remove();

    return operaciones_gastos_destino();
}


function eliminar_gastos_destino_bd() {
    let idsArr = [];
    $(".checkbox_gasto_destino:checked").each(function () {
        idsArr.push($(this).attr('data-id'));
    });

    if (idsArr.length <= 0) {
        Swal.fire({
            type: 'info',
            text: 'Selecciona al menos un registro.',
          })
    } 
    else {
        Swal.fire({
            text: "¿Estás seguro(a), quieres borrar el registro(s) seleccionado(s)?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
            }).then((result) => {
            if (result.value) {
            let strIds = idsArr.join(",");

            $.ajax({
                url: "/delete-gastos",
                type: 'DELETE',
                data: 'ids=' + strIds,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    if (data['status'] == true) {
                        $(".checkbox_gasto_destino:checked").each(function () {
                            $(this).parents(".gasto_destino_rows").remove();
                            Swal.fire(
                                'Eliminado!',
                                'No olvide actualizar la cotización.',
                                'success'
                            )

                            return operaciones_gastos_destino();
                        });

                    } 
                    else {
                        Swal.fire({
                            type: 'error',
                            text: 'Algo salio mal.',
                        })
                    }
                },

                error: function (data) {
                    alert(data.responseText);
                }
            });

            }
        });
    }
}


function operaciones_gastos_destino(a) {
    let cantidad_gasto_destino = $("#cantidad_gasto_destino_" + a).val();
    let costo_unitario_gasto_destino = $("#costo_unitario_gasto_destino_" + a).val();
    let precio_unitario_gasto_destino = $("#precio_unitario_gasto_destino_" + a).val();

    // Operaciones //
    let margen_contribucion_unitario_gasto_destino = precio_unitario_gasto_destino - costo_unitario_gasto_destino;

    let subtotal_costo_gasto_destino = costo_unitario_gasto_destino * cantidad_gasto_destino;
    let subtotal_ingreso_gasto_destino = precio_unitario_gasto_destino * cantidad_gasto_destino;
    let subtotal_margen_contribucion_gasto_destino = margen_contribucion_unitario_gasto_destino * cantidad_gasto_destino;

    let porc_margen_contribucion_gasto_destino = (subtotal_margen_contribucion_gasto_destino / subtotal_ingreso_gasto_destino) * 100 ;
    let porc_margen_venta_gasto_destino = (precio_unitario_gasto_destino / costo_unitario_gasto_destino - 1) * 100; 
    // Operaciones // 

    if(costo_unitario_gasto_destino == 0 && precio_unitario_gasto_destino == 0){
        margen_contribucion_unitario_gasto_destino = 0;
        subtotal_costo_gasto_destino = 0;
        subtotal_ingreso_gasto_destino = 0;
        subtotal_margen_contribucion_gasto_destino = 0;
        porc_margen_contribucion_gasto_destino = 0;
        porc_margen_venta_gasto_destino = 0;
    }

    if(costo_unitario_gasto_destino > 0 && precio_unitario_gasto_destino <= 0){
        porc_margen_contribucion_gasto_destino = -100;
    }

    if(costo_unitario_gasto_destino <= 0 && precio_unitario_gasto_destino > 0){
        porc_margen_venta_gasto_destino = 100;
    }

    $("#margen_contribucion_unitario_gasto_destino_" + a).val(parseFloat(margen_contribucion_unitario_gasto_destino ).toFixed(2));
    $("#subtotal_costo_gasto_destino_" + a).val(parseFloat(subtotal_costo_gasto_destino).toFixed(2));
    $("#subtotal_ingreso_gasto_destino_" + a).val(parseFloat(subtotal_ingreso_gasto_destino).toFixed(2));
    $("#porc_margen_contribucion_gasto_destino_" + a).val(parseFloat(porc_margen_contribucion_gasto_destino).toFixed(2));
    $("#subtotal_margen_contribucion_gasto_destino_" + a).val(parseFloat(subtotal_margen_contribucion_gasto_destino).toFixed(2));
    $("#porc_margen_venta_gasto_destino_" + a).val(parseFloat(porc_margen_venta_gasto_destino).toFixed(2));
    
    let total_costo_gasto_destino = 0;
    let total_ingreso_gasto_destino = 0;
    let total_subtotales_margen_contribucion_gasto_destino = 0;
    let total_porc_margen_contribucion_gasto_destino = 0;
    let total_porc_margen_venta_gasto_destino = 0;
    
    // Sumatoria Costos Gastos destino
    $("input[id^='subtotal_costo_gasto_destino_']").each(function () {
        total_costo_gasto_destino += Number($(this).val());
    });

    // Sumatoria Ingresos Gastos destino
    $("input[id^='subtotal_ingreso_gasto_destino_']").each(function () {
        total_ingreso_gasto_destino += Number($(this).val());
    });

    // Sumatoria Subtotal Margen Unitario 
    $("input[id^='subtotal_margen_contribucion_gasto_destino_']").each(function () {
        total_subtotales_margen_contribucion_gasto_destino += Number($(this).val());
    });


    // Operaciones //
    total_porc_margen_venta_gasto_destino = (total_ingreso_gasto_destino / total_costo_gasto_destino - 1) * 100;
    total_porc_margen_contribucion_gasto_destino = (total_subtotales_margen_contribucion_gasto_destino / total_ingreso_gasto_destino) * 100;
    
    if(total_costo_gasto_destino == 0 && total_ingreso_gasto_destino == 0){
        total_porc_margen_contribucion_gasto_destino = 0;
        total_porc_margen_venta_gasto_destino = 0;
    }

    if(total_costo_gasto_destino > 0 && total_ingreso_gasto_destino <= 0){
        total_porc_margen_contribucion_gasto_destino = -100;
        total_porc_margen_venta_gasto_destino = -100;
    }

    if(total_costo_gasto_destino <= 0 && total_ingreso_gasto_destino > 0){
        total_porc_margen_contribucion_gasto_destino = 100;
        total_porc_margen_venta_gasto_destino = 100;
    }
    // Operaciones //
    $("#total_costo_gastos_destino").val("$"+parseFloat(total_costo_gasto_destino).toFixed(2));
    $("#total_ingreso_gastos_destino").val("$"+parseFloat(total_ingreso_gasto_destino).toFixed(2));
    $("#total_subtotales_margen_contribucion_gastos_destino").val("$" + parseFloat(total_subtotales_margen_contribucion_gasto_destino).toFixed(2));

    $("#total_porc_margen_contribucion_gastos_destino").val("%" + parseFloat(total_porc_margen_contribucion_gasto_destino).toFixed(2));
    $("#total_porc_margen_venta_gastos_destino").val("%" + parseFloat(total_porc_margen_venta_gasto_destino).toFixed(2));

    total_cotizacion();
}


function seleccionarCheckboxDestino(valor, a) {
    if (valor == "") {
        $("#eliminar_registro_gasto_destino").hide();
        $("#eliminar_renglon_gasto_destino").show();
        $('#eliminar_renglon_gasto_destino').attr('hidden', false);
        $('#eliminar_renglon_gasto_destino').removeAttr('style'); // se elimina para que no lo ponga debajo del boton de agregar
        $('.case_gasto_destino2').prop("checked", false);

        if($('#check_gasto_destino_' + a).is(':checked')) {
            $('#check_modal_gasto_destino_' + a).prop("checked", true);
        }
        else{
            $('#check_modal_gasto_destino_' + a).prop("checked", false);
        }
    } 
    else {
        $("#eliminar_renglon_gasto_destino").hide();
        $("#eliminar_registro_gasto_destino").show();
        $('#eliminar_registro_gasto_destino').attr('hidden', false);
        $('#eliminar_registro_gasto_destino').removeAttr('style'); // se elimina para que no lo ponga debajo del boton de agregar
        $('.case_gasto_destino1').prop("checked", false);
    }
}


function reset_uom_destino(valor) {
    document.getElementById("unidad_gasto_destino_"+valor).value = "";
}


// ------------------------------------------------------- GASTOS PAGADOS A NOMBRE DEL CLIENTE -------------------------------------------//
function agregar_gastos_pagados_cliente() {
    $.ajax({
        type: "GET",
        url: '/autocompletar', // de aqui traemos los conceptos
        success: function (data) {
            let a = Math.round(Math.random()*100000);

            let lote_carga = $("#lote_carga").val();
            let unidades = "";

            let conceptos = JSON.parse(data); // los convertimons a json
            let opciones = "";
            let operacion = document.getElementById('operacion').value;

            conceptos.forEach(function (element, index) { // recorremos los conceptos 
            let tipo_gasto = element.tipo_gasto;
            let operacion_contable = element.operacion_contable;
            let concepto = element.nombre;
            
            if(operacion == "Importación" || operacion == "Exportación" || operacion == "Comercialización"){
                if (tipo_gasto == "Nacional" && operacion_contable == "Ingreso"){
                    eliminar_palabra_servicio_de = concepto.replace("Servicio de ", "");
                    eliminar_palabra_servicio = eliminar_palabra_servicio_de.replace("Servicio ", "");
                    eliminar_palabra_internacional = eliminar_palabra_servicio.replace("Internacional", "");
                    eliminar_palabra_nacional = eliminar_palabra_internacional.replace("Nacional", "");

                    concepto_a_mostrar = eliminar_palabra_nacional;

                    opciones += '<option id="' + index + '" value="' + element.clave_magaya + '">' + concepto_a_mostrar + '</option>';
                }
            }
            });

            switch (lote_carga) {
                case "FTL":
                    unidades =  '<option id="'+ a +'" value="Remolque"> Remolque </option>' +
                                '<option id="'+ a +'" value="BOL"> BOL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;

                case "LTL":
                    unidades =  '<option id="'+ a +'" value="Peso-Facturable"> Peso-Facturable </option>' +
                                '<option id="'+ a +'" value="BOL"> BOL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
                
                case "FCL":
                    unidades =  '<option id="'+ a +'" value="Cont"> Cont </option>' +
                                '<option id="'+ a +'" value="BL"> BL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
                
                case "LCL":
                    unidades =  '<option id="'+ a +'" value="w/m"> w/m </option>' +
                                '<option id="'+ a +'" value="BL"> BL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
                
                case "AER":
                    unidades =  '<option id="'+ a +'" value="Peso-Facturable"> Peso-Facturable </option>' +
                                '<option id="'+ a +'" value="AWB"> AWB </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
            
                default:
                    Swal.fire({
                        type: 'warning',
                        text: 'Debe seleccionar un lote de carga.',
                      })
                      return;
                    break;
            }

            let div = document.createElement('div');
            div.setAttribute('class', 'gasto_pagado_cliente_rows animated fadeInDown');

            div.innerHTML =
                '<div class="form-row"> '+
                '   <div class="form-group col-md-2 my-4"> '+
                '      <div class="btn-group" role="group" aria-label="Basic example"> '+
                            /* Checkbox */
                '           <div class="custom-control custom-checkbox mr-3"> '+
                '               <input type="checkbox" value="" '+
                '               class="custom-control-input case_gasto_pagado_cliente1" '+
                '               name="id_gasto" id="check_gasto_pagado_cliente_' + a + '" '+
                '               Onchange="seleccionarCheckboxPagadoCliente(this.value,'+ a +')"/>' +
                    
                '               <label class="custom-control-label" for="check_gasto_pagado_cliente_' + a + '"></label> '+
                '           </div> '+

                            /* Detalles */
                '           <div class="mr-3"> '+
                '               <button type="button" class="btn btn-sm btn-info" data-toggle="collapse" data-target="#detalles_renglon_cliente_'+a+'">Detalles</button> '+
                '           </div> '+

                            /* Boton Notas */
                '           <div class="mr-3"> '+
                '               <button type="button" class="btn btn-info btn-sm" '+
                '                   id="boton_notas_pagados_cliente_'+a+'" hidden '+
                '                   data-toggle="modal" data-target="#modal_boton_notas_pagados_cliente_'+a+'">'+
                '                   <i class="fa fa-file"></i>'+
                '               </button> '+
                '           </div> '+
                '       </div> '+
                '   </div> '+

                    /* Tipo de Gasto */
                '   <input class="form-control form-control-sm" hidden id="tipo_gasto_pagado_cliente_' + a + '" name="tipo_gasto[]" type="text" value="Pagado Cliente"/>' +

                    /* Concepto */
                '   <div class="form-group col-md-4"> '+
                '       <label>Concepto:</label> '+
                '       <div class="form-group">'+
                '           <select class="form-control form-control-sm" '+
                '           id="concepto_gasto_pagado_cliente_' + a + '" '+
                '           name="concepto_gasto_pagado_cliente[]" type="text" '+
                '           onChange="reset_uom_pagado_cliente('+ a +'); agregar_modal_gastos_pagados_cliente(this.value,'+ "'nuevo'" +','+ a +')" '+ 
                '           required/>' +
                            /* Opciones */
                '           <option disabled value="" selected> Seleccionar </option>' +
                                opciones +
                            /* Opciones */
                '           </select>' +
                '       </div>'+
                '   </div> '+

                    /* Unidad */
                '   <div class="form-group col-md-1"> '+
                '       <label>Unidad:</label> '+
                '       <select class="form-control form-control-sm" '+
                '       id="unidad_gasto_pagado_cliente_' + a + '" '+
                '       name="unidad_gasto_pagado_cliente[]" '+
                '       type="text" required/>' + 
                            /* Opciones */
                '           <option disabled value="" selected> Seleccionar </option>' +
                                unidades +
                            /* Opciones */
                '       </select>' +
                '   </div> '+

                    /* Cantidad */
                '   <div class="form-group col-md-1"> '+
                '       <label>Cantidad:</label> '+
                '       <input class="form-control form-control-sm text-right" '+
                '       id="cantidad_gasto_pagado_cliente_' + a + '" '+
                '       name="cantidad_gasto_pagado_cliente[]" type="text" '+
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_pagados_cliente(' + a + ')" '+
                '       required/>' +
                '   </div> '+

                    /* Costo Unitario */
                '   <div class="form-group col-md-2"> '+
                '       <label>Costo Unitario:</label> '+
                '       <input class="form-control form-control-sm text-right" type="text" '+
                '       id="costo_unitario_gasto_pagado_cliente_' + a + '" '+
                '       name="costo_unitario_gasto_pagado_cliente[]" '+
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_pagados_cliente(' + a + ')" '+ 
                '       step="0.1" placeholder="$0.00" required/>' +
                '   </div> '+

                    /* Precio Unitario */
                '   <div class="form-group col-md-2"> '+
                '       <label>Precio Unitario:</label> '+
                '       <input class="form-control form-control-sm text-right" type="text" '+
                '       id="precio_unitario_gasto_pagado_cliente_' + a + '" '+
                '       name="precio_unitario_gasto_pagado_cliente[]" '+
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_gastos_pagados_cliente(' + a + ')" '+
                '       step=".01" value="0.00" required/>' +
                '   </div>' +
                '</div>' +
                
                /* Detalles Operaciones */
                '<div id="detalles_renglon_cliente_' + a + '" class="collapse"> '+
                '    <div class="form-row"> '+
                        /* Margen de Contribucion Unitario */
                '       <div class="form-group col-md-2"> '+
                '           <label>Margen Contribucion Unitario:</label> '+
                '           <input class="form-control form-control-sm text-right" type="text" '+
                '           id="margen_contribucion_unitario_gasto_pagado_cliente_' + a + '" '+
                '           name="margen_contribucion_unitario_gasto_pagado_cliente[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div> '+

                        /* Subtotal Costo */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Costo:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_costo_gasto_pagado_cliente_' + a + '" '+
                '           name="subtotal_costo_gasto_pagado_cliente[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Subtotal Ingreso */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Ingreso:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_ingreso_gasto_pagado_cliente_' + a + '" '+
                '           name="subtotal_ingreso_gasto_pagado_cliente[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Subtotal Margen Contribucion */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Margen de Contribucion:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_margen_contribucion_gasto_pagado_cliente_' + a + '" '+
                '           name="subtotal_margen_contribucion_gasto_pagado_cliente[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Porcentaje Margen de Contribucion */
                '       <div class="form-group col-md-2"> '+
                '           <label>% Margen de Contribucion:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="porc_margen_contribucion_gasto_pagado_cliente_' + a + '" '+
                '           name="porc_margen_contribucion_gasto_pagado_cliente[]" ' +
                '           step=".01" placeholder="%0.00" readonly/>' +
                '       </div>' +

                        /* Porcentaje Margen de Venta */
                '       <div class="form-group col-md-2"> '+
                '           <label>% Margen de Venta:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="porc_margen_venta_gasto_pagado_cliente_' + a + '" '+
                '           name="porc_margen_venta_gasto_pagado_cliente[]" ' +
                '           step=".01" placeholder="%0.00" readonly/>' +
                '       </div>' +
                '    </div> '+
                '</div> '+

                '<hr>';
                
            document.getElementById('gastos_pagados_cliente').append(div);
        }
    });
}


function agregar_modal_gastos_pagados_cliente(valor, accion, a){
    let operacion = $("#operacion").val();
    let lote_carga = $("#lote_carga").val();
    let texto = "";
    let notas = "";
    let modal = "";
    let check_modal_gasto_pagado_cliente = '<div class="col-margen-checkbox" hidden>' +
        '<div class="custom-control custom-checkbox text-center">' +
            '<input class="custom-control-input case_modal_gasto_pagado_cliente1" '+
            'name="id_gasto" '+
            'id="check_modal_gasto_pagado_cliente_' + a + '" '+
            'type="checkbox" value="" '+
            'Onchange="seleccionarCheckboxPagadoCliente(this.value, '+ a +')"/>' +
            '<label class="custom-control-label" for="check_modal_gasto_pagado_cliente_' + a + '"></label>' +
        '</div>' +
    '</div>';

    if(operacion == "Exportación"){
        switch (valor) {
            case "TER-FTN-NAC-ING":
                texto = "";
                $('#modal_pagado_cliente_'+a).remove();
                $('#modal_boton_notas_pagados_cliente_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_pagado_cliente_rows");
                modal.setAttribute("id", "modal_pagado_cliente_" + a);

                notas = check_modal_gasto_pagado_cliente +
                '<select class="form-control form-control-sm" '+
                'id="select_pagados_cliente_'+a+'" '+
                'name="notas_pdf_gasto_pagado_cliente[]">'+
                    '<option value="" selected> Seleccionar </option>'+ 
                    '<option value="Sencillo"> Sencillo </option>'+ 
                    '<option value="Full"> Full </option>'+
                    '<option value="Liner Terms - All Truck"> Liner Terms - All Truck </option>'+
                    '<option value="Liner Terms - Rail+Truck"> Liner Terms - Rail+Truck </option>'+
                    '<option value="Carga Consolidada"> Carga Consolidada </option>'+
                '</select>';

                $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                $('#boton_notas_pagados_cliente_'+a).removeAttr('style');

            break;
        
            default:
                $('#modal_pagado_cliente_'+a).remove();
                $('#modal_boton_notas_pagados_cliente_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_pagado_cliente_rows");
                modal.setAttribute("id", "modal_pagado_cliente_" + a);

                texto = "";
                notas = check_modal_gasto_pagado_cliente +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_gasto_pagado_cliente_'+ a +'" '+
                'name="notas_pdf_gasto_pagado_cliente[]" type="text" '+
                'value="">';

                $('#boton_notas_pagados_cliente_'+ a).attr('hidden', false);
                $('#boton_notas_pagados_cliente_'+ a).removeAttr('style');
            break;
        }
    }

    if(operacion == "Importación" || operacion == "Comercialización"){
        switch (valor) {
            case "SEG-MER-NAC-ING":
                $('#modal_pagado_cliente_'+a).remove();
                $('#modal_boton_notas_pagados_cliente_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_pagado_cliente_rows");
                modal.setAttribute("id", "modal_pagado_cliente_" + a);

                //Aplica para cualquier lote de carga
                texto = "** 0.60 % del valor asegurado o USD 90 mínimo";
                notas = check_modal_gasto_pagado_cliente +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_gasto_pagado_cliente_'+a+'" '+
                'name="notas_pdf_gasto_pagado_cliente[]" type="text" '+
                'value="'+texto+'">';

                $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                
                $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
            break;

            case "COO-COM-NAC-ING":
                $('#modal_pagado_cliente_'+a).remove();
                $('#modal_boton_notas_pagados_cliente_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_pagado_cliente_rows");
                modal.setAttribute("id", "modal_pagado_cliente_" + a);

                //Aplica para cualquier lote de carga
                texto = "** 5% del Valor Aduana + Impuestos o mínimo 250 USD";
                notas = check_modal_gasto_pagado_cliente +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_gasto_pagado_cliente_'+a+'" '+
                'name="notas_pdf_gasto_pagado_cliente[]" type="text" '+
                'value="'+texto+'">';

                $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                
                $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
            break;

            case "MAN-PRV-NAC-ING":
                $('#modal_pagado_cliente_'+a).remove();
                $('#modal_boton_notas_pagados_cliente_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_pagado_cliente_rows");
                modal.setAttribute("id", "modal_pagado_cliente_" + a);

                switch (lote_carga) {
                    case "LTL":
                        texto = "** Hasta 5 líneas en factura a partir de la sexta 7.5 USD por línea adicional";
                        notas = check_modal_gasto_pagado_cliente +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_pagado_cliente_'+a+'" '+
                        'name="notas_pdf_gasto_pagado_cliente[]" type="text" '+
                        'value="'+texto+'">';
                        
                        $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                        
                        $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                        $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
                    break;

                    case "FTL":
                        texto = "** Hasta 5 líneas en factura a partir de la sexta 7.5 USD por línea adicional";
                        notas = check_modal_gasto_pagado_cliente +
                        '<input class="form-control form-control-sm" '+
                                'id="notas_pdf_gasto_pagado_cliente_'+a+'" '+
                                'name="notas_pdf_gasto_pagado_cliente[]" type="text" '+
                                'value="'+texto+'">';
                        
                        $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                        
                        $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                        $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
                    break;
                    
                    case "LCL":
                        texto = "**Estimado";
                        notas = check_modal_gasto_pagado_cliente +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_pagado_cliente_'+a+'" '+
                        'name="notas_pdf_gasto_pagado_cliente[]" type="text" '+
                        'value="'+texto+'">';
                        
                        $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                        
                        $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                        $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
                    break;

                    case "FCL":
                        texto = "**Estimado";
                        notas = check_modal_gasto_pagado_cliente +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_pagado_cliente_'+a+'" '+
                        'name="notas_pdf_gasto_pagado_cliente[]" type="text" '+
                        'value="'+texto+'">';
                        
                        $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                        
                        $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                        $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
                    break;
                
                    default:
                        texto = "";
                        notas = check_modal_gasto_pagado_cliente +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_pagado_cliente_'+a+'" '+
                        'name="notas_pdf_gasto_pagado_cliente[]" type="text" '+
                        'value="">';
        
                        $('#boton_notas_pagados_cliente_'+a).attr('hidden', true);
                        $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                    break;
                }
            break;

            case "DES-DAD-NAC-ING":
                $('#modal_pagado_cliente_'+a).remove();
                $('#modal_boton_notas_pagados_cliente_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_pagado_cliente_rows");
                modal.setAttribute("id", "modal_pagado_cliente_" + a);

                switch (lote_carga) {
                    case "AER":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 75 USD o 250 USD mínimo";
                        notas = check_modal_gasto_pagado_cliente +
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_gasto_pagado_cliente_'+a+'"'+
                        'name="notas_pdf_gasto_pagado_cliente[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                    
                        $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                        $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
                    break;
                    
                    case "LTL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 75 USD o 250 USD mínimo";
                        notas = check_modal_gasto_pagado_cliente +
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_gasto_pagado_cliente_'+a+'"'+
                        'name="notas_pdf_gasto_pagado_cliente[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                    
                        $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                        $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
                    break;

                    case "FTL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 75 USD o 250 USD mínimo";
                        notas = check_modal_gasto_pagado_cliente +
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_gasto_pagado_cliente_'+a+'"'+
                        'name="notas_pdf_gasto_pagado_cliente[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                    
                        $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                        $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
                    break;
                    
                    case "LCL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 170 USD o 290 USD mínimo";
                        notas = check_modal_gasto_pagado_cliente +
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_gasto_pagado_cliente_'+a+'"'+
                        'name="notas_pdf_gasto_pagado_cliente[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                    
                        $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                        $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
                    break;

                    case "FCL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 170 USD o 290 USD mínimo";
                        notas = check_modal_gasto_pagado_cliente +
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_gasto_pagado_cliente_'+a+'"'+
                        'name="notas_pdf_gasto_pagado_cliente[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                    
                        $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                        $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
                    break;
                
                    default:
                        texto = "";
                        notas = check_modal_gasto_pagado_cliente +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_gasto_pagado_cliente_'+a+'" '+
                        'name="notas_pdf_gasto_pagado_cliente[]" type="text" '+
                        'value="">';
    
                        $('#boton_notas_pagados_cliente_'+a).attr('hidden', true);
                        $('#notas_pdf_gasto_pagado_cliente_'+a).val(texto);
                    break;
                }
            break;

            case "TER-FTN-NAC-ING":
                texto = "";
                $('#modal_pagado_cliente_'+a).remove();
                $('#modal_boton_notas_pagados_cliente_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_pagado_cliente_rows");
                modal.setAttribute("id", "modal_pagado_cliente_" + a);

                notas = check_modal_gasto_pagado_cliente +
                '<select class="form-control form-control-sm" '+
                'id="select_pagados_cliente_'+a+'" '+
                'name="notas_pdf_gasto_pagado_cliente[]">'+
                    '<option value="" selected> Seleccionar </option>'+ 
                    '<option value="Sencillo"> Sencillo </option>'+ 
                    '<option value="Full"> Full </option>'+
                    '<option value="Liner Terms - All Truck"> Liner Terms - All Truck </option>'+
                    '<option value="Liner Terms - Rail+Truck"> Liner Terms - Rail+Truck </option>'+
                    '<option value="Carga Consolidada"> Carga Consolidada </option>'+
                '</select>';
                
                $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
            break;

            default:
                $('#modal_pagado_cliente_'+a).remove();
                $('#modal_boton_notas_pagados_cliente_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_gasto_pagado_cliente_rows");
                modal.setAttribute("id", "modal_pagado_cliente_" + a);

                texto = "";
                notas = check_modal_gasto_pagado_cliente +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_gasto_pagado_cliente_'+a+'" '+
                'name="notas_pdf_gasto_pagado_cliente[]" type="text" '+
                'value="">';

                $('#boton_notas_pagados_cliente_'+a).attr('hidden', false);
                $('#boton_notas_pagados_cliente_'+a).removeAttr('style');
            break;
        }
    }

    // Modal Notas PDF
    modal.innerHTML = 
    '<div class="modal fade" id="modal_boton_notas_pagados_cliente_'+ a +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog modal-dialog-centered" role="document">'+
            '<div class="modal-content">'+
                '<div class="modal-header">'+
                    '<h5 class="modal-title" id="exampleModalLongTitle">Leyenda:</h5>'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                    '</button>'+
                '</div>'+
                '<div class="modal-body">'+
                    '<div class="form-group">'+
                        notas +
                    '</div>'+
                '</div>'+
                '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-sm btn-success" data-dismiss="modal">Guardar</button>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';

    if(accion == "nuevo"){
        document.getElementById('ventana_modal_gastos_pagados_cliente').append(modal);
    }
    
    if(accion == "editar"){
        document.getElementById('editar_modal_gastos_pagados_cliente_'+a).append(modal);
    }
}


function eliminar_gastos_pagados_cliente() {
    $('.case_gasto_pagado_cliente1:checkbox:checked').parents(".gasto_pagado_cliente_rows").remove();
    $('.case_modal_gasto_pagado_cliente1:checkbox:checked').parents(".modal_gasto_pagado_cliente_rows").remove();

    return operaciones_gastos_pagados_cliente();
}


function eliminar_gastos_pagados_cliente_bd() {
    let idsArr = [];
    $(".checkbox_gasto_pagado_cliente:checked").each(function () {
        idsArr.push($(this).attr('data-id'));
    });

    if (idsArr.length <= 0) {
        Swal.fire({
            type: 'info',
            text: 'Selecciona al menos un registro.',
          })
    } 
    else {
        Swal.fire({
            text: "¿Estás seguro(a), quieres borrar el registro(s) seleccionado(s)?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
            }).then((result) => {
            if (result.value) {
            let strIds = idsArr.join(",");

            $.ajax({
                url: "/delete-gastos",
                type: 'DELETE',
                data: 'ids=' + strIds,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    if (data['status'] == true) {
                        $(".checkbox_gasto_pagado_cliente:checked").each(function () {
                            $(this).parents(".gasto_pagado_cliente_rows").remove();
                            Swal.fire(
                                'Eliminado!',
                                'No olvide actualizar la cotización.',
                                'success'
                            )

                            return operaciones_gastos_pagados_cliente();
                        });

                    } 
                    else {
                        Swal.fire({
                            type: 'error',
                            text: 'Algo salio mal.',
                        })
                    }
                },

                error: function (data) {
                    alert(data.responseText);
                }
            });

            }
        });
    }
}


function operaciones_gastos_pagados_cliente(a) {
    let cantidad_gasto_pagado_cliente = $("#cantidad_gasto_pagado_cliente_" + a).val();
    let costo_unitario_gasto_pagado_cliente = $("#costo_unitario_gasto_pagado_cliente_" + a).val();
    let precio_unitario_gasto_pagado_cliente = $("#precio_unitario_gasto_pagado_cliente_" + a).val();

    // Operaciones //
    let margen_contribucion_unitario_gasto_pagado_cliente = precio_unitario_gasto_pagado_cliente - costo_unitario_gasto_pagado_cliente;

    let subtotal_costo_gasto_pagado_cliente = costo_unitario_gasto_pagado_cliente * cantidad_gasto_pagado_cliente;
    let subtotal_ingreso_gasto_pagado_cliente = precio_unitario_gasto_pagado_cliente * cantidad_gasto_pagado_cliente;
    let subtotal_margen_contribucion_gasto_pagado_cliente = margen_contribucion_unitario_gasto_pagado_cliente * cantidad_gasto_pagado_cliente;

    let porc_margen_contribucion_gasto_pagado_cliente = (subtotal_margen_contribucion_gasto_pagado_cliente / subtotal_ingreso_gasto_pagado_cliente) * 100 ;
    let porc_margen_venta_gasto_pagado_cliente = (precio_unitario_gasto_pagado_cliente / costo_unitario_gasto_pagado_cliente - 1) * 100; 
    // Operaciones // 

    if(costo_unitario_gasto_pagado_cliente == 0 && precio_unitario_gasto_pagado_cliente == 0){
        margen_contribucion_unitario_gasto_pagado_cliente = 0;
        subtotal_costo_gasto_pagado_cliente = 0;
        subtotal_ingreso_gasto_pagado_cliente = 0;
        subtotal_margen_contribucion_gasto_pagado_cliente = 0;
        porc_margen_contribucion_gasto_pagado_cliente = 0;
        porc_margen_venta_gasto_pagado_cliente = 0;
    }

    if(costo_unitario_gasto_pagado_cliente > 0 && precio_unitario_gasto_pagado_cliente <= 0){
        porc_margen_contribucion_gasto_pagado_cliente = -100;
    }

    if(costo_unitario_gasto_pagado_cliente <= 0 && precio_unitario_gasto_pagado_cliente > 0){
        porc_margen_venta_gasto_pagado_cliente = 100;
    }

    $("#margen_contribucion_unitario_gasto_pagado_cliente_" + a).val(parseFloat(margen_contribucion_unitario_gasto_pagado_cliente ).toFixed(2));
    $("#subtotal_costo_gasto_pagado_cliente_" + a).val(parseFloat(subtotal_costo_gasto_pagado_cliente).toFixed(2));
    $("#subtotal_ingreso_gasto_pagado_cliente_" + a).val(parseFloat(subtotal_ingreso_gasto_pagado_cliente).toFixed(2));
    $("#porc_margen_contribucion_gasto_pagado_cliente_" + a).val(parseFloat(porc_margen_contribucion_gasto_pagado_cliente).toFixed(2));
    $("#subtotal_margen_contribucion_gasto_pagado_cliente_" + a).val(parseFloat(subtotal_margen_contribucion_gasto_pagado_cliente).toFixed(2));
    $("#porc_margen_venta_gasto_pagado_cliente_" + a).val(parseFloat(porc_margen_venta_gasto_pagado_cliente).toFixed(2));
    
    let total_costo_gasto_pagado_cliente = 0;
    let total_ingreso_gasto_pagado_cliente = 0;
    let total_subtotales_margen_contribucion_gasto_pagado_cliente = 0;
    let total_porc_margen_contribucion_gasto_pagado_cliente = 0;
    let total_porc_margen_venta_gasto_pagado_cliente = 0;
    
    // Sumatoria Costos Gastos destino
    $("input[id^='subtotal_costo_gasto_pagado_cliente_']").each(function () {
        total_costo_gasto_pagado_cliente += Number($(this).val());
    });

    // Sumatoria Ingresos Gastos destino
    $("input[id^='subtotal_ingreso_gasto_pagado_cliente_']").each(function () {
        total_ingreso_gasto_pagado_cliente += Number($(this).val());
    });

    // Sumatoria Subtotal Margen Unitario 
    $("input[id^='subtotal_margen_contribucion_gasto_pagado_cliente_']").each(function () {
        total_subtotales_margen_contribucion_gasto_pagado_cliente += Number($(this).val());
    });


    // Operaciones //
    total_porc_margen_venta_gasto_pagado_cliente = (total_ingreso_gasto_pagado_cliente / total_costo_gasto_pagado_cliente - 1) * 100;
    total_porc_margen_contribucion_gasto_pagado_cliente = (total_subtotales_margen_contribucion_gasto_pagado_cliente / total_ingreso_gasto_pagado_cliente) * 100;
    
    if(total_costo_gasto_pagado_cliente == 0 && total_ingreso_gasto_pagado_cliente == 0){
        total_porc_margen_contribucion_gasto_pagado_cliente = 0;
        total_porc_margen_venta_gasto_pagado_cliente = 0;
    }

    if(total_costo_gasto_pagado_cliente > 0 && total_ingreso_gasto_pagado_cliente <= 0){
        total_porc_margen_contribucion_gasto_pagado_cliente = -100;
        total_porc_margen_venta_gasto_pagado_cliente = -100;
    }

    if(total_costo_gasto_pagado_cliente <= 0 && total_ingreso_gasto_pagado_cliente > 0){
        total_porc_margen_contribucion_gasto_pagado_cliente = 100;
        total_porc_margen_venta_gasto_pagado_cliente = 100;
    }
    // Operaciones //
    $("#total_costo_gastos_pagados_cliente").val("$"+parseFloat(total_costo_gasto_pagado_cliente).toFixed(2));
    $("#total_ingreso_gastos_pagados_cliente").val("$"+parseFloat(total_ingreso_gasto_pagado_cliente).toFixed(2));
    $("#total_subtotales_margen_contribucion_gastos_pagados_cliente").val("$" + parseFloat(total_subtotales_margen_contribucion_gasto_pagado_cliente).toFixed(2));

    $("#total_porc_margen_contribucion_gastos_pagados_cliente").val("%" + parseFloat(total_porc_margen_contribucion_gasto_pagado_cliente).toFixed(2));
    $("#total_porc_margen_venta_gastos_pagados_cliente").val("%" + parseFloat(total_porc_margen_venta_gasto_pagado_cliente).toFixed(2));

}


function seleccionarCheckboxPagadoCliente(valor, a) {
    if (valor == "") {
        $("#eliminar_registro_gasto_pagado_cliente").hide();
        $("#eliminar_renglon_gasto_pagado_cliente").show();
        $('#eliminar_renglon_gasto_pagado_cliente').attr('hidden', false);
        $('#eliminar_renglon_gasto_pagado_cliente').removeAttr('style'); // se elimina para que no lo ponga debajo del boton de agregar
        $('.case_gasto_pagado_cliente2').prop("checked", false);

        if($('#check_gasto_pagado_cliente_' + a).is(':checked')) {
            $('#check_modal_gasto_pagado_cliente_' + a).prop("checked", true);
        }
        else{
            $('#check_modal_gasto_pagado_cliente_' + a).prop("checked", false);
        }
    } 
    else{
        $("#eliminar_renglon_gasto_pagado_cliente").hide();
        $("#eliminar_registro_gasto_pagado_cliente").show();
        $('#eliminar_registro_gasto_pagado_cliente').attr('hidden', false);
        $('#eliminar_registro_gasto_pagado_cliente').removeAttr('style'); // se elimina para que no lo ponga debajo del boton de agregar
        $('.case_gasto_pagado_cliente1').prop("checked", false);
    }
}


function reset_uom_pagado_cliente(valor) {
    document.getElementById("unidad_gasto_pagado_cliente_"+valor).value = "";
}


// ------------------------------------------------------- SERVICIOS OPCIONALES -------------------------------------------//
function agregar_servicios_opcionales() {
    $.ajax({
        type: "GET",
        url: '/autocompletar', // de aqui traemos los conceptos
        success: function (data) {
            let a = Math.round(Math.random()*100000);

            let lote_carga = $("#lote_carga").val();
            let unidades = "";

            let conceptos = JSON.parse(data); // los convertimons a json
            let opciones = "";
            let operacion = document.getElementById('operacion').value;

            conceptos.forEach(function (element, index) { // recorremos los conceptos 
            let tipo_gasto = element.tipo_gasto;
            let operacion_contable = element.operacion_contable;
            let concepto = element.nombre;
            
            if(operacion == "Importación" || operacion == "Exportación" || operacion == "Comercialización"){
                if (tipo_gasto == "Nacional" && operacion_contable == "Ingreso"){
                    eliminar_palabra_servicio_de = concepto.replace("Servicio de ", "");
                    eliminar_palabra_servicio = eliminar_palabra_servicio_de.replace("Servicio ", "");
                    eliminar_palabra_internacional = eliminar_palabra_servicio.replace("Internacional", "");
                    eliminar_palabra_nacional = eliminar_palabra_internacional.replace("Nacional", "");

                    concepto_a_mostrar = eliminar_palabra_nacional;

                    opciones += '<option id="' + index + '" value="' + element.clave_magaya + '">' + concepto_a_mostrar + '</option>';
                }
            }
            });

            switch (lote_carga) {
                case "FTL":
                    unidades =  '<option id="'+ a +'" value="Remolque"> Remolque </option>' +
                                '<option id="'+ a +'" value="BOL"> BOL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;

                case "LTL":
                    unidades =  '<option id="'+ a +'" value="Peso-Facturable"> Peso-Facturable </option>' +
                                '<option id="'+ a +'" value="BOL"> BOL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
                
                case "FCL":
                    unidades =  '<option id="'+ a +'" value="Cont"> Cont </option>' +
                                '<option id="'+ a +'" value="BL"> BL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
                
                case "LCL":
                    unidades =  '<option id="'+ a +'" value="w/m"> w/m </option>' +
                                '<option id="'+ a +'" value="BL"> BL </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
                
                case "AER":
                    unidades =  '<option id="'+ a +'" value="Peso-Facturable"> Peso-Facturable </option>' +
                                '<option id="'+ a +'" value="AWB"> AWB </option>' +
                                '<option id="'+ a +'" value="Embarque"> Embarque </option>';
                    break;
            
                default:
                    Swal.fire({
                        type: 'warning',
                        text: 'Debe seleccionar un lote de carga.',
                      })
                      return;
                    break;
            }

            let div = document.createElement('div');
            div.setAttribute('class', 'servicios_opcionales_rows animated fadeInDown');

            div.innerHTML =
                '<div class="form-row"> '+
                '   <div class="form-group col-md-2 my-4"> '+
                '      <div class="btn-group" role="group" aria-label="Basic example"> '+
                            /* Checkbox */
                '           <div class="custom-control custom-checkbox mr-3"> '+
                '               <input type="checkbox" value="" '+
                '               class="custom-control-input case_servicio_opcional1" '+
                '               name="id_gasto" id="check_servicio_opcional_' + a + '" '+
                '               Onchange="seleccionarCheckboxServicioOpcional(this.value,'+ a +')"/>' +
                    
                '               <label class="custom-control-label" for="check_servicio_opcional_' + a + '"></label> '+
                '           </div> '+

                            /* Detalles */
                '           <div class="mr-3"> '+
                '               <button type="button" class="btn btn-sm btn-info" data-toggle="collapse" data-target="#detalles_renglon_servicio_opcional_'+a+'">Detalles</button> '+
                '           </div> '+

                            /* Boton Notas */
                '           <div class="mr-3"> '+
                '               <button type="button" class="btn btn-info btn-sm" '+
                '                   id="boton_notas_servicio_opcional_'+a+'" hidden '+
                '                   data-toggle="modal" data-target="#modal_boton_notas_servicio_opcional_'+a+'">'+
                '                   <i class="fa fa-file"></i>'+
                '               </button> '+
                '           </div> '+
                '       </div> '+
                '   </div> '+

                    /* Tipo de Gasto */
                '   <input class="form-control form-control-sm" hidden id="tipo_servicio_opcional_' + a + '" name="tipo_gasto[]" type="text" value="Destino"/>' +

                    /* Concepto */
                '   <div class="form-group col-md-4"> '+
                '       <label>Concepto:</label> '+
                '       <div class="form-group">'+
                '           <select class="form-control form-control-sm" '+
                '           id="concepto_servicio_opcional_' + a + '" '+
                '           name="concepto_servicio_opcional[]" type="text" '+
                '           onChange="reset_uom_servicio_opcional('+ a +'); agregar_modal_servicios_opcionales(this.value,'+ "'nuevo'" +','+ a +')" '+ 
                '           required/>' +
                            /* Opciones */
                '           <option disabled value="" selected> Seleccionar </option>' +
                                opciones +
                            /* Opciones */
                '           </select>' +
                '       </div>'+
                '   </div> '+

                    /* Unidad */
                '   <div class="form-group col-md-1"> '+
                '       <label>Unidad:</label> '+
                '       <select class="form-control form-control-sm" '+
                '       id="unidad_servicio_opcional_' + a + '" '+
                '       name="unidad_servicio_opcional[]" '+
                '       type="text" required/>' + 
                            /* Opciones */
                '           <option disabled value="" selected> Seleccionar </option>' +
                                unidades +
                            /* Opciones */
                '       </select>' +
                '   </div> '+

                    /* Cantidad */
                '   <div class="form-group col-md-1"> '+
                '       <label>Cantidad:</label> '+
                '       <input class="form-control form-control-sm text-right" '+
                '       id="cantidad_servicio_opcional_' + a + '" '+
                '       name="cantidad_servicio_opcional[]" type="text" '+
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_servicios_opcionales(' + a + ')" '+
                '       required/>' +
                '   </div> '+

                    /* Costo Unitario */
                '   <div class="form-group col-md-2"> '+
                '       <label>Costo Unitario:</label> '+
                '       <input class="form-control form-control-sm text-right" type="text" '+
                '       id="costo_unitario_servicio_opcional_' + a + '" '+
                '       name="costo_unitario_servicio_opcional[]" '+
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_servicios_opcionales(' + a + ')" '+ 
                '       step="0.1" placeholder="$0.00" required/>' +
                '   </div> '+

                    /* Precio Unitario */
                '   <div class="form-group col-md-2"> '+
                '       <label>Precio Unitario:</label> '+
                '       <input class="form-control form-control-sm text-right" type="text" '+
                '       id="precio_unitario_servicio_opcional_' + a + '" '+
                '       name="precio_unitario_servicio_opcional[]" ' +
                '       onkeypress="return SoloNumeros(event);" '+
                '       onchange="operaciones_servicios_opcionales(' + a + ')" '+
                '       step=".01" value="0.00" required/>' +
                '   </div>' +
                '</div>' +
                

                /* Detalles Operaciones */
                '<div id="detalles_renglon_servicio_opcional_' + a + '" class="collapse"> '+
                '    <div class="form-row"> '+
                        /* Margen de Contribucion Unitario */
                '       <div class="form-group col-md-2"> '+
                '           <label>Margen Contribucion Unitario:</label> '+
                '           <input class="form-control form-control-sm text-right" type="text" '+
                '           id="margen_contribucion_unitario_servicio_opcional_' + a + '" '+
                '           name="margen_contribucion_unitario_servicio_opcional[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div> '+

                        /* Subtotal Costo */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Costo:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_costo_servicio_opcional_' + a + '" '+
                '           name="subtotal_costo_servicio_opcional[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Subtotal Ingreso */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Ingreso:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_ingreso_servicio_opcional_' + a + '" '+
                '           name="subtotal_ingreso_servicio_opcional[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Subtotal Margen Contribucion */
                '       <div class="form-group col-md-2"> '+
                '           <label>Subtotal Margen de Contribucion:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="subtotal_margen_contribucion_servicio_opcional_' + a + '" '+
                '           name="subtotal_margen_contribucion_servicio_opcional[]" ' +
                '           step=".01" placeholder="$0.00" readonly/>' +
                '       </div>' +

                        /* Porcentaje Margen de Contribucion */
                '       <div class="form-group col-md-2"> '+
                '           <label>% Margen de Contribucion:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="porc_margen_contribucion_servicio_opcional_' + a + '" '+
                '           name="porc_margen_contribucion_servicio_opcional[]" ' +
                '           step=".01" placeholder="%0.00" readonly/>' +
                '       </div>' +

                        /* Porcentaje Margen de Venta */
                '       <div class="form-group col-md-2"> '+
                '           <label>% Margen de Venta:</label> '+
                '           <input class="form-control form-control-sm '+
                '           text-right" type="text" '+
                '           id="porc_margen_venta_servicio_opcional_' + a + '" '+
                '           name="porc_margen_venta_servicio_opcional[]" ' +
                '           step=".01" placeholder="%0.00" readonly/>' +
                '       </div>' +
                '    </div> '+
                '</div> '+

                '<hr>';
                
            document.getElementById('servicios_opcionales').append(div);
        }
    });
}


function agregar_modal_servicios_opcionales(valor, accion, a){
    let operacion = $("#operacion").val();
    let lote_carga = $("#lote_carga").val();
    let texto = "";
    let notas = "";
    let modal = "";
    let check_modal_servicio_opcional = '<div class="col-margen-checkbox" hidden>' +
        '<div class="custom-control custom-checkbox text-center">' +
            '<input class="custom-control-input case_modal_servicio_opcional1" '+
            'name="id_gasto" '+
            'id="check_modal_servicio_opcional_' + a + '" '+
            'type="checkbox" value="" '+
            'Onchange="seleccionarCheckboxServicioOpcional(this.value, '+ a +')"/>' +
            '<label class="custom-control-label" for="check_modal_servicio_opcional_' + a + '"></label>' +
        '</div>' +
    '</div>';

    if(operacion == "Exportación"){
        switch (valor) {
            case "TER-FTN-NAC-ING":
                texto = "";
                $('#modal_servicio_opcional_'+a).remove();
                $('#modal_boton_notas_servicio_opcional_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_servicios_opcionales_rows");
                modal.setAttribute("id", "modal_servicio_opcional_" + a);

                notas = check_modal_servicio_opcional +
                '<select class="form-control form-control-sm" '+
                'id="select_servicio_opcional_'+a+'" '+
                'name="notas_pdf_servicio_opcional[]">'+
                    '<option value="" selected> Seleccionar </option>'+ 
                    '<option value="Sencillo"> Sencillo </option>'+ 
                    '<option value="Full"> Full </option>'+
                    '<option value="Liner Terms - All Truck"> Liner Terms - All Truck </option>'+
                    '<option value="Liner Terms - Rail+Truck"> Liner Terms - Rail+Truck </option>'+
                    '<option value="Carga Consolidada"> Carga Consolidada </option>'+
                '</select>';

                $('#boton_notas_servicio_opcional_'+a).attr('hidden', false);
                $('#boton_notas_servicio_opcional_'+a).removeAttr('style');

            break;
        
            default:
                $('#modal_servicio_opcional_'+a).remove();
                $('#modal_boton_notas_servicio_opcional_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_servicios_opcionales_rows");
                modal.setAttribute("id", "modal_servicio_opcional_" + a);

                texto = "";
                notas = check_modal_servicio_opcional +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_servicio_opcional_'+ a +'" '+
                'name="notas_pdf_servicio_opcional[]" type="text" '+
                'value="">';

                $('#boton_notas_servicio_opcional_'+ a).attr('hidden', false);
                $('#boton_notas_servicio_opcional_'+ a).removeAttr('style');
            break;
        }
    }

    if(operacion == "Importación" || operacion == "Comercialización"){
        switch (valor) {
            case "SEG-MER-NAC-ING":
                $('#modal_servicio_opcional_'+a).remove();
                $('#modal_boton_notas_servicio_opcional_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_servicios_opcionales_rows");
                modal.setAttribute("id", "modal_servicio_opcional_" + a);

                //Aplica para cualquier lote de carga
                texto = "** 0.60 % del valor asegurado o USD 90 mínimo";
                notas = check_modal_servicio_opcional +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_servicio_opcional_'+a+'" '+
                'name="notas_pdf_servicio_opcional[]" type="text" '+
                'value="'+texto+'">';

                $('#notas_pdf_servicio_opcional_'+a).val(texto);
                
                $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
            break;

            case "COO-COM-NAC-ING":
                $('#modal_servicio_opcional_'+a).remove();
                $('#modal_boton_notas_servicio_opcional_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_servicios_opcionales_rows");
                modal.setAttribute("id", "modal_servicio_opcional_" + a);

                //Aplica para cualquier lote de carga
                texto = "** 5% del Valor Aduana + Impuestos o mínimo 250 USD";
                notas = check_modal_servicio_opcional +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_servicio_opcional_'+a+'" '+
                'name="notas_pdf_servicio_opcional[]" type="text" '+
                'value="'+texto+'">';

                $('#notas_pdf_servicio_opcional_'+a).val(texto);
                
                $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
            break;

            case "MAN-PRV-NAC-ING":
                $('#modal_servicio_opcional_'+a).remove();
                $('#modal_boton_notas_servicio_opcional_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_servicios_opcionales_rows");
                modal.setAttribute("id", "modal_servicio_opcional_" + a);

                switch (lote_carga) {
                    case "LTL":
                        texto = "** Hasta 5 líneas en factura a partir de la sexta 7.5 USD por línea adicional";
                        notas = check_modal_servicio_opcional +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_servicio_opcional_'+a+'" '+
                        'name="notas_pdf_servicio_opcional[]" type="text" '+
                        'value="'+texto+'">';
                        
                        $('#notas_pdf_servicio_opcional_'+a).val(texto);
                        
                        $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                        $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
                    break;

                    case "FTL":
                        texto = "** Hasta 5 líneas en factura a partir de la sexta 7.5 USD por línea adicional";
                        notas = check_modal_servicio_opcional +
                        '<input class="form-control form-control-sm" '+
                                'id="notas_pdf_servicio_opcional_'+a+'" '+
                                'name="notas_pdf_servicio_opcional[]" type="text" '+
                                'value="'+texto+'">';
                        
                        $('#notas_pdf_servicio_opcional_'+a).val(texto);
                        
                        $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                        $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
                    break;
                    
                    case "LCL":
                        texto = "**Estimado";
                        notas = check_modal_servicio_opcional +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_servicio_opcional_'+a+'" '+
                        'name="notas_pdf_servicio_opcional[]" type="text" '+
                        'value="'+texto+'">';
                        
                        $('#notas_pdf_servicio_opcional_'+a).val(texto);
                        
                        $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                        $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
                    break;

                    case "FCL":
                        texto = "**Estimado";
                        notas = check_modal_servicio_opcional +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_servicio_opcional_'+a+'" '+
                        'name="notas_pdf_servicio_opcional[]" type="text" '+
                        'value="'+texto+'">';
                        
                        $('#notas_pdf_servicio_opcional_'+a).val(texto);
                        
                        $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                        $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
                    break;
                
                    default:
                        texto = "";
                        notas = check_modal_servicio_opcional +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_servicio_opcional_'+a+'" '+
                        'name="notas_pdf_servicio_opcional[]" type="text" '+
                        'value="">';
        
                        $('#boton_notas_servicio_opcional_' + a).attr('hidden', true);
                        $('#notas_pdf_servicio_opcional_'+a).val(texto);
                    break;
                }
            break;

            case "DES-DAD-NAC-ING":
                $('#modal_servicio_opcional_'+a).remove();
                $('#modal_boton_notas_servicio_opcional_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_servicios_opcionales_rows");
                modal.setAttribute("id", "modal_servicio_opcional_" + a);

                switch (lote_carga) {
                    case "AER":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 75 USD o 250 USD mínimo";
                        notas = check_modal_servicio_opcional +
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_servicio_opcional_'+a+'"'+
                        'name="notas_pdf_servicio_opcional[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_servicio_opcional_'+a).val(texto);
                    
                        $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                        $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
                    break;
                    
                    case "LTL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 75 USD o 250 USD mínimo";
                        notas = check_modal_servicio_opcional +
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_servicio_opcional_'+a+'"'+
                        'name="notas_pdf_servicio_opcional[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_servicio_opcional_'+a).val(texto);
                    
                        $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                        $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
                    break;

                    case "FTL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 75 USD o 250 USD mínimo";
                        notas = check_modal_servicio_opcional +
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_servicio_opcional_'+a+'"'+
                        'name="notas_pdf_servicio_opcional[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_servicio_opcional_'+a).val(texto);
                    
                        $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                        $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
                    break;
                    
                    case "LCL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 170 USD o 290 USD mínimo";
                        notas = check_modal_servicio_opcional +
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_servicio_opcional_'+a+'"'+
                        'name="notas_pdf_servicio_opcional[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_servicio_opcional_'+a).val(texto);
                    
                        $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                        $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
                    break;

                    case "FCL":
                        texto = "** 0.45 % del Valor Aduana + Gastos + Impuestos + 170 USD o 290 USD mínimo";
                        notas = check_modal_servicio_opcional +
                        '<input class="form-control form-control-sm"'+
                        'id="notas_pdf_servicio_opcional_'+a+'"'+
                        'name="notas_pdf_servicio_opcional[]" type="text"'+
                        'value="'+texto+'">';
    
                        $('#notas_pdf_servicio_opcional_'+a).val(texto);
                    
                        $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                        $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
                    break;
                
                    default:
                        texto = "";
                        notas = check_modal_servicio_opcional +
                        '<input class="form-control form-control-sm" '+
                        'id="notas_pdf_servicio_opcional_'+a+'" '+
                        'name="notas_pdf_servicio_opcional[]" type="text" '+
                        'value="">';
    
                        $('#boton_notas_servicio_opcional_' + a).attr('hidden', true);
                        $('#notas_pdf_servicio_opcional_'+a).val(texto);
                    break;
                }
            break;

            case "TER-FTN-NAC-ING":
                texto = "";
                $('#modal_servicio_opcional_'+a).remove();
                $('#modal_boton_notas_servicio_opcional_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_servicios_opcionales_rows");
                modal.setAttribute("id", "modal_servicio_opcional_" + a);

                notas = check_modal_servicio_opcional +
                '<select class="form-control form-control-sm" '+
                'id="select_servicio_opcional_'+a+'" '+
                'name="notas_pdf_servicio_opcional[]">'+
                    '<option value="" selected> Seleccionar </option>'+ 
                    '<option value="Sencillo"> Sencillo </option>'+ 
                    '<option value="Full"> Full </option>'+
                    '<option value="Liner Terms - All Truck"> Liner Terms - All Truck </option>'+
                    '<option value="Liner Terms - Rail+Truck"> Liner Terms - Rail+Truck </option>'+
                    '<option value="Carga Consolidada"> Carga Consolidada </option>'+
                '</select>';
                
                $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
            break;

            default:
                $('#modal_servicio_opcional_'+a).remove();
                $('#modal_boton_notas_servicio_opcional_'+a).remove();

                modal = document.createElement('div');
                modal.setAttribute("class", "modal_servicios_opcionales_rows");
                modal.setAttribute("id", "modal_servicio_opcional_" + a);

                texto = "";
                notas = check_modal_servicio_opcional +
                '<input class="form-control form-control-sm" '+
                'id="notas_pdf_servicio_opcional_'+a+'" '+
                'name="notas_pdf_servicio_opcional[]" type="text" '+
                'value="">';

                $('#boton_notas_servicio_opcional_' + a).attr('hidden', false);
                $('#boton_notas_servicio_opcional_' + a).removeAttr('style');
            break;
        }
    }

    // Modal Notas PDF
    modal.innerHTML = 
    '<div class="modal fade" id="modal_boton_notas_servicio_opcional_'+ a +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog modal-dialog-centered" role="document">'+
            '<div class="modal-content">'+
                '<div class="modal-header">'+
                    '<h5 class="modal-title" id="exampleModalLongTitle">Leyenda:</h5>'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                    '</button>'+
                '</div>'+
                '<div class="modal-body">'+
                    '<div class="form-group">'+
                        notas +
                    '</div>'+
                '</div>'+
                '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-sm btn-success" data-dismiss="modal">Guardar</button>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';

    if(accion == "nuevo"){
        document.getElementById('ventana_modal_servicios_opcionales').append(modal);
    }
    
    if(accion == "editar"){
        document.getElementById('editar_modal_servicios_opcionales_'+a).append(modal);
    }
}


function eliminar_servicios_opcionales() {
    $('.case_servicio_opcional1:checkbox:checked').parents(".servicios_opcionales_rows").remove();
    $('.case_modal_servicio_opcional1:checkbox:checked').parents(".modal_servicios_opcionales_rows").remove();

    return operaciones_servicios_opcionales();
}


function eliminar_servicios_opcionales_bd() {
    let idsArr = [];
    $(".checkbox_servicio_opcional:checked").each(function () {
        idsArr.push($(this).attr('data-id'));
    });

    if (idsArr.length <= 0) {
        Swal.fire({
            type: 'info',
            text: 'Selecciona al menos un registro.',
          })
    } 
    else {
        Swal.fire({
            text: "¿Estás seguro(a), quieres borrar el registro(s) seleccionado(s)?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
            }).then((result) => {
            if (result.value) {
            let strIds = idsArr.join(",");

            $.ajax({
                url: "/delete-gastos",
                type: 'DELETE',
                data: 'ids=' + strIds,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    if (data['status'] == true) {
                        $(".checkbox_servicio_opcional:checked").each(function () {
                            $(this).parents(".servicios_opcionales_rows").remove();
                            Swal.fire(
                                'Eliminado!',
                                'No olvide actualizar la cotización.',
                                'success'
                            )

                            return operaciones_servicios_opcionales();
                        });

                    } 
                    else {
                        Swal.fire({
                            type: 'error',
                            text: 'Algo salio mal.',
                        })
                    }
                },

                error: function (data) {
                    alert(data.responseText);
                }
            });

            }
        });
    }
}


function operaciones_servicios_opcionales(a) {
    let cantidad_servicio_opcional = $("#cantidad_servicio_opcional_" + a).val();
    let costo_unitario_servicio_opcional = $("#costo_unitario_servicio_opcional_" + a).val();
    let precio_unitario_servicio_opcional = $("#precio_unitario_servicio_opcional_" + a).val();

    // Operaciones //
    let margen_contribucion_unitario_servicio_opcional = precio_unitario_servicio_opcional - costo_unitario_servicio_opcional;

    let subtotal_costo_servicio_opcional = costo_unitario_servicio_opcional * cantidad_servicio_opcional;
    let subtotal_ingreso_servicio_opcional = precio_unitario_servicio_opcional * cantidad_servicio_opcional;
    let subtotal_margen_contribucion_servicio_opcional = margen_contribucion_unitario_servicio_opcional * cantidad_servicio_opcional;

    let porc_margen_contribucion_servicio_opcional = (subtotal_margen_contribucion_servicio_opcional / subtotal_ingreso_servicio_opcional) * 100 ;
    let porc_margen_venta_servicio_opcional = (precio_unitario_servicio_opcional / costo_unitario_servicio_opcional - 1) * 100; 
    // Operaciones // 

    if(costo_unitario_servicio_opcional == 0 && precio_unitario_servicio_opcional == 0){
        margen_contribucion_unitario_servicio_opcional = 0;
        subtotal_costo_servicio_opcional = 0;
        subtotal_ingreso_servicio_opcional = 0;
        subtotal_margen_contribucion_servicio_opcional = 0;
        porc_margen_contribucion_servicio_opcional = 0;
        porc_margen_venta_servicio_opcional = 0;
    }

    if(costo_unitario_servicio_opcional > 0 && precio_unitario_servicio_opcional <= 0){
        porc_margen_contribucion_servicio_opcional = -100;
    }

    if(costo_unitario_servicio_opcional <= 0 && precio_unitario_servicio_opcional > 0){
        porc_margen_venta_servicio_opcional = 100;
    }

    $("#margen_contribucion_unitario_servicio_opcional_" + a).val(parseFloat(margen_contribucion_unitario_servicio_opcional ).toFixed(2));
    $("#subtotal_costo_servicio_opcional_" + a).val(parseFloat(subtotal_costo_servicio_opcional).toFixed(2));
    $("#subtotal_ingreso_servicio_opcional_" + a).val(parseFloat(subtotal_ingreso_servicio_opcional).toFixed(2));
    $("#porc_margen_contribucion_servicio_opcional_" + a).val(parseFloat(porc_margen_contribucion_servicio_opcional).toFixed(2));
    $("#subtotal_margen_contribucion_servicio_opcional_" + a).val(parseFloat(subtotal_margen_contribucion_servicio_opcional).toFixed(2));
    $("#porc_margen_venta_servicio_opcional_" + a).val(parseFloat(porc_margen_venta_servicio_opcional).toFixed(2));
    
    let total_costo_servicio_opcional = 0;
    let total_ingreso_servicio_opcional = 0;
    let total_subtotales_margen_contribucion_servicio_opcional = 0;
    let total_porc_margen_contribucion_servicio_opcional = 0;
    let total_porc_margen_venta_servicio_opcional = 0;
    
    // Sumatoria Costos
    $("input[id^='subtotal_costo_servicio_opcional_']").each(function () {
        total_costo_servicio_opcional += Number($(this).val());
    });

    // Sumatoria Ingresos
    $("input[id^='subtotal_ingreso_servicio_opcional_']").each(function () {
        total_ingreso_servicio_opcional += Number($(this).val());
    });

    // Sumatoria Subtotal Margen Unitario 
    $("input[id^='subtotal_margen_contribucion_servicio_opcional_']").each(function () {
        total_subtotales_margen_contribucion_servicio_opcional += Number($(this).val());
    });


    // Operaciones //
    total_porc_margen_venta_servicio_opcional = (total_ingreso_servicio_opcional / total_costo_servicio_opcional - 1) * 100;
    total_porc_margen_contribucion_servicio_opcional = (total_subtotales_margen_contribucion_servicio_opcional / total_ingreso_servicio_opcional) * 100;
    
    if(total_costo_servicio_opcional == 0 && total_ingreso_servicio_opcional == 0){
        total_porc_margen_contribucion_servicio_opcional = 0;
        total_porc_margen_venta_servicio_opcional = 0;
    }

    if(total_costo_servicio_opcional > 0 && total_ingreso_servicio_opcional <= 0){
        total_porc_margen_contribucion_servicio_opcional = -100;
        total_porc_margen_venta_servicio_opcional = -100;
    }

    if(total_costo_servicio_opcional <= 0 && total_ingreso_servicio_opcional > 0){
        total_porc_margen_contribucion_servicio_opcional = 100;
        total_porc_margen_venta_servicio_opcional = 100;
    }
    // Operaciones //
    $("#total_costo_servicios_opcionales").val("$"+parseFloat(total_costo_servicio_opcional).toFixed(2));
    $("#total_ingreso_servicios_opcionales").val("$"+parseFloat(total_ingreso_servicio_opcional).toFixed(2));
    $("#total_subtotales_margen_contribucion_servicios_opcionales").val("$" + parseFloat(total_subtotales_margen_contribucion_servicio_opcional).toFixed(2));

    $("#total_porc_margen_contribucion_servicios_opcionales").val("%" + parseFloat(total_porc_margen_contribucion_servicio_opcional).toFixed(2));
    $("#total_porc_margen_venta_servicios_opcionales").val("%" + parseFloat(total_porc_margen_venta_servicio_opcional).toFixed(2));

}


function seleccionarCheckboxServicioOpcional(valor, a) {
    if (valor == "") {
        $("#eliminar_registro_servicio_opcional").hide();
        $("#eliminar_renglon_servicio_opcional").show();
        $('#eliminar_renglon_servicio_opcional').attr('hidden', false);
        $('#eliminar_renglon_servicio_opcional').removeAttr('style'); // se elimina para que no lo ponga debajo del boton de agregar
        $('.case_servicio_opcional2').prop("checked", false);
        
        if($('#check_servicio_opcional_' + a).is(':checked')) {
            $('#check_modal_servicio_opcional_' + a).prop("checked", true);
        }
        else{
            $('#check_modal_servicio_opcional_' + a).prop("checked", false);
        }
    } 
    else{
        $("#eliminar_renglon_servicio_opcional").hide();
        $("#eliminar_registro_servicio_opcional").show();
        $('#eliminar_registro_servicio_opcional').attr('hidden', false);
        $('#eliminar_registro_servicio_opcional').removeAttr('style'); // se elimina para que no lo ponga debajo del boton de agregar
        $('.case_servicio_opcional1').prop("checked", false);
    }
}


function reset_uom_servicio_opcional (valor) {
    document.getElementById("unidad_servicio_opcional_"+valor).value = "";
}


// ------------------------------------------------------- Estimar Impuestos -------------------------------------------------------------//
function agregar_impuesto_estimado() {
    let cont = $(".impuesto_rows").length;
    let a = cont + 1;

    let div = document.createElement('div');
    div.setAttribute('class', 'impuesto_rows animated fadeInDown');

    div.innerHTML =
        '<div class="form-row"> '+
            /* Checkbox */
        '   <div class="form-group col-md"> '+
        '       <div class="text-center"> '+
        '           <label class="font-weight-bold">Seleccionar:</label> '+
        '       </div> '+

        '       <div class="custom-control custom-checkbox text-center">' +
        '           <input class="custom-control-input case_impuesto_estimado1" name="id_gasto" id="check_impuesto_' + a + '" type="checkbox" value="" Onchange="seleccionarCheckboxEstimados(this.value)"/>' +
        
        '           <label class="custom-control-label" for="check_impuesto_' + a + '"></label>' +
        '       </div>' +
        '   </div>' +

            /* Producto */
        '   <div class="form-group col-md"> '+
        '       <label class="font-weight-bold">Producto:</label> '+
        '       <input class="form-control form-control-sm" '+
        '       id="row_producto_' + a + '" name="row_producto[]" '+
        '       type="text"/> '+
        '   </div>' +

            /* Valor Aduana */
        '   <div class="form-group col-md"> '+
        '       <div class="text-right"> '+
        '           <label class="font-weight-bold">Valor Aduana:</label> '+
        '       </div> '+
        
        '       <input class="form-control form-control-sm" '+
        '       id="row_valor_aduana_' + a + '" name="row_valor_aduana[]" '+
        '       type="text" '+
        '       onchange="calcular_total_aduana(' + a + '); calcular_IGI('+ a +');"/> '+
        '   </div>' +

            /* Fraccion */
        '   <div class="form-group col-md"> '+
        '       <div class="text-right"> '+
        '           <label class="font-weight-bold">Fraccion:</label> '+
        '       </div> '+

        '       <input class="form-control form-control-sm text-right" '+
        '       id="row_fraccion_' + a + '" name="row_fraccion[]" type="text"/>' +
        '   </div>' +

            /* Porcentaje IGI */
        '   <div class="form-group col-md"> '+
        '       <div class="text-right"> '+
        '           <label class="font-weight-bold">%IGI:</label> '+
        '       </div> '+

        '       <input class="form-control form-control-sm text-right" '+
        '       id="row_porc_igi_' + a + '" name="row_porc_igi[]" type="text"' +
        '       onkeypress="return SoloNumeros(event);" '+
        '       onchange="calcular_IGI(' + a + '); calcular_total_aduana(' + a + ');"/>' +
        '   </div>' +

            /* IGI */
        '   <div class="form-group col-md"> '+
        '       <div class="text-right"> '+
        '           <label class="font-weight-bold">IGI:</label> '+
        '       </div> '+

        '       <input class="form-control form-control-sm text-right" '+
        '       id="row_igi_' + a + '" name="row_igi[]" '+
        '       type="text" readonly/> '+
        '   </div>' +
        '</div>' +

        /* Restricciones */
        '<div class="form-row">' +
        '   <div class="form-group col-md">' +
        '       <textarea class="form-control form-control-sm" rows="5" '+
        '       placeholder="Restricciones" id="row_restriccion_' + a + '" '+
        '       name="row_restriccion[]" type="text"> </textarea> '+
        '   </div>' +
        '</div>';
        
    
    document.getElementById('impuestos_estimados').append(div);

}


function eliminar_impuesto_estimado() {
    $('.case_impuesto_estimado1:checkbox:checked').parents(".impuesto_rows").remove();

    calcular_total_aduana();
}


function eliminar_impuesto_estimado_bd() {
    let idsArr = [];
    $(".checkbox_impuesto_estimado:checked").each(function () {
        idsArr.push($(this).attr('data-id'));
    });

    if (idsArr.length <= 0) {
        Swal.fire({
            type: 'info',
            text: 'Selecciona al menos un registro.',
          })
    } 
    else {
        Swal.fire({
            text: "Confirmación para eliminar registros de estimado de impuestos, Seguro que desea eliminarlo(s)?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
            }).then((result) => {

            if (result.value) {
            let strIds = idsArr.join(",");
            $.ajax({
                url: "/delete-estimado-impuestos",
                type: 'DELETE',
                data: 'ids=' + strIds,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    if (data['status'] == true) {
                        $(".checkbox_impuesto_estimado:checked").each(function () {
                            $(this).parents(".impuesto_rows").remove();

                            Swal.fire(
                                'Eliminado!',
                                'No olvide actualizar la cotización.',
                                'success'
                            )

                            calcular_total_aduana(); 
                            calcular_IGI();
                        });

                    } else {
                        Swal.fire({
                            type: 'error',
                            text: 'Algo salio mal.',
                        })
                    }
                },

                error: function (data) {
                    alert(data.responseText);
                }
            });

            }
        });
    }
}


function seleccionarCheckboxEstimados(valor) {
    if (valor == "") {
        $("#eliminar_registro_impuesto_estimado").hide();
        $("#eliminar_renglon_impuesto_estimado").show();
        $('#eliminar_renglon_impuesto_estimado').attr('hidden', false);
        $('#eliminar_renglon_impuesto_estimado').removeAttr('style'); // se elimina para que no lo ponga debajo del boton de agregar
        $('.case_impuesto_estimado2').prop("checked", false);
    } else {
        $("#eliminar_renglon_impuesto_estimado").hide();
        $("#eliminar_registro_impuesto_estimado").show();
        $('#eliminar_registro_impuesto_estimado').attr('hidden', false);
        $('#eliminar_registro_impuesto_estimado').removeAttr('style'); // se elimina para que no lo ponga debajo del boton de agregar
        $('.case_impuesto_estimado1').prop("checked", false);
    }
}


function prv_cnt(){
    prv_otros_impuestos = 240; //240*1.16 = 278.4 / 18 = 15.46 
    cnt_otros_impuestos = 20;
    
    if($('#moneda_estimado_impuesto').val() == "USD"){ // Si la moneda es USD
        $('#tipo_cambio').attr('readonly', true);
        $('#tipo_cambio').val('');

        prv_otros_impuestos = 15; //240/18;
        cnt_otros_impuestos = 4; //20/18;

        $('#prv_otros_impuestos').val(parseFloat(prv_otros_impuestos).toFixed(2));
        $('#cnt_otros_impuestos').val(parseFloat(cnt_otros_impuestos).toFixed(2));
    }
    else{
        $('#tipo_cambio').attr('readonly', false);

        prv_otros_impuestos = 15*18;
        cnt_otros_impuestos = 4*18;

        $('#prv_otros_impuestos').val(parseFloat(prv_otros_impuestos).toFixed(2));
        $('#cnt_otros_impuestos').val(parseFloat(cnt_otros_impuestos).toFixed(2));
    }
}


// Vista Create Cotizaciones
function borrar_renglones_estimado_impuestos(){
    let incoterm = $("#incoterm").val();

    if( $('#checkbox_impuestos').prop('checked') ) {
        $('#estimado_impuestos').attr('hidden', false);
        $('#estimar_impuestos').val('true');

        $('.impuestos_importacion').attr('hidden', false);
        $('.impuestos_importacion').removeAttr('style');

        if (incoterm == "DDP") {
            $('#moneda_estimado_impuesto').addClass("deshabilitar");
            $('#moneda_estimado_impuesto').val($('#USD').val());

            $('#tipo_cambio').attr('readonly', true);
        } 
        else{
            $('#moneda_estimado_impuesto').removeClass("deshabilitar");
            $('#moneda_estimado_impuesto').val($('#Seleccionar').val());
        }
    }
    else{
        $('#estimado_impuestos').attr('hidden', true);
        $('.impuestos_importacion').attr('hidden', true);
        $('#modal_impuestos').find("input,select").val('');
        $('.case_impuesto_estimado1').parents(".impuesto_rows").remove();
        $('#estimar_impuestos').val('false');

        $('#arancel').val('');
        $('#dta').val('');
        $('#prv').val('');
        $('#cnt').val('');
        $('#total_impuestos_importacion').val('');

        $('#tipo_DTA').val('');
        $('#prv_otros_impuestos').val('');
        $('#cnt_otros_impuestos').val('');
        
        
    }
}
// Vista Create Cotizaciones


// Vista Edit Cotizaciones
function borrar_registros_estimado_impuestos(){
    let incoterm = $("#incoterm").val();

    if( $('#checkbox_impuestos').prop('checked') ) {
        $('#estimado_impuestos').attr('hidden', false);
        $('#estimar_impuestos').val('true');   

        $('.impuestos_importacion').attr('hidden', false);
        $('.impuestos_importacion').removeAttr('style');
           
        if (incoterm == "DDP") {
            $('#moneda_estimado_impuesto').addClass("deshabilitar");
            $('#moneda_estimado_impuesto').val($('#USD').val());

            $('#tipo_cambio').attr('readonly', true);
        } 
        else{
            $('#moneda_estimado_impuesto').removeClass("deshabilitar");
            $('#moneda_estimado_impuesto').val($('#Seleccionar').val());
        }
    }
    else{
        $('#estimado_impuestos').attr('hidden', true);
        $('.impuestos_importacion').attr('hidden', true);
        $('.case_impuesto_estimado2').attr('checked',true);
        $('#estimar_impuestos').val('false');
        eliminar_impuesto_estimado_bd();
    }
}
// Vista Edit Cotizaciones


function calcular_valor_aduana(){
    let moneda = $('#moneda_estimado_impuesto').val();
    let valor_producto = Number($("#valor_producto").val());
    let tipo_cambio = Number($("#tipo_cambio").val());
    let incremental_flete = Number($("#incremental_flete").val());
    let incremental_seguro = Number($("#incremental_seguro").val());

    if(moneda == "MXN"){
        valor_producto_total = valor_producto * tipo_cambio;
        valor_flete_total = incremental_flete * tipo_cambio;
        valor_seguro_total = incremental_seguro * tipo_cambio;
        
        calculo =  valor_producto_total + valor_flete_total + valor_seguro_total;
    }
    else{
        calculo =  valor_producto + incremental_flete + incremental_seguro;
    }

    resultado = (calculo == null || calculo == undefined || calculo == "" || isNaN(calculo)) ? 0 : calculo;

    $("#total_aduana").val(parseFloat(resultado).toFixed(2));
}


function calcular_IGI(a) {
    let valor_aduana = Number($("#row_valor_aduana_" + a).val());
    let porc_igi = Number($("#row_porc_igi_" + a).val());
    let total_IGI = 0;

    IGI = (valor_aduana * porc_igi)/100;
    IGI = Math.round(IGI);

    // Operaciones //
    parseInt($("#row_igi_" + a).val(IGI));

    // Sumatoria
    $("input[id^='row_igi_']").each(function () {
        total_IGI += Number($(this).val());
    });

    // Operaciones //
    $("#total_IGI").val(parseInt(total_IGI));
}


function calcular_total_aduana() {
    let total_aduana = 0;
    
    // Sumatoria 
    $("input[id^='row_valor_aduana_']").each(function () {
        total_aduana += Number($(this).val());
    });

    // Operaciones //
    $("#total_valor_aduana").val(parseFloat(total_aduana).toFixed(2));
}


$('#guardar_estimado_impuestos').click(function(){
    let valor_aduana = $("#total_aduana").val();
    let total_valor_aduana = $("#total_valor_aduana").val();
    let total_IGI = $("#total_IGI").val();
    let tipo_DTA = $("#tipo_DTA").val();
    let dta = $("#dta_otros_impuestos").val();
    let prv = $("#prv_otros_impuestos").val();
    let cnt = $("#cnt_otros_impuestos").val();
    /* let iva = $("#iva_otros_impuestos").val(); */
    let total_impuestos = $("#total_otros_impuestos").val();

    if(valor_aduana !=  total_valor_aduana){
        Swal.fire({
            title: 'Los valores aduanales no coiciden...',
            text: 'Revisar nuevamente los productos agregados',
          })
    }
    else{
        if(tipo_DTA == "" || dta == "" || total_impuestos == ""){
            Swal.fire({
                title: 'Faltan campos por llenar...',
                text: 'Revisar la pestaña de OTROS IMPUESTOS!',
              })
        }
        else{
            $('#arancel').val(total_IGI);
            $('#dta').val(dta);
            $('#prv').val(prv);
            $('#cnt').val(cnt);
            $('#total_impuestos_importacion').val(total_impuestos);

            $('#modal_impuestos').modal('hide');
        }
    }

    total_cotizacion();
});


function calcular_otros_impuestos(valor){
    let incoterm = $("#incoterm").val();
    let operacion = $("#operacion").val();
    valor_aduana = Number($("#total_aduana").val());
    total_IGI = Number($("#total_IGI").val());
    prv = Number($("#prv_otros_impuestos").val());
    cnt = Number($("#cnt_otros_impuestos").val());
    iva = 0.00;

    if(valor == "Variable"){
        $("#dta_otros_impuestos").attr('readonly',true);
        dta = valor_aduana * 0.008;
    }
    else{
        $("#dta_otros_impuestos").removeAttr('readonly');
        dta = Number($("#dta_otros_impuestos").val());
    }

    if(incoterm == "DDP" || operacion == "Comercialización"){
        total = dta + total_IGI + prv + cnt;
    }
    else{
        iva = (valor_aduana + total_IGI + dta) * 0.16;
        total = dta + total_IGI + prv + cnt + iva
    }

    $("#dta_otros_impuestos").val(parseFloat(dta).toFixed(2));
    $("#iva_otros_impuestos").val(parseFloat(iva).toFixed(2));
    $("#total_otros_impuestos").val(parseFloat(total).toFixed(2));
}


function calcular_total_impuestos_importacion(){
    let arancel = Number($("#arancel").val());
    let dta = Number($("#dta").val());
    let prv = Number($("#prv").val());
    let cnt = Number($("#cnt").val());

    total = arancel + dta + prv + cnt;

    $("#total_impuestos_importacion").val(parseFloat(total).toFixed(2));
}


//----------------------------------------------------------------------------------------------------------------//
// Medio de Transporte 
$('#medio_transporte').change(function(){
    let medio_transporte = $("#medio_transporte").val();
    let operacion = $("#operacion").val();

    if(medio_transporte == ""){
        Swal.fire('Debes elegir un medio de transporte.')
    }
    else{
        $('#lote_carga').attr('disabled', false);
        $('#incoterm').attr('disabled', false);
        $('#tipo_servicio').attr('disabled', false);
    }
    
    
    seleccionar = document.getElementById("select_lote").value;
    document.getElementById("lote_carga").value = seleccionar;

    if(operacion != "Comercialización"){
        seleccionar = document.getElementById("select_incoterm").value;
        document.getElementById("incoterm").value = seleccionar;
    }

    if (medio_transporte == "Marítimo") {
    // Asignar Lotes
        $("#AER").hide();

        $("#LTL").hide();

        $("#FTL").hide();

        $("#LCL").show();

        $("#FCL").show();

    // Asignar Incoterm
        $("#EXW").show();
        $("#FAS").show();
        $("#FOB").show();
        $("#CFR").show();
        $("#CIF").show();
        $("#DAP").show();
        $("#DDP").show();
        $("#FCA").show();

        $("#CPT").hide();
        $("#CIP").hide();
        $("#DAT").hide();


    // Cambiar nombre label
        document.getElementById('transporte_carga').innerHTML = 'Puerto Carga:';
        document.getElementById('transporte_descarga').innerHTML = 'Puerto Descarga:';
    
    // Mostrar Logistica Internacional
        $(".gastos_logistica_internacional").show();
    }

    if (medio_transporte == "Terrestre") {
    // Asignar Lotes
        $("#AER").hide();

        $("#LTL").show();

        $("#FTL").show();

        $("#LCL").hide();

        $("#FCL").hide();

    // Asignar Incoterms
        $("#EXW").show();
        $("#FCA").show();
        $("#CPT").show();
        $("#CIP").show();
        $("#DAT").show();
        $("#DAP").show();
        $("#DDP").show();

        $("#FAS").hide();
        $("#FOB").hide();
        $("#CFR").hide();
        $("#CIF").hide();

    // Cambiar nombre label
        document.getElementById('transporte_carga').innerHTML = 'Aduana Carga:';
        document.getElementById('transporte_descarga').innerHTML = 'Aduana Descarga:';

    // Ocultar Logistica Internacional
        /* $(".gastos_logistica_internacional").hide(); */

    }

    if (medio_transporte == "Aéreo") {
    // Asignar Lotes
        $("#AER").show();

        $("#LTL").hide();

        $("#FTL").hide();

        $("#LCL").hide();

        $("#FCL").hide();

    // Asignar Incoterms
        $("#EXW").show();
        $("#FCA").show();
        $("#CPT").show();
        $("#CIP").show();
        $("#DAT").show();
        $("#DAP").show();
        $("#DDP").show();

        $("#FAS").hide();
        $("#FOB").hide();
        $("#CFR").hide();
        $("#CIF").hide();

    // Cambiar nombre label
        document.getElementById('transporte_carga').innerHTML = 'Aereopuerto Carga:';
        document.getElementById('transporte_descarga').innerHTML = 'Aereopuerto Descarga:';

    // Mostrar Logistica Internacional
        $(".gastos_logistica_internacional").show();
    }
});
// Medio de Transporte 


// Lote de Carga
$('#lote_carga').change(function(){
    let lote_carga = $("#lote_carga").val();

    if(lote_carga == ""){
        Swal.fire('Debes elegir un lote de carga.');
    }

    // Asignar Caracteristicas 
    if (lote_carga == "AER") {
        // OCULTAR //
        $(".embarque_row").hide();
        $("#cantidad_embarque").val("");
        $("#unidad_embarque").val("");

        $(".wm_row").hide();
        $("#cantidad_wm").val("");
        $("#unidad_wm").val("");

        $(".demoras").hide();

        // Unidades
        $("#tons").hide();
        $("#m3").hide();
        $("#tons").val("");
        $("#m3").val("");

        // MOSTRAR //
        $('.pv_row').attr('hidden', false);
        $('.pv_row').removeAttr('style');

        $('.pf_row').attr('hidden', false);
        $('.pf_row').removeAttr('style');
        
        $('.almacenaje').attr('hidden', false);
        $('.almacenaje').removeAttr('style');

        $('.estadias').attr('hidden', false);
        $('.estadias').removeAttr('style');

        // Unidades
        $('#kg').show();
        $('#cm3').show();

    }

    if (lote_carga == "LCL" || lote_carga == "LTL") {
        // OCULTAR //
        $(".pv_row").hide();
        $("#cantidad_peso_volumen").val("");
        $("#unidad_peso_volumen").val("");

        $(".pf_row").hide();
        $("#cantidad_peso_facturable").val("");
        $("#unidad_peso_facturable").val("");

        $(".embarque_row").hide();
        $("#cantidad_embarque").val("");
        $("#unidad_embarque").val("");

        $(".demoras").hide();

        $("#kg").hide();
        $("#cm3").hide();
        $("#kg").val("");
        $("cm3").val("");

        // MOSTRAR //
        $('.wm_row').attr('hidden', false);
        $('.wm_row').removeAttr('style');

        if (lote_carga != "LTL"){
            $('.almacenaje').attr('hidden', false);
            $('.almacenaje').removeAttr('style');
        }
        else{
            $(".almacenaje").hide();
        }

        $('.estadias').attr('hidden', false);
        $('.estadias').removeAttr('style');

        $("#tons").show();
        $("#m3").show();
    }

    if (lote_carga == "FCL") {
        // OCULTAR //
        $("#paquetes_medidas_modal").hide();

        $(".peso_row").hide();
        $('#cantidad_peso').removeAttr('required');
        $('#unidad_peso').removeAttr('required');

        $(".volumen_row").hide();
        $('#cantidad_volumen').removeAttr('required');
        $('#unidad_volumen').removeAttr('required');

        $(".pv_row").hide();
        $("#cantidad_peso_volumen").val("");
        $("#unidad_peso_volumen").val("");

        $(".pf_row").hide();
        $("#cantidad_peso_facturable").val("");
        $("#unidad_peso_facturable").val("");

        $(".wm_row").hide();
        $("#cantidad_wm").val("");
        $("#unidad_wm").val("");

        // Unidades
        $("#kg").hide();
        $("#cm3").hide();
        $("#kg").val("");
        $("cm3").val("");

        // MOSTRAR //
        $('#paquetes_ft_modal').attr('hidden', false);
        $('#paquetes_ft_modal').removeAttr('style');

        $('.embarque_row').attr('hidden', false);
        $('.embarque_row').removeAttr('style');

        $('.almacenaje').attr('hidden', false);
        $('.almacenaje').removeAttr('style');

        $('.estadias').attr('hidden', false);
        $('.estadias').removeAttr('style');

        $('.demoras').attr('hidden', false);
        $('.demoras').removeAttr('style');        

        // Unidades 
        $("#tons").show();
        $("#m3").show();
        
    }
    else{
        $(".peso_row").show();
        $(".volumen_row").show();

        $('#paquetes_medidas_modal').attr('hidden', false);
        $('#paquetes_medidas_modal').removeAttr('style');

        $("#paquetes_ft_modal").hide();


    }

    if (lote_carga == "FTL") {
        // OCULTAR //
        $(".pv_row").hide();
        $("#cantidad_peso_volumen").val("");
        $("#unidad_peso_volumen").val("");

        $(".pf_row").hide();
        $("#cantidad_peso_facturable").val("");
        $("#unidad_peso_facturable").val("");

        $(".wm_row").hide();
        $("#cantidad_wm").val("");
        $("#unidad_wm").val("");

        $(".embarque_row").hide();
        $("#cantidad_embarque").val("");
        $("#unidad_embarque").val("");

        $(".demoras").hide();

        // MOSTRAR //
        $('.estadias').attr('hidden', false);
        $('.estadias').removeAttr('style');
    }

});
// Lote de Carga


// Incoterm
$('#incoterm').change(function(){
    let incoterm = $("#incoterm").val();
    let operacion = $("#operacion").val();

    if(incoterm == ""){
        Swal.fire('Debes elegir un Incoterm.')
    }

    // Impuestos de Importacion    
    if (incoterm == "DDP") {
        $('.impuestos_importacion').attr('hidden', false);
        $('.impuestos_importacion').removeAttr('style');
        //$('#switch_estimar_impuestos').attr('hidden', true);
        $('#checkbox_impuestos').attr('disabled', true);
        $('#checkbox_impuestos').prop( "checked", true );

        $('#estimado_impuestos').attr('hidden', false);
        $('#moneda_estimado_impuesto').addClass("deshabilitar");
        $('#moneda_estimado_impuesto').val($('#USD').val());

        prv_cnt();

        //$('#tipo_cambio').attr('readonly', true);
    } 
    else{
        if(operacion == "Comercialización"){
            return;
        }
        $('.impuestos_importacion').attr('hidden', true);
        $('#estimado_impuestos').attr('hidden', true);
        $('#switch_estimar_impuestos').attr('hidden', false);
        $('#checkbox_impuestos').attr('disabled', false);
        $('#checkbox_impuestos').prop( "checked", false );

        $('#moneda_estimado_impuesto').removeClass("deshabilitar");
        $('#moneda_estimado_impuesto').val($('#Seleccionar').val());

        $('#prv_otros_impuestos').val('');
        $('#cnt_otros_impuestos').val('');
        $('#tipo_cambio').attr('readonly', false);

        $('#arancel').val('');
        $('#dta').val('');
        $('#prv').val('');
        $('#cnt').val('');
        $('#total_impuestos_importacion').val('');
    }
});
// Incoterm


// Habilitar Textarea Correcciones
$('#status').change(function(){
    let status = $("#status").val();
    
    if(status == "Corregir" || status == "Rechazar"){
        $('#correcciones').attr('hidden', false);
        $('#correcciones').removeAttr('style');
    }
    else{
        $('#correcciones').hide();
        document.getElementById("correcciones").value = "";
    }

});
// Habilitar Textarea Correcciones


function calcular_pf_wm() {
    cantidad_peso = $("#cantidad_peso").val();
    cantidad_volumen = $("#cantidad_volumen").val();

    if ($('select[name=lote_carga]').val() == "AER") {
        cantidad_peso_volumen = (cantidad_volumen / 5000);

        $("#cantidad_peso_volumen").val(cantidad_peso_volumen);

        if (cantidad_peso > cantidad_peso_volumen) {
            $("#cantidad_peso_facturable").val(cantidad_peso);
        } else {
            $("#cantidad_peso_facturable").val(cantidad_peso_volumen);
        }
    }

    if ($('select[name=lote_carga]').val() == "LCL" || $('select[name=lote_carga]').val() == "LTL") {
        if (parseFloat(cantidad_peso) > parseFloat(cantidad_volumen)) {
            $("#cantidad_wm").val(Math.ceil(cantidad_peso));
        }
        else{
            $("#cantidad_wm").val(Math.ceil(cantidad_volumen));
        }
    }
}


function asignar_Folio(valor){
    $.ajax({
        type: "GET",
        url: '/folio', //
        success: function (data) {
            let numero_folio_actual = JSON.parse(data); // los convertimons a json
            let incoterm = $("#incoterm").val();    
            
            if(valor == "Importación" || valor == "Exportación"){
                let LOGINT = numero_folio_actual["LOGINT"];

                if(incoterm == "DDP"){
                    return;
                }

                $('.impuestos_importacion').attr('hidden', true);
                
                $('#estimado_impuestos').attr('hidden', true);
                $('#switch_estimar_impuestos').attr('hidden', false);
                
                $('#checkbox_impuestos').attr('disabled', false);
                $('#checkbox_impuestos').prop( "checked", false );
                
                if (LOGINT == "SIN DATOS"){
                    $("#folio").val("LOGINT1");
                    document.getElementById('folio_encabezado').innerHTML = "LOGINT1";
                }
                else{
                    let string = LOGINT.substr(6);
                    let numero_folio_siguiente = parseInt(string) + 1;

                    $("#folio").val("LOGINT"+numero_folio_siguiente);
                    document.getElementById('folio_encabezado').innerHTML = "LOGINT" + numero_folio_siguiente;
                }
            }
        
            if (valor == "Comercialización"){
                let COMIMP = numero_folio_actual["COMIMP"];  

                $("#incoterm").val("DDP");
                $('.impuestos_importacion').attr('hidden', false);
                $('.impuestos_importacion').removeAttr('style');
                
                $('#checkbox_impuestos').attr('disabled', true);
                $('#checkbox_impuestos').prop( "checked", true );

                $('#estimado_impuestos').attr('hidden', false);
                
                if (COMIMP == "SIN DATOS"){
                    $("#folio").val("COMIMP1");
                    document.getElementById('folio_encabezado').innerHTML = "COMIMP1";
                }
                else{
                    let string = COMIMP.substr(6);
                    let numero_folio_siguiente = parseInt(string) + 1;

                    $("#folio").val("COMIMP"+numero_folio_siguiente);
                    document.getElementById('folio_encabezado').innerHTML = "COMIMP" + numero_folio_siguiente;
                    
                } 
            }
        }
    });
}


function buscar_empresa(){
    let empresa = $('#empresa').val();
    let dropdown_empresas = $('#empresa');

    let atencion = $('#atencion').val();
    let dropdown_atencion = $('#atencion');

    if(empresa == null){
        dropdown_empresas.empty();
        dropdown_empresas.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_empresas.prop('selectedIndex', 0);
    }

    if(atencion == null){
        dropdown_atencion.empty();
        dropdown_atencion.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_atencion.prop('selectedIndex', 0);
    }

    const url = '/buscar-empresas';

    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            dropdown_empresas.append($('<option></option>').attr('value', entry.Empresa).text(entry.Empresa));

            if(entry.Atencion != ""){
                dropdown_atencion.append($('<option></option>').attr('value', entry.Atencion).text(entry.Atencion));
            }
        })
    });
}


function asignar_atencion(valor){
    const url = '/buscar-empresas';

    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            empresa = entry.Empresa;

            if(empresa == valor){
                if(entry.Atencion == ""){
                    $('#atencion').val("");
                }
                else{
                    $('#atencion').val(entry.Atencion);
                }
            }
        })
    });
}


function buscar_pais_puertos_origen(){
    let pais_origen = $('#pais_origen').val();
    let dropdown_pais_origen = $('#pais_origen');

    let carga = $('#carga').val();
    let dropdown_carga = $('#carga');

    let lugar_carga = $('#lugar_carga').val();
    let dropdown_lugar_carga = $('#lugar_carga');

    if(pais_origen == null || pais_origen == ""){    
        dropdown_pais_origen.empty();
        dropdown_pais_origen.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_pais_origen.prop('selectedIndex', 0);
    }

    if(carga == null || carga == ""){
        dropdown_carga.empty();
        dropdown_carga.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_carga.prop('selectedIndex', 0);
    }

    if(lugar_carga == null || lugar_carga == ""){
        dropdown_lugar_carga.empty();
        dropdown_lugar_carga.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_lugar_carga.prop('selectedIndex', 0);
    }

    let url = '/buscar-puertos';
    let pais = "";
    let puerto = "";

    $.getJSON(url, function (data) {
        data.map(function callback(value, index, array){
            let paises = value.Pais;
            let puertos = value.Puerto;

            if(paises != pais){
                pais = paises;
                dropdown_pais_origen.append($('<option></option>').attr('value', pais).text(pais));
            }

            if(puertos != puerto){
                puerto = puertos;
                dropdown_carga.append($('<option></option>').attr('value', puerto).text(puerto));
                dropdown_lugar_carga.append($('<option></option>').attr('value', puerto).text(puerto));
            }
        })
    });
}


function asignar_lugar_carga(valor){
    let carga = $('#carga').val();
    let dropdown_carga = $('#carga');

    let lugar_carga = $('#lugar_carga').val();
    let dropdown_lugar_carga = $('#lugar_carga');

    if(carga == null || carga == "" || carga != ""){
        dropdown_carga.empty();
        dropdown_carga.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_carga.prop('selectedIndex', 0);
    }

    if(lugar_carga == null || lugar_carga == "" || lugar_carga != ""){
        dropdown_lugar_carga.empty();
        dropdown_lugar_carga.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_lugar_carga.prop('selectedIndex', 0);
    }

    let url = '/buscar-puertos';
    let puerto = "";

    $.getJSON(url, function (data) {
        data.map(function callback(value, index, array){
            let paises = value.Pais;
            let puertos = value.Puerto;

            if(paises == valor){
                if(puertos != puerto){
                    puerto = puertos;

                    dropdown_carga.append($('<option></option>').attr('value', puerto).text(puerto));
                    dropdown_lugar_carga.append($('<option></option>').attr('value', puerto).text(puerto));
                }
            }
        })
    });
}


function buscar_pais_puertos_destino(){
    let pais_destino = $('#pais_destino').val();
    let dropdown_pais_destino = $('#pais_destino');

    let descarga = $('#descarga').val();
    let dropdown_descarga = $('#descarga');
    
    let lugar_descarga = $('#lugar_descarga').val();
    let dropdown_lugar_descarga = $('#lugar_descarga');

    if(pais_destino == null || pais_destino == ""){    
        dropdown_pais_destino.empty();
        dropdown_pais_destino.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_pais_destino.prop('selectedIndex', 0);
    }

    if(descarga == null || descarga == ""){
        dropdown_descarga.empty();
        dropdown_descarga.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_descarga.prop('selectedIndex', 0);
    }

    if(lugar_descarga == null || lugar_descarga == ""){
        dropdown_lugar_descarga.empty();
        dropdown_lugar_descarga.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_lugar_descarga.prop('selectedIndex', 0);
    }

    let url = '/buscar-puertos';
    let pais = "";
    let puerto = "";

    $.getJSON(url, function (data) {
        data.map(function callback(value, index, array){
            let paises = value.Pais;
            let puertos = value.Puerto;

            if(paises != pais){
                pais = paises;
                dropdown_pais_destino.append($('<option></option>').attr('value', pais).text(pais));
            }

            if(puertos != puerto){
                puerto = puertos;
                dropdown_descarga.append($('<option></option>').attr('value', puerto).text(puerto));
                dropdown_lugar_descarga.append($('<option></option>').attr('value', puerto).text(puerto));
            }

            
        })
    });
}


function asignar_lugar_descarga(valor){
    let descarga = $('#descarga').val();
    let dropdown_descarga = $('#descarga');

    let lugar_descarga = $('#lugar_descarga').val();
    let dropdown_lugar_descarga = $('#lugar_descarga');

    if(descarga == null || descarga == "" || descarga != ""){
        dropdown_descarga.empty();
        dropdown_descarga.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_descarga.prop('selectedIndex', 0);
    }

    if(lugar_descarga == null || lugar_descarga == "" || lugar_descarga != ""){
        dropdown_lugar_descarga.empty();
        dropdown_lugar_descarga.append('<option selected="true" value="">Seleccionar</option>');
        dropdown_lugar_descarga.prop('selectedIndex', 0);
    }

    let url = '/buscar-puertos';
    let puerto = "";

    $.getJSON(url, function (data) {
        data.map(function callback(value, index, array){
            let paises = value.Pais;
            let puertos = value.Puerto;

            if(paises == valor){
                if(puertos != puerto){
                    puerto = puertos;

                    dropdown_descarga.append($('<option></option>').attr('value', puerto).text(puerto));
                    dropdown_lugar_descarga.append($('<option></option>').attr('value', puerto).text(puerto));
                }
            }
        })
    });
}


function total_cotizacion(){
    let incoterm = $('#incoterm').val();
    let operacion = $("#operacion").val();
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    
    // Totales
    let subtotal_costos = 0;
    let subtotal_ingresos = 0;

    let iva_costos = 0;
    let iva_ingresos = 0;

    let total_costos = 0;
    let total_ingresos = 0;

    let ganancia = 0;

    let porc_margen_contribucion = 0;
    let porc_margen_unitario = 0;

    let total_impuestos_importacion = Number($("#total_impuestos_importacion").val());
    let valor_carga = Number($("#valor_carga").val());

    // Subtotal Costos //
    let total_costo_gasto_logistica = 0;
    let total_costo_gasto_origen = 0;
    let total_costo_gasto_destino = 0;
    

    $("input[id^='subtotal_costo_gasto_logistica_']").each(function () {
        total_costo_gasto_logistica += Number($(this).val());
    });

    $("input[id^='subtotal_costo_gasto_origen_']").each(function () {
        total_costo_gasto_origen += Number($(this).val());
    });

    $("input[id^='subtotal_costo_gasto_destino_']").each(function () {
        total_costo_gasto_destino += Number($(this).val());
    });


    if(incoterm == "DDP" || operacion == "Comercialización"){
        subtotal_costos = total_costo_gasto_logistica + valor_carga + total_impuestos_importacion + total_costo_gasto_origen + total_costo_gasto_destino;
    }
    else{
        subtotal_costos = total_costo_gasto_logistica + total_costo_gasto_origen + total_costo_gasto_destino;
    }

    $("#subtotal_costos").val(formatter.format(subtotal_costos));
    // Subtotal Costos //


    // Subtotal Ingresos //
    let total_ingreso_gasto_logistica = 0;
    let total_ingreso_gasto_origen = 0;
    let total_ingreso_gasto_destino = 0;

    $("input[id^='subtotal_ingreso_gasto_logistica_']").each(function () {
        total_ingreso_gasto_logistica += Number($(this).val());
    });

    $("input[id^='subtotal_ingreso_gasto_origen_']").each(function () {
        total_ingreso_gasto_origen += Number($(this).val());
    });

    $("input[id^='subtotal_ingreso_gasto_destino_']").each(function () {
        total_ingreso_gasto_destino += Number($(this).val());
    });

    if(incoterm == "DDP" || operacion == "Comercialización"){
        subtotal_ingresos = total_ingreso_gasto_logistica + valor_carga + total_impuestos_importacion + total_ingreso_gasto_origen + total_ingreso_gasto_destino;
    }
    else{
        subtotal_ingresos = total_ingreso_gasto_logistica + total_ingreso_gasto_origen + total_ingreso_gasto_destino;
    }
    

    $("#subtotal_ingresos").val(formatter.format(subtotal_ingresos));
    // Subtotal Ingresos //

    //Importacion
    if(incoterm == "DDP" || operacion == "Comercialización"){
        iva_costos = subtotal_costos * 0.16;
        iva_ingresos = subtotal_ingresos * 0.16;
    }
    else{
        iva_costos = total_costo_gasto_destino * 0.16;
        iva_ingresos = total_ingreso_gasto_destino * 0.16;
    }
    

    //Exportacion
    if (operacion == "Exportación"){
        iva_costos = total_costo_gasto_origen * 0.16;
        iva_ingresos = total_ingreso_gasto_origen * 0.16;
    }

    $("#iva_costos").val(formatter.format(iva_costos));
    $("#iva_ingresos").val(formatter.format(iva_ingresos));

    total_costos = subtotal_costos + iva_costos;
    $("#total_costos").val(formatter.format(total_costos));

    total_ingresos = subtotal_ingresos + iva_ingresos;
    $("#total_ingresos").val(formatter.format(total_ingresos));


    // Ganancia //
    let total_margen_contribucion_gasto_logistica = 0;
    let total_margen_contribucion_gasto_origen = 0;
    let total_margen_contribucion_gasto_destino = 0;

    $("input[id^='subtotal_margen_contribucion_gasto_logistica_']").each(function () {
        total_margen_contribucion_gasto_logistica += Number($(this).val());
    });

    $("input[id^='subtotal_margen_contribucion_gasto_origen_']").each(function () {
        total_margen_contribucion_gasto_origen += Number($(this).val());
    });

    $("input[id^='subtotal_margen_contribucion_gasto_destino_']").each(function () {
        total_margen_contribucion_gasto_destino += Number($(this).val());
    });

    ganancia = total_margen_contribucion_gasto_logistica + total_margen_contribucion_gasto_origen + total_margen_contribucion_gasto_destino;
    $("#ganancia").val(formatter.format(ganancia));
    // Ganancia //

    
    porc_margen_contribucion = (ganancia / subtotal_ingresos) * 100;
    porc_margen_unitario = (subtotal_ingresos / subtotal_costos -1) *100;

    if(subtotal_costos == 0 && subtotal_ingresos == 0){
        porc_margen_contribucion = 0;
        porc_margen_unitario = 0;
    }

    if(subtotal_costos > 0 && subtotal_ingresos <= 0){
        porc_margen_contribucion = -100;
        porc_margen_unitario = -100;
    }

    if(subtotal_costos <= 0 && subtotal_ingresos > 0){
        porc_margen_contribucion = 100;
        porc_margen_unitario = 100;
    }

    // Porcentaje margen contribucion //
    $("#porc_margen_contribucion").val("%"+ parseFloat(porc_margen_contribucion).toFixed(2));

    // Porcentaje Margen Unitario //
    $("#porc_margen_unitario").val("%"+parseFloat(porc_margen_unitario).toFixed(2));
    
}


function validar_fechas(){
    fecha = document.getElementById('fecha').value;
    vigencia = document.getElementById('vigencia').value;
    if(vigencia < fecha){ 
        Swal.fire({
            type: 'warning',
            text: 'La vigencia debe ser mayor a la fecha.',
        })
        
     document.getElementById("vigencia").value = "dd/mm/aaaa";
    }
}


function habilitar_ft(valor, id){
    let lote_carga = $("#lote_carga").val();
    if (valor != "MAR-FTE-INT-ING" || lote_carga != "FCL"){
        $("#ft_gasto_logistica_"+id).hide();
        $('#ft_gasto_logistica_'+id).removeAttr('required');
        document.getElementById("ft_gasto_logistica_"+id).value = "";

        $('#ft_gasto_logistica_'+id).attr("readonly", true);
        document.getElementById("unidad_gasto_logistica_"+id).value = "";
    }
    else{
        $('#ft_gasto_logistica_'+id).show();
        $('#ft_gasto_logistica_'+id).removeAttr('readonly');
        $('#ft_gasto_logistica_'+id).removeAttr('hidden');
        $('#ft_gasto_logistica_'+id).attr('required');

        document.getElementById("unidad_gasto_logistica_"+id).value = "";
    }
}


function validar_despacho_y_seguro(){
    // Despacho Destino
    if( $('#check_despacho_origen').prop('checked') ) {
        document.getElementById("despacho_origen").value = "true";
    }
    else{
        document.getElementById("despacho_origen").value = "false";
    }

    // Despacho Destino
    if( $('#check_despacho_destino').prop('checked') ) {
        document.getElementById("despacho_destino").value = "true";
    }
    else{
        document.getElementById("despacho_destino").value = "false";
    }

    // Seguro
    if( $('#check_seguro').prop('checked') ) {
        document.getElementById("seguro").value = "true";
    }
    else{
        document.getElementById("seguro").value = "false";
    }
}


function validar_cotizacion(){
    $('#formulario').validate({
        ignore: [],
        invalidHandler: function () {
            setTimeout(function () {
                $('.nav-tabs a small.required').remove();
                $('.tab-content.tab-validate .tab-pane:has(select.error)')
                    .each(function () {
                        var id = $(this).attr('id');
                        $('.nav-tabs').find('a[href^="#' + id + '"]').append(
                            '<small class="required">***</small>');
                    });

                $('.tab-content.tab-validate .tab-pane:has(input.error)')
                    .each(function () {
                        var id = $(this).attr('id');
                        $('.nav-tabs').find('a[href^="#' + id + '"]').append(
                            '<small class="required">***</small>');
                    });
            });
        }
    });
}


function SoloNumeros(e){
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
    return true;
     
    return /\d/.test(String.fromCharCode(keynum));
}


$(document).ready(function (a) {
// Formato de Input Valor de Carga
    //$('#valor_carga').maskNumber(); // Con decimales "0,000.00"
    //$('#valor_carga').maskNumber({   //  Sin decimales "0,000"
    //    integer: true
    //});
// Formato de Input Valor de Carga   
let pais_origen = $('#pais_origen').val();
let pais_destino = $('#pais_destino').val();
let carga = $('#carga').val();
let lugar_carga = $('#lugar_carga').val();

buscar_empresa();
buscar_pais_puertos_origen();
buscar_pais_puertos_destino();

/* if(pais_origen == null){
    buscar_pais_puertos_origen();
}
else{
    if(carga == null){
        asignar_lugar_carga(pais_origen);
    }
}

if(pais_destino == null){
    buscar_pais_puertos_destino();
}
else{
    asignar_lugar_descarga(pais_destino);
} */

// Asiganar fecha actual
    let fecha_edit = $("#fecha_edit").val();
    let fecha = new Date(); //Fecha actual
    let mes = fecha.getMonth()+1; //obteniendo mes
    let dia = fecha.getDate(); //obteniendo dia
    let ano = fecha.getFullYear(); //obteniendo año

    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10

    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    
    if(fecha_edit){
        document.getElementById('fecha_edit').value = fecha_edit;
    }
    else{
        document.getElementById('fecha_create').value = ano + "-" + mes + "-" + dia;
    }
// Asiganar fecha actual


// Mostrar datos correspondientes de Opciones
    let medio_transporte = $("#medio_transporte").val();
    if (medio_transporte == "Marítimo") {
        // Asignar Lotes
            $("#AER").hide();
    
            $("#LTL").hide();
    
            $("#FTL").hide();
    
            $("#LCL").show();
    
            $("#FCL").show();
    
        // Asignar Incoterm
            $("#EXW").show();
            $("#FAS").show();
            $("#FOB").show();
            $("#CFR").show();
            $("#CIF").show();
            $("#DAP").show();
            $("#DDP").show();
            $("#FCA").show();
    
            $("#CPT").hide();
            $("#CIP").hide();
            $("#DAT").hide();
    
    
        // Cambiar nombre label
            document.getElementById('transporte_carga').innerHTML = 'Puerto Carga:';
            document.getElementById('transporte_descarga').innerHTML = 'Puerto Descarga:';
        
        // Mostrar Logistica Internacional
            $(".gastos_logistica_internacional").show();
    }
    
    if (medio_transporte == "Terrestre") {
    // Asignar Lotes
        $("#AER").hide();

        $("#LTL").show();

        $("#FTL").show();

        $("#LCL").hide();

        $("#FCL").hide();

    // Asignar Incoterms
        $("#EXW").show();
        $("#FCA").show();
        $("#CPT").show();
        $("#CIP").show();
        $("#DAT").show();
        $("#DAP").show();
        $("#DDP").show();

        $("#FAS").hide();
        $("#FOB").hide();
        $("#CFR").hide();
        $("#CIF").hide();

    // Cambiar nombre label
        document.getElementById('transporte_carga').innerHTML = 'Aduana Carga:';
        document.getElementById('transporte_descarga').innerHTML = 'Aduana Descarga:';

    // Ocultar Logistica Internacional
        /* $(".gastos_logistica_internacional").hide(); */

    }

    if (medio_transporte == "Aéreo") {
    // Asignar Lotes
        $("#AER").show();

        $("#LTL").hide();

        $("#FTL").hide();

        $("#LCL").hide();

        $("#FCL").hide();

    // Asignar Incoterms
        $("#EXW").show();
        $("#FCA").show();
        $("#CPT").show();
        $("#CIP").show();
        $("#DAT").show();
        $("#DAP").show();
        $("#DDP").show();

        $("#FAS").hide();
        $("#FOB").hide();
        $("#CFR").hide();
        $("#CIF").hide();

    // Cambiar nombre label
        document.getElementById('transporte_carga').innerHTML = 'Aereopuerto Carga:';
        document.getElementById('transporte_descarga').innerHTML = 'Aereopuerto Descarga:';

    // Mostrar Logistica Internacional
        $(".gastos_logistica_internacional").show();
    }
// Mostrar datos correspondientes de Opciones


// Mostrar datos correspondientes de Caracteristicas
    let lote_carga = $("#lote_carga").val();

    // Asignar Caracteristicas 
    if (lote_carga == "AER") {
        // OCULTAR //
        $(".embarque_row").hide();
        $("#cantidad_embarque").val("");
        $("#unidad_embarque").val("");

        $(".wm_row").hide();
        $("#cantidad_wm").val("");
        $("#unidad_wm").val("");

        $(".demoras").hide();

        // Unidades
        $("#tons").hide();
        $("#m3").hide();
        $("#tons").val("");
        $("#m3").val("");

        // MOSTRAR //
        $('.pv_row').attr('hidden', false);
        $('.pv_row').removeAttr('style');

        $('.pf_row').attr('hidden', false);
        $('.pf_row').removeAttr('style');
        
        $('.almacenaje').attr('hidden', false);
        $('.almacenaje').removeAttr('style');

        $('.estadias').attr('hidden', false);
        $('.estadias').removeAttr('style');

        // Unidades
        $('#kg').show();
        $('#cm3').show();

    }

    if (lote_carga == "LCL" || lote_carga == "LTL") {
        // OCULTAR //
        $(".pv_row").hide();
        $("#cantidad_peso_volumen").val("");
        $("#unidad_peso_volumen").val("");

        $(".pf_row").hide();
        $("#cantidad_peso_facturable").val("");
        $("#unidad_peso_facturable").val("");

        $(".embarque_row").hide();
        $("#cantidad_embarque").val("");
        $("#unidad_embarque").val("");

        $(".demoras").hide();

        $("#kg").hide();
        $("#cm3").hide();
        $("#kg").val("");
        $("cm3").val("");

        // MOSTRAR //
        $('.wm_row').attr('hidden', false);
        $('.wm_row').removeAttr('style');

        if (lote_carga != "LTL"){
            $('.almacenaje').attr('hidden', false);
            $('.almacenaje').removeAttr('style');
        }
        else{
            $(".almacenaje").hide();
        }

        $('.estadias').attr('hidden', false);
        $('.estadias').removeAttr('style');

        $("#tons").show();
        $("#m3").show();
    }

    if (lote_carga == "FCL") {
        // OCULTAR //
        $("#paquetes_medidas_modal").hide();

        $(".peso_row").hide();
        $('#cantidad_peso').removeAttr('required');
        $('#unidad_peso').removeAttr('required');

        $(".volumen_row").hide();
        $('#cantidad_volumen').removeAttr('required');
        $('#unidad_volumen').removeAttr('required');
        
        //$('#agregar_paquetes').attr('disabled', true);

        $(".pv_row").hide();
        $("#cantidad_peso_volumen").val("");
        $("#unidad_peso_volumen").val("");

        $(".pf_row").hide();
        $("#cantidad_peso_facturable").val("");
        $("#unidad_peso_facturable").val("");

        $(".wm_row").hide();
        $("#cantidad_wm").val("");
        $("#unidad_wm").val("");

        // Unidades
        $("#kg").hide();
        $("#cm3").hide();
        $("#kg").val("");
        $("cm3").val("");

        // MOSTRAR //
        $('#paquetes_ft_modal').attr('hidden', false);
        $('#paquetes_ft_modal').removeAttr('style');

        $('.embarque_row').attr('hidden', false);
        $('.embarque_row').removeAttr('style');

        $('.almacenaje').attr('hidden', false);
        $('.almacenaje').removeAttr('style');

        $('.estadias').attr('hidden', false);
        $('.estadias').removeAttr('style');

        $('.demoras').attr('hidden', false);
        $('.demoras').removeAttr('style');        

        // Unidades 
        $("#tons").show();
        $("#m3").show();
    }
    else{
        $(".peso_row").show();
        $(".volumen_row").show();

        $('#paquetes_medidas_modal').attr('hidden', false);
        $('#paquetes_medidas_modal').removeAttr('style');

        $("#paquetes_ft_modal").hide();
    }

    if (lote_carga == "FTL") {
        // OCULTAR //
        $(".pv_row").hide();
        $("#cantidad_peso_volumen").val("");
        $("#unidad_peso_volumen").val("");

        $(".pf_row").hide();
        $("#cantidad_peso_facturable").val("");
        $("#unidad_peso_facturable").val("");

        $(".wm_row").hide();
        $("#cantidad_wm").val("");
        $("#unidad_wm").val("");

        $(".embarque_row").hide();
        $("#cantidad_embarque").val("");
        $("#unidad_embarque").val("");

        $(".demoras").hide();

        // MOSTRAR //
        $('.estadias').attr('hidden', false);
        $('.estadias').removeAttr('style');
    }
// Mostrar datos correspondientes de Caracteristicas


// Solo lectura de inputs //
    $('.lectura').find('input, label').attr('readonly', 'readonly');
    $('.no_editar').find('input, select').attr('readonly', 'readonly');
// Solo lectura de inputs //


// Deshabilitar Inputs //
    $('.deshabilitar').find('select').attr('readonly', 'readonly');
// Deshabilitar Inputs //


// Editar Input //
    $('.editar').find('input').removeAttr('readonly')
// Editar //


/* // Habilitar Textarea // 
let status = $("#status").val();
    
if(status == "Corregir"){
    $('#correcciones').attr('hidden', false);
    $('#correcciones').removeAttr('style');
}
else{
    $('#correcciones').hide();
    document.getElementById("correcciones").value = "";
}
// Habilitar Textarea // */


// Validar Tipo de Cambio Estimado de Impuestos
if($('#moneda_estimado_impuesto').val() == "USD"){ // Si la moneda es USD
    $('#tipo_cambio').attr('readonly', true);
}
else{
    $('#tipo_cambio').attr('readonly', false);
}
// Validar Tipo de Cambio Estimado de Impuestos


operaciones_gastos_logistica();
operaciones_gastos_origen();
operaciones_gastos_destino();
operaciones_gastos_pagados_cliente();
operaciones_servicios_opcionales();

calcular_IGI();
calcular_valor_aduana();
calcular_total_aduana();
});

