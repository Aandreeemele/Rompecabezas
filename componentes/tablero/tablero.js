import { todas_las_cartas } from "./data.js";
import { itemCarta } from "./itemCarta.js";

function cargarTablero() {
  const root = document.getElementById("root");

  let divTablero = document.createElement("div");
  divTablero.className = "div-tablero";

  todas_las_cartas.forEach((contenido) => {
    divTablero.appendChild(itemCarta(contenido));
  });


  root.appendChild(divTablero);
}

export { cargarTablero };
