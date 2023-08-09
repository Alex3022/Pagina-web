//window.onload = mostrarProductosPrincipales()

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



function cambiarColorFondo() {
  body = document.getElementsByTagName('body')[0];
  if (body.style.backgroundColor == 'orange') {
    body.style.backgroundColor = 'white';
  } else {
    body.style.backgroundColor = 'orange';
  }
}



function mostrarBusos() {
  console.log("mostrarBusos")
  document.getElementById("divBusos").setAttribute('style', 'display:flex');
  document.getElementById("divGorra").setAttribute('style', 'display:none')
  document.getElementById("divPantalon").setAttribute('style', 'display:none')
  document.getElementById("divZapato").setAttribute('style', 'display:none')
}

function mostrarGorras() {
  console.log("mostrarGorras")
  document.getElementById("divGorra").setAttribute('style', 'display:flex')
  document.getElementById("divPantalon").setAttribute('style', 'display:none')
  document.getElementById("divZapato").setAttribute('style', 'display:none')
  document.getElementById("divBusos").setAttribute('style', 'display:none');

}

function mostrarPantalon() {
  console.log("mostrarPantalon")
  document.getElementById("divPantalon").setAttribute('style', 'display:flex')
  document.getElementById("divGorra").setAttribute('style', 'display:none')
  document.getElementById("divZapato").setAttribute('style', 'display:none')
  document.getElementById("divBusos").setAttribute('style', 'display:none');
}

function mostrarZapato() {
  console.log("mostrarZapato")
  document.getElementById("divZapato").setAttribute('style', 'display:flex')
  document.getElementById("divPantalon").setAttribute('style', 'display:none')
  document.getElementById("divGorra").setAttribute('style', 'display:none')
  document.getElementById("divBusos").setAttribute('style', 'display:none');
}

function mostrarTodos() {
  console.log("mostrarTodos")
  document.getElementById("divBusos").setAttribute('style', 'display:flex');
  document.getElementById("divGorra").setAttribute('style', 'display:flex');
  document.getElementById("divPantalon").setAttribute('style', 'display:flex');
  document.getElementById("divZapato").setAttribute('style', 'display:flex');
}

window.onload = function ocultarTodos() {
  console.log("ocultarTodos")
  document.getElementById("divBusos").setAttribute('style', 'display:none');
  document.getElementById("divGorra").setAttribute('style', 'display:none');
  document.getElementById("divPantalon").setAttribute('style', 'display:none');
  document.getElementById("divZapato").setAttribute('style', 'display:none');
}



