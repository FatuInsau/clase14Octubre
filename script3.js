let nombres = ["Belen","Fati","Seba","Maria","Ana"]

// Sort
// ordena el array
// nombres.sort()

// Reverse
// invierte o da vuelta el array
// nombres.reverse()

// Join
// junta los elementos del en una string, los separa con lo que yo pase por argumentos
// nombres.join(" * ")

// Concat
// unir dos o más arrays en uno solo

let numeros = [4,4,6,8,4,5];

let resultado = [].concat(numeros,nombres,['hola',true]);

// IndexOf
// nos permite ver el indice de un elemento del array
// si no existe devuelve -1

// nombres --> 'Maria'
nombres.indexOf('Maria')

// Recorrer un Array

// recorremos desde el indice 0 hasta el ultimo

// for(let indice= 0; indice<nombres.length; indice++){
//     console.log(nombres[indice])
// };


// recorremos desde el ultimo indice hasta el 0

// for(let i=nombres.length-1;i>=0;i--){
//     console.log(nombres[i]);
// }