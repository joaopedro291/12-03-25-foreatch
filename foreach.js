function contar() {          //cria uma função 'contar'
    let numero = 0;          //cria uma variável temporario 'numero' com valor 0
    let txtNumeroFinal = document.getElementById("txtNumeroFinal");     //declara a variavel 'txtNumeroFinal'
    let divNumeros = document.getElementById("divNumeros");             //declara a variavel 'divNumeros' que esta recebendo um elemento da pagina
    divNumeros.innerHTML = "";                                          //apaga o que está escrito nos divNumeros
    for (var i = numero; i <= txtNumeroFinal.value; i++) {              //enquanto o 'i' for = a 'numero' 
        divNumeros.innerHTML += i + "<br />";                           //+= vai fazer com que a variável receba ela mesma + o valor desejado
    }
}

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {                    //código 13 é quando a tecla ENTER é teclada
        contar();                                 //chama a função de contar 
} else {                                          //fecha o bloco de códigos 'if' e executa os códigos abaixo se a primeira condição for falsa
    if (                                          //Linha de código que notifica que não é permitido digitar teclas não numericas
        isNaN(event.key) &&
        event.keyCode != 8 &&                     //Código 8 é quando a tecla BACKSPACE (apagar à esquerda) é teclada
        event.keyCode != 46 &&                    //Código 46 é quando a tecla DELETE é teclada
        event.keyCode != 37 &&                    //Código 37 é quando a tecla SETA PARA ESQUERDA é teclada
        event.keyCode != 38 &&                    //Código 38 é quando a tecla SETA PARA CIMA é teclada
        event.keyCode != 39 &&                    //Código 39 é quando a tecla SETA PARA BAIXO é teclada
        event.keyCode != 40 &&                    //Código 40 é quando a tecla SETA PARA DIREITA é teclada
        event.keyCode != 35 &&                    //Código 35 é quando a tecla END é teclada
        event.keyCode != 36                       //Código 36 é quando a tecla HOME é teclada

    ) {                                          //Código 8 é quando a telca BACKSPACE (apagar à esquerda) é teclada 
        console.log("Não é númerico. KeyCode", event.keyCode);
        divNumeros.innerHTML = "ERRO: Não é permitido digitar letras. Por favor digitar um número.";
    }
}
});

    document.getElementById("txtNumeroFinal").addEventListener('input', function(event) {

      if (this.value.length > 3) {                  //Verifica se passou de 3 caracteres
        console.log("Tem mais de 3 caracteres");
        if (this.value > 999)
            this.value = 999;
        alert("O número máximo permitido é 999!")
    } else {
        console.log("Tem mais de 3 caracteres");    //Envia uma mensagem de erro
        this.value = this.value.substring(0,3);     //Força o valor do texto começando do zero apenas 3 caracteres
      }
});                                                 //Encerra o bloco de códigos