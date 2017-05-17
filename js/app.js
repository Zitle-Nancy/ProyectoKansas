
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
var mexico= document.getElementById("mexico");
mexico.addEventListener("click", imagenMexico);
var catrina= document. getElementById('catrina');
catrina.addEventListener("click",imagenCatrina);
var tequila = document.getElementById('tequila');
tequila.addEventListener("click",imagenTequila);
var nopal = document.getElementById('nopal');
nopal.addEventListener("click",imagenNopal);
var maiz = document.getElementById('maiz');
maiz.addEventListener("click",imagenMaiz);
var chile = document.getElementById('chile');
chile.addEventListener("click",imagenChile);
var quetza = document.getElementById('quetzalcoatl');
quetza.addEventListener("click",imagenQuetza);
var tacos = document.getElementById('tacos');
tacos.addEventListener("click",imagenTacos);
var alebri = document.getElementById('alebrijes');
alebri.addEventListener("click",imagenAlebri);
var papan = document.getElementById('papantla');
papan.addEventListener("click",imagenPapan);
var angel = document.getElementById('angel');
angel.addEventListener("click",imagenAngel);
var tori = document.getElementById('toritos');
tori.addEventListener("click",imagenTori);
var molca = document.getElementById('molcajete');
molca.addEventListener("click",imagenMolca);
var mole = document.getElementById('mole');
mole.addEventListener("click",imagenMole);



var cerrar = document.getElementById('cerrar');
cerrar.addEventListener('click',close);
//obtener la pizzara
var imgPopoc = document.getElementById('img-popoc');
var imgMexico = document.getElementById('img-mexico');
var imgCatri = document.getElementById('img-catri');
var imgTequila = document.getElementById('img-tequila');
var imgNopal = document.getElementById('img-nopal');
var imgMaiz = document.getElementById('img-maiz');
var imgChile = document.getElementById('img-chile');
var imgQuetza = document.getElementById('img-quetza');
var imgTacos = document.getElementById('img-tacos');
var imgAlebri = document.getElementById('img-alebri');
var imgPapan = document.getElementById('img-papan');
var imgAngel = document.getElementById('img-angel');
var imgTori = document.getElementById('img-tori');
var imgMolca = document.getElementById('img-molca');
var imgMole = document.getElementById('img-mole');
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

function imagenMexico (){
	imgMexico.style.display = "block";
}
function imagenCatrina (){
	imgCatri.style.display = "block";
}
function imagenTequila (){
	imgTequila.style.display = "block";
}
function imagenNopal (){
	imgNopal.style.display = "block";
}
function imagenMaiz (){
	imgMaiz.style.display = "block";
}
function imagenChile (){
	imgChile.style.display = "block";
}
function imagenQuetza (){
	imgQuetza.style.display = "block";
}
function imagenTacos (){
	imgTacos.style.display = "block";
}
function imagenAlebri (){
	imgAlebri.style.display = "block";
}
function imagenPapan (){
	imgPapan.style.display = "block";
}
function imagenAngel (){
	imgAngel.style.display = "block";
}
function imagenTori (){
	imgTori.style.display = "block";
}
function imagenMolca (){
	imgMolca.style.display = "block";
}
function imagenMole (){
	imgMole.style.display = "block";
}


function close(){
	imgPopoc.style.display = "none";
	imgMexico.style.display = "none";
	imgCatri.style.display = "none";
	imgTequila.style.display = "none";
	imgNopal.style.display = "none";
	imgMaiz.style.display = "none";
	imgChile.style.display = "none";
	imgQuetza.style.display = "none";
	imgTacos.style.display = "none";
	imgAlebri.style.display = "none";
	imgPapan.style.display = "none";
	imgAngel.style.display = "none";
	imgTori.style.display = "none";
	imgMolca.style.display = "none";
	imgMole.style.display = "none";

}
