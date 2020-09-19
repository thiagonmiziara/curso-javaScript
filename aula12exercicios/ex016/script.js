function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formAno = document.querySelector('#txtano');
    let resultado = document.querySelector('#resultado');

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {


        let = formSex = document.getElementsByName('radsex');

        var idade = ano - Number(formAno.value);

        var genero = ''

        var img = document.createElement("img");
        img.setAttribute('id', 'foto');

        if (formSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 15) {
                //Criança
                img.setAttribute('src', 'img/ocrianca.jpg');
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'img/ojovem.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'img/idoso.jpg');
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                //Criança
                img.setAttribute('src', 'img/acrianca.jpg');
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'img/ajovem.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulta.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'img/idosa.jpg');
            }
        }
    }


    resultado.style.textAlign = 'center';
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    resultado.appendChild(img);
}