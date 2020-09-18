function carregar() {
    let msg = document.querySelector('#msg');
    let img = document.querySelector('#imagem');
    let data = new Date();
    let hora = data.getHours();
    let saudacao = document.querySelector('#saudacao');

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.scr = "img/bomdia.jpg";
        saudacao.innerHTML = 'Bom dia!'
        document.body.style.background = "#e9aa36f5";

    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = "img/boatarde.jpg";
        saudacao.innerHTML = 'Boa tarde!'
        document.body.style.background = "#f79c26e0";
    } else {
        // Boa noite !
        img.src = "img/boanoite.jpg";
        saudacao.innerHTML = 'Boa noite!'
        document.body.style.background = "#1C1C1C";
    }
}