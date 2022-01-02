
//Usando Do While
const tieneCoche = true;

/* --------- EJEMPLOS GENÉRICOS ----------- */

/* do{
  if(tieneCoche){
    console.log('Puedes ir a la fiesta');
    break;
  }else{
    console.error('No hay quien te lleve');
  }
}while(tieneCoche===true);


//Usando While
while(tieneCoche === true){
  if(tieneCoche){
    console.log('Puedes ir a la fiesta');
    break;
  }else{
    console.log('No hay quien te lleve');
  }
} */


/* ------- EJEMPLOS MÁS REALES -------------*/


//Usando Do While

const archivo = "Bienvenidos al Curso de Javascript/"
let contador = 0;
let letra = '';
let texto = '';
do {
  letra = archivo[contador];
  contador++;
  texto += letra;
} while (letra != '/');

console.log(texto);


//Usando While
//Resetando variables
contador = 0;
letra = '';
texto = '';

while (letra != '/') {
  letra = archivo[contador];
  contador++;
  texto += letra;
}

console.log(texto);



let temperaturas = [10.2, 35.3, 19.0, 23.5];

for(t of temperaturas){
    console.log(t);
}