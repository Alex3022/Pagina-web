//const username = document.getElementById('username')
//const password = document.getElementById  ('password')
//const message = document.getElementById('message')
//const button = document.getElementById('button')


function login() {
  const username = document.querySelector('#login-form input[type="text"]').value;
  const password = document.querySelector('#login-form input[type="password"]').value;

  //  El proceso de login  )
  if (username === 'usuario' && password === 'contraseña') {
    window.open('inicio.html', '_self');
  } else {
    alert('Su usuario o contraseña son incorrectos');
  }
}

//function register() {
//const username = document.querySelector('#register-form input[type="text"]').value;
// const password = document.querySelector('#register-form input[type="password"]').value;

// Realizar la acción de registro 
// console.log('Usuario registrado:', username, 'con contraseña:', password);
//}


//Funcion para mostrar todos los articulos
function mostrarTodos() {
  document.getElementById("divBusos").setAttribute('style', 'display:flex');
  document.getElementById("divGorra").setAttribute('style', 'display:flex');
  document.getElementById("divPantalon").setAttribute('style', 'display:flex');
  document.getElementById("divZapato").setAttribute('style', 'display:flex');
}

//Funcion para ocultar los articulos, se usa al dar click en cada articulo oculte el anterior
function ocultarArticulos() {
  document.getElementById("divBusos").setAttribute('style', 'display:none');
  document.getElementById("divGorra").setAttribute('style', 'display:none');
  document.getElementById("divPantalon").setAttribute('style', 'display:none');
  document.getElementById("divZapato").setAttribute('style', 'display:none');
}


//funcion que oculta todos los articulos al ingresar a la página
window.onload = function ocultarTodos() {
  document.getElementById("divBusos").setAttribute('style', 'display:none');
  document.getElementById("divGorra").setAttribute('style', 'display:none');
  document.getElementById("divPantalon").setAttribute('style', 'display:none');
  document.getElementById("divZapato").setAttribute('style', 'display:none');
}

function mostrarArticulo(nombreId) {
  ocultarArticulos()
  document.getElementById(nombreId).setAttribute('style', 'display:flex')
}



function cambiarColorFondo2() {
  body = document.getElementsByTagName('body')[0];
  if (body.style.backgroundColor == 'black') {
    console.log("Negro")
    body.style.backgroundColor = 'white';
    document.getElementsByTagName('h1')[0].setAttribute('style', 'color: black !important')
  } else {
    body.style.backgroundColor = 'black';
    document.getElementsByTagName('h1')[0].setAttribute('style', 'color: white !important')
  }
}



function cambiarColorFondo() {
  body = document.getElementsByTagName('body')[0];
  if (body.style.backgroundColor == 'orange') {
    body.style.backgroundColor = 'white';
  } else {
    body.style.backgroundColor = 'orange';
  }
}