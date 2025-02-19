function cargarProgreso() {
    const root = document.getElementById("root");
    let progreso = document.createElement("div");
    progreso.className = "div-progreso";
    progreso.textContent = "Progreso: 0%";
  
    root.appendChild(progreso);
  }
  
  export { cargarProgreso };
  