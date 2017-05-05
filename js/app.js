
// FUNCIONALIDAD DEL BOTON PARA INICIAR EL JUEGO
var botonInicio = document.getElementsByClassName("btn")[0];
console.log(botonInicio);

botonInicio.addEventListener("click", mostrarJuego);

function mostrarJuego() {
	var contenedor = document.getElementById("contenedor-chido");
	contenedor.style.visibility = "visible";
}
// TERMINA FUNCIONALIDAD BOTON

var letra = document.getElementsByClassName('letra');
var popoc = document.getElementsByClassName('popoc');
var palabraPopoc = document.getElementById('palabraPopoc');
palabraPopoc.addEventListener('click',imagenPopoc);
var cerrar = document.getElementById('cerrar');
cerrar.addEventListener('click',close);
//obtener la pizzara
var imgPopoc = document.getElementById('img-popoc'); 
//
// var arregloPalabras = [];
var longitud = letra.length;
// var longitudPalabra = popoc.length;
// console.log(longitudPalabra);
// for(var j=0; j < popoc.length; j++){
// 	arregloPalabras.push(popoc[j].innerHTML);
// }
for(var i=0; i< longitud; i++){
	letra[i].addEventListener('click',pintar);
}

function pintar(){
	this.style.backgroundColor = "red";	
}

function imagenPopoc(){
		imgPopoc.style.display = "block";	
}
function close(){
	imgPopoc.style.display = "none";	
}



