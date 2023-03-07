let MicroOptions = ['pedra', 'papel', 'tesoura']
let pontoUsuario = 0;
let pontoOponente = 0;


function perguntaUsuarioDesejaJogar() {

    let usuarioDesejaJogar = confirm('Voce gostaria de jogar?');

    if (usuarioDesejaJogar === true) {

        while (pontoOponente < 2 && pontoUsuario < 2) {
            comecarJogo();
        }

        if (pontoOponente == 2) {
            alert(`Que pena, você perdeu! - O placar final foi: Você: ${pontoUsuario} - Oponente: ${pontoOponente}`)
            pontoOponente = 0;
            pontoUsuario = 0;


        } else if (pontoUsuario == 2) {
            alert(`Parabéns, você ganhou! - O placar final foi: Você: ${pontoUsuario} - Oponente: ${pontoOponente}`)
            pontoOponente = 0;
            pontoUsuario = 0;
        }

    } else {

        alert('Obrigado por visitar a página');
    }


    function comecarJogo() {

        let jogadaUsuario = prompt('Qual é a sua jogada? PEDRA, PAPEL ou TESOURA?').toLowerCase();
        let jogadaOponente = MicroOptions[Math.floor(Math.random() * MicroOptions.length)];
        console.log(jogadaUsuario);
        console.log(jogadaOponente);
        console.log(pontoUsuario);
        console.log(pontoOponente);


        switch (jogadaUsuario) {
            case "papel":
                if (jogadaOponente == "pedra") {
                    alert(`Parabéns, você é o vencedor! - Você escolheu ${jogadaUsuario.toUpperCase()} e seu oponente ${jogadaOponente.toUpperCase()}`);
                    pontoUsuario++;
                    break;
                } else if (MicroTurn == "tesoura") {
                    alert(`Você perdeu... Você escolheu ${jogadaUsuario.toUpperCase()} e seu oponente ${jogadaOponente.toUpperCase()}`);
                    pontoOponente++;
                    break;
                } else if (MicroTurn == "papel") {
                    alert(`Ninguém ganhou! - Você escolheu ${jogadaUsuario.toUpperCase()} e seu oponente ${jogadaOponente.toUpperCase()}`);
                    break;
                }
            case "pedra":
                if (jogadaOponente == "pedra") {
                    alert(`Ninguém ganhou! - Você escolheu ${jogadaUsuario.toUpperCase()} e seu oponente ${jogadaOponente.toUpperCase()}`);
                    break;
                } else if (jogadaOponente == "tesoura") {
                    alert(`Parabéns, você é o vencedor! - Você escolheu ${jogadaUsuario.toUpperCase()} e seu oponente ${jogadaOponente.toUpperCase()}`);
                    pontoUsuario++;
                    break;
                } else if (jogadaOponente == "papel") {
                    alert(`Você perdeu... Você escolheu ${jogadaUsuario.toUpperCase()} e seu oponente ${jogadaOponente.toUpperCase()}`);
                    pontoOponente++;
                    break;
                }
            case "tesoura":
                if (jogadaOponente == "pedra") {
                    alert(`Você perdeu... Você escolheu ${jogadaUsuario.toUpperCase()} e seu oponente ${jogadaOponente.toUpperCase()}`);
                    pontoOponente++;
                    break;
                } else if (jogadaOponente == "tesoura") {
                    alert(`Ninguém ganhou! - Você escolheu ${jogadaUsuario.toUpperCase()} e seu oponente ${jogadaOponente.toUpperCase()}`);
                    break;
                } else if (jogadaOponente == "papel") {
                    alert(`Parabéns, você é o vencedor! - Você escolheu ${jogadaUsuario.toUpperCase()} e seu oponente ${jogadaOponente.toUpperCase()}`);
                    pontoUsuario++;
                    break;
                }
            default:
                break;
        }
    }

}

