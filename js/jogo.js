var timerId = null;
var tempo_segundos = 0;
var qtd_baloes_inteiros = 0;
var qtd_baloes_estourados = 0;


function carregando_pagina() {
    // localizando o valor da url 
    var url = window.location.search;
    var nivel_jogo = url.replace("?", "");

    //Funções criadas para separação de tarefas.
    tempo_jogo(nivel_jogo);
    criando_baloes(qtd_baloes_inteiros)

}



function tempo_jogo(nivel_jogo) {

    if (nivel_jogo == 1) {
        tempo_segundos = 120;
        document.getElementById('baloes_inteiros').innerHTML = qtd_baloes_inteiros = 80;
        document.getElementById('baloes_estourados').innerHTML = qtd_baloes_estourados = 0;

    }
    if (nivel_jogo == 2) {
        tempo_segundos = 60;
        document.getElementById('baloes_inteiros').innerHTML = qtd_baloes_inteiros = 50;
        document.getElementById('baloes_estourados').innerHTML = qtd_baloes_estourados = 0;

    }
    if (nivel_jogo == 3) {
        tempo_segundos = 30;
        document.getElementById('baloes_inteiros').innerHTML = qtd_baloes_inteiros = 10;
        document.getElementById('baloes_estourados').innerHTML = qtd_baloes_estourados = 0;

    }

    document.getElementById('tempo').innerHTML = tempo_segundos;
    contagem_tempo(tempo_segundos);

}


function contagem_tempo(tempo_segundos) {
    tempo_segundos = tempo_segundos - 1;

    timerId = setTimeout("contagem_tempo(" + tempo_segundos + ")", 1000);

    if (tempo_segundos == -1) {
        clearTimeout(timerId)// parar a execução do tempo!
        game_over();
        return false;
    }

    document.getElementById('tempo').innerHTML = tempo_segundos;


}

function game_over() {
    alert('Fim de jogo!')
}


function criando_baloes(qtd_baloes_inteiros) {
    for (var i = 1; i <= qtd_baloes_inteiros; i++) {
        //cria um novo elemento do tipo 'img' e o armazena em uma varíavel;
        var balao_inteiro = document.createElement("img");
        //Localizando o nó do elemento onde as novas imagens serão anexadas
        document.getElementById('cenario').appendChild(balao_inteiro);
        //atribuindo o endereço da img para a nova tag criada
        balao_inteiro.src = 'img/balao_azul_pequeno.png'
        //Anexando o novo elemento 'img' neste nó localizado
        //Estilizando o elemento tipo 'img' 
        balao_inteiro.style.margin = '10px';

        balao_inteiro.id = 'b' + i;
        //adicionando o evento click ao novo elemento que foi criado do tipo 'img'
        balao_inteiro.addEventListener('click', function () {
            estourar_balao(this)
        });



    }

}

function estourar_balao(e) {
    var id_balao = e.id;
     
    // modificando a imagem balão inteiro para estourado ao click do usuário.
    document.getElementById(id_balao).src = 'img/balao_azul_pequeno_estourado.png';
    
    //Recuperando os valores de baloes inteiros, estourados e armazendo numa variavél.
    var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
    var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;
    
    var pontuacao_baloes_inteiros;
    var pontuacao_baloes_estourados;

    pontuacao_baloes_inteiros = (parseInt(baloes_inteiros) - 1);
    document.getElementById('baloes_inteiros').innerHTML = pontuacao_baloes_inteiros;
   
    pontuacao_baloes_estourados = (parseInt(baloes_estourados) + 1);
    document.getElementById('baloes_estourados').innerHTML = pontuacao_baloes_estourados;

    fim_jogo(pontuacao_baloes_inteiros);
    

}

function fim_jogo(pontuacao_baloes_inteiros){
    var pontuacao_final = pontuacao_baloes_inteiros;
    if(pontuacao_final == 0){
        alert('fim de jogo')
        clearTimeout(timerId)
    }

}

function voltar_pagina_anterior() {
    window.history.back();
}




