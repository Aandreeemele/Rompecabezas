function cargarFooter() {
    const root = document.getElementById("root");
    let footer = document.createElement("div");
    footer.className = "div-footer";
    footer.textContent = "© 2025 - Mi Juego de Cartas";
  
    root.appendChild(footer);
  }
  
  export { cargarFooter };
  