// let titulo = document.querySelector ('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector ('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDenumerosSorteados = [];
let numeroRange = 10;
let numeroSecreto = geraNumeroAleatorio ();
let numeroTentativas = 1;

exibirMensagemInicial(); 

function verificarChute() {
    let numeroChute = document.querySelector ('input').value;
    // console.log ('O botão de chute foi clicado');
    console.log (numeroSecreto);
    if (numeroChute > numeroRange) {
        exibirTextoDaTela ('p',`Chute maior que o limite de ${numeroRange}`);
    } else {
    if (numeroChute == numeroSecreto) {
        exibirTextoDaTela ('h1', 'Você acertou!!');
        let palavraTentativas = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentaivas = `Você descobriu o número secreto com ${numeroTentativas} ${palavraTentativas}`;
        exibirTextoDaTela ('p', mensagemTentaivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroChute > numeroSecreto) {
            exibirTextoDaTela ('p', `Número secreto é menor que ${numeroChute}`);
        } else {
            exibirTextoDaTela ('p',`Número secreto é maior que ${numeroChute}`);
        }
        }
    } 
    numeroTentativas++;
    limparCampo();
};


function geraNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroRange +1);
    let quantidadeElementos = listaDenumerosSorteados.length;

    if (quantidadeElementos == numeroRange) {
        listaDenumerosSorteados = [];
    }

    if (listaDenumerosSorteados.includes(numeroEscolhido)) {
        console.log (listaDenumerosSorteados);
        return geraNumeroAleatorio();
    } else {
        listaDenumerosSorteados.push(numeroEscolhido);
        console.log (listaDenumerosSorteados);
        return numeroEscolhido;
    }
};

function limparCampo() {
    numeroChute = document.querySelector('input');
    numeroChute.value = '' ;   
};

function exibirMensagemInicial() {
    exibirTextoDaTela ('h1', 'Jogo do número secreto');
    exibirTextoDaTela ('p', `Escolha um número entre 1 e ${numeroRange}`);
};  

function exibirTextoDaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio ();
    numeroTentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

print('teste')
