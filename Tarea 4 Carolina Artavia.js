var mostrarOperaciones = false;

function toggleSection(){
    mostrarOperaciones = !mostrarOperaciones;
    if(mostrarOperaciones){
        document.getElementById("seccionOperaciones").style.display = "inline";
        document.getElementById("toggleSection").innerText = "Ocultar Operaciones";
    } else {
        document.getElementById("seccionOperaciones").style.display = "none";
        document.getElementById("toggleSection").innerText = "Mostrar Operaciones";
    }
}

function sumar() {
    var uno = document.getElementById("numero1").value;
    var dos = document.getElementById("numero2").value;
    if(validarVacio(uno) == false && !validarVacio(dos)){
        uno = parseInt(uno);
        dos = parseInt(dos);
    
        var suma = uno + dos;
        imprimirMensaje(suma, "resultadoSuma");
    } else {
        imprimirMensaje(0, "resultadoError" )
    }
    
}

function restar() {
    var uno = document.getElementById("numero1").value;
    var dos = document.getElementById("numero2").value;
    if(validarVacio(uno) == false && !validarVacio(dos)){
        uno = parseInt(uno);
        dos = parseInt(dos);
    
        var resta = uno - dos;
        imprimirMensaje(resta, "resultadoResta");
    } else {
        imprimirMensaje(0, "resultadoError" )
    }
    
}

function multiplicacion() {
    var uno = document.getElementById("numero1").value;
    var dos = document.getElementById("numero2").value;
    if(validarVacio(uno) == false && !validarVacio(dos)){
        uno = parseInt(uno);
        dos = parseInt(dos);
    
        var multiplicacion = uno * dos;
        imprimirMensaje(multiplicacion, "resultadoMultiplicacion");
    } else {
        imprimirMensaje(0, "resultadoError" )
    }
    
}

function validarVacio(elNumeroQueEscribi){
    if (elNumeroQueEscribi == ""){
        return true;
    } else {
        return false;
    }
}

function imprimirMensaje(resultado, operacion) {
    if (operacion == "resultadoSuma") {
         document.getElementById("resultado").innerHTML = "El resultado de la suma es: " + resultado;
    }
    if (operacion == "resultadoResta"){
        document.getElementById("resultado").innerHTML = "El resultado de la resta es: " + resultado;
    }
    if (operacion == "resultadoMultiplicacion"){
        document.getElementById("resultado").innerHTML = "El resultado de la multiplición es: " + resultado;
    }
    if (operacion == "resultadoError"){
        document.getElementById("resultado").innerHTML = "Debe ingresar valores númericos";
    }

}