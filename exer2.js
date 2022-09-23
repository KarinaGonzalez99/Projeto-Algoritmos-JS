// 2 - Desenvolva um algoritmo que conte quantos números, em um intervalo entre dois números, são divisíveis por 3. Exemplo: 1 e 20.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta (pode inventar uma). 
// Não conta pra ninguém, mas no intervalo entre 2 e 150 existem 50 números divisíveis por 3 ;)

let resultado = 0;

for(index = 2; index <= 150; index += 1){
    if(index % 3 == 0){
        resultado += 1;
    }
}
if(resultado == 50){
    console.log("SDDS HTML e CSS");
}
else{
    console.log(resultado, 'números divisíveis por 3.')
}