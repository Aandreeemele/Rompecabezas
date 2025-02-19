function cargarHeader() {
    const root = document.getElementById("root");
    let header = document.createElement("div");
    header.className = "div-header";
  
    let botonesContainer = document.createElement("div");
    botonesContainer.className = "botones-container";
  
    let logo = document.createElement("img");
    logo.src = "data:image/png;base64,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";
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
  