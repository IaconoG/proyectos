const menu = {
  desayuno: [
    {
      grupo: "desayuno",
      titulo: "Buttermilk Pancakes",
      precio: 15.99,
      descripcion:
        "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      img: "../img/desayuno/Buttermilk Pancakes.jpeg",
    },
    {
      grupo: "desayuno",
      titulo: "Country Delight",
      precio: 20.99,
      descripcion:
        "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
      img: "../img/desayuno/Country Delight.jpeg",
    },
    {
      grupo: "desayuno",
      titulo: "Bacon Overflow",
      precio: 8.99,
      descripcion:
        "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
      img: "../img/desayuno/Bacon Overflow.jpeg",
    },
  ],
  almuerzo: [
    {
      grupo: "almuerzo",
      titulo: "Diner Double",
      precio: 13.99,
      descripcion:
        "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
      img: "../img/almuerzo/Diner Double.jpeg",
    },
    {
      grupo: "almuerzo",
      titulo: "Egg Attack",
      precio: 22.99,
      descripcion:
        "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
      img: "../img/almuerzo/Egg Attack.jpeg",
    },
    {
      grupo: "almuerzo",
      titulo: "American Classic",
      precio: 12.99,
      descripcion:
        "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
      img: "../img/almuerzo/American Classic.jpeg",
    },
  ],
  batidos: [
    {
      grupo: "batidos",
      titulo: "Godzilla Milkshake",
      precio: 6.99,
      descripcion:
        "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
      img: "../img/batidos/Godzilla Milkshake.jpeg",
    },
    {
      grupo: "batidos",
      titulo: "Oreo Dream",
      precio: 18.99,
      descripcion:
        "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
      img: "../img/batidos/Oreo Dream.jpeg",
    },
    {
      grupo: "batidos",
      titulo: "Quarantine Buddy",
      precio: 16.99,
      descripcion:
        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      img: "../img/batidos/Quarantine Buddy.jpeg",
    },
  ],
  cena: [
    {
      grupo: "cena",
      titulo: "Steak Dinner",
      precio: 39.99,
      descripcion:
        "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      img: "../img/cena/Steak Dinner.jpeg",
    },
  ],
};

// Optnemos los nombres de las opciones de menu y orden
const options = ["all", ...Object.keys(menu)];
const ordenNames = ["Precio", "A - Z"];

// Creamos el elemento btn para las opciones de menus y orden
const createBtnOption = (option) => {
  const btnOption = document.createElement("button");
  btnOption.innerHTML = option;
  return btnOption;
};
// Otorgamos una clase a los botones
const darClasesAlBtn = (btn, tipoBtn, indice) => {
  btn.classList.add("btn");
  btn.setAttribute("id", indice);
  tipoBtn === "menu"
    ? btn.classList.add("btn-opciones-menu")
    : btn.classList.add("btn-opciones-orden");
};

// --- Creamos el elemento para las opciones de menus y orden ---

// Creamos los elementos de opciones de menu
options.forEach((option, indice) => {
  const btnOption = createBtnOption(option); // Creamos el boton
  darClasesAlBtn(btnOption, "menu", `menu-${indice}`);
  const btnContainer = document.querySelector("#filtros"); // Seleccionamos el contenedor
  btnContainer.appendChild(btnOption); // Agregamos el boton al contenedor
});
// Creamos los elementos de opciones de orden
ordenNames.forEach((option, indice) => {
  const btnOption = createBtnOption(option); // Creamos el boton
  darClasesAlBtn(btnOption, "filtro", `filtro-${indice}`);
  const btnContainer = document.querySelector("#orden"); // Seleccionamos el contenedor
  btnContainer.appendChild(btnOption); // Agregamos el boton al contenedor
});

// --- Creamos los items del menu ---

// Creamos el elemento para los items del menu
const createItem = (item) => {
  // <article>
  const itemContainer = document.createElement("article");
  itemContainer.classList.add("item", `${item.grupo}`, "item-display-block");
  itemContainer.setAttribute("value", `${item.precio}`);
  itemContainer.setAttribute("title", `${item.titulo}`);
  // <img>
  const itemImg = document.createElement("img");
  itemImg.src = item.img;
  itemImg.classList.add("item-img");
  itemImg.alt = item.titulo;
  // </img>
  // <div>
  const itemDivHeader = document.createElement("div");
  itemDivHeader.classList.add("item-info");
  // <header>
  const itemHeader = document.createElement("header");
  // <h3>
  const itemTitle = document.createElement("h3");
  itemTitle.innerHTML = item.titulo;
  const itemPrice = document.createElement("h3");
  itemPrice.innerHTML = `$${item.precio}`;
  itemPrice.classList.add("item-price");
  // </h3>
  itemHeader.appendChild(itemTitle);
  itemHeader.appendChild(itemPrice);
  // </header>
  // <p>
  const itemDesc = document.createElement("p");
  itemDesc.innerHTML = item.descripcion;
  itemDesc.classList.add("item-description");
  // </p>
  itemDivHeader.appendChild(itemHeader);
  itemDivHeader.appendChild(itemDesc);
  // </div>
  itemContainer.appendChild(itemImg);
  itemContainer.appendChild(itemDivHeader);
  // </article>
  return itemContainer;
};

