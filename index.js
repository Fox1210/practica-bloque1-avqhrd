// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];

//SELECCIONAMOS LA LISTA DE COLORES
const list = document.querySelector(".color-list");

//RECOREMOS LA LISTA DE COLORES ELEMENTO A ELEMENTO Y CREAMOS LA LISTA DE COLORES
colorList.forEach(crearList);

//FUNCION QUE CREA LA LISTA DE COLORES
function crearList(colorElement, i) {
  //CREAMOS LOS ELEMNETO DE LA LISTA
  const item = document.createElement("li"); //elemnto linea de la lista
  const nombre = document.createElement("div"); //elemento nombre del color
  const div = document.createElement("div"); //elemento div muestra del color
  const next = document.createElement("button"); //elemnto boton que cambia color del siguiente elemento de la almuada
  const backgroundColor = document.createElement("button"); //elemnto boton que cambia el color del fondo("BODY")

  //AÑADIMOS LAS CLASES CORRESPONDIENTE
  item.classList.add("color-item");
  nombre.classList.add("color-name");
  div.classList.add("color-show");
  next.classList.add("color-set");
  backgroundColor.classList.add("color-set");
  if (i % 2 !== 0) {
    item.classList.add("color-item--odd");
  }

  //AÑADIOS EL TEXTO A LOS ELEMENTOS
  nombre.textContent = "Color: " + colorElement.colorName;
  div.textContent = "Muestra";
  next.textContent = "Next item color";
  backgroundColor.textContent = "Page color";

  div.style.backgroundColor = colorElement.hex;

  //SACA UNA ALETA QUE MUESTRA EL NOMBRE DEL COLOR
  item.addEventListener("click", e => {
    e.stopPropagation();
    alert(colorElement.colorName);
  });

  backgroundColor.addEventListener("click", backColor, false);
  //funcion cambia color del fondo
  function backColor(evento) {
    evento.stopPropagation();
    document.body.style.backgroundColor = colorElement.hex;
  }

  next.addEventListener("click", nextElementColor, false);
  //funcion que cambia el color del siguiente elemento
  function nextElementColor(evento) {
    evento.stopPropagation();
    if (colorList.length - 1 !== i) {
      next.parentNode.nextSibling.style.backgroundColor = colorElement.hex;
    } else {
      next.parentNode.parentNode.children[1].style.backgroundColor =
        colorElement.hex;
    }
  }

  //AÑADIMOS LOS ELEMEN A LA LISTA
  item.appendChild(nombre);
  item.appendChild(div);
  item.appendChild(next);
  item.appendChild(backgroundColor);

  list.appendChild(item);
}

//EVENTO AL click EN EL FONDO
document.body.addEventListener("click", () => {
  alert("body");
});
