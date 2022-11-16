// conversão implícita
const num = 456;
const text = '456';

// == compara apenas os valores das variaveis
// === compara tipos e valores das variaveis

console.log(num === text); // false
console.log(num == text); // o texto foi convertido em numero e comparado => true
console.log(num + text); // realiza a concatenação

// conversão explícita

// String()
// Number()
console.log(Number(text) + num); // realiza a conversão da variavel

let telefone = 12341234;
console.log('O telefone é ' + telefone.toString()); //.toString() é outra forma para fazer conversão

let largura = '10';
let altura = '5';
console.log(+largura * +altura); //conversão de String para número usando o + antes das variáveis
