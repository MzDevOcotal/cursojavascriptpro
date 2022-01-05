//Función Suma

function suma(){
  console.log('Función Suma Inicia');
  
  let n1 = 4;
  let n2 = 12;
  let respuesta = n1 * n2;

  console.log(`Respuesta: ${respuesta}`);
  console.log("Respuesta: " + respuesta);

  console.log('Función Suma Finaliza');
}
suma();


//FUNCIONES TIPO VARIABLES
const resta = function(){
  console.log('Inicia Función Resta');
  let numero01 = 45;
  let numero02 = 13;
  let respuesta = numero01 - numero02;

   console.log(`La resta es: ${respuesta}`); 
  
  console.log('Finaliza Función Resta');
}
resta();

//FUNCIÓN MULTIPLICAR

function multiplicar(num1, num2){
  //Validando que son números
  if(isNaN(num1) || isNaN(num2)){
    throw new Error('Alguno de los valores no es número')//Palabra reservada que frena la ejecución del resto de la función
  }
  const respuesta = num1 * num2;
  console.log(`El Producto es: ${respuesta}`);
}

multiplicar('5',3);