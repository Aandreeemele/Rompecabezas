function cargarHeader() {
    const root = document.getElementById("root");
    let header = document.createElement("div");
    header.className = "div-header";
  
    let botonesContainer = document.createElement("div");
    botonesContainer.className = "botones-container";
  
    let logo = document.createElement("img");
    logo.src = "data:image/png;base64,...";
    logo.alt = "Logo";
    logo.className = "logo";
  
    botonesContainer.appendChild(logo);
  
    let nombres = ["Nivel 1", "Nivel 2", "Nivel 3", "Nivel 4", "Nivel 5", "Salir", "Vehículos"];
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
  