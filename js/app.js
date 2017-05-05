function sombrear(celda){
	celda.style.backgroundColor = "#ef3b9e";

}


// FUNCIONALIDAD DEL BOTON PARA INICIAR EL JUEGO
var botonInicio = document.getElementsByClassName("btn")[0];
console.log(botonInicio);

botonInicio.addEventListener("click", mostrarJuego);

function mostrarJuego() {
	var contenedor = document.getElementById("contenedor-chido");
	contenedor.style.visibility = "visible";
}
