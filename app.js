let good = 0;
let bad = 0;
function getName(){
	const name = document.getElementById("user").value;
	if (name === '') {
		document.getElementById('welcome').innerHTML += 'Cibernaut@';
		document.getElementById('enviar').style.visibility = 'hidden';
		document.getElementById('user').style.visibility = 'hidden';
		document.getElementById('quest').style.visibility = 'hidden';
	}else {
		document.getElementById('welcome').innerHTML += name;
		document.getElementById('enviar').style.visibility = 'hidden';
		document.getElementById('user').style.visibility = 'hidden';
		document.getElementById('quest').style.visibility = 'hidden';
}
	const box = document.getElementById('start');
	box.style.none = 'inline';
}
	function ans11(){
		const ansText = document.getElementById('ans11').value;
		if(ansText  === 'c'){
			document.getElementById('result1').innerHTML = 'Respuesta Correcta';
			document.getElementById('valid11').style.display = 'none';
			document.getElementById('ans11').style.display = 'none';
			good+=1;
		}else{
			document.getElementById('result1').innerHTML = 'Respuesta Incorrecta';
			document.getElementById('valid11').style.display = 'none';
			document.getElementById('ans11').style.display = 'none';
			bad+=1;
		}
	}

	function ans12(){
		const ansText = document.getElementById('ans12').value;
		if(ansText  === 'b'){
			document.getElementById('result2').innerHTML = 'Respuesta Correcta';
			document.getElementById('valid12').style.display = 'none';
			document.getElementById('ans12').style.display = 'none';
			good+=1;
		}else{
			document.getElementById('result2').innerHTML = 'Respuesta Incorrecta';
			document.getElementById('valid12').style.display = 'none';
			document.getElementById('ans12').style.display = 'none';
			bad+=1;
		}
	}
	function ans13(){
		const ansText = document.getElementById('ans13').value;
		if(ansText  === 'c'){
			document.getElementById('result3').innerHTML = 'Respuesta Correcta';
			document.getElementById('valid13').style.display = 'none';
			document.getElementById('ans13').style.display = 'none';
			good+=1;
		}else{
			document.getElementById('result3').innerHTML = 'Respuesta Incorrecta';
			document.getElementById('valid13').style.display = 'none';
			document.getElementById('ans13').style.display = 'none';
			bad+=1;
		}

		const boxFinal = document.getElementById('results-box');
		boxFinal.style.display = 'inline';
		document.getElementById('right-answers').innerHTML += good;
		document.getElementById('wrong-answers').innerHTML += bad;
	}
