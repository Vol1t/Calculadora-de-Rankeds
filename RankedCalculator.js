const prompt = require('prompt-sync')();

function rankeds (){
    let vitorias = parseInt(prompt("Por favor informe o seu número de vitorias: "));
    let derrotas = parseInt(prompt("Por favor informe o seu número de derrotas: "));
  

    let resultado = vitorias - derrotas;

    return resultado;
}

function saldoRankeds(){
    let saldo = rankeds();
    let nivel = " "
    switch (true){
        case (saldo >= 0 && saldo <= 10):
            nivel = "Ferro";
            break;
        case (saldo >= 11 && saldo <= 20):
            nivel = "Bronze";
            break;
        case (saldo >= 21 && saldo <= 50):
            nivel = "Prata";
            break;
        case (saldo >= 51 && saldo <= 80):
            nivel = "Ouro";
            break;
        case (saldo >= 81 && saldo <= 90):
            nivel = "Diamante";
            break;
        case (saldo >= 91 && saldo <= 100):
            nivel = "Lendario";
            break;
        case (saldo >= 101):
            nivel = "Imortal"
            break;

        default:
            nivel = "Indeterminado"
    }
    if(saldo >= 0 || saldo >=101){
        console.log (`O herói tem um saldo de: ${saldo} vitorias, e está no nível: ${nivel}`)
    }else{
        console.log (`O herói não possui vitórias o suficiente portanto seu nível é: ${nivel}`)
    }
    
}

saldoRankeds();