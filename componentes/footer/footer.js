function cargarFooter() {
    const root = document.getElementById("root");
    let footer = document.createElement("div");
    footer.className = "div-footer";
    footer.textContent = "";
  
    root.appendChild(footer);
  }
  
  export { cargarFooter };
  