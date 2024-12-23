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

> Por lo tanto si se encuentra en una situación en donde el resultado constantemente el NaN, revise conversiones de tipo accidentales.


Cuando se usa el operador ==, el resultado puede ser predecible, debería resultar en true si ambos operandos son iguales, excepto en el caso de NaN.

JavaScript usa un conjunto de reglas complicadas y confusas para convertir tipos de datos, en la mayoría de casos solo trata de convertirlos. Pero, cuando null o undefined aparecen en una operación, produce true solo si uno de los lados es null o undefined.

```javascript
console.log(null == undefined)
// → true
console.log(undefined == null)
// → true
```

Este comportamiento llega a ser util, porque se puede usar para detectar si existe un valor real con el operador  == o !=.

Cuando tu no quieres que JavaScript realice la conversión automática, puedes usar el operador === o !==. El primero evalúa si el valor es precisamente igual al otro, mientras que el segundo evalúa si ambos valores son diferentes.

> Se recomienda usar === o !==, para evitar conversiones accidentales.