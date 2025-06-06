function cargarProgreso() {
  const root = document.getElementById("root");

  const telefono = document.createElement("div");
  telefono.className = "telefono";

  const pantalla = document.createElement("div");
  pantalla.className = "pantalla";

  const barraEstado = document.createElement("div");
  barraEstado.className = "barra-estado";
  barraEstado.innerHTML = `
    <span class="hora">12:45</span>
    <div class="iconos">
      <span>📶</span>
      <span>🔋</span>
    </div>
  `;

  const notch = document.createElement("div");
  notch.className = "notch";

  const chat = document.createElement("div");
  chat.className = "chat-whatsapp";

  const EcoBott = document.createElement("img");
  EcoBott.src = "https://img.freepik.com/vector-gratis/ilustraciones-tecnologia-robot-cyborg_24640-134419.jpg?semt=ais_hybrid&w=740"; 
  EcoBott.alt = "ImgBot";
  EcoBott.className = "ImgBot";

  const header = document.createElement("div");
  header.className = "chat-header";
  header.textContent = "EcoBot";

  const mensajes = document.createElement("div");
  mensajes.className = "chat-mensajes";

  // 🚨 Aquí agregamos el div de mensaje dinámico
  const mensajeDinamico = document.createElement("div");
  mensajeDinamico.className = "mensaje-dinamico";
  mensajeDinamico.textContent = "Hola, soy EcoBot. ¡Listo para ayudarte a salvar el planeta!";

  const mensajeDinamico1 = document.createElement("div");
  mensajeDinamico1.className = "mensaje-dinamico";
  mensajeDinamico1.textContent = "¡Cuidar la Tierra es cuidar nuestra casa! 🏡🌎";
  mensajes.appendChild(mensajeDinamico);
  mensajes.appendChild(mensajeDinamico1)

  const input = document.createElement("div");
  input.className = "chat-input";
  input.innerHTML = `
    <input type="text" placeholder="Escribe un mensaje..." disabled />
    <button disabled>Enviar</button>
  `;

  chat.appendChild(header);
  chat.appendChild(mensajes);
  chat.appendChild(input);

  pantalla.appendChild(barraEstado);
  pantalla.appendChild(notch);
  pantalla.appendChild(chat);
  telefono.appendChild(pantalla);
  pantalla.appendChild(EcoBott);
  root.appendChild(telefono);

  // Guardamos el div en window para poder actualizarlo luego
  window.mensajeDinamicoEcoBot = mensajeDinamico;
}



function agregarMensajeEcoBot(texto) {
  const mensajes = document.querySelector('.chat-mensajes');

  const mensaje = document.createElement('div');
  mensaje.className = 'mensaje-dinamico';
  mensaje.textContent = "Iniciemos el juego!!";

  mensajes.appendChild(mensaje);
  mensajes.scrollTop = mensajes.scrollHeight;

  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = 'es-ES';
  speechSynthesis.speak(voz);
}
 
export { cargarProgreso };
