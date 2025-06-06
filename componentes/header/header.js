function cargarHeader() {
    const root = document.getElementById("root");
    let header = document.createElement("div");
    header.className = "div-header";
  
    let botonesContainer = document.createElement("div");
    botonesContainer.className = "botones-container";
  
    let logo = document.createElement("img");
    logo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabLKqmrKRl8gDEwzcuA9w2P8kymuVGjj4_g&s";
    logo.className = "logo";
   botonesContainer.appendChild(logo)

    let nombres = ["EcoBot Juego cuidemos el ambiente"];
    for (let i = 0; i < nombres.length; i++) {
      let boton = document.createElement("button");
      boton.innerText = nombres[i];
      boton.classList.add(`btn-${i}`);
  
      botonesContainer.appendChild(boton);
    }
  
    header.appendChild(botonesContainer);
    root.appendChild(header);
  }
  
  export { cargarHeader };
  