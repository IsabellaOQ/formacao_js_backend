// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy
// não são booleanos, mas comportam-se como se fossem

// 0 => false
// 1 => true

console.log('0 é falso? ' + (0 == false));
console.log('""  é falso? ' + ('' == false));
console.log('1 é falso? ' + (1 == true));

// undefined => não definida, inicializada mas sem valor, tem o espaço guardado na memoria, mas não atribuimos o valor à ela
// null => vazio ou nada, atribuida como null como seu valor
let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);
