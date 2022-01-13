
/* Ejemplo de Generadores */
/* Los generadores detienen la ejecución del código interno de la función */

function* nombres(){
    yield 'Mario';
    yield 'Cristian';
    yield 'Yorling';
    yield 'Oscar';
    yield 'Maxi';
    yield 'Zapata';
}

const iteracion = nombres();
/* console.log(iteracion.next().value);
console.log(iteracion.next().value);
console.log(iteracion.next().value);
console.log(iteracion.next().value);
console.log(iteracion.next().value);
console.log(iteracion.next().value); */

/* USANDO WHILE PARA HACER VALIDACIONES */
let valor = iteracion.next();
/* while (valor.done != true) {
    console.log(valor.value); //El valor de return no sale en consola ya que está en true
    valor = iteracion.next();
} */

/* USANDO FOR OF PARA ITERAR CON EL GENERADOR */
/* for (const item of iteracion) {
    console.log(item);
} */

/* MOSTRANDO NUMEROS CONSECUTIVOS */
const iteracion2 = numero();

function* numero(){
    let contador = 2;
    while (true) {
        yield contador;
        contador *= 2;
    }
}

console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);
console.log(iteracion2.next().value);

/* MÁS EJERCICIOS */
