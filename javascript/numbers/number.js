// Number es un tipo de dato que representa números
// usa un número fijo de 64 bits para almacenar los números
// lo que limita el rango de números que puedes almacenar
// en total se pueden almacenar hasta 2^64 o 18 quintillion

let num1 = 10;
let num2 = 10.1;

// Números Especiales
const value = 1/0;

console.log(value);
console.log(Infinity);
console.log(-Infinity);

console.log(isNaN(value));
console.log(isFinite(value));
console.log(isFinite(Infinity));
console.log(isFinite(10.1));

// Nan
const nan1 = Infinity / Infinity;
console.log(nan1);
