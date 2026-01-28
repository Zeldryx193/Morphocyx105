/* =====================================
   PROTECCIÓN: evitar doble carga
===================================== */
if (window.__SCRIPT_CARGADO__) {
  console.warn("script.js ya cargado, evitando duplicado");
} else {
  window.__SCRIPT_CARGADO__ = true;

  document.addEventListener("DOMContentLoaded", () => {

    /* ========= ELEMENTOS ========= */
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

    const publicacionesDiv = document.getElementById("publicaciones");
    const listaJuegosDiv = document.getElementById("listaJuegos");

    /* ========= SEGURIDAD ========= */
    if (!btnDev || !editor || !editorJuegos) {
      console.error("Panel admin: elementos no encontrados");
      return;
    }

    /* =====================================
       TEMA LIGHT / DARK
    ===================================== */
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      themeToggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
      localStorage.setItem("tema", document.body.className);
    });

    if (localStorage.getItem("tema")) {
      document.body.className = localStorage.getItem("tema");
    }

    /* =====================================
       PESTAÑAS
    ===================================== */
    tabHome.addEventListener("click", () => cambiarVista("home"));
    tabGames.addEventListener("click", () => cambiarVista("games"));

    function cambiarVista(vista) {
      vistaHome.style.display = "none";
      vistaGames.style.display = "none";

      const target = vista === "home" ? vistaHome : vistaGames;
      target.style.display = "block";
      target.style.animation = "none";
      target.offsetHeight;
      target.style.animation = "fadeUp 0.6s ease";
    }

    /* =====================================
       PANEL ADMIN
    ===================================== */
    btnDev.addEventListener("click", () => {
      editor.classList.toggle("activo");
      editorJuegos.classList.toggle("activo");
    });

    /* =====================================
       TEXTOS PRINCIPALES
    ===================================== */
    function cargarTextos() {
      titulo.textContent =
        localStorage.getItem("titulo") || "Mi Página Personal";
      descripcion.textContent =
        localStorage.getItem("descripcion") || "";
    }

    window.guardarContenido = function () {
      localStorage.setItem("titulo", inputTitulo.value);
      localStorage.setItem("descripcion", inputDescripcion.value);
      cargarTextos();
    };

    /* =====================================
       PUBLICACIONES (HOME)
    ===================================== */
    function renderPublicaciones() {
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
      const texto = inputPostTexto.value;
      const img = inputPostImagen.value;

      const posts = JSON.parse(localStorage.getItem("posts") || "[]");
      posts.push({ texto, img });
      localStorage.setItem("posts", JSON.stringify(posts));
      renderPublicaciones();
    };

    window.eliminarPublicacion = function (i) {
      const posts = JSON.parse(localStorage.getItem("posts"));
      posts.splice(i, 1);
      localStorage.setItem("posts", JSON.stringify(posts));
      renderPublicaciones();
    };

    /* =====================================
       JUEGOS
    ===================================== */
    function renderJuegos() {
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
      const titulo = inputJuegoTitulo.value;
      const desc = inputJuegoDesc.value;
      const img = inputJuegoImg.value;

      const juegos = JSON.parse(localStorage.getItem("juegos") || "[]");
      juegos.push({ titulo, desc, img });
      localStorage.setItem("juegos", JSON.stringify(juegos));
      renderJuegos();
    };

    window.eliminarJuego = function (i) {
      const juegos = JSON.parse(localStorage.getItem("juegos"));
      juegos.splice(i, 1);
      localStorage.setItem("juegos", JSON.stringify(juegos));
      renderJuegos();
    };

    /* =====================================
       CARGA INICIAL
    ===================================== */
    cargarTextos();
    renderPublicaciones();
    renderJuegos();
  });
}
