import { cambiarModoDeColoresSimple } from "./simple.js";
import { cambiarModoDeColoresRandom } from "./randomHex.js";

// Otenemos elementos
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const btnSimpleMode = document.getElementById("simpleMode");
const btnRandomMode = document.getElementById("randomMode");

// ---- Script de botnoes del nav ----

// Declaramos constantes
const btnNavModeOn = { // Estilos default del boton en seleccion
  fontSize: "0.95rem",
  opacity: "100%",
  color: color.innerHTML,
  activated: "",
};
const btnNavModeOf = { // Estilos defualt del boton no seleccionado
  fontSize: " 0.675rem",
  opacity: "60%",
};

// Esta funcion es usada para setear los botones del Nav cuando la pagina es iniciada
(function defaultSetNavBtn() {
  // Establecemos predeterminados
  btnSimpleMode.style.fontSize = btnNavModeOn.fontSize;
  btnRandomMode.style.opacity = btnNavModeOf.opacity;
  btnNavModeOn.activated = "btnSimpleActivated";
})();



// ---- Evento click en los botones del nav ----
btnRandomMode.addEventListener("click", () => {
  if (btnNavModeOn.activated !== "btnRandomActivated") {
    // Cambiamos el boton activado
    btnNavModeOn.activated = "btnRandomActivated";

    // Cambiamos los stilos del boton activado
    btnRandomMode.style.fontSize = btnNavModeOn.fontSize;
    btnRandomMode.style.opacity = btnNavModeOn.opacity;
    btnRandomMode.style.backgroundColor = document.body.style.backgroundColor;

    // Cambiamos los stilos del boton desactivado
    btnSimpleMode.style.fontSize = btnNavModeOf.fontSize;
    btnSimpleMode.style.opacity = btnNavModeOf.opacity;
    btnSimpleMode.style.backgroundColor = "#ffffff";
  }
});

btnSimpleMode.addEventListener("click", () => {
  if (btnSimpleMode.activated !== "btnRandomActivated") {
    // Cambiamos el boton activado
    btnNavModeOn.activated = "btnSimpleActivated";

    // Cambiamos los stilos del boton activado
    btnSimpleMode.style.fontSize = btnNavModeOn.fontSize;
    btnSimpleMode.style.opacity = btnNavModeOn.opacity;
    btnSimpleMode.style.backgroundColor = document.body.style.backgroundColor;

    // Cambiamos los stilos del boton desactivado
    btnRandomMode.style.fontSize = btnNavModeOf.fontSize;
    btnRandomMode.style.opacity = btnNavModeOf.opacity;
    btnRandomMode.style.backgroundColor = "#ffffff";
  }
});


// Array con con colores predeterminados
// ---- Evento del boton click me ----

// Eventos
btn.addEventListener("click", () => {
  if (btnNavModeOn.activated === "btnSimpleActivated") {
    cambiarModoDeColoresSimple(btnSimpleMode, color)
  } else {
    cambiarModoDeColoresRandom(btnRandomMode, color)
  }
});
