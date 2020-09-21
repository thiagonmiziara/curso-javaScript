function contar() {
    let inicio = document.querySelector("#txti");
    let fim = document.querySelector("#txtf");
    let passo = document.querySelector("#txtp");
    let resultado = document.querySelector('#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        resultado.innerHTML = 'Impossível contar!';
        alert("[ERRO!!] Faltam dados!")


    } else {
        resultado.innerHTML = `Contando: <br>`;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            alert("Passo inválido! Considerando PASSO 1");
            p = 1;
        }

        if (i < f) {
            //contagem crescente
            for (let contador = i; contador <= f; contador += p) {
                resultado.innerHTML += ` ${contador} \u{1f449}`;
            }

        } else {
            //contagem regressiva
            for (let contador = i; contador >= f; contador -= p) {
                resultado.innerHTML += ` ${contador} \u{1f449} `;
            }

        }
        resultado.innerHTML += ` \u{1f3c1}`;
    }
}