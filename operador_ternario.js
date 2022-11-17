// if padrão
const idadeMin = 18;
const idadeCliente = 16;

if (idadeCliente >= 18) {
	console.log('Liberado!');
} else {
	console.log('Proibido!');
}

// operador ternario => realiza uma comparação em uma única linha
//           condição                   true          false
console.log(idadeCliente >= idadeMin ? 'Liberado!' : 'Proibido!');
