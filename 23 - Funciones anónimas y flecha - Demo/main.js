//FUNCION SUMA CON SINTAXIS TRADICIONAL
/* function suma(n1,n2){
  let resultado = n1 + n2;
  return resultado;
} */

//FUNCION SUMA CON SINTAXIS DE FLECHA
const suma = (n1,n2) =>{
  let resultado = 0;
  if (n1<n2) {
    resultado = n1 * n2;
  }else{
    resultado = n1 / n2;
  }
  return resultado;
}
document.getElementById('suma').innerHTML=`La sumatoria es: ${suma(5,8)}`;

//NOTACION DE FUNCION FLECHA CUANDO SOLO HAY UN PARÁMETRO | SE PUEDEN ELIMINAR PARÉNTESIS DEL PARÁMETRO
const saludo = nombre => 'Hola, ' + nombre;
document.getElementById('saludo').innerHTML = `Bienvenido: ${saludo('Mario Zapata')}`;
console.log(saludo(' Mario'));


/* MÁS EJERCICIOS */

//CONVERTIR GRADOS A KELVIN | SINTAXIS TRADICIONAL
function gradosCaK(valor){
  return valor * 274.15;
}
document.getElementById('grados').innerHTML = `Los grado C° equivalentes son: ${gradosCaK(5)}`

//CONVERTIR GRADOS A KELVIN | SINTAXIS FLECHAS
const gradosCaK2 = (valor) => {
  return valor * 274.15;
}
console.log(gradosCaK2(4));

//CONVERTIR GRADOS A KELVIN | SINTAXIS FLECHAS MÁS SIMPLIFICADA | Si es solo una línea se puede omitir el return
const gradosCaK3 = valor => valor * 274.15;
console.log(gradosCaK3(5));


/* FUNCIONES ANÓNIMAS */
//Las funciones anónimasestán encapsuladas - Las variables dentro de ella no pueden 
// ser vistas fuera de su contexto.

(function(){
  console.log("Esto es una Función Anónima");
})();

/* FUNCIONES ANÓNIMAS DE FLECHA */
(()=>{
  console.log("Esto es una Función Anónima de Flecha");
})();