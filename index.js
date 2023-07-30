

//const username = document.getElementById('username')
//const password = document.getElementById  ('password')
//const message = document.getElementById('message')
//const button = document.getElementById('button')

// index.js
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

//document.getElementById('show-register').addEventListener('click', function () {
//  document.getElementById('login-form').style.display = 'none';
 // document.getElementById('register-form').style.display = 'block';
//});

//document.getElementById('register-button').addEventListener('click', register);



// Asociar los eventos a los botones o elementos deseados

// botonCambiarColor.addEventListener('click', cambiarColorFondo);
// botonCambiarTamanoFuente.addEventListener('click', cambiarTamanoFuente);
// botonAgregarImagen.addEventListener('click', agregarNuevaImagen);

function cambiarColorFondo () {
  body = document.getElementsByTagName('body')[0];
  if( body.style.backgroundColor == 'blue'){
    body.style.backgroundColor = 'white';
  }else {
    body.style.backgroundColor = 'blue';
  }
}

  