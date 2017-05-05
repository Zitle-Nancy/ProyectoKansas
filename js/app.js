// function sombrear(celda){
// 	celda.style.backgroundColor = "#ef3b9e";

// }
var letra = document.getElementsByClassName('letra');
var mexico = document.getElementsByClassName('mexico');
var arregloPalabras = [];
var longitud = letra.length;

// var th = document.getElementsByTagName('th');
for(var j=0; j < mexico.length; j++){
	// console.log(mexico[j].innerHTML);
	arregloPalabras.push(mexico[j].innerHTML);

}
console.log(arregloPalabras);
if (arregloPalabras.join("") == "MEXICO"){
	alert("bien");
}else{
	alert("mal");
}
// console.log(th);

for(var i=0; i< longitud; i++){
	letra[i].addEventListener('click',pintar);
}

function pintar(){
	this.style.backgroundColor = "red";
}