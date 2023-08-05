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



function cambiarColorFondo () {
  body = document.getElementsByTagName('body')[0];
  if( body.style.backgroundColor == 'orange'){
    body.style.backgroundColor = 'white';
  }else {
    body.style.backgroundColor = 'orange';
  }
}

function mostrarProductosPrincipales(){
  var lstProductos = [
    {nombre:"Busos", imagen:"buso_1.png"},
    {nombre:"Gorras", imagen:"gorra_1.png"},
    {nombre:"Pantalones", imagen:"pantalon_1.png"},
    {nombre:"Zapatillas", imagen:"zapato_1.png"}
];
console.log("mostrarProductosPrincipales "+lstProductos.length)
document.getElementById('miDiv').innerHTML = lstProductos;

//document.getElementById('miDiv') = lstProductos.toString();


//var img = document.createElement("imgproduct")

//console.log("mostrarProductosPrincipales "+content)

//recorro for
lstProductos.forEach(function(articulo){
  console.log(articulo.nombre+" - "+articulo.imagen);

  /*content.src = articulo.imagen
  console.log(content.src);

  img.src = articulo.imagen*/


  
});
/*

var imageParent = document.getElementsByTagName("imgproduct");
imageParent.id = "imgproduct";
imageParent.className = "w-full";
imageParent.src = content.src;
*/



  //let lstProductos = ["imagenes/buso_1.png", "imagenes/gorra_1.png", "imagenes/pantalon_1.png", "imagenes/zapato_1.png"]

  /*const content = null || document.getElementById('content');

  var divProducto = document.getElementById("content")*/

  /*for(indice = 0; indice < lstProductos.length; indice++){
    
    <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${lstProductos[indice]}" alt="${lstProductos[indice]}" class="w-full"></img>
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${lstProductos[indice]}
          </h3>
        </div>
      </div>
  }
  content.innerHTML = view;*/


}

function llenarArrayProductos() {
  console.log("funcion llenarArrayProductos archivo js")
  let lstBusos = ["buso_1.png", "buso_2.png", "buso_3.png", "buso_4.png", "buso_5.png"]
  let lstGorras = ["gorra_1.png", "gorra_2.png", "gorra_3.png", "gorra_4.png", "gorra_5.png", "gorra_6.png", "gorra_7.png", "gorra_8.png"]
  let lstPantalon = ["pantalon_1.png", "pantalon_2.png", "pantalon_3.png", "pantalon_4.png", "pantalon_5.png", "pantalon_6.png", "pantalon_7.png", "pantalon_8.png", "pantalon_9.png", "pantalon_10.png"]
  let lstZapato = ["zapato_1.png", "zapato_2.png", "zapato_3.png", "zapato_4.png", "zapato_5.png"]

  /*for (indice = 0; indice < lstBusos.length; indice++) {
    document.write("<H" + i + ">Encabezado de nivel " + i + "</H" + i + ">")
  }*/

  let html = document.querySelector("html");

  let panel = document.createElement("div");
  panel.setAttribute("class", "producto");
  html.appendChild(panel);

  let msg = document.createElement("p");
  msg.textContent = "This is a message box";
  panel.appendChild(msg);

  let closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);

closeBtn.onclick = function () {
  panel.parentNode.removeChild(panel);
};


}

  