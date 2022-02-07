

/* FLAT: Devuelde un arreglo nuevo, derivado del 
resultado de eliminar arreglos anidados. */

//Convertir arreglos anidados(bidimensionales) en arreglos lineales
let calificaciones = [[5,3], [2,3], [10,15]];
console.log('Arreglo bidimensional', calificaciones);
let resultado = calificaciones.flat();
console.log('Arreglo Lineal', resultado);

/* OTRO EJEMPLO */
let arreglo = [0,1,2,[[[7,9]]]];
console.log('Resultado', arreglo);

