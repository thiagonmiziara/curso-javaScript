let num = [5, 8, 2, 9, 3];
num.push(1); // serve para colocar mais um elemento no array.
num.sort(); // serve para colocar os elementos em ordem.
console.log(num);
console.log(`Nosso array tem ${num.length} posições`);
console.log(`O primeiro valor do array é ${num[0]}`);

let pos = num.indexOf(1);
if (pos == -1) {
    console.log("O valor não foi encontrado!");
} else {
    console.log(`O valor está na posição ${pos}`);
}