//Comparación operador ternario

let likes = 101;


//If Normal
if(likes === 1){
    console.log('Tienes ' + likes, 'like');
}else{
    console.log('Tienes ' + likes, 'likes');
}

//Usando el Operador Ternario
(likes===1)? console.log('Tienes ' + likes, 'like'):console.log('Tienes ' + likes, 'likes');

//Ahora poniendolo dentro del console log
console.log((likes===1)?'Tienes ' + likes + ' like':'Tienes ' + likes + ' likes');


//__________Nuevo Ejemplo___________________________________

let aprobado = 100;

//Usando operador Ternario
(aprobado >= 60)? console.log ('Has aprobado con ' + aprobado):console.log('Has reprobado con ' + aprobado);

//Usando un Swithc
switch(aprobado){
    case 60:
        console.log('Has aprobado apenas ');
    break;        
    case 75:
        console.log('Has aprobado Regularmente ');
    break;        
    case 80:
        console.log('Has aprobado con Buea Nota ');
    break;        
    case 90:
        console.log('Has aprobado, Muy Buena Nota. ¡Felicidades! ');
    break;        
    case 100:
        console.log('Has aprobado, Excelente Nota. ¡Felicidades estás en al NASA! ');
    break; 
    default:
        console.log('Nota pendiente de revisión ');      
}