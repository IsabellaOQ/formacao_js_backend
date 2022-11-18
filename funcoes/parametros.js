let num1 = 1;
let num2 = 2;

let text1 = 'Isa';
let text2 = 'bella';

function soma(x, y) {
	return x + y;
}

function multiplica(x, y) {
	return x * y;
}

console.log(soma(num1, num2));
console.log(soma(5, 5));
console.log(soma(text1, text2));
console.log(multiplica(soma(3, 3), soma(num1, num2)));
