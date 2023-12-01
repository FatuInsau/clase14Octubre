// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

function sumarNumeros (numeros) {
    let resultado = 0;
    for(let i=0; i<numeros.length; i++){
        resultado += numeros[i];
        // resultado = resultado + numero[i]
    }
    return resultado;
};


console.log(sumarNumeros([5, 7, 10, 12, 24])) // 58