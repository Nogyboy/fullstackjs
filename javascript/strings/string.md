# Strings
Strings es un tipo de dato básico que representa texto. Se puede usar comillas simples, comillas dobles o backticks.

```js
let str1 = "Hola Mundo";
let str2 = 'Hola Mundo';
let str3 = `Hola Mundo`;
```

Para agregar un salto de línea a un string se usa el carácter \n.

```js
let str4 = "Hola Mundo\n Esto es programar";
```

Para agregar un barra invertida se usa el carácter \.

```js
let str5 = "Hola Mundo. \"\\n\" Esto es programar";
```
Esto es lo que imprime en la consola: Hola Mundo. "\n" Esto es programar.

## Los strings no
Pueden ser divididos, multiplicados, o restados. Solo pueden ser concatenados.

```js
let str6 = "Hola Mundo";
let str7 = str6 + " Esto es programar";
let str8 = str6 * " Esto es programar";
let str9 = str6 / " Esto es programar";
```

Esto nos dará como resultado un NaN, Excepto la concatenación.

## Template Literals
Template Literals son una forma de crear strings dinámicas. O que se pueden interpolar variables.

```js
let str10 = `Hola Mundo ${"Esto es programar"}`;
```

El resultado será Hola Mundo Esto es programar.