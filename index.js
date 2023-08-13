


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

//Funcion para mostrar todos los articulos al dar click en el menu articulos
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

//Funcion que muestra cada articulo al dar click en las imagenes superiores
function mostrarArticulo(nombreId) {
  ocultarArticulos()
  document.getElementById(nombreId).setAttribute('style', 'display:flex')
}

//Estas tres listas se usan para dar los estilos de claro y oscuro a la vista
//Lista de componentes de la vista
var lstName = ['banner', 'menu', 'section', 'h1', 'input', 'divDeporte', 'divHombre', 'divMujer', 'divZapato', 'color-container', 'login-form', 'nav', 'footer']

//Lista de estilos claros
var lstStylesClaro = ['background-color: #fff !important', 'background-color: #1d5d84 !important',
  'color: white !important', 'background-color: #075155e3 !important', 'background-color: #00607ee3 !important', 'background-color: #f0f0f0 !important']

//Lista de estilos oscuros
var lstStylesOscuro = ['background-color: #4b4747c9 !important', 'background-color: #292929 !important', 'color: white !important',
  'color: black !important', 'background-color: #424141 !important']


//Es el fondo claro y el predeterminado
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

//es el fondo oscuro
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


//Lista de todos los productos
const listProductos = [
  {
    nombre: 'Raqueta y Volante',
    descripcion: 'Deporte Bádminton',
    valor: 40000,
    ruta: 'imagenes/deporte/bagminton_1.png',
    tipo: 'Deporte'
  },
  {
    nombre: 'Set Raquetas y Seis (6) Pelotas',
    descripcion: 'Deporte Pin Pon',
    valor: 165750,
    ruta: 'imagenes/deporte/pin_pon_1.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Set Raquetas y Seis (6) Pelotas',
    descripcion: 'Deporte Pin Pon',
    valor: 165750,
    ruta: 'imagenes/deporte/pin_pon_2.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Set Dos (2) Raquetas y Seis (2) Pelotas',
    descripcion: 'Deporte Pin Pon',
    valor: 90000,
    ruta: 'imagenes/deporte/pin_pon_3.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Set Dos (2) Raquetas y Una (1) Pelota',
    descripcion: 'Vendido por Vittoria One Shop Sas',
    valor: 85000,
    ruta: 'imagenes/deporte/tenis_1.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Balón Baloncesto',
    descripcion: 'Jordan Playground 2.0 8P',
    valor: 130000,
    ruta: 'imagenes/deporte/balon_1.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Balón Futbol',
    descripcion: 'Nike',
    valor: 90000,
    ruta: 'imagenes/deporte/balon_2.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Pelota Beisbol',
    descripcion: 'Decathlon',
    valor: 20000,
    ruta: 'imagenes/deporte/balon_3.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Bate Beisbol',
    descripcion: 'Decathlon',
    valor: 30000,
    ruta: 'imagenes/deporte/bate_1.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Guantes Boxeo',
    descripcion: 'Decathlon',
    valor: 72000,
    ruta: 'imagenes/deporte/boxeo_1.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Guantes Boxeo',
    descripcion: 'Decathlon',
    valor: 72000,
    ruta: 'imagenes/deporte/boxeo_3.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Uniforme de Esgrima',
    descripcion: 'Decathlon',
    valor: 1200000,
    ruta: 'imagenes/deporte/esgrima_1.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Uniforme de Judo',
    descripcion: 'Decathlon',
    valor: 215000,
    ruta: 'imagenes/deporte/judo_1.png',
    tipo: 'Deporte'
  }
  ,
  {
    nombre: 'Buso en lana color gris',
    descripcion: 'Pilatos',
    valor: 95000,
    ruta: 'imagenes/hombre/busos/buso_1.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Buso cerrado para hombre',
    descripcion: 'Diesel',
    valor: 105000,
    ruta: 'imagenes/hombre/busos/buso_2.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Buso cerrado para hombre',
    descripcion: 'Marithe Francois Girbaud',
    valor: 75000,
    ruta: 'imagenes/hombre/busos/buso_3.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Chaqueta en lana para hacer deporte unisex',
    descripcion: 'Superdry',
    valor: 87500,
    ruta: 'imagenes/hombre/busos/buso_4.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Buso para hombre',
    descripcion: 'Monastery',
    valor: 60500,
    ruta: 'imagenes/hombre/busos/buso_5.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Chaqueta color blanco y azul',
    descripcion: 'Pilatos',
    valor: 155000,
    ruta: 'imagenes/hombre/chaquetas/chaqueta_1.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Chaleco acolchado color Hueso',
    descripcion: 'Diesel',
    valor: 235000,
    ruta: 'imagenes/hombre/chaquetas/chaqueta_2.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Saco con gorro color negro',
    descripcion: 'Marithe Francois Girbaud',
    valor: 70000,
    ruta: 'imagenes/hombre/chaquetas/chaqueta_3.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Chaqueta impermeable color negro',
    descripcion: 'Superdry',
    valor: 87500,
    ruta: 'imagenes/hombre/chaquetas/chaqueta_4.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Chaqueta impermeable color naranja',
    descripcion: 'Monastery',
    valor: 60500,
    ruta: 'imagenes/hombre/chaquetas/chaqueta_5.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Chaqueta color blanco y rojo',
    descripcion: 'Pilatos',
    valor: 155000,
    ruta: 'imagenes/hombre/chaquetas/chaqueta_6.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Gorra para hombre',
    descripcion: 'Monastery',
    valor: 30500,
    ruta: 'imagenes/hombre/gorras/gorra_1.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Gorra unisex',
    descripcion: 'Superdry',
    valor: 40500,
    ruta: 'imagenes/hombre/gorras/gorra_2.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Gorra unisex',
    descripcion: 'Marithe Francois Girbaud',
    valor: 40500,
    ruta: 'imagenes/hombre/gorras/gorra_3.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Gorra unisex',
    descripcion: 'Superdry',
    valor: 40500,
    ruta: 'imagenes/hombre/gorras/gorra_4.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Gorra vintage unisex',
    descripcion: 'Marithe Francois Girbaud',
    valor: 53500,
    ruta: 'imagenes/hombre/gorras/gorra_5.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Gorra vintage unisex',
    descripcion: 'Superdry',
    valor: 50000,
    ruta: 'imagenes/hombre/gorras/gorra_6.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Gorra tipo beisbol unisex',
    descripcion: 'Marithe Francois Girbaud',
    valor: 34000,
    ruta: 'imagenes/hombre/gorras/gorra_7.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Gorra unisex',
    descripcion: 'Superdry',
    valor: 38000,
    ruta: 'imagenes/hombre/gorras/gorra_8.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Pantaloneta color azul oscuro',
    descripcion: 'KUAILEY',
    valor: 50500,
    ruta: 'imagenes/hombre/pantaloneta/pantalon_1.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Pantaloneta color azul claro',
    descripcion: 'Amazon Essentials',
    valor: 40500,
    ruta: 'imagenes/hombre/pantaloneta/pantalon_2.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Pantaloneta color blanco',
    descripcion: 'GTHTTT',
    valor: 38500,
    ruta: 'imagenes/hombre/pantaloneta/pantalon_3.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Pantaloneta color verde claro',
    descripcion: 'Wrangler',
    valor: 53500,
    ruta: 'imagenes/hombre/pantaloneta/pantalon_4.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Pantaloneta color azul medio',
    descripcion: 'Generic',
    valor: 40500,
    ruta: 'imagenes/hombre/pantaloneta/pantalon_5.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Pantalon formal',
    descripcion: 'GTHTTT',
    valor: 120000,
    ruta: 'imagenes/hombre/pantaloneta/pantalon_6.png',
    tipo: 'Hombre'
  }
  ,
  {
    nombre: 'Gorra Dama',
    descripcion: 'Monastery',
    valor: 30500,
    ruta: 'imagenes/mujer/gorras/gorra_1.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Gorra unisex',
    descripcion: 'Superdry',
    valor: 40500,
    ruta: 'imagenes/mujer/gorras/gorra_2.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Gorra unisex',
    descripcion: 'Marithe Francois Girbaud',
    valor: 40500,
    ruta: 'imagenes/mujer/gorras/gorra_3.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Gorra vintage unisex',
    descripcion: 'Marithe Francois Girbaud',
    valor: 53500,
    ruta: 'imagenes/mujer/gorras/gorra_4.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Gorra unisex',
    descripcion: 'Superdry',
    valor: 40500,
    ruta: 'imagenes/mujer/gorras/gorra_5.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Gorra vintage unisex',
    descripcion: 'Superdry',
    valor: 50000,
    ruta: 'imagenes/mujer/gorras/gorra_6.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Gorra tipo beisbol unisex',
    descripcion: 'Marithe Francois Girbaud',
    valor: 34000,
    ruta: 'imagenes/mujer/gorras/gorra_7.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Gorra unisex',
    descripcion: 'Superdry',
    valor: 38000,
    ruta: 'imagenes/mujer/gorras/gorra_8.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Sport Leggins Mujer - Color Vinotinto',
    descripcion: 'Superdry',
    valor: 40000,
    ruta: 'imagenes/mujer/pantalon/pantalon_1.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Sport Leggins Mujer - Color Fucsia',
    descripcion: 'Superdry',
    valor: 40000,
    ruta: 'imagenes/mujer/pantalon/pantalon_2.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Sport Leggins Mujer - Color Rojo',
    descripcion: 'Superdry',
    valor: 40000,
    ruta: 'imagenes/mujer/pantalon/pantalon_3.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Sport Leggins Mujer - Color Azul',
    descripcion: 'Superdry',
    valor: 40000,
    ruta: 'imagenes/mujer/pantalon/pantalon_4.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Sudadera Mujer - Color Negro',
    descripcion: 'Marithe Francois Girbaud',
    valor: 30000,
    ruta: 'imagenes/mujer/pantalon/pantalon_5.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Pantalon tipo pescador Mujer - Color violeta claro',
    descripcion: 'Marithe Francois Girbaud',
    valor: 32000,
    ruta: 'imagenes/mujer/pantalon/pantalon_6.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Short Mujer - Color gris oscuro',
    descripcion: 'Marithe Francois Girbaud',
    valor: 45000,
    ruta: 'imagenes/mujer/pantalon/pantalon_8.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Sudadera Mujer tipo pescador - Color negro',
    descripcion: 'Superdry',
    valor: 50000,
    ruta: 'imagenes/mujer/pantalon/pantalon_9.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Pantalón Mujer - Color negro',
    descripcion: 'Superdry',
    valor: 60000,
    ruta: 'imagenes/mujer/pantalon/pantalon_10.png',
    tipo: 'Mujer'
  }
  ,
  {
    nombre: 'Zapatillas Unisex - Talla 37 - 45',
    descripcion: 'Lacoste',
    valor: 540000,
    ruta: 'imagenes/zapatos/zapato_1.png',
    tipo: 'Zapato'
  }
  ,
  {
    nombre: 'Zapatillas Hombre - Talla 37 - 45',
    descripcion: 'Diesel',
    valor: 620000,
    ruta: 'imagenes/zapatos/zapato_2.png',
    tipo: 'Zapato'
  }
  ,
  {
    nombre: 'Zapatillas Hombre - Talla 37 - 43',
    descripcion: 'Vans',
    valor: 220000,
    ruta: 'imagenes/zapatos/zapato_3.png',
    tipo: 'Zapato'
  }
  ,
  {
    nombre: 'Zapatillas Unisex - Talla 37 - 45',
    descripcion: 'Lacoste',
    valor: 320000,
    ruta: 'imagenes/zapatos/zapato_4.png',
    tipo: 'Zapato'
  }
  ,
  {
    nombre: 'Zapatillas Mujer - Talla 37 - 40',
    descripcion: 'Lacoste',
    valor: 250000,
    ruta: 'imagenes/zapatos/zapato_5.png',
    tipo: 'Zapato'
  }
  ,
  {
    nombre: 'Zapatillas Hombre - Talla 37 - 43',
    descripcion: 'Lacoste',
    valor: 280000,
    ruta: 'imagenes/zapatos/zapato_6.png',
    tipo: 'Zapato'
  }
  ,
  {
    nombre: 'Zapatillas Hombre - Talla 37 - 43',
    descripcion: 'Vans',
    valor: 350000,
    ruta: 'imagenes/zapatos/zapato_7.png',
    tipo: 'Zapato'
  }
  ,
  {
    nombre: 'Zapatillas Hombre - Talla 37 - 43',
    descripcion: 'Lacoste',
    valor: 190000,
    ruta: 'imagenes/zapatos/zapato_8.png',
    tipo: 'Zapato'
  }
  ,
  {
    nombre: 'Zapatillas Hombre - Talla 37 - 40',
    descripcion: 'Vans',
    valor: 145000,
    ruta: 'imagenes/zapatos/zapato_9.png',
    tipo: 'Zapato'
  }
  ,
  {
    nombre: 'Zapatillas Hombre - Talla 37 - 42',
    descripcion: 'Lacoste',
    valor: 90000,
    ruta: 'imagenes/zapatos/zapato_10.png',
    tipo: 'Zapato'
  }
  ,
  {
    nombre: 'Zapatillas Hombre - Talla 37 - 45',
    descripcion: 'Vans',
    valor: 255000,
    ruta: 'imagenes/zapatos/zapato_11.png',
    tipo: 'Zapato'
  }
  ,
  {
    nombre: 'Zapatillas Hombre - Talla 37 - 40',
    descripcion: 'Lacoste',
    valor: 210000,
    ruta: 'imagenes/zapatos/zapato_12.png',
    tipo: 'Zapato'
  }

]

