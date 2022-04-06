const paletaDeColores = {
  'default' : '#bec7b5',
  'rojo': '#ff756d',
  'verde': '#619c71',
}
const valorDefaultContador = 0;
// Obtenemos el elemento del contador
let contador = document.getElementById("valor");

/* Evento boton incrementar */
const btnIncrementar = document.getElementById("incrementar");
btnIncrementar.addEventListener("click", () => {
  // Logica 
  contador.textContent++; // Incrementamos el valor del contador
  
  // Estilo  
  if (contador.textContent == 1)
    contador.style.color = paletaDeColores['verde']
  else if (contador.textContent == valorDefaultContador)
    contador.style.color = paletaDeColores['default']
});

/* Evento boton reiniciar */
const btnReiniciar = document.getElementById("reiniciar");
btnReiniciar.addEventListener("click", () => {
  // Logica 
  contador.textContent = valorDefaultContador;

  // Estilo
  contador.style.color = paletaDeColores['default']
});

/* Evento boton descontar */
const btnDescontar = document.getElementById("descontar");
btnDescontar.addEventListener("click", () => {
  // Logica 
  contador.textContent--; // Decrementamos el valor del contador

  // Estilo
  if (contador.textContent == -1)
    contador.style.color = paletaDeColores['rojo']
  else if (contador.textContent == valorDefaultContador)
  contador.style.color = paletaDeColores['default']
});
