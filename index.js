// Funcionalidad 1: Cambiar el color de fondo del cuerpo (body)
function cambiarColorFondo() {
    const body = document.querySelector('body');
    body.style.backgroundColor = '#f2e5e5';
  }
  
  // Funcionalidad 2: Cambiar el tamaño de la fuente del título principal (h1)
  function cambiarTamanoFuente() {
    const tituloPrincipal = document.querySelector('h1');
    tituloPrincipal.style.fontSize = '36px';
  }
  
  // Funcionalidad 3: Agregar una nueva imagen con margen en la sección de inicio (main)
  function agregarNuevaImagen() {
    const mainSection = document.querySelector('main');
    const nuevaImagen = document.createElement('img');
    nuevaImagen.src = 'imagenes/imagen4.jpg.jpg"';
    nuevaImagen.alt = '';
    nuevaImagen.style.margin = '10px';
    mainSection.appendChild(nuevaImagen);
  }
  
  // Asociar los eventos a los botones o elementos deseados
  
  const botonCambiarColor = document.getElementById('boton-cambiar-color');
  const botonCambiarTamanoFuente = document.getElementById('boton-cambiar-tamano');
  const botonAgregarImagen = document.getElementById('boton-agregar-imagen');
  
  botonCambiarColor.addEventListener('click', cambiarColorFondo);
  botonCambiarTamanoFuente.addEventListener('click', cambiarTamanoFuente);
  botonAgregarImagen.addEventListener('click', agregarNuevaImagen);