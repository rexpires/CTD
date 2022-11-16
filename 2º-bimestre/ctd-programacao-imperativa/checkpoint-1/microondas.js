// Integrantes Sala 6:
// Isaias Moresco
// Joab Gomes
// Leandro Amaral
// Renan Pires
// Valter Martins


const readlineSync = require('readline-sync');
let microondas = (opcao, tempo) => {
    console.log(
        "~~~~~~~~~~~[MENU]~~~~~~~~~~" + "\n" +
        "1 = Pipoca      10 segundos" + "\n" +
        "2 = Macarrão    08 segundos" + "\n" +
        "3 = Carne       15 segundos" + "\n" +
        "4 = Feijão      12 segundos" + "\n" +
        "5 = Brigadeiro  08 segundos" + "\n" +
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~" + "\n");

    opcao = Number(readlineSync.question(`Escolha o prato desejado: `));
    while ((opcao !== 1) && (opcao !== 2) && (opcao !== 3) && (opcao !== 4) && (opcao !== 5)) {
        opcao = Number(readlineSync.question(`Escolha o prato desejado: `));
        
    }
    switch (opcao) {
        case 1:
            const tempoPipoca = 10;
            console.log(`Você escolheu pipoca!`);
            tempo = Number(readlineSync.question(`Defina o tempo desejado: `));
            console.log(`Seu prato ficará pronto em  ${tempo}  segundos!`);
            for(let i = tempo ; i >= 0; i--) {
                console.log(`tempo: ${i}`);
            }
            if ((tempo >= (2 * tempoPipoca)) && (tempo < (3 * tempoPipoca))) {
                console.log("A comida queimou");
                console.log("Prato pronto, bom apetite!!");
            } else if (tempo < tempoPipoca) {
                console.log("Tempo insuficiente");
                console.log("Prato pronto, bom apetite!!");
            } else if (tempo >= (3 * tempoPipoca)) {
                console.log("KABBUUMM!!");
                console.log("Prato pronto, bom apetite!!");
            } else {
                console.log("Prato pronto, bom apetite!!");
            }
            break;
        case 2:
            const tempoMacarrao = 8;
            console.log(`Você escolheu Macarrão!`);
            tempo = Number(readlineSync.question(`Defina o tempo desejado: `));
            console.log(`Seu prato ficará pronto em  ${tempo}  segundos!`);
            for(let i = tempo ; i >= 0; i--) {
                console.log(`tempo: ${i}`);
            }
            if ((tempo >= (2 * tempoMacarrao)) && (tempo < (3 * tempoMacarrao))) {
                console.log("A comida queimou");
                console.log("Prato pronto, bom apetite!!");
            } else if (tempo < tempoMacarrao) {
                console.log("Tempo insuficiente");
                console.log("Prato pronto, bom apetite!!");
            } else if (tempo >= (3 * tempoMacarrao)) {
                console.log("KABBUUMM");
                console.log("Prato pronto, bom apetite!!");
            } else {
                console.log("Prato pronto, bom apetite!!");
            }
            break;
        case 3:
            const tempoCarne = 15;
            console.log(`Você escolheu carne!`);
            tempo = Number(readlineSync.question(`Defina o tempo desejado: `));
            console.log(`Seu prato ficará pronto em  ${tempo}  segundos!`);
            for(let i = tempo ; i >= 0; i--) {
                console.log(`tempo: ${i}`);
            }
            if ((tempo >= (2 * tempoCarne)) && (tempo < (3 * tempoCarne))) {
                console.log("A comida queimou");
                console.log("Prato pronto, bom apetite!!");
            } else if (tempo < tempoCarne) {
                console.log("Tempo insuficiente");
                console.log("Prato pronto, bom apetite!!");
            } else if (tempo >= (3 * tempoCarne)) {
                console.log("KABBUUMM");
                console.log("Prato pronto, bom apetite!!");
            } else {
                console.log("Prato pronto, bom apetite!!");
            }
            break;
        case 4:
            const tempoFeijao = 12;
            console.log(`Você escolheu feijão!`);
            tempo = Number(readlineSync.question(`Defina o tempo desejado: `));
            console.log(`Seu prato ficará pronto em  ${tempo}  segundos!`);
            for(let i = tempo ; i >= 0; i--) {
                console.log(`tempo: ${i}`);
            }
            if ((tempo >= (2 * tempoFeijao)) && (tempo < (3 * tempoFeijao))) {
                console.log("A comida queimou");
                console.log("Prato pronto, bom apetite!!");
            } else if (tempo < tempoFeijao) {
                console.log("Tempo insuficiente");
                console.log("Prato pronto, bom apetite!!");
            } else if (tempo >= (3 * tempoFeijao)) {
                console.log("KABBUUMM");
                console.log("Prato pronto, bom apetite!!");
            } else {
                console.log("Prato pronto, bom apetite!!");
            }
            break;
        case 5:
            const tempoBrigadeiro = 8;
            console.log(`Você escolheu brigadeiro!`);
            tempo = Number(readlineSync.question(`Defina o tempo desejado: `));
            console.log(`Seu prato ficará pronto em  ${tempo}  segundos!`);
            for(let i = tempo ; i >= 0; i--) {
                console.log(`tempo: ${i}`);
            }
            if ((tempo >= (2 * tempoBrigadeiro)) && (tempo < (3 * tempoBrigadeiro))) {
                console.log("A comida queimou");
                console.log("Prato pronto, bom apetite!!");
            } else if (tempo < tempoBrigadeiro) {
                console.log("Tempo insuficiente");
                console.log("Prato pronto, bom apetite!!");
            } else if (tempo >= (3 * tempoBrigadeiro)) {
                console.log("KABBUUMM");
                console.log("Prato pronto, bom apetite!!");
            } else {
                console.log("Prato pronto, bom apetite!!");
            }
            break;
        default:
            console.log(`Prato inexistente!`);
    }

}
microondas();