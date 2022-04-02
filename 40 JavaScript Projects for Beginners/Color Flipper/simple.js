/*
 * EXPLICAR QUE HACE ESTE MODULO
 *
 */

const colors = [
  "#feffbf",
  "#fcdcdf",
  "#f496c2",
  "#c997c6",
  "#bcefef",
  "#b3d9dc",
  "#ffffff",
];

export function cambiarModoDeColoresSimple(btnSimpleMode, color) {
  // Cambiamos el color del fondo con el primero color del array y del boton del nav activado
  document.body.style.background = colors[0];

  // Cambiamos el color del boton del nav
  btnSimpleMode.style.backgroundColor = colors[0];

  // Movemos el primer elemento del array hacia el ultimo indice
  let firstElement = colors[0]; // Almacenamos el primer elemento

  // Modificamos el texto del span que represeta el codigo de los colores del backgorund
  color.innerHTML = firstElement.toUpperCase();
  color.style.color = firstElement;

  // Eliminamos el primer elemento
  colors.splice(0, 1);

  // Anexamos al final del array el primer elemento eliminado
  colors.push(firstElement);
}
