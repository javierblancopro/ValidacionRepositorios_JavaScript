function longitudContrasena(contrasena) {
	if (contrasena.length > 5) {
		return true;
	} else {
		return false;
	}
}


function usuarioCorrecto(nombre){
	console.log(nombre);
	if (isNaN(nombre[0])){
		return true;
	} else {
		return false;
	}
}


function compruebaNombre(elemento){
	let nombreUsuario = elemento.value;
	if (usuarioCorrecto(nombreUsuario)) {
		console.log("correcto");
		elemento.classList.add("bordeVerde");
		elemento.classList.remove("bordeRojo");
	} else {
		console.log("incorrecto");
		elemento.classList.add("bordeRojo");
		elemento.classList.remove("bordeVerde");
	}
}


function compruebaContrasena(elemento){
	let contrasena = document.getElementById("contrasena").value;
	console.log(contrasena);
	if (longitudContrasena(contrasena)) {
		elemento.classList.add("bordeVerde");  // Importante añadir y quitar dependiendo del caso para asegurarnos
		elemento.classList.remove("bordeRojo");// el estado que nos interesa para el elemento.
		return true;
	} else {
		elemento.classList.add("bordeRojo");
		elemento.classList.remove("bordeVerde");
		return false;
	}
}


function convierteAFecha(fechaEntrada) {
	let ano = fechaEntrada.slice(0, 4);
	let mes = fechaEntrada.slice(5, 7);
	let dia = fechaEntrada.slice(8, 10);
	let nuevaFecha = new Date(ano, mes, dia);
	return nuevaFecha;
}


function compruebaFecha(elemento){
	let fechaString = document.getElementById("fecha").value;
	let fechaIntroducida = convierteAFecha(fechaString);
	if ((Date.now() - fechaIntroducida.getTime()) < 567648000000) {
		document.getElementById("mensajeFecha").innerHTML = "Debes de ser mayor de edad.";
	} else {
		document.getElementById("mensajeFecha").innerHTML = "";
	}
}


// Comprueba si la contraseña es correcta, si no lo es, para el evento "submit" iniciado.
function procesarFormulario(evento) {
	// Accedemos al input de la contraseña. 
	// La función siempre se ejecuta, y si el resultado es que la contraseña no es válida, detiene el evento submit (que es el que ha recibido esta función)
	if (!compruebaContrasena(contrasena)){
		evento.preventDefault();
		return false;
	}
}
// NOTA: Resulta que podemos invocar directamente a un elemento mediante su identificador.
// Podeis comprobarlo descomentando las siguientes líneas y abriendo la consola:
// console.log(prueba);
// console.log(document.getElementById("prueba"));
// Una cosa nueva que hemos aprendido todos hoy (◠﹏◠)


// Añado el control sobre la pérdida de foco sobre el input de nombre para comprobar el nombre
document.getElementById("nombre").addEventListener("blur", function(){
															// En "this" envío el objeto en el que estoy, en este caso document.getElementById("nombre")
															compruebaNombre(this);
														}, false);


// Añado el control sobre la pérdida de foco sobre el input de la fecha para comprobar la edad
document.getElementById("fecha").addEventListener("blur", function(){
															compruebaFecha(this);
														}, false);

// Añado el control sobre el evento "submit" del formulario. De esta forma, la función "procesarFormulario" solo recive el evento "submit"
document.getElementsByTagName('form')[0].addEventListener("submit", procesarFormulario, false);

