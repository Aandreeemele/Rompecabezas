function cargarProgreso() {
    const root = document.getElementById("root");
    let progreso = document.createElement("div");
    progreso.className = "div-progreso";
  
    root.appendChild(progreso);
  }
  
  export { cargarProgreso };
  