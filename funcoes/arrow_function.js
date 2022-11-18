// forma clássica
function apresentar(nome) {
	return `Meu nome é ${nome}`;
}

//Arrow Function - não pode ser nomeada e se comporta como expressão de função
const apresentarArrow = (nome) => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow function com mais de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
	if (num1 > 10 || num2 > 10) {
		return 'Somente números de 1 à 9.';
	} else {
		return num1 + num2;
	}
};

console.log(somaNumerosPequenos(1, 2));
console.log(somaNumerosPequenos(10, 20));
