let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numMax = 100;
//Declarando una funcion generica con parametros que seran recibidos para poder reutilizarla con el resto de botones.

function asignarTextoElemento(elemento, texto) {
    let elementosl = document.querySelector(elemento);
    elementosl.innerHTML = texto;
    return;
}

function verificarIntento(){
    //el tipo de evento se definió dentro del html como "onclick"
    let numeroDeUsuario =  parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número secreto en: ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else if(numeroDeUsuario < numeroSecreto){
        asignarTextoElemento('p', "El número secreto es más alto.");
        intentos++;
        limpiarCaja();
    }else if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', "El número secreto es más bajo.")
        intentos++
        limpiarCaja();
    }
    
    return;
    
}

function limpiarCaja(){
     document.getElementById('valorUsuario').value = "";
}


function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números 
    if(listaNumerosSorteados.length == numMax){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
        
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            //Recursividad: la funcion se llama a si misma hasta que genere otro número que no este dentro del arreglo.(Reusar la funcion definida).
            return generarNumeroSecreto();
        }else{
            //Registra el número hasta el final del arreglo para almacenarlo y asi evitar que se repita.
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;  
        }
    }

    //Si el numero generado esta incluido en la lista
    


}
function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del numero secreto.");
    asignarTextoElemento('p', `Elige un numero del 1 al ${numMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar la caja.
    limpiarCaja();
    //llamar a la funcion de condiciones iniciales
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}
//Llamada de las funciones creadas con los elementos y el texto asignado a ellos.
condicionesIniciales();