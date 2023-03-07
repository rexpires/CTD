function darkMode() {

    let elementoPai = document.querySelector('body');    
    let botao = document.getElementById('botao2');

    botao.classList.toggle('bi-toggle2-on');
    botao.classList.toggle('bi-toggle2-off');

    elementoPai.classList.toggle('dark');

}