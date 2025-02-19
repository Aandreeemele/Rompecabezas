function cartas() {
    let carta_par = ["🔍", "🚗", "🚓", "🚕", "🛺", "🚙", "🛹"];
    let todas_las_cartas = [...carta_par, ...carta_par];

    for (let i = todas_las_cartas.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [todas_las_cartas[i], todas_las_cartas[j]] = [todas_las_cartas[j], todas_las_cartas[i]];
    }
    return todas_las_cartas;
  }
  
  let todas_las_cartas = cartas();
  
  export { todas_las_cartas };
  