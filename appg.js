let good1 = 0;
let bad1 = 0;
function ans21(){
  const ansText = document.getElementById('ans21').value;
  if(ansText  === 'b'){
    document.getElementById('result1').innerHTML = 'Respuesta Correcta';
    document.getElementById('valid21').style.display = 'none';
    document.getElementById('ans21').style.display = 'none';
    good1+=1;
  }else{
    document.getElementById('result1').innerHTML = 'Respuesta Incorrecta';
    document.getElementById('valid21').style.display = 'none';
    document.getElementById('ans21').style.display = 'none';
    bad1+=1;
  }
}

function ans22(){
  const ansText = document.getElementById('ans22').value;
  if(ansText  === 'a'){
    document.getElementById('result2').innerHTML = 'Respuesta Correcta';
    document.getElementById('valid22').style.display = 'none';
    document.getElementById('ans22').style.display = 'none';
    good1+=1;
  }else{
    document.getElementById('result2').innerHTML = 'Respuesta Incorrecta';
    document.getElementById('valid22').style.display = 'none';
    document.getElementById('ans22').style.display = 'none';
    bad1+=1;
  }
}
function ans23(){
  const ansText = document.getElementById('ans23').value;
  if(ansText  === 'c'){
    document.getElementById('result3').innerHTML = 'Respuesta Correcta';
    document.getElementById('valid').style.display = 'none';
    document.getElementById('ans23').style.display = 'none';
    good1+=1;
  }else{
    document.getElementById('result3').innerHTML = 'Respuesta Incorrecta';
    document.getElementById('valid23').style.display = 'none';
    document.getElementById('ans23').style.display = 'none';
    bad1+=1;
  }

  const boxFinal = document.getElementById('results-box');
  boxFinal.style.display = 'inline';
  document.getElementById('right-answers').innerHTML += good1;
  document.getElementById('wrong-answers').innerHTML += bad1;
}
