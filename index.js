import { cargarHeader } from "./componentes/header/header.js";
import {        cargarProgreso } from "./componentes/progreso/progreso.js";
import { cargarTablero } from "./componentes/tablero/tablero.js";
import { cargarFooter } from "./componentes/footer/footer.js";

function cargarDOM() {
  cargarHeader();      
  cargarProgreso();    
  cargarTablero();    
  cargarFooter();    
}

document.addEventListener("DOMContentLoaded", cargarDOM);
