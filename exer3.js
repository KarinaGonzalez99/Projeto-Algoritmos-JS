// 3 - Desenvolva um algoritmo que simule o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. Imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".
let p1 = 'Pedra';
let p2 = 'Tesoura';

if (p1 === p2) {
    console.log('A Ties!')
} 
else if ( p1 === 'Pedra' && p2 === 'Tesoura' || p1 === 'Papel' && p2 === 'Pedra' || p1 === 'Tesoura' && p2 === 'Papel') {
    console.log('Player 1 won')
}
else {
    console.log('Player 2 won')
}

