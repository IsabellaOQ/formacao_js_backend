// conversão implícita - conseguimos converter um tipo de dado em outro
const num = 456;
const text = '456';

// == compara apenas os valores das variaveis
// === compara tipos e valores das variaveis

console.log(num === text); // false
console.log(num == text); // o texto foi convertido em numero e comparado => true
console.log(num + text); // realiza a concatenação

// conversão explícita

//String()
// Number()
console.log(Number(text) + num); // realiza a conversão da variavel
