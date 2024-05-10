<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prova KBPO</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container">
        <br>
        <img type="button" src="https://media.glassdoor.com/sqll/3091150/krypton-bpo-squarelogo-1644393818443.png"
            alt="SSM Logo" height="40px" width="auto">
        <center>
            <h1>Prova KBPO</h1>
            <br>
            <button class="btn btn-primary" name="buttonC" id="buttonC">Adicionar Carro</button>
        </center>
    </div>
    <div class="container">
        <div class="d-none" id="btnAddCars" name="btnAddCars">
            <p>Selecione um carro: </p>
            Carro: <select class="form-select" aria-label="Default select example" id="select" name="select">
                <option name="SelecionarCarro" id="SelecionarCarro" value="SelecionarCarro">Selecionar Carro</option>
            </select><br>
            <label>Marca: <input class="input-group mb-3" type="text" name="txtMarca" id="txtMarca"></label>
            <label>Modelo: <input class="input-group mb-3" type="text" name="txtModelo" id="txtModelo"></label>
            <label>Cor: <input class="input-group mb-3" type="text" name="txtCor" id="txtCor"></label>
            <label>Motor: <input class="input-group mb-3" type="text" name="txtMotor" id="txtMotor"></label><br>
            <label>Cilindros: <input class="input-group mb-3" type="text" name="txtCilindro" id="txtCilindro"></label>
            <label>Id: <input class="input-group mb-3" type="text" name="txtId" id="txtId"></label>
            <label>Litragem: <input class="input-group mb-3" type="text" name="txtLitragem" id="txtLitragem"></label>
            <label>Posicionamente do Cilindro: <input class="input-group mb-3" type="text" name="txtPosicao"
                    id="txtPosicao"></label>
            <div class="d-none" id="txtObservacao" name="txtObservacao">
                <label>Observação: <input class="input-group mb-3" type="text" name="txtObs" id="txtObs"></label>
            </div>
            <br>
            <label><button class="btn btn-outline-dark" id="btnRemover" name="btnRemover">🗑</button></label>
            <br>
            <a href="#kt_advanced_search_form" id="addCars" name="addCars">Adicionar carro</a><br>
            <div class="d-none" id="dvAddCars" name="dvAddCars">
                <label class="text-danger">*<input class="input-group mb-3" placeholder="Nome do carro" type="text"
                        name="txtModeloCriaCarro" id="txtModeloCriaCarro"></label>
                <label class="text-danger">*<input class="input-group mb-3" placeholder="Marca" type="text"
                        name="txtMarcaCriaCarro" id="txtMarcaCriaCarro"></label>
                <label class="text-danger">*<input class="input-group mb-3" placeholder="cor" type="text"
                        name="txtCorCriaCarro" id="txtCorCriaCarro"></label>
                <label>Motor<select class="form-control" aria-label="Default select example" placeholder="motor"
                        type="text" name="sltMotor" id="sltMotor">
                        <option class="cm-number" value="1">1</option>
                        <option class="cm-number" value="2">2</option>
                        <option class="cm-number" value="3">3</option>
                        <option class="cm-number" value="4">4</option>
                    </select></label>
                <button class="btn btn-primary" id="btnCriaCarro" name="btnCriaCarro">Criar</button>
            </div>
        </div>
    </div>
    </div>
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="js/jquery-3.6.0.min.js"></script>
        <script src="js/script.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </div>
</body>

</html>
