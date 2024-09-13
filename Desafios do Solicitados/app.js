// Criar uma função que exibe "Olá, mundo!" no console.

//function olaNoConsole() {
//     console.log ('Olá, mundo!');
// };

// olaNoConsole();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// function olaNoConsole(nome) {
//     nome = prompt ("Qual o seu nome?");
//     console.log (`Olá, ${nome}!`);
// };
// olaNoConsole();

// function olaNoConsole(nome) {
//     console.log (`Olá, ${nome}!`);
// };
// olaNoConsole('Pedro Bozzola');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// function dobraNumeroInformado(numeroInformado) {
//     console.log (parseInt (numeroInformado = numeroInformado * 2));
// }
// dobraNumeroInformado ('2');

//function dobraNumeroInformado(numeroInformado) {
//     return numeroInformado * 2 ;
// };
// let resultadoDobro =  dobraNumeroInformado (2);
// console.log (resultadoDobro);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

// function retornaMediaDeTres(numero1, numero2, numero3) {
//     return (numero1 + numero2 + numero3) / 3;
// };
// let resultadaMedia = retornaMediaDeTres (1, 2, 3);
// console.log (`Média dos números é ${resultadaMedia}!`);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function retornaMaior(numero1, numero2) {
//     if (numero1 > numero2) {
//         return numero1
//     } else {
//         return numero2
//     }
// };
// let maiorNumero  = retornaMaior(3, 2);
// console.log (`Maior numero é o ${maiorNumero}!`);

// function retornaMaior(numero1, numero2) {
//     return numero1 > numero2 ? numero1 : numero2;
// };
// let maiorNumero  = retornaMaior(3, 7);
// console.log (`Maior numero é o ${maiorNumero}!`);

// Criar uma função que recebe um número como parâmetro e 
// retorna o resultado da multiplicação desse número por ele mesmo

// function quadrado(numero) {
//     return numero * numero;
//   }
//   
//   let resultado = quadrado(2);
//   console.log(resultado); 

// function dobroNumero(numero1) {
//     return numero1 * numero1;
// };
// let numeroCalculado  = dobroNumero(3);
// console.log (`Resultado do núumero multiplicado por ele mesmo é ${numeroCalculado}!`);

// CRIAÇÃO E EXECUÇÃO DO PROGRAMA CONFORME VAMOS EVOLUINDO

// alert('Bem vindo ao Jogo do Número secreto');

//let numeroMaximo = 500
//let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//console.log (numeroSecreto);
//let numeroChute;
//let numeroTentativas = 1;

// Verificar se o chute for certo ou não até encontrar o o número secreto

//while (numeroChute != numeroSecreto) {
//    numeroChute = prompt (`Tente adivinhar o número secreto entre 1 e ${numeroMaximo}`);
//
//    if (numeroChute == numeroSecreto) {
//        break;
//    } else {
//        if (numeroChute > numeroSecreto) {
//        alert (`Número secreto é menor que ${numeroChute}`);
//        } else {
//        alert (`Número secreto é maior que ${numeroChute}`);
//        }
//        numeroTentativas++
//    }
//};

//let textoTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
//alert (`Parabéns! Você acertou o número secreto! ${numeroSecreto} com ${numeroTentativas} ${textoTentativa}`);

// if (numeroTentativas > 1) {
//    alert (`Parabéns! Você acertou o número secreto! ${numeroSecreto} com ${numeroTentativas} tentativas`);
// } else {
//     alert (`Parabéns! Você acertou o número secreto! ${numeroSecreto} com ${numeroTentativas} tentativa`);
// }


// TAREFA SOLICITADA EM AULAS ANTERIORES 

// -- Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

//alert ("Boas vindas ao nosso site!");

// -- Declare uma variável chamada nome e atribua a ela o valor "Lua".

//let nomeSatelite = "Lua";
//alert (nomeSatelite);

// -- Crie uma variável chamada idade e atribua a ela o valor 25.

//let idadePessoa = 25;
//alert (idadePessoa);

// -- Defina uma variável numeroDeVendas e atribua a ela o valor 50.

//let numeroDeVendas = 50;
//alert (numeroDeVendas);

// -- Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

//let saldoDisponivel = 1000;
//alert (saldoDisponivel);

// -- Exiba um alerta com o texto "Erro! Preencha todos os campos"

//alert ("Erro! Preencha todos os campos");

// -- Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

//let mensagemDeErro = ("Erro! Preencha todos os campos") ;
//alert (mensagemDeErro);

// -- Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

//let nomeUsuario = (prompt ("Digite o nome do usuário"));
//alert (nomeUsuario);

// -- Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

//let idadeUsuario = (prompt("Informe sua idade, por favor!"));
//alert (idadeUsuario);

// -- Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

//let idadeUsuario = (prompt("Informe sua idade, por favor!"));

//if (idadeUsuario > '18') {
//    alert ("Pode tirar a habilitação!");
//};

// -- Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

// let diaDaSemana = (prompt("Que dia é hoje?"))

// if (diaDaSemana == "Sábado" | diaDaSemana == "Domigo") {
//     alert ("Bom final de Semana")
// } else {
//     alert ("Aguenta firme que o final de semana está próximo");
// };

// -- Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

// let numeroPositivoNegativo = (prompt("Informne um número qualquer!"))

// if (numeroPositivoNegativo > 0) {
//     alert ("Número " + numeroPositivoNegativo + " positivo");
// } else {
//     alert ("Número " + numeroPositivoNegativo + " negativo");
// };

// -- Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

// -- Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// -- Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

// -- Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

// let contador = 1;

