

let coordenadas = [10.236, 12.525, 9.325, 10.545];

console.log(coordenadas);

//Agregando un nuevo elemento al arreglo
coordenadas.push(9.99);
console.log('push', coordenadas);


//Regresando el índice de un elemento del arreglo
//Cuando se mande a buscar con indexOf un valor que no existe, el resultado es negativo
const posicion = coordenadas.indexOf(10.236);
console.log('El índice de posición es: ', posicion);

if(posicion < 0){
    console.error("No existe ese valor en el arreglo")
}else{
    console.log(`El índice está en la posición: ${posicion}`);
}