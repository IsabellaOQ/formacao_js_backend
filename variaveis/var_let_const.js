// var - pode ser declarada depois de já ter sido usada
// não é muito recomendada hoje em dia por ser muito "solta" e propensa à bugs
var altura = 5;
var comprimento = 7;

var area = altura * comprimento;
console.log(area);

// let - deve ser declarada antes de ser usada
// permite trocarmos o valor dela durante a execução, mas deve ser inicializada antes de ser utilizada
let alt1 = 5;
let comp1 = 7;
let forma = 'retangulo';
let area1;

if (forma === 'retangulo') {
	area1 = alt1 * comp1;
} else {
	area1 = (alt1 * comp1) / 2;
}
console.log(area1);

// const - constante, o que colocamos no programa não pode ser alterado durante a execução
// o valor é fixo e deve ser declarado antes
const forma1 = 'quadrado';
const alt2 = 5;
const comp2 = 7;
let area2;

if (forma1 === 'quadrado') {
	area2 = alt2 * comp2;
} else {
	area2 = (alt2 * comp2) / 2;
}

console.log(area2);
