// let nome = 'José da Silva';
// let idade = 27;
// let peso = 83.5;
// let altura = 1.8;
// let plano = true;
// let imc = peso/altura**2;

// console.log(nome + ' tem ' + idade + ' índice de massa corporal de ' + imc.toFixed(2))//


//Forma enxuta:

//Declaração da função
function calculaImc(nome, idade, peso, altura){
    const imc = peso/altura**2;
    // console.log(nome + ' tem ' + idade + ' índice de massa corporal de ' + imc.toFixed(2))
    console.log(`${nome} tem ${idade} anos e índice de massa corporal de ${imc.toFixed(2)}`)
}

//Chamada da função

calculaImc('José da Silva',27,83.5,1.8)