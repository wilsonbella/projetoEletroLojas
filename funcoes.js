function mostrarCategoria(categoria){
	let elementos = document.getElementsByClassName('caixaproduto');
	console.log(elementos);
	for(var i=0;i <elementos.length; i++){
		if (categoria == elementos[i].id){
			elementos[i].style = "display:inline-block";
		}else 
		elementos[i].style = "display:none";

	}

}


let mostrarTodos = () => {
	let elementos = document.getElementsByClassName('caixaproduto');
	for(var i=0;i <elementos.length; i++){
		elementos[i].style = "display:inline-block";


	}
};
let aumentarImagem = (imagem) => {
	console.log(imagem);
if (imagem.width == 240)
	imagem.width = 120;
else
	imagem.width = 240;

};

let diminuirImagem = (imagem) => imagem.width = 30;
let voltarOTamanho = (imagem) => imagem.width = 60;
let mudarCorFont = (font) => {
	if(font == black)
		font.color = red;
	else
		font.color = black;
};


