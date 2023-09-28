function muestraContactar(){
	document.getElementById('cubretodo').style.display = "block";
}
function ocultaContactar(){
	document.getElementById('cubretodo').style.display = "none";
}
function enviaCorreo(){
    var http = new XMLHttpRequest();
	var formd = document.getElementById('contacto');	
	var allowme = document.getElementById('cont_error');	

	if (formd.telefono.value.match('[a-zA-Z._]')) {
		allowme.innerHTML = 'El tel no es valido';
		return false; 
	} 
	if(formd.mensaje.value == "") { 
		allowme.innerHTML = 'Es necesario escribir un mensaje';
		return false; 
	} 
	if (!formd.email.value.match('[a-zA-Z][0-9a-zA-Z._-]*@[a-zA-Z][0-9a-zA-Z_-]*\..+[^.]$')) {
		allowme.innerHTML = 'El email no es valido';
		return false;
	} 

	/*	var confirma_email = (formd.lastName.value) ? formd.lastName.value : formd.email2.value;
		if (formd.email.value != confirma_email ) { 
		document.getElementById('cubretodo').style.display = "block";
		allowme.innerHTML = 'El email y la confirmacion no coinciden';
		aparece(allowornot);
		cerrar.focus(); 
		return false; 
		} */
	http.open('GET', '/enviacontactar.php?email='+formd.email.value +'&nombre='+formd.nombre.value+'&empresa='+formd.empresa.value+'&mensaje='+formd.mensaje.value+'&telefono='+formd.telefono.value+'&asunto='+formd.asunto.value);
	http.onreadystatechange = function () {
        if(http.readyState == 4){
            var response = http.responseText;
            var allowme = document.getElementById('cont_error');	
            document.body.style.cursor = "default";	
            allowme.innerHTML = "Mensaje enviado con exito";
            ocultaContactar();
        }
    };
	document.body.style.cursor = "wait";
	http.send(null);
	allowme.innerHTML = 'Se esta mandando....';
	return false;

}

function ShowMasInfo() {
	var masinfo = document.getElementById('masinfo');
	masinfo.style.display = (currentCSS(masinfo, "display") == "none") ? "block":"none";
	window.scroll(0,450);
}
