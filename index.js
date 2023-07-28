// Función de inicio de sesión (simulación)
async function login(username, password) {
  // Aquí llamarías al backend para autenticar al usuario
  // Por simplicidad, en este ejemplo utilizaremos un mock

  // Supongamos que el backend devuelve una Promise que resuelve si el inicio de sesión es exitoso
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "usuario" && password === "contraseña") {
        resolve({ success: true, message: "Inicio de sesión exitoso." });
      } else {
        reject({ success: false, message: "Credenciales incorrectas." });
      }
    }, 1000); // Simulamos una pequeña demora para simular el tiempo de respuesta del backend
  });
}

// Función de registro de usuario (simulación)
async function register(username, password) {
  // Aquí llamarías al backend para registrar al usuario
  // Por simplicidad, en este ejemplo utilizaremos un mock

  // Supongamos que el backend devuelve una Promise que resuelve si el registro es exitoso
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos un caso donde el registro siempre es exitoso
      resolve({ success: true, message: "Registro exitoso." });
    }, 1000); // Simulamos una pequeña demora para simular el tiempo de respuesta del backend
  });
}

// Mock para la función de inicio de sesión
async function mockLogin(username, password) {
  // Simulamos una respuesta exitosa para cualquier combinación de usuario y contraseña
  return new Promise((resolve) => {
    resolve({ success: true, message: "Inicio de sesión exitoso (mock)." });
  });
}

// Mock para la función de registro de usuario
async function mockRegister(username, password) {
  // Simulamos una respuesta exitosa para cualquier combinación de usuario y contraseña
  return new Promise((resolve) => {
    resolve({ success: true, message: "Registro exitoso (mock)." });
  });
}

// Test de la función de inicio de sesión usando el mock
async function testLoginWithMock() {
  const username = "usuario";
  const password = "contraseña";
  try {
    const result = await login(username, password); // En lugar de llamar a la función real, usa el mock
    console.log(result); // Deberías ver el mensaje de éxito del mock en la consola
  } catch (error) {
    console.error(error); // No debería ocurrir en el mock
  }
}

// Test de la función de registro usando el mock
async function testRegisterWithMock() {
  const username = "nuevoUsuario";
  const password = "nuevaContraseña";
  try {
    const result = await register(username, password); // En lugar de llamar a la función real, usa el mock
    console.log(result); // Deberías ver el mensaje de éxito del mock en la consola
  } catch (error) {
    console.error(error); // No debería ocurrir en el mock
  }
}

// Ejecutar los tests
testLoginWithMock();
testRegisterWithMock();



































const username = document.getElementById('username')
const password = document.getElementById  ('password')
const button = document.getElementById('button')

button.addEventListener ('click' , (e) => {
  e.preventDefault()
  const data = {
    username: username.value,
    password: password.value
  }
  console.log(data)
})


  // Asociar los eventos a los botones o elementos deseados
  
  const botonCambiarColor = document.getElementById('boton-cambiar-color');
  const botonCambiarTamanoFuente = document.getElementById('boton-cambiar-tamano');
  const botonAgregarImagen = document.getElementById('boton-agregar-imagen');
  
  botonCambiarColor.addEventListener('click', cambiarColorFondo);
  botonCambiarTamanoFuente.addEventListener('click', cambiarTamanoFuente);
  botonAgregarImagen.addEventListener('click', agregarNuevaImagen);