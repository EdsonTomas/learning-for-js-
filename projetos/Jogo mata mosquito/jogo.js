
var altura = 0;
var largura = 0;
function ajusteTamanhoDoPalco(){
	largura = window.innerHeight;
	altura = window.innerWidth;
	//console.log(altura,largura)
}
ajusteTamanhoDoPalco();

//criar elemento html

function posicaoRandomica(){

var posicaoX = Math.floor(Math.random() * altura) 	- 90;
var posicaoY = Math.floor(Math.random() * largura) 	- 90;

posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;

console.log(posicaoX,posicaoY);

var mosquito = document.createElement('img');

mosquito.src = 'imagens/mosquito.png';
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
mosquito.style.left = posicaoX + 'px';
mosquito.style.top = posicaoY + 'px';
mosquito.style.position = 'absolute';

document.body.appendChild(mosquito);
console.log(tamanhoAleatorio());
console.log(ladoAleatorio());
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3);
	switch(classe){
		case 0:
			return 'mosquito1';
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}
function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2);
	switch(classe){
		case 0:
			return 'ladoA';
		case 1:
			return 'ladoB'
		
	}
}