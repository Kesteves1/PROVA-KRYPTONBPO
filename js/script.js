$(document).ready(function () { //quando a página estiver pronta chama realiza os processos abaixo
    var carros;
    var motores;

    $('#buttonC').on('click', function () { //Remove a Classe d-none que oculta o campo
        $('#btnAddCars').removeClass('d-none');
    });

    $('#addCars').on('click', function () { //Remove a Classe d-none que oculta o campo
        $('#dvAddCars').removeClass('d-none');
        $('#txtCriaCarro').removeClass('d-none');
        $('#btnCriaCarro').removeClass('d-none');
        $('#dvRemoveCarro').addClass('d-none');
    });



    var urlStr = 'https://apiintranet.kryptonbpo.com.br/test-dev/exercise-1'; //salva a url API em uma variável

    $.ajax({
        url: urlStr,
        type: 'get',
        dataType: "json",
        success: function (data) {
            carros = data.carros;

            motores = data.motores;
            for (var i = 0; i < carros.length; i++) {
                $('#select').append('<option value=' + (carros[i]['id']) + '>' + (carros[i]["modelo"]) + '</option>');
            }
        },
        error: function (error) {
            console.log(error);
        }
    });

    $('#btnCriaCarro').on('click', function () {

        if ($('#txtMarcaCriaCarro').val() == '' || $('#txtCorCriaCarro').val() == '' || $('#txtModeloCriaCarro').val() == '') {//se o campo estiver vazio retorna alert
            alert('Um ou mais campos obrigatórios não foram preenchidos!');
        } else {
            var slt5 = new Object()
            slt5["id"] = carros.length + 1,
                slt5["marca"] = $('#txtMarcaCriaCarro').val(),
                slt5["modelo"] = $('#txtModeloCriaCarro').val(),
                slt5["cor"] = $('#txtCorCriaCarro').val(),
                slt5["motor_id"] = $('#sltMotor').val()

            $('#select').append('<option value=' + (carros.length + 1) + '>' + (slt5["modelo"]) + '</option>'); // Cria um novo carro no select

            carros.push(slt5);
            $('#txtModeloCriaCarro').val('');
            $('#txtMarcaCriaCarro').val('');
            $('#txtCorCriaCarro').val('');
        }
    });

    $("#select").on('change', function () {
        //Quando na opção Select limpa os campos
        if ($('#select').val() == 'SelecionarCarro') {
            $("#txtMarca").val('');
            $("#txtModelo").val('');
            $("#txtCor").val('');
            $("#txtMotor").val('');
            $("#txtCilindro").val('');
            $("#txtId").val('');
            $("#txtLitragem").val('');
            $("#txtPosicao").val('');
            $("#txtObservacao").addClass('d-none')
        }

        for (var i = 0; i < carros.length; i++) { //Percorre o vetor carros atribuindo cada carro ao seu respectivo input
            if (carros[i]["id"] == parseInt($("#select").val())) {
                $("#txtMarca").val(carros[i]["marca"]);
                $("#txtModelo").val(carros[i]["modelo"]);
                $("#txtCor").val(carros[i]["cor"]);
                $("#txtMotor").val(carros[i]["motor_id"]);

                for (var y = 0; y < motores.length; y++) { //Percorre o vetor motores atribuindo cada motor ao respectivo carro
                    if (carros[i]['motor_id'] == motores[y]['id']) {
                        $("#txtCilindro").val(motores[y]["cilindros"]);
                        $("#txtId").val(motores[y]["id"]);
                        $("#txtLitragem").val(motores[y]["litragem"]);
                        $("#txtPosicao").val(motores[y]["posicionamento_cilindros"]);

                        if (motores[y]["observacao"] != null) {
                            $("#txtObservacao").removeClass('d-none');
                            $("#txtObs").val(motores[y]["observacao"]);
                        } else {
                            $("#txtObservacao").addClass('d-none');

                        }
                    }
                }
            }
        }

    });

    $('#btnRemover').on('click', function () { //Remove do array os carros
        $('#dvAddCars').addClass('d-none');
        $('#dvRemoveCarro').removeClass('d-none');
        var i;
        var valSlt = $('#select').val();

        for (i = 0; i < carros.length; i++) {
            if (carros[i]["id"] == valSlt) {
                carros.splice(i, 1);
            }
        }

        $('#select').empty();
        $('#select').append('<option value="SelecionarCarro">Selecionar Carro</option>');
        for (var i = 0; i < carros.length; i++) {
            $('#select').append('<option value=' + (carros[i]['id']) + '>' + (carros[i]["modelo"]) + '</option>');
        }
        //Limpa os campos
        $('#txtMarca').val('');
        $('#txtModelo').val('');
        $('#txtCor').val('');
        $('#txtMotor').val('');
        $('#txtCilindro').val('');
        $('#txtId').val('');
        $('#txtLitragem').val('');
        $('#txtPosicao').val('');
        $('#txtObs').val('');
        $('#txtObservacao').addClass('d-none');

    });

});
