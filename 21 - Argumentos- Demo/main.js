
/* ------ EJERCICIO PARA SACAR EL ÁREA DE UNA FIGURA ------- */
function area(figura = 'cuadrado', base = 2, altura = 3) {
  let resultado = 0;
  switch (figura) {
    case 'cuadrado':
      resultado = base * base;
      /* return base * base; | Podemos simplificar de esta forma
      y eliminar "return resultado" */
      break;
    case 'rectangulo':
      resultado = base * altura;
      /* return base * base; | Podemos simplificar de esta forma
      y eliminar "return resultado" */
      break;
    case 'triangulo':
      resultado = (base * altura) / 2;
      /* return base * base; | Podemos simplificar de esta forma
      y eliminar "return resultado" */
      break;

    default:
      throw new Error("Figura no encontrada");
      break;
  }
  return resultado; //Retornar el resultado permite ver por
  //consola el valor del cálculo al invocar el área
}

const res = area('cuadrado', 15, 25);

console.log('El área de la figura es: ' + res);

document.getElementById("pintar").innerHTML = `<h1>El área de la figura es ${res}</h1>`;


/* --- EJERCICIO PARA SACAR EL PERÍMETRO CON PARÁMETROS REST-------- */
// Función con parámetros rest - los puntitos- todos los
// valores se almacenarán en la variable que está despues de los puntos
function perimetro(...lados) {
  let suma = 0;
  for (let i = 0; i < lados.length; i++) {
    //suma = suma + lados[i]; | Podemos simplificar como en la línea 41
    suma += lados[i];
  }
  return suma;
}
console.log(`El perímetro de la figura es: ${perimetro(2, 4, 6, 8)}`);


/* ---- OTRO EJEMPLO CON PARÁMETRO REST ---- */
const suma = function (...numeros) {
  let suma = 0;
  let contador = 0;

  while (contador < numeros.length) {
    suma += numeros[contador];
    contador++;
  }
  return suma;
}

console.log(`La suma es: ${suma(2, 3, 4, 5)}`);


const sumar = function (...dato) {
  let sumar = 0;
  let contar = 0;
  do {
    sumar += dato[contar];//[contar] sirve como índice para 
    //recorrer el array del parámetro Rest
    contar++;
  } while (contar < dato.length);

  /*   for (let i = 0; i < dato.length; i++) {
      sumar += dato[contar];
      contar++;
    } */
  return sumar;
}

console.log(`La sumatoria es: ${sumar(2, 3, 4, 5, 6)}`)





function eligeplan(plan = 'basico', tiposus = 'mensual') {
  let precio = 0;

  if (plan === 'basico' && tiposus === 'mensual') {
    precio = 5.99 * 1;
  } else if (plan === 'basico' && tiposus === 'anual') {
    precio = 5.99 * 12;
  } else if (plan === 'duo' && tiposus === 'mensual') {
    precio = 7.99 * 1;
  } else if (plan === 'duo' && tiposus === 'anual') {
    precio = 7.99 * 12;
  } else if(plan === 'familiar' && tiposus === 'mensual'){
    precio = 13.99 * 1;
  }else if(plan === 'familiar' && tiposus === 'anual'){
    precio = 13.99 * 12;
  } else{
    precio = "No Válido";
    console.log("El tipo de plan elegido no es válido");
  }

  return precio;

}


console.log(`El monto de tu suscripción es: $` + eligeplan('duo', 'anual'));
document.getElementById('suscripcion').innerHTML = `<h2>El monto de tu suscripción es: $ ${eligeplan('basico', 'mensual')}</h2> `;

