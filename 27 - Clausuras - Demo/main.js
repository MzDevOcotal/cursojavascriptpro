console.log("------ PRIMER EJEMPLO ------")
/* Clausuras: Forma de poder identificar como ejecutar ciertas 
líneas de código */

function genararUI(){
    let panel = 0;
    function actualizarDatos(){
        let n1=2, n2=3;
        panel = n1 * n2;
        console.log(panel);
    }
    return actualizarDatos;
}

//Asignando la función a una variable
//let res = genararUI();


/* Imprimir por consola "res" es un error, no devuelve lo que espeamos, 
se deben usar paréntesis en la variable ya que ahora es una función  */
/* console.log(res); */

/* Esto sí es correcto, la variable se convierte en función 
entonces hay que escribir los paréntesis para que se ejecute*/
//res();


console.log("------ OTRO EJEMPLO ------")

function suma(n1){
    return function(n2){
        return n1 + n2;
    }
}

let resul = suma(10);
console.log(resul(5));


console.log("------ FALTA EJEMPLO DEMO ------")
