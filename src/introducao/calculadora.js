function soma(x, y){
    return x + y;
}

function mult (x, y){
    return x * y;
}

function div(x, y){
    return x / y;
}

function sub(x, y){
    return x - y;
}

let nomeDaCalculadora = 'Calculadora V1'; 

/*  Eu posso fazer o módulo de duas formas: 
Primeira forma --> exportando só uma função
Segunda forma --> exportando mais de uma função  */ 


//exportando mais de uma function
module.exports = {
    soma,
    mult,
    div,
    sub,
    nomeDaCalculadora
};


//  primeira forma --> module.exports = mult; --> //fazendo isso eu disponibilizo essa função pra ser usada em qualquer parte do meu programa;
//module.exports = mult;
//melhor dizendo: a exportação dessa function está habilitada pra ser usada em qualquer parte do programa.

//modulo = exportar e receber (importar);