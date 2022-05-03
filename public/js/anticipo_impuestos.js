$('#moneda').change(function () {
    switch ($('#moneda').val()) {
        case "USD":
            $('#tipo_dta').removeAttr('disabled');
            $('#tipo_cambio').attr('readonly', true);
            $('#tipo_cambio').val('');
            break;

        case "MXN":
            $('#tipo_dta').removeAttr('disabled');
            $('#tipo_cambio').attr('readonly', false);
            break;

        default:
            $('#tipo_dta').attr("disabled", true)
            $('#prv').val("");
            break;
    }
});


function calcular_valor_aduana() {
    let moneda = $('#moneda').val();
    let valor_producto = Number($("#valor_producto").val());
    let tipo_cambio = Number($("#tipo_cambio").val());
    let incrementales = Number($("#incrementales").val());

    if (moneda == "MXN") {
        valor_producto_total = valor_producto * tipo_cambio;
        valor_incrementales_total = incrementales * tipo_cambio;

        calculo = valor_producto_total + valor_incrementales_total;
    } else {
        calculo = valor_producto + incrementales;
    }

    resultado = (calculo == null || calculo == undefined || calculo == "" || isNaN(calculo)) ? 0 : calculo;

    $("#valor_aduana").val(parseFloat(resultado).toFixed(2));
}


function calcular_otros_impuestos() {
    valor = $('#tipo_dta').val()

    valor_aduana = Number($("#valor_aduana").val());
    igi = Number($("#igi").val());
    prv = Number($("#prv").val());

    switch (valor) {
        case "Variable":
            $("#dta").attr('readonly', true);
            dta = valor_aduana * 0.008;
            break;

        case "Fijo":
            $("#dta").removeAttr('readonly');
            dta = Number($("#dta").val());
            break;

        case "":
            prv = "";
            break;

        default:
            break;
    }

    iva = (valor_aduana + igi + dta) * 0.16;
    total = dta + igi + prv + iva;

    resultado = (total == null || total == undefined || total == "" || isNaN(total)) ? 0 : total;

    $("#dta").val(parseFloat(dta).toFixed(2));
    $("#iva").val(parseFloat(iva).toFixed(2));
    $("#total_impuestos").val(parseFloat(total).toFixed(2));
}


$( document ).ready(function() {
    $('#empresa').autocomplete({
        source: function (request, response) {
            empresa = $('#empresa').val();

            var url = "/api/datos_bancarios";
            $.ajax({
                url: url,
                dataType: "json",
                method: 'get',
                data: {
                    name_startsWith: empresa,
                    type: 'empresa',
                    row_num: 1
                },
                success: function (data) {
                    response($.map(data, function (item) {
                        var code = item.split("|");
                        return {
                            label: code[0],
                            value: code[0],
                            data: item
                        }
                    }));
                }
            });
        },
        autoFocus: true,
        minLength: 0,
        select: function (event, ui) {
            var names = ui.item.data.split("|");

            $('#banco').val(names[1]);
            $('#sucursal').val(names[2]);
            $('#cuenta').val(names[3]);
            $('#clabe').val(names[4]);
            $('#referencia').val(names[5]);
        }
    });

    switch ($('#moneda').val()) {
        case "USD":
            $('#tipo_dta').removeAttr('disabled');
            $('#tipo_cambio').attr('readonly', true);
            $('#tipo_cambio').val('');
            break;

        case "MXN":
            $('#tipo_dta').removeAttr('disabled');
            $('#tipo_cambio').attr('readonly', false);
            break;

        default:
            $('#tipo_dta').attr("disabled", true)
            $('#prv').val("");
            break;
    }
});