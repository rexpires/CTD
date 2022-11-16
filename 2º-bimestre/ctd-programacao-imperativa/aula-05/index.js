//Nivel 1

function soma (num1, num2) {
    return num1 + num2;
}

function subtracao (num1, num2) {
    return num1 - num2;
}

function multiplicacao (num1, num2) {
    return num1 * num2;
}

function divisao (num1, num2) {
    return num1 / num2;
}

console.log (soma(3,4));
console.log (subtracao(3,4));
console.log (multiplicacao(3,4));
console.log (divisao(3,4));


//Nivel 2

console.log (divisao(10,0));


//Nivel 3

function quadradoDoNumero (num1) {
    return  multiplicacao(num1,num1);
}

console.log (quadradoDoNumero(2));

function mediaDeTresNumeros(num1,num2,num3) {
    let soma = num1+num2+num3;
    return divisao (soma,3);
}
console.log (mediaDeTresNumeros(2,4,6));

function calculaPorcentagem (num1, num2) {
    return multiplicacao(num1, num2) / 100;    
}

console.log (calculaPorcentagem(300,15));

function geradorDePorcentagem(num1,num2) {
    return multiplicacao(num1,100) / num2;
} 

console.log (geradorDePorcentagem(2,200));




function conversao(num1) {
    return num1 * 2.54;
}

console.log (conversao(2))

function conversaoUrl(nome) {
    return "http://www."+nome+".com.br"
}

console.log(conversaoUrl("funcaojs"))

