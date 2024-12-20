# Conversiones de Tipo
Cuando un operador se aplica "equivocadamente" sobre un tipo de dato, JavaScript lo convertirá automáticamente y silenciosamente,  usando un conjunto de reglas que generalmente no es lo que se espera. Esto también se conoce como coerción.

```javascript
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
```
En operaciones aritméticas, cualquier valor que no este marcado para una conversión se convierte en un número, de ahí el resultado de la operación sea NaN.