//funcion se ejecuta al ingresar a la vista muestra todos los productos
window.onload = function llenarProductos() {
  fondoClaro()
  document.getElementById("divDeporte").setAttribute('style', 'display:flex');
  document.getElementById("divHombre").setAttribute('style', 'display:flex');
  document.getElementById("divMujer").setAttribute('style', 'display:flex');
  document.getElementById("divZapato").setAttribute('style', 'display:flex');

  var contador = 0

  listProductos.forEach(element => {
    contador++
    if (element.tipo === 'Deporte') {
      var divPadre = document.getElementById('divDeporte');
      var divPrDeporte = document.createElement('div');

      var imgDeporte = document.createElement('img');
      imgDeporte.setAttribute('src', element.ruta);

      var titulo = document.createElement('h4');
      titulo.innerHTML = element.nombre;

      var desc = document.createElement('p');
      desc.innerHTML = element.descripcion;

      var valor = document.createElement('h3');
      valor.innerHTML = element.valor;

      var btnCarro = document.createElement('button');
      btnCarro.setAttribute('style', 'background:url(imagenes/carro.png) no-repeat;width: 35px !important;height: 35px !important;transition: background-color .3s;color: var(--home-linkbox-text-color);padding: .5rem 1rem;border: var(--home-linkbox-border);background-color: var(--home-linkbox-bg);border-radius: 10px;cursor: pointer;float: left;')
      btnCarro.setAttribute('id', 'carroDep_' + contador)
      btnCarro.setAttribute('name', contador)

      divPrDeporte.appendChild(imgDeporte)
      divPrDeporte.appendChild(titulo)
      divPrDeporte.appendChild(desc)
      divPrDeporte.appendChild(valor)
      divPrDeporte.appendChild(btnCarro)
      btnCarro.addEventListener("click", () => {
        adicionaProductoCarro(event)
      });
      divPadre.appendChild(divPrDeporte);
    }
    else if (element.tipo === 'Hombre') {
      var divPadre = document.getElementById('divHombre');
      var divPrHombre = document.createElement('div');

      var imgHombre = document.createElement('img');
      imgHombre.setAttribute('src', element.ruta);

      var titulo = document.createElement('h4');
      titulo.innerHTML = element.nombre;

      var desc = document.createElement('p');
      desc.innerHTML = element.descripcion;

      var valor = document.createElement('h3');
      valor.innerHTML = element.valor;

      var btnCarro = document.createElement('button');
      btnCarro.setAttribute('style', 'background:url(imagenes/carro.png) no-repeat;width: 35px !important;height: 35px !important;transition: background-color .3s;color: var(--home-linkbox-text-color);padding: .5rem 1rem;border: var(--home-linkbox-border);background-color: var(--home-linkbox-bg);border-radius: 10px;cursor: pointer;float: left;')
      btnCarro.setAttribute('id', 'carroHom_' + contador)
      btnCarro.setAttribute('name', contador)

      divPrHombre.appendChild(imgHombre)
      divPrHombre.appendChild(titulo)
      divPrHombre.appendChild(desc)
      divPrHombre.appendChild(valor)
      divPrHombre.appendChild(btnCarro)
      btnCarro.addEventListener("click", () => {
        adicionaProductoCarro(event)
      });
      divPadre.appendChild(divPrHombre);
    }
    else if (element.tipo === 'Mujer') {
      var divPadre = document.getElementById('divMujer');
      var divPrMujer = document.createElement('div');

      var imgMujer = document.createElement('img');
      imgMujer.setAttribute('src', element.ruta);

      var titulo = document.createElement('h4');
      titulo.innerHTML = element.nombre;

      var desc = document.createElement('p');
      desc.innerHTML = element.descripcion;

      var valor = document.createElement('h3');
      valor.innerHTML = element.valor;

      var btnCarro = document.createElement('button');
      btnCarro.setAttribute('style', 'background:url(imagenes/carro.png) no-repeat;width: 35px !important;height: 35px !important;transition: background-color .3s;color: var(--home-linkbox-text-color);padding: .5rem 1rem;border: var(--home-linkbox-border);background-color: var(--home-linkbox-bg);border-radius: 10px;cursor: pointer;float: left;')
      btnCarro.setAttribute('id', 'carroMuj_' + contador)
      btnCarro.setAttribute('name', contador)

      divPrMujer.appendChild(imgMujer)
      divPrMujer.appendChild(titulo)
      divPrMujer.appendChild(desc)
      divPrMujer.appendChild(valor)
      divPrMujer.appendChild(btnCarro)
      btnCarro.addEventListener("click", () => {
        adicionaProductoCarro(event)
      });
      divPadre.appendChild(divPrMujer);
    }
    else if (element.tipo === 'Zapato') {
      var divPadre = document.getElementById('divZapato');
      var divPrZapato = document.createElement('div');

      var imgZapato = document.createElement('img');
      imgZapato.setAttribute('src', element.ruta);

      var titulo = document.createElement('h4');
      titulo.innerHTML = element.nombre;

      var desc = document.createElement('p');
      desc.innerHTML = element.descripcion;

      var valor = document.createElement('h3');
      valor.innerHTML = element.valor;

      var btnCarro = document.createElement('button');
      btnCarro.setAttribute('style', 'background:url(imagenes/carro.png) no-repeat;width: 35px !important;height: 35px !important;transition: background-color .3s;color: var(--home-linkbox-text-color);padding: .5rem 1rem;border: var(--home-linkbox-border);background-color: var(--home-linkbox-bg);border-radius: 10px;cursor: pointer;float: left;')
      btnCarro.setAttribute('id', 'carroMuj_' + contador)
      btnCarro.setAttribute('name', contador)

      divPrZapato.appendChild(imgZapato)
      divPrZapato.appendChild(titulo)
      divPrZapato.appendChild(desc)
      divPrZapato.appendChild(valor)
      divPrZapato.appendChild(btnCarro)
      btnCarro.addEventListener("click", () => {
        adicionaProductoCarro(event)
      });
      divPadre.appendChild(divPrZapato);
    }
  })
}

const lstProductoCarro = new Array()

//funcion adiciona productos a la lista al dar click en el carro
function adicionaProductoCarro(event) {
  var btn = document.getElementsByName('carro')
  var posicion = event.target.getAttribute('name')
  lstProductoCarro.push(listProductos[posicion])
}

