// Estas son las posibilidades que puede generar la tragaperras.
// Se ganaran 3 monedas si se generan los tres iguales y monedas adicionales por cada vez 
// que aparezca lo que esté en la posición [0]
var posibilidades = ["moneda", "cereza", "naranja", "manzana"];


// Devuelve un valor aleatorio de entre todos los posibles.
function tiradaAleatoria(datos) {
	var numeroAleatorio = Math.floor(Math.random() * datos.length);
	console.log(numeroAleatorio);
	return datos[numeroAleatorio];
}

// Comprueba si los datos son numéricos y los instroduce en la máquina
function meterDatos(){
	var datosIntroducidos = document.getElementsByTagName('input')[0].value;
	if (!isNaN(datosIntroducidos)) {
		monedero.innerHTML = datosIntroducidos;
		document.getElementsByTagName('input')[0].classList.remove("fondoRojo");
		monedero.classList.remove("fondoRojo");
	} else {
		document.getElementsByTagName('input')[0].classList.add("fondoRojo");
	}
}


// Tira de la palanca, genera un valor aleatorio en cada casilla y calcula el resultado final
function tirarDeLaPalanca() {
	if (Number(monedero.innerHTML) <= 0) {
		monedero.classList.add("fondoRojo");
	} else {
		monedero.innerHTML = Number(monedero.innerHTML) - 1;

		casilla1.innerHTML = tiradaAleatoria(posibilidades);
		casilla2.innerHTML = tiradaAleatoria(posibilidades);
		casilla3.innerHTML = tiradaAleatoria(posibilidades);
	
		var resultado = 0;

		if ((casilla1.innerHTML == casilla2.innerHTML) && (casilla2.innerHTML == casilla3.innerHTML)) {
			resultado += 3;
		}

		if (casilla1.innerHTML == posibilidades[0]) {
			resultado += 1;
		}

		if (casilla3.innerHTML == posibilidades[0]) {
			resultado += 1;
		}

		if (casilla3.innerHTML == posibilidades[0]) {
			resultado += 1;
		}
	
		resultadoFinal.innerHTML = resultado;
	}
}


// Indico quién lanza los eventos
document.getElementsByTagName("button")[0].addEventListener("click", meterDatos);
document.getElementsByTagName("button")[1].addEventListener("click", tirarDeLaPalanca);