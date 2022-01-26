
//Arreglo lineal sencillo

/* let calificaciones= [1,5,100,90,80,30];

console.log(calificaciones.length); */

/* EJERCICIOS */
/* Primera forma de crear arreglos */
let nombre = new Array(5);
nombre[0] = "Juan";
nombre[1] = 10;
nombre[2] = "Mario";
nombre[3] = 1200;
nombre[4] = "Francisco";

console.log(nombre);


/* Otra forma de crear arreglos */

let calificaciones = [100,15,25,30,80,30,75];
console.log(calificaciones);
//console.log(calificaciones[3]);

//calificaciones[20]=100;
//console.log(calificaciones[20]);
//Al agregar un valor a una posición no consecutiva, se muestra las faltantes como empty
console.log(calificaciones);

//Usando For para recorrer el array
console.log("Inicia For");
for (let index = 0; index < nombre.length; index++) {
    console.log(nombre[index]);
}
    console.log("Finaliza For");


/* PROBANDO ARREGLO DE OBJETO */
    let objeto = [
        {"Nombre":'Mario', "Edad":45},{"Nombre":'Juan', "Edad":25}
    
    ];
    console.log(objeto);