// defualt option
let itemsDefault = [];
const defualtItemsOnDisplay = (items) => {
  options.slice(1).forEach((option) => {
    // console.log(items[option])
    items[option].forEach((data) => {
      const item = createItem(data);
      const menuContainer = document.querySelector("#menu");
      menuContainer.appendChild(item);
    });
  });
  itemsDefault = Array.from(document.querySelectorAll(".item"));
};
const setItemsOnDisplay = (items, option) => {
  if (option === "all") {
    // Si la opcion es all mostramos todos los items
    items.forEach((item) => {
      item.classList.replace("item-display-none", "item-display-block");
    });
  } else {
    // Si no mostramos los items que corresponden a la opcion seleccionada
    items.forEach((item) => {
      if (item.className.split(" ")[1] === option) {
        // Si el item tiene la clase que corresponde a la opcion seleccionada
        item.classList.replace("item-display-none", "item-display-block"); // Mostramos el item
      } else {
        item.classList.replace("item-display-block", "item-display-none"); // Ocultamos el item
      }
    });
  }
};

// load
window.addEventListener("DOMContentLoaded", () => {
  // Cuando el DOM esté listo
  defualtItemsOnDisplay(menu); // Cuando inicia la pagina
});

// --- Filtrar los items del menu ---
let btnActive = "menu-0";
let option = "all";

const btnFiltros = Array.from(document.querySelectorAll(".btn-opciones-menu")); // Obtenemos todos los botones de filtro
btnFiltros[0].classList.add("btn-active"); // Boton defualt activado

btnFiltros.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // -- Activamos el color del boton seleccionado --
    e.target.classList.add("btn-active"); // Damos la clase active al btn clickeado
    // Eliminamos la clase active al btn que no es el clickeado
    if (btnActive !== "") {
      if (btnActive !== e.target.id) {
        document.querySelector(`#${btnActive}`).classList.remove("btn-active"); // Quitamos la clase active al btn anterior
      }
    }
    btnActive = e.target.id; // Alamcenamos el id del btn activado

    // -- Mostramos los elementos segun la opcion seleccionadad --
    const items = document.querySelectorAll(".item"); // Constante que representa los items del menu
    option = e.target.innerHTML; // Obtenemos el nombre de la opcion
    setItemsOnDisplay(items, option);
  });
});

// --- Filtrar los items mostramos en el display ---
const btnOrden = Array.from(document.querySelectorAll(".btn-opciones-orden")); // Obtenemos todos los botones de orden
const containerItems = document.querySelector(".container-menu-items");

// let btnOrdenActive = "";
let cantBtnActive = 0;
let btnOptionActive = "";

btnOrden.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // - Funcionalidad -
    cantBtnActive++;
    const tipoDeOrden = e.target.id;

    let items = Array.from(document.querySelectorAll(".item")); // Constante que representa los items del menu
    // Eliminamos los elementos del container

    // Ordenamos los items
    const funcionOrdenar = (() => {
      // Default menor a mayor
      // Con un reverse ordenamos de mayor a menor :)
      items.sort((a, b) => {
        return tipoDeOrden === "filtro-0"
          ? a.attributes.value.textContent - b.attributes.value.textContent // Orden por precio
          : a.attributes.title.textContent > b.attributes.title.textContent // Orden por A - Z
          ? 1 // Es menor
          : a.attributes.title.textContent < b.attributes.title.textContent
          ? -1 // Es mayor
          : 0; // Es igual
      });
    })(items, tipoDeOrden);

    if (btnOptionActive !== "") {
      if (btnOptionActive !== e.target.id) {
        cantBtnActive = 1;
      }
    }

    if (cantBtnActive === 2) items.reverse(); // Menor a mayor || Z - A
    else if (cantBtnActive === 3) {
      cantBtnActive = 0;
      items = itemsDefault;
      setItemsOnDisplay(items, option);
    }

    // Eliminamos todos los hijos del contenedor
    const removeChilds = (containerItems) => {
      while (containerItems.lastChild) {
        containerItems.removeChild(containerItems.lastChild);
      }
    };
    removeChilds(containerItems);

    // Anexamos nuevamente los lementos al section segun su orden
    // SI cantBtnActive === 0 significa que el display de los items debe ser el default
    if (cantBtnActive === 0) {
      itemsDefault.forEach((item) => {
        containerItems.appendChild(item);
      });
      setItemsOnDisplay(itemsDefault, option);
    } else {
      items.forEach((item) => {
        containerItems.appendChild(item);
      });
    }

    // - Estilos de los botones -
    // Eliminamos estilo del boton q no esta activado
    if (btnOptionActive !== "") {
      if (btnOptionActive !== e.target.id) {
        document
          .querySelector(`#${btnOptionActive}`)
          .classList.remove("btn-orden-active-1", "btn-orden-active-2"); // Quitamos la clase active al btn anterior
        cantBtnActive = 1;
      }
    }
    // Modificamos los estilos del boton q esta activado
    if (cantBtnActive === 0) {
      // Opcion default
      e.target.classList.remove("btn-orden-active-2");
    } else if (cantBtnActive === 1) {
      // Primera vez pulsado
      e.target.classList.add("btn-orden-active-1"); // Damos la clase active al btn clickeado
    } else {
      // Segunda vez pulsado
      e.target.classList.remove("btn-orden-active-1");
      e.target.classList.add("btn-orden-active-2"); // Damos la clase active al btn clickeado
    }
    btnOptionActive = e.target.id; // Alamcenamos el id del btn activado
  });
});
