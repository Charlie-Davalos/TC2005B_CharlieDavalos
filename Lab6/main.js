document.addEventListener('DOMContentLoaded', () => {

	
	// Password verification
	document.querySelector('#submit-ejercicio1').onsubmit = () => {
		let same = false;
		let mayuscula = false;
		let minuscula = false;
		let eightChars = false;

		const pass1 = document.querySelector('#pass1').value;	
		const pass2 = document.querySelector('#pass2').value;

		if (pass1 == pass2){same = true}
		if (pass1.length >= 8){eightChars = true}
		
		for (var i=0; i<pass1.length; i++){
			const char = pass1[i];
			if (char == char.toUpperCase()){
				mayuscula = true;
			}
			if (char == char.toLowerCase()){
				minuscula = true;
			}
		}
		if (!same){
			console.log(false);
			alert("Ambos campos deben de ser iguales");
		}
		else if (mayuscula && minuscula && eightChars){
			console.log(true);
			alert("Tu contraseña es correcta.");
		}
		else {
			console.log(false);
			alert("Tu contraseña no sigue las reglas indicadas.");
		}
	};
});