// while (contador <= 10) {
//     alert (`Contador acrescentado em ${contador}`);
//     contador++ 
// }

// -- Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

// let contador = 10;
// while (contador >= 0) {
//     console.log(contador);
//     contador--;
// }

// -- Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

// let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

// while (numeroMaximo >= 0) {
//     console.log(numeroMaximo);
//     numeroMaximo--;
// }

// -- Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

// let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
// let contador = 0;

// while (contador <= numeroMaximo) {
//     console.log(contador);
//     contador++
// }

// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

// console.log ('Olá, seja bem vindo');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

// nome = "Pedro Bozzola";
// console.log ("Olá, " + nome);
// console.log (`Olá, ${nome}`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

// nome = "Pedro Bozzola";
// alert ("Olá, " + nome + "!");

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
// Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

// let textoResposta = prompt ("Qual a linguagem de programação que você mais gosta?");
// console.log ("A linguagem informada é a " + textoResposta);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

// let valor1 = 101;
// let valor2 = 102;
// resultado = valor1 + valor2;
// console.log ("A soma de " + valor1 + " e " + valor2 + " É igual a " + resultado );

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

// let valor1 = 101;
// let valor2 = 102;
// resultado = valor1 - valor2;
// console.log ("A subtração entre " + valor1 + " e " + valor2 + " É igual a " + resultado );

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, 
// utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

// let idade;
// idade = prompt ("Por favor, qual sua idade?")
// if (idade > 18) {
//     console.log ("Você é maior de idade com " + idade + " anos");
// };

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
// Use if-else para imprimir a respectiva mensagem.

// let numero = prompt ("Informe um número para eu saber se é positivo ou negativo!");
// if (numero == 0) {
//     console.log ("Número igual a zeros");
// }
//     else {
//         if (numero > 0) {
//             console.log ("O número " + numero + " é positivo");
//         }
//             else {
//             console.log ("O número " + numero + " é negativo");
//             }
//         };


// Use um loop while para imprimir os números de 1 a 10 no console.

// let numeroLoop = 1;
// while (numeroLoop <= 10) {
//     numeroSequencia = numeroLoop++
// alert ("Sequência até 10 é = " + numeroSequencia);
// };

// Crie uma variável "nota" e atribua um valor numérico a ela. 
// Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

// let numero = 0;
// numero = prompt ("Informe a nota da prova!");
// if (numero >= 7) {
//     console.log ("Aluno Aprovado com nota " + numero);
// }
//     else {
//          console.log ("Akuno Reprovado com nota " + numero );
//         };

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

// console.log (Math.random ());

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

// console.log (parseInt (Math.random () * 10 +1));

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

//console.log (parseInt (Math.random () * 1000 +1));



//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
// em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

//function calculaImc(alturaMetros, pesoQuilos) {
//    return valorImc = (pesoQuilos / (alturaMetros * 2));   
//};

//let resultaIMC = calculaImc (1.86, 81);
//console.log (parseInt (resultaIMC));


//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

//function calcularFatorial(numero) {
//    if (numero === 0 || numero === 1) {
//      return 1;
//    }
//    let fatorial = 1;
//    for (let i = 2; i <= numero; i++) {
//      fatorial *= i;
//     console.log ('Index ' + i + ' Fator ' + fatorial);
//    }  
//    return fatorial;
//  };  
//  // Exemplo de uso
//  let numero = 5;
//  let resultado = calcularFatorial(numero);
//  console.log(`O fatorial de ${numero} é ${resultado}`);
//

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o 
//valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.


//function converterDolarParaReal(valorEmDolar) {
//    let cotacaoDolar = 4.80;
//    let valorEmReais = valorEmDolar * cotacaoDolar;
//    return valorEmReais.toFixed(2);
//  }
//  
  // Exemplo de uso
//  let valorEmDolar = 50;
//  let valorEmReais = converterDolarParaReal(valorEmDolar);
//  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
//

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
//utilizando altura e largura que serão dadas como parâmetro.

// function calcularAreaPerimetroSalaRetangular(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);
    
//    console.log(`Área da sala: ${area} metros quadrados`);
//    console.log(`Perímetro da sala: ${perimetro} metros`);
//  }
  
  // Exemplo de uso
//  let altura = 3; // em metros
//  let largura = 5; // em metros
//  calcularAreaPerimetroSalaRetangular(altura, largura);
//
  
//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
//utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// function calcularAreaPerimetroSalaCircular(raio) {
 //   let area = Math.PI * raio * raio;
 //   let perimetro = 2 * Math.PI * raio;
    
//    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
//  }
  
  // Exemplo de uso
//  let raio = 4; // em metros
//  calcularAreaPerimetroSalaCircular(raio);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// function mostrarTabuada(numero) {
//     for (let i = 1; i <= 10; i++) {
//       let resultado = numero * i;
//       console.log(`${numero} x ${i} = ${resultado}`);
//     }
//   }
  
  // Exemplo de uso
//   let numero = 7;
//   mostrarTabuada(numero);

// Crie uma lista vazia, com o nome listaGenerica.
//let listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao.
//let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Adicione à lista linguagensDeProgramacao os seguintes elementos: Java, Ruby e GoLang.
//let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
// Lista ao final: ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang']

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

//nomes = ['JavaScript', 'Python', 'Go'];
//console.log(nomes[0]);

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

//nomes = ['JavaScript', 'Python', 'Go'];
//console.log(nomes[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

//nomes = ['JavaScript', 'Python', 'Go'];
//console.log(nomes[2]);


