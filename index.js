(function () {
  const listElements = document.querySelectorAll('.menu__item--show');
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburguer');

  const addClick = () => {
    listElements.forEach(element => {
      element.addEventListener('click', () => {


        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle('menu__item--active');


        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }

        subMenu.style.height = `${height}px`;

      });
    });
  }

  const deleteStyleHeight = () => {
    listElements.forEach(element => {

      if (element.children[1].getAttribute('style')) {
        element.children[1].removeAttribute('style');
        element.classList.remove('menu__item--active');
      }

    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      deleteStyleHeight();
      if (list.classList.contains('menu__links--show'))
        list.classList.remove('menu__links--show');

    } else {
      addClick();
    }
  });

  if (window.innerWidth <= 800) {
    addClick();
  }

  menu.addEventListener('click', () => list.classList.toggle('menu__links--show'));

})();


function login() {
  const username = document.querySelector('#login-form input[type="text"]').value;
  const password = document.querySelector('#login-form input[type="password"]').value;


  if (username === 'usuario' && password === 'contraseña') {
    window.open('perfil.html', '_self');
  } else {
    alert('Su usuario o contraseña son incorrectos');
  }
}

function abrirModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'inline-block';
}


var modal = document.getElementById("myModal");


var onclick = document.getElementById("perfil");


var span = document.getElementsByClassName("close")[0];




