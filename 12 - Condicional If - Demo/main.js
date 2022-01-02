
let edad = 25;

if(edad > 18){
    console.log("Eres mayor de edad");
}else{
    console.error("Aún no cumples la edad");
}

//Otro ejemplo

if(edad > 10 && edad < 18){
    console.log("Estás en Secundaria")
}else{
    console.log("Seguro estás estudianto una carrera")
}

//Concatenando varios condicionales
if(edad > 10){
    if(edad < 18){
        console.log("Aún no estás en la universidad");
    }else{
        console.log("Eres un profesional");
    }
}


//Más Ejemplos

let tieneCoche = false;

if(!tieneCoche){ //Doble negación es igual a verdadero
    console.log("Puedes manejar en la carretera");
}else{
    console.error("No puedes manejar");
}