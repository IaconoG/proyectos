const reviwers = [
  {
    "id": 1,
    "persona": "Susan Smith",
    "puesto": "Web Developer",
    "persona_img": "./img/persona-1.jpg",
    "descripcion": "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    "id": 2,
    "persona": "Anna Johnson",
    "puesto": "Web Designer",
    "persona_img": "./img/persona-2.jpg",
    "descripcion": "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    "id": 3,
    "persona": "Peter Jones",
    "puesto": "Inter",
    "persona_img": "./img/persona-3.jpg",
    "descripcion": "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
    "id": 4,
    "persona": "Bill Anderson",
    "puesto": "The Boss",
    "persona_img": "./img/persona-4.jpg",
    "descripcion": "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
  },
]

// --- OBTENEMOS LOS ELEMENTOS ---

// variables
const generateRandomID = (max = reviwers.length) => {
  return Math.floor( (Math.random() * max) )
}

// obtener elemntos de la persona
const persona = document.getElementById('persona')
const puesto = document.getElementById('puesto')
const persona_img = document.getElementById('persona_img')
const descripcion = document.getElementById('descripcion') 

// id de persona
let idActual = 0; 

// cargamos la persona inicial
window.addEventListener("DOMContentLoaded", () => {
  //* Este evento se ejecuta cuando el se completo al inicializacoin del dom document 
  setPeronsaEnPantalla() // Cuando inicia la pagina
})

// Mostrar persona segun id
const setPeronsaEnPantalla = () => {
  const reviwer = reviwers[idActual] // Obtener persona segun su id

  // Modificamos los elemtnos persona en la pantalla
  persona.textContent = reviwer.persona
  puesto.textContent = reviwer.puesto
  persona_img.src = reviwer.persona_img
  descripcion.textContent = reviwer.descripcion
}

// botones
const buttons = Array.from(document.querySelectorAll('button'))

// --- EVENTOS botones --- 
buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const btnSeleccionado = e.currentTarget.classList.value

    // Accion del boton siguiente
    if (btnSeleccionado === "sig-btn") {
      (idActual < reviwers.length - 1)
        ? idActual++ 
        : idActual = 0;
    }
    
    // Accion del boton anterior
    else if (btnSeleccionado === "ant-btn") {
      (idActual > 0)
        ? idActual--
        : idActual = reviwers.length - 1;
    } 
    // Acccion del boton sorprendeme
    else {
      idActual = generateRandomID()
    }
    // Mostramos la nueva persona segun su id
    setPeronsaEnPantalla()
  })
});
