let cartasVolteadas = [];
let parejasEncontradas = 0;

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

export { manejarVolteo };
