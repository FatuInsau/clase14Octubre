// ❗️ Factorial
// Crear un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 _ 3 _ 2 * 1 = 24

let numero = prompt("Ingrese un numero");
let resultado = 1;

for(let i=numero; i>0; i--) {
    // resultado = resultado * i;
    resultado *= i;
};

alert("El factorial de " + numero+ " es "+ resultado);