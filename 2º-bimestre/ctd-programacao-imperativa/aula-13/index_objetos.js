/* ----------------------  OBJETOS LITERAIS  --------------------- */

// Tipo essa é uma variavel Jogador
let jogadorFut = {
    nome: "Vini Jr", // aqui tem o nome
    idade: 22, // idade
    ativo: true, // se esta jogando
    saudacao: function() {
        return 'Olá sou o Vini Jr';
    } // e uma função
};


//console.log(jogadorFut.nome); // Aqui eu coloquei pra exibir o nome do jogador da variavel jogadorFut
//console.log(jogadorFut.saudacao()); // Aqui ele chama a função que tem dentro

/* ----------------------  Construtores  --------------------- */

// Esse aq é construtores.
// Voce meio que cria uma função para criar uma variavel

// Por exemplo, tem essa função de jogador, ele vai receber um nome e uma idade
// Eu posso passar varis coisas aqui
function Jogador (nome, idade, qtdGols, clube){

    this.nome = nome;
    this.idade = idade;
    this.qtdGols = qtdGols;
    this.clube = clube;
}


// Aqui to criando uma variavel novoJogador
// Ai basicamente vou chamar ele através desse comando "new"
// Ai eu passo a função com o nome e idade que quero adicionar
let novaJogador = new Jogador('Neymar', 30, 78, 'PSG');
let novaJogador2 = new Jogador('Alisson', 29, 1, 'Liverpool');
// Posso criar varios jogadores também 

let novaJogador3 = new Jogador('Richarlison', 25, 41, 'Tottenham');
// E quando eu não especifico, ele retorna tudo. Esse negocio vamos ver também. Isso se chama JSON 
// Sim 


console.log(novaJogador);
console.log(novaJogador3);

