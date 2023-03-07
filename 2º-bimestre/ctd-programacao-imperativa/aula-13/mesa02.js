
const participanteA = [5, 8, 4, 9, 5];
const participanteB = [8, 7, 8, 6, 8];
const participanteC = [7, 5, 10, 8, 3];

/* Parte 01 - Calcular Media*/

// Nessa primeira parte criei para calcular a media. Basicamente fiz um for ali pra ir somando os itens de dentro da array;
function calculaMedia(array) {
    let soma = 0;
    
    for(let i = 0; i < array.length; i++) {
        soma = soma + array[i];

        // Rodada - soma = soma + array[i];
        // 1º     -  soma = 0 + 5
        // 2º     -  soma = 5 + 8;
        // 3º     -  soma = 13 + 4
        
    }

    return soma / array.length;
}


let resultado1 = calculaMedia(participanteA);
let resultado2 = calculaMedia(participanteB);
let resultado3 = calculaMedia(participanteC);
//console.log(resultado1);
//console.log(resultado2);
//console.log(resultado3);



/* Parte 02 - Indicar a maior nota*/

// Esse aqui eu nao tinha entendido a principio. Mas tipo, basicamente ele vai verificar o primeiro item da array
// com o segundo item; Se o primeiro for maior ele "passa de fase", se o segundo for maior ele "passa de fase";
// Ai quem passar vai comparar com o terceiro item.

function retornaMaior(array) {

    let maiorNota = 0;

    for(let i = 0; i < array.length; i++) {

        if(array[i] > maiorNota) {
            maiorNota = array[i];
        } 

        // const participanteA = [5, 8, 4, 9, 5];
        // 1 rodada
        // array[0] > maiorNota -> Maior Nota é zero. Como é verdadeiro eu atribuo a Maior Nota ao valor da array[0]
        //  5 > 0 -> true, então MaiorNota = 5
        //  array[1] > 5
        //     8 > 5 -> true, então maiorNota = 8    
        // array[2] > 8
        //   4 > 8 -> false, então a maiorNota vai ser manter igual a 8.
        // e por ai vai

        // Deu pra entender ?
    }

    return maiorNota;

}

//console.log(retornaMaior(participanteC));

/* Parte03 - Verificar Vencedor */

// Esse daqui é mais chatinho mesmo. Tem que usar as duas funções de cima para determinar os vencedores
// Tipo vai ter um vencedor para aquele que tiver a maior Nota e um para que tiver a maior Média.



function competicao(array1, array2, array3) {


    // Nessa Array Resultados. Basicamente, vou criar uma array nova com as medias dos resultados de cada participante
    let arrayResultados = [];
    arrayResultados.push(calculaMedia(array1)); // Aqui, vamos supor que a média é 7.3
    arrayResultados.push(calculaMedia(array2)); // Aqui, vamos supor que a média é 6.1
    arrayResultados.push(calculaMedia(array3)); // Aqui, vamos supor que a média é 8.6
    
    // Tipo a nossa função ali de CalculaMedia, ela retorna o valor da media do Participante
    // Ai no primeiro por exemplo retornaria 7.3
    // Ai com o push ele adiciona no ArrayResultados, que é uma array vazia.
    // No primeiro push ele fica assim: arrayResultados = [7.3]
    // No segundo ele fica assim: arrayResultados = [7.3, 6.1]
    // No terceiro e ultima arrayResultados = [7.3, 6.1, 8.8]
    // Ai esse Array Resultados, vai ser assim: arrayResultados = [7.3, 6.1, 8.8]
    // Sim kkk. Tipo ai com essa Array Resultados eu consigo verificar qual foi a maior media dos 3.

    // Ai usa o mesmo principio daquele que retorna o maior.


    let vencedorM1 = 0;

    for(let i = 0; i < arrayResultados.length; i++) {
        
        if(arrayResultados[i] > vencedorM1) {
            vencedorM1 = arrayResultados[i];
        }
        
    }

    /* ----------------------------------------------------- */

    let arrayResultados2 = [];
    arrayResultados2.push(retornaMaior(array1));
    arrayResultados2.push(retornaMaior(array2));
    arrayResultados2.push(retornaMaior(array3));

    let vencedorM2 = 0;

    for(let i = 0; i < arrayResultados2.length; i++) {
        
        if(arrayResultados2[i] > vencedorM2) {
            vencedorM2 = arrayResultados2[i];
        }
    }

    // Aqui em baixo, eu queria tipo, escrever no console. "O vencedor foi o participante B"
    // Eu não consegui fazer isso, so consegui colocar a nota que foi a "vencedora"

    let resposta = 'O vencedor foi ' + vencedorM1 + ' e o vencedor da segunda foi ' + vencedorM2
    return resposta;

}


console.log(competicao(participanteA, participanteB, participanteC));
// Isso acontecia muito comigo, quando eu não conseguia entender algo e ia pesquisar

// Tinha a respostas mas a explicação não dava pra entender.