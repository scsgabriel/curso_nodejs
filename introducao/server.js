/*o package.json é criado com o comando no terminal, dentro da pasta do programa:
npm init -y (esse comando cria o gerenciador de pacotes do node)
*/

//colocar o prefixo node: antes do modulo pra diferenciar modulos do próprio node dos módulos de terceiros
//então o prefixo node: vem antes da importação do modulo interno do nodejs

//"type": "module",   <<  é a forma do interpretador do google chrome de realizar importação e exportação 
//esse comando é implementado dentro do package;

let calculadora = require("./calculadora");  //em javascript uma variável pode receber uma function.. 
//quando isso acontece, a variável executa a function
console.log(calculadora.div(10, 2));
console.log(calculadora.mult(10, 10));
console.log(calculadora.soma(50, 2));
console.log(calculadora.sub(10, 10));
console.log(calculadora.nomeDaCalculadora);

// HTTP --> é um protocolo de transfência de dados 
// Aqui temos o envio de requisiçóes aos servidores (entre usuários e servidores)
/*  Exemplo 1: Usuário pede uma pesquisa no google e o servidor do google retorna o que o usuário solicitou
Exemplo 2: Dentro de um site eu clico pra assistir um vídeo e o HTTP envia a requisição do pedido pra 
ver o vídeo ao site e ele me retorna o vídeo que eu solicitei pra ver */ 
