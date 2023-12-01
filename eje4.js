// contiene(numero, numeros)
// Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

function contiene (n,numeros) {
    for(let i=0; i<numeros.length; i++){
        if(n===numeros[i]){
            return true;
        };
    };
    return false;
};



function contiene2 (n, numeros) {
    if (numeros.indexOf(n)===-1){
        return false;
    } else {
        return true;
    }
}

console.log(contiene2(54, [5, 7, 99, 3, 4, 54, 2, 12]) )// true
console.log(contiene2(103, [5, 7, 99, 3, 4, 54, 2, 12])) // false