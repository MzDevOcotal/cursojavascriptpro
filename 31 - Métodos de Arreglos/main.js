

let coordenadas = [10.236, 12.525, 9.325, 10.545];

console.log(coordenadas);

//Agregando un nuevo elemento al arreglo
coordenadas.push(9.99);
console.log('push', coordenadas);


//Regresando el índice de un elemento del arreglo
//Cuando se mande a buscar con indexOf un valor que no existe, el resultado es negativo
const posicion = coordenadas.indexOf(10.545);
console.log('El índice de posición es: ', posicion);

if(posicion < 0){
    console.error("No existe ese valor en el arreglo")
}else{
    console.log(`El índice está en la posición: ${posicion}`);
}

//USANDO UNSHIFT - Método opuesto a Push (Push Agrega elementos al final del arreglo)
// Agrega elementos al inicio del arreglo, desplazando de posicióhn a los otros

coordenadas.unshift(102.25);
console.log('Unshift', coordenadas);

//Elimina el primer elemento de un Arreglo.
coordenadas.shift();
console.log('Shift', coordenadas);

//JOIN : Junta todos los elementos de nuestro arreglo y transformarlo en una cadena de texto
let bienvenido = ["Bienvenido", "al", "Curso"];
console.log(bienvenido);

const texto = bienvenido.join(" ");
console.log(texto);

//SPLIT: Hace el efecto contrario de JOIN, separa los elementos y crea un arreglo.
let cuenta = '2346-1525-1245-2828';
const cuentaArreglo = cuenta.split("-");
console.log(cuentaArreglo);




//Ejercio: Diferencia entre For in y For of

console.log("FOR IN ITERA LAS PROPIEDADES DE UN OBJETO");
const palabras = 'Bienvenido al curso';
 
for(palabra in palabras){
    console.log(palabra);
}

console.log("FOR OF ITERA ELEMENTO COMO ARREGLO");
const palabras2 = 'Bienvenido al curso';
 
for(palabra of palabras2){
    console.log(palabra);
}



/* COMPROBACIÓN DE PREGUNTA */
const numeros = [1,4,5,6,8,20]
console.log('El Error', numeros);
numeros[4]=14;
console.log('Cambiar valor posición 4', numeros);
numeros.length = 2;
console.log('Longitud 2', numeros);
numeros.push(0);
console.log('Push 0', numeros);
/* numeros = [...numeros, 4];
console.log('Push 0', numeros); Es una constante y no se puede modificar su valor*/
numeros.unshift(-1);
console.log('Unshift', numeros);

