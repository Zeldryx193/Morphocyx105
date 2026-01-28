/* =========================
   INICIALIZACIÓN
========================= */
document.addEventListener("DOMContentLoaded", () => {

  /* ===== ELEMENTOS ===== */
  const tabHome = document.getElementById("tabHome");
  const tabGames = document.getElementById("tabGames");
  const vistaHome = document.getElementById("vistaHome");
  const vistaGames = document.getElementById("vistaGames");

  const themeToggle = document.getElementById("themeToggle");
  const btnDev = document.getElementById("btnDev");

  const editor = document.getElementById("editor");
  const editorJuegos = document.getElementById("editorJuegos");

  const titulo = document.getElementById("titulo");
  const descripcion = document.getElementById("descripcion");

  const inputTitulo = document.getElementById("inputTitulo");
  const inputDescripcion = document.getElementById("inputDescripcion");

  const publicacionesDiv = document.getElementById("publicaciones");
  const listaJuegosDiv = document.getElementById("listaJuegos");

  /* ===== VERIFICACIÓN ===== */
  if (!btnDev || !editor || !editorJuegos) {
    console.error("❌ Error: elementos del panel admin no encontrados");
    return;
  }

  /* =========================
     TEMA LIGHT / DARK
  ========================= */
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeToggle.textContent =
      document.body.classList.contains("light") ? "☀️" : "🌙";
    localStorage.setItem("tema", document.body.className);
  });

  if (localStorage.getItem("tema")) {
    document.body.className = localStorage.getItem("tema");
  }

  /* =========================
     PESTAÑAS
  ========================= */
  tabHome.onclick = () => switchView("home");
  tabGames.onclick = () => switchView("games");

  function switchView(vista) {
    vistaHome.style.display = "none";
    vistaGames.style.display = "none";

    const target = vista === "home" ? vistaHome : vistaGames;
    target.style.display = "block";
    target.style.animation = "none";
    target.offsetHeight;
    target.style.animation = "fadeUp 0.6s ease";
  }

  /* =========================
     PANEL ADMIN
  ========================= */
  btnDev.addEventListener("click", () => {
    editor.classList.toggle("activo");
    editorJuegos.classList.toggle("activo");
  });

  /* =========================
     TEXTOS PRINCIPALES
  ========================= */
  function cargarContenido() {
    titulo.textContent =
      localStorage.getItem("titulo") || "Mi Página Personal";
    descripcion.textContent =
      localStorage.getItem("descripcion") || "";
  }

  window.guardarContenido = function () {
    localStorage.setItem("titulo", inputTitulo.value);
    localStorage.setItem("descripcion", inputDescripcion.value);
    cargarContenido();
  };

  /* =========================
     PUBLICACIONES (HOME)
  ========================= */
  function cargarPublicaciones() {
    publicacionesDiv.innerHTML = "";
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");

    posts.forEach((p, i) => {
      const s = document.createElement("section");
      s.style.animation = "fadeUp 0.5s ease";

      s.innerHTML = `
        <p>${p.texto}</p>
        ${p.img ? `<img src="${p.img}" style="max-width:100%;border-radius:8px">` : ""}
        <br><br>
        <button onclick="eliminarPublicacion(${i})">Eliminar</button>
      `;
      publicacionesDiv.appendChild(s);
    });
  }

  window.agregarPublicacion = function () {
    const texto = document.getElementById("inputPostTexto").value;
    const img = document.getElementById("inputPostImagen").value;

    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    posts.push({ texto, img });
    localStorage.setItem("posts", JSON.stringify(posts));
    cargarPublicaciones();
  };

  window.eliminarPublicacion = function (i) {
    const posts = JSON.parse(localStorage.getItem("posts"));
    posts.splice(i, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    cargarPublicaciones();
  };

  /* =========================
     JUEGOS
  ========================= */
  function cargarJuegos() {
    listaJuegosDiv.innerHTML = "";
    const juegos = JSON.parse(localStorage.getItem("juegos") || "[]");

    juegos.forEach((j, i) => {
      const s = document.createElement("section");
      s.style.animation = "fadeUp 0.5s ease";

      s.innerHTML = `
        <h3>${j.titulo}</h3>
        <p>${j.desc}</p>
        ${j.img ? `<img src="${j.img}" style="max-width:100%;border-radius:8px">` : ""}
        <br><br>
        <button onclick="eliminarJuego(${i})">Eliminar</button>
      `;
      listaJuegosDiv.appendChild(s);
    });
  }

  window.agregarJuego = function () {
    const titulo = document.getElementById("inputJuegoTitulo").value;
    const desc = document.getElementById("inputJuegoDesc").value;
    const img = document.getElementById("inputJuegoImg").value;

    const juegos = JSON.parse(localStorage.getItem("juegos") || "[]");
    juegos.push({ titulo, desc, img });
    localStorage.setItem("juegos", JSON.stringify(juegos));
    cargarJuegos();
  };

  window.eliminarJuego = function (i) {
    const juegos = JSON.parse(localStorage.getItem("juegos"));
    juegos.splice(i, 1);
    localStorage.setItem("juegos", JSON.stringify(juegos));
    cargarJuegos();
  };

  /* =========================
     CARGA INICIAL
  ========================= */
  cargarContenido();
  cargarPublicaciones();
  cargarJuegos();
<script src="script.js?v=9" defer></script>
});
