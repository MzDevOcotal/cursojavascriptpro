
/* function suma(n1,n2){
  let resultado = n1 + n2;
  return resultado;
} */

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
