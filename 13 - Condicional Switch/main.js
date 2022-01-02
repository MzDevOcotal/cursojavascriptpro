

let objeto = "abismo";
switch(objeto){
    case "enemigo":
        console.log("Acción atacar");
    break;

    case "piedra":
        console.log("Acción Caida");
    break;

    case "animal":
        console.log("Acción Cocinar");
    break;

    case "abismo":
        console.error("Cuidado, Retrocede");
    break;

    default:
        console.log("Acción Seguir Camino");

}