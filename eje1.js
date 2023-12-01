// 💲Cara o cruz
// Crear un programa que permita escoger entre cara o cruz. 
// El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. 
// El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. 
// También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. 
// Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.

let respuestaUsuario=prompt("Ingrese CARA o CRUZ");
let respuestaCompu;
let victoriasSeguidas = 0;
let maximoVictoriasSeguidas=0;


// el bucle termina cuando el usuario escribe SALIR
while(respuestaUsuario!=="SALIR"){

// que la compu genere cara o cruz (math.random)
respuestaCompu= Math.floor(Math.random() * (1 - 0 + 1) + 0);

// 1 --> Cara
// 0 --> Cruz

// comparar resultados
if((respuestaCompu===1 && respuestaUsuario==="CARA") || (respuestaCompu===0 && respuestaUsuario==="CRUZ")) {
    // si acierta
// llevar la cuenta de cuantas veces seguidas gano (sumar 1)
// victoriasSeguidas++ --> victoriasSeguidas = victoriasSeguidas +1
    victoriasSeguidas++;
// mostrar un msj felicitando y mostrar cuantas gano
    alert("Felicidades. Lleva "+ victoriasSeguidas+ " victorias seguidas.")
} else {
    // no acierta
// ver si hay un maximo de partidas ganadas y guardarlo
    if (victoriasSeguidas>maximoVictoriasSeguidas){
        maximoVictoriasSeguidas = victoriasSeguidas;
    };
// reinicar cuantas veces seguida gano
    victoriasSeguidas=0;
// mostrar mensaje de que perdio
    alert("Usted perdio jeje");
}

// pedir al usuario cara o cruz
respuestaUsuario=prompt("Ingrese CARA o CRUZ");
};


// al finalizar mostrar msj de despedida y cant maxima de veces ganada
alert("Muchas gracias por jugar. Su maximo de victorias seguidas fue de "+ maximoVictoriasSeguidas);