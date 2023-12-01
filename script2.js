// Arrays

// formato [elemento1,elemento2,...]
let coleccion = [
    "hola",
    45,
    "chau",
    true,
    function(){ return "guau"}
]

// forma de acceder a cada posicion
coleccion[0]=7
// coleccion[7]="hola"

// para ver el largo o la cant de elementos
coleccion.length

// esto es para acceder al ultimo elemento del array
coleccion[coleccion.length-1]


// push
coleccion.push('estoy al final')
// agregar un elemento al final del array
// retorna el nuevo largo


// Unshift
coleccion.unshift('estoy al principio', true)
// agrega un elemento al principio del array
// retorna el nuevo largo

// Shift
coleccion.shift()
// elimina el primer elemento del array
// retorna el elemento eliminado

// Pop
coleccion.pop()
// elimina el ultimo elemento del array
// retorna el elemento eliminado


