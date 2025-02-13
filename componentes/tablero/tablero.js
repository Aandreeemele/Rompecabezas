import { todas_las_cartas } from "./data.js";

let cartasVolteadas = [];
let parejasEncontradas = 0;

function item(contenido) {
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

    return div;
}

function manejarVolteo(carta) {
    if (cartasVolteadas.length < 2 && !carta.classList.contains("volteada")) {
        carta.classList.add("volteada");
        cartasVolteadas.push(carta);

        if (cartasVolteadas.length === 2) {
            setTimeout(verificarPareja, 1000);
        }
    }
}

function verificarPareja() {
    let [carta1, carta2] = cartasVolteadas;

    if (carta1.dataset.valor === carta2.dataset.valor) {
        parejasEncontradas++;
    } else {
        carta1.classList.remove("volteada");
        carta2.classList.remove("volteada");
    }

    cartasVolteadas = [];
}

function cargarCartas() {
    let div = document.createElement("div");
    div.className = "div-tablero";

    todas_las_cartas.sort(() => Math.random() - 0.5); // Mezclar cartas

    todas_las_cartas.forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}

export { cargarCartas };
