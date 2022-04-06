/*
 * EXPLICAR QUE HACE ESTE MODULO
 *
 */

// ---- Seteamos constantes ----

// Los numeros aceptdos por hex son desde 0 hasta 9
const crearNumeroRandom = (min = 0, max = 9) => {
  return Math.floor( (Math.random() * (max + 1) - min))
}
// Las letras aceptadas por hex son desde la "A" hasta la "F"
const crearLetraRandom = (min = "A", max = "F") => {
  // Convertimos las letras a codigo ascci
  const ASCCIdeA = min.charCodeAt() 
  const ASCCIdeF = max.charCodeAt()
  // Obtenemos una nueva letra random
  const ASSCILetraRandom =  Math.floor(Math.random() * ((ASCCIdeF + 1) - ASCCIdeA)) + ASCCIdeA;
  // Convertimos de codigo ascii a char la letra random y la retornamos
  return String.fromCharCode(ASSCILetraRandom) 
}
// Numero random para determinar si se agrega una letra o un numero (0 o 1)
const crearOpcinoRandom = (min = 0, max = 1) => {
  return Math.floor( (Math.random() * (max + 1) - min))
}
// Cantidad de caracteres hexadecimales que tienen los hex
const cantDeHexadecimal = 6


// --- Funcion para crear un hex random y cambiar los colores del background y el boton del nav --- 
export function cambiarModoDeColoresRandom(btnRandomMode, color) {
  const randomHex = ['#']
  // Obtenemos el random hex
  for (let i = 0; i < cantDeHexadecimal; i++) {
    (crearOpcinoRandom() === 1) // 1 = obtener numero random || 0 = obtener letra random
      ? randomHex.push(crearNumeroRandom())
      : randomHex.push(crearLetraRandom())
  }
  const colorHex = randomHex.join('') 

  // -- Con el hex random creado modificar backgoru y el texto del hex --

  // Cambiamos el color del fondo con el primero color del array y del boton del nav activado
  document.body.style.background = colorHex;

  // Cambiamos el color del boton del nav
  btnRandomMode.style.backgroundColor = colorHex

  // Modificamos el texto del span que represeta el codigo de los colores del backgorund
  color.innerHTML = colorHex;
  color.style.color = colorHex;
}

