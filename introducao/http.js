let http = require("http"); //comando pra habilitar o protocolo HTTP no meu programa
http.createServer(function(requisicao, resposta){
    resposta.end(mensagem);
}).listen(1010); // <-- comando pra criar uma porta de acesso dos usuário ao meu programa
//a porta de acesso criada é 1010, mas pode ser qualquer número que eu queira

//createServer cria o servidor
//listen cria a porta de acesso

//código teste
let mensagem = "Mensagem de teste: Servidor Funcionando?";

//pra acessar o servidor na própria máquina solicitamo na URL do navegador --> localhost: + a porta de acesso
//nesse caso, nossa porta de acesso é 1010