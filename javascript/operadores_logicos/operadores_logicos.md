# Operadores Lógicos
Hay algunas operaciones que pueden ser aplicadas sobre valores booleanos. JavaScript soporta los operadores lógicos AND (&&), OR (||) y NOT (!).

## AND
Operador AND retorna true si ambos operandos son verdaderos.

```javascript
var a = true;
var b = false;

console.log(a && b); // false
```

## OR
Operador OR retorna true si al menos un operando es verdadero.

```javascript
var a = true;
var b = false;

console.log(a || b); // true
```

## NOT
Operador NOT invierte el valor booleano de un operando.

```javascript
var a = true;
var b = false;

console.log(!a); // false
console.log(!b); // true
```