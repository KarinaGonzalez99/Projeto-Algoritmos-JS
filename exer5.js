// 5 - Desenvolva um algoritmo que recebe a idade de 3 pessoas e imprime quem é a pessoa mais nova. Exiba o resultado no seguinte formato:
// "Pessoa" é a pessoa mais nova.

let pessoa1 = 12;
let pessoa2 = 15;
let pessoa3 = 1;

if (pessoa1 < pessoa2 && pessoa1 < pessoa3){
    console.log('Pessoa 1 é a pessoa mais nova');
}
else if (pessoa2 < pessoa1 && pessoa2 < pessoa3){
    console.log('Pessoa 2 é a mais nova');
}
else {
    console.log('Pessoa 3 é a mais nova');
}