span.onclick = function () {
  modal.style.display = "none";
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
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

//Funcion para mostrar todos los articulos
window.onload = function mostrarTodos() {
  document.getElementById("divDeporte").setAttribute('style', 'display:flex');
  document.getElementById("divHombre").setAttribute('style', 'display:flex');
  document.getElementById("divMujer").setAttribute('style', 'display:flex');
  document.getElementById("divZapato").setAttribute('style', 'display:flex');
}

function todos() {
  document.getElementById("divDeporte").setAttribute('style', 'display:flex');
  document.getElementById("divHombre").setAttribute('style', 'display:flex');
  document.getElementById("divMujer").setAttribute('style', 'display:flex');
  document.getElementById("divZapato").setAttribute('style', 'display:flex');
}

//Funcion para ocultar los articulos, se usa al dar click en cada articulo oculte el anterior
function ocultarArticulos() {
  document.getElementById("divDeporte").setAttribute('style', 'display:none');
  document.getElementById("divHombre").setAttribute('style', 'display:none');
  document.getElementById("divMujer").setAttribute('style', 'display:none');
  document.getElementById("divZapato").setAttribute('style', 'display:none');
}


//funcion que oculta todos los articulos al ingresar a la página
function ocultarTodos() {
  document.getElementById("divDeporte").setAttribute('style', 'display:none');
  document.getElementById("divHombre").setAttribute('style', 'display:none');
  document.getElementById("divMujer").setAttribute('style', 'display:none');
  document.getElementById("divZapato").setAttribute('style', 'display:none');
}

function mostrarArticulo(nombreId) {
  ocultarArticulos()
  document.getElementById(nombreId).setAttribute('style', 'display:flex')
}


var lstName = ['banner', 'menu', 'section', 'h1', 'input', 'divDeporte', 'divHombre', 'divMujer', 'divZapato', 'color-container', 'login-form', 'nav', 'footer']

var lstStylesClaro = ['background-color: #fff !important', 'background-color: #1d5d84 !important',
  'color: white !important', 'background-color: #075155e3 !important', 'background-color: #00607ee3 !important', 'background-color: #f0f0f0 !important']

var lstStylesOscuro = ['background-color: #4b4747c9 !important', 'background-color: #292929 !important', 'color: white !important',
  'color: black !important', 'background-color: #424141 !important']

window.onload = function fondoInicio() {
  document.getElementById("btnClaro").setAttribute('style', 'float: right;');
  document.getElementById("btnOscuro").setAttribute('style', 'display:none');
  document.getElementById(lstName[0]).setAttribute('style', lstStylesClaro[0])
  document.getElementById(lstName[1]).setAttribute('style', lstStylesClaro[1])
  document.getElementsByTagName(lstName[2])[0].setAttribute('style', lstStylesClaro[1])
  document.getElementsByTagName(lstName[3])[0].setAttribute('style', lstStylesClaro[2])
  document.getElementsByTagName(lstName[4])[0].setAttribute('style', lstStylesOscuro[3])
  document.getElementById(lstName[5]).setAttribute('style', lstStylesClaro[3])
  document.getElementById(lstName[6]).setAttribute('style', lstStylesClaro[3])
  document.getElementById(lstName[7]).setAttribute('style', lstStylesClaro[3])
  document.getElementById(lstName[8]).setAttribute('style', lstStylesClaro[4])
  document.getElementById(lstName[9]).setAttribute('style', lstStylesClaro[4])
  document.getElementById(lstName[10]).setAttribute('style', lstStylesClaro[0])
  document.getElementById(lstName[11]).setAttribute('style', lstStylesClaro[5])
  document.getElementById(lstName[12]).setAttribute('style', lstStylesClaro[1])
}

function fondoClaro() {
  body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = 'white';
  document.getElementById("btnClaro").setAttribute('style', 'float: right;');
  document.getElementById("btnOscuro").setAttribute('style', 'display:none');
  document.getElementById(lstName[0]).setAttribute('style', lstStylesClaro[0])
  document.getElementById(lstName[1]).setAttribute('style', lstStylesClaro[1])
  document.getElementsByTagName(lstName[2])[0].setAttribute('style', lstStylesClaro[1])
  document.getElementsByTagName(lstName[3])[0].setAttribute('style', lstStylesClaro[2])
  document.getElementsByTagName(lstName[4])[0].setAttribute('style', lstStylesOscuro[3])
  document.getElementById(lstName[5]).setAttribute('style', lstStylesClaro[3])
  document.getElementById(lstName[6]).setAttribute('style', lstStylesClaro[3])
  document.getElementById(lstName[7]).setAttribute('style', lstStylesClaro[3])
  document.getElementById(lstName[8]).setAttribute('style', lstStylesClaro[4])
  document.getElementById(lstName[9]).setAttribute('style', lstStylesClaro[4])
  document.getElementById(lstName[10]).setAttribute('style', lstStylesClaro[0])
  document.getElementById(lstName[11]).setAttribute('style', lstStylesClaro[5])
  document.getElementById(lstName[12]).setAttribute('style', lstStylesClaro[1])
}

function fondoOscuro() {
  body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = 'black';
  document.getElementById("btnOscuro").setAttribute('style', 'float: right;');
  document.getElementById("btnClaro").setAttribute('style', 'display:none');

  document.getElementById(lstName[0]).setAttribute('style', lstStylesOscuro[0])
  document.getElementById(lstName[1]).setAttribute('style', lstStylesOscuro[1])
  document.getElementsByTagName(lstName[2])[0].setAttribute('style', lstStylesOscuro[1])
  document.getElementsByTagName(lstName[3])[0].setAttribute('style', lstStylesOscuro[2])
  document.getElementsByTagName(lstName[4])[0].setAttribute('style', lstStylesOscuro[3])
  document.getElementById(lstName[5]).setAttribute('style', lstStylesOscuro[4])
  document.getElementById(lstName[6]).setAttribute('style', lstStylesOscuro[4])
  document.getElementById(lstName[7]).setAttribute('style', lstStylesOscuro[4])
  document.getElementById(lstName[8]).setAttribute('style', lstStylesOscuro[4])
  document.getElementById(lstName[9]).setAttribute('style', lstStylesOscuro[1])
  document.getElementById(lstName[10]).setAttribute('style', lstStylesOscuro[0])
  document.getElementById(lstName[11]).setAttribute('style', lstStylesOscuro[0])
  document.getElementById(lstName[12]).setAttribute('style', lstStylesOscuro[0])
}






/*document.addEventListener("DOMContentLoaded", function () {
  const agregarCarritoButtons = document.querySelectorAll(".agregar-carrito");
  const listaCarrito = document.querySelector(".lista-carrito");
  const totalElement = document.getElementById("total");
  let total = 0;

  agregarCarritoButtons.forEach((boton) => {
      boton.addEventListener("click", agregarAlCarrito);
  });

  function agregarAlCarrito(event) {
      const boton = event.target;
      console.log("1--agregarAlCarrito "+nombre)
      const nombre = boton.dataset.nombre;
      console.log("1--agregarAlCarrito "+nombre)
      const precio = parseFloat(boton.dataset.precio);

      const itemCarrito = document.createElement("li");
      itemCarrito.innerHTML = `
          ${nombre} - $${precio.toFixed(2)}
          <button class="eliminar-item" data-precio="${precio}">Eliminar</button>
      `;
      listaCarrito.appendChild(itemCarrito);

      total += precio;
      totalElement.textContent = total.toFixed(2);

      const eliminarBoton = itemCarrito.querySelector(".eliminar-item");
      eliminarBoton.addEventListener("click", eliminarDelCarrito);
  }

  function eliminarDelCarrito(event) {
      const botonEliminar = event.target;
      const precio = parseFloat(botonEliminar.dataset.precio);

      total -= precio;
      totalElement.textContent = total.toFixed(2);

      const itemEliminar = botonEliminar.parentElement;
      itemEliminar.remove();
  }
});*/




