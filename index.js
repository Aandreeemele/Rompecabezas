import { crearBotones } from "./componentes/header/header.js";
import { cargarCartas } from "./componentes/tablero/tablero.js";

let DOM = document.querySelector("#root");

let contenedor = document.createElement('div');
contenedor.className = "contenedor";

let header = document.createElement('div');
header.className = "div-header";
contenedor.appendChild(header);

crearBotones(header);

let progreso = document.createElement('div');
progreso.className = "div-progreso";
contenedor.appendChild(progreso);

let tablero = document.createElement('div');
tablero.className = "div-tablero";
tablero.appendChild(cargarCartas());
contenedor.appendChild(tablero);

let footer = document.createElement('div');
footer.className = "div-footer";
contenedor.appendChild(footer);

DOM.appendChild(contenedor);

let todasLasCartasDelDom = document.querySelectorAll('.carta');
todasLasCartasDelDom.forEach(cadaCarta => {
    cadaCarta.addEventListener("click", () => { 
        cadaCarta.classList.add("mercado");
    });
});
