function tabuada() {
    let numero = document.querySelector('#txtn');
    let tab = document.querySelector('#seletorTabuada');

    if (numero.value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        let n = Number(numero.value);
        let c = 1;
        tab.innerHTML = "";
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++
        }
    }



}