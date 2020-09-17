let agora = new Date();

let diaDaSemana = agora.getDay();

//console.log(diaDaSemana);

switch (diaDaSemana) {
    case 0:
        console.log('Domingo');
        break
    case 1:
        console.log('Segunda');
        break
    case 2:
        console.log('Terça');
        break
    case 3:
        console.log('Quarta-feira');
        break
    case 4:
        console.log('Quinta-feira');
        break
    case 5:
        console.log('Sexta-feira');
        break
    case 6:
        console.log('sabado');
        break
    default:
        console.log('[Erro] Dia inválido!');
        break
}