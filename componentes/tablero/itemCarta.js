import { manejarVolteo } from "./funcionesCartas.js";

function itemCarta(contenido) {
  let div = document.createElement("div");
  div.className = "carta";
  div.dataset.valor = contenido;

  let frente = document.createElement("div");
  frente.className = "frente";
  frente.textContent = contenido;

  let dorso = document.createElement("div");
  dorso.className = "dorso";
  dorso.textContent = "";

  div.appendChild(frente);
  div.appendChild(dorso);

  div.addEventListener("click", () => manejarVolteo(div));
  div.addEventListener("click", () => {
    div.classList.add("mercado");
  });

  return div;
}

export { itemCarta };
