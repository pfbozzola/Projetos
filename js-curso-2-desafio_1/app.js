let header = document.querySelector ('h1');
header.innerHTML = ('Hora do Desafio');

function botaoConsole () {
    console.log ('O botão console clicado');
};

function botaoAlert () {
    console.log ('Eu amo JS');
};

function botaoPrompt () {
    let cidadeVisitada = prompt ('Informe um nome de cidade do Brasil que você já visitou');
    alert (`Estive em ${cidadeVisitada} e lembrei de você`);
};

function botaoSoma () {
    let numeroInteiro01 = parseInt(prompt ('Informe um número inteiro'));
    let numeroInteiro02 = parseInt(prompt ('Informe outro número inteiro'));
    somaTotal = numeroInteiro01 + numeroInteiro02;
    alert (`Soma dos números é igual a ${somaTotal} !`);
};

