/* ===== script.js v5 ===== */

const CODIGO_DEV = "1234";
let adminActivo = false;
let posts = [];
let juegos = [];

document.addEventListener('DOMContentLoaded', () => {
  tabHome.onclick = () => cambiarVista('home');
  tabGames.onclick = () => cambiarVista('games');
  btnDev.onclick = activarAdmin;
  themeToggle.onclick = toggleTema;

  cargarContenido();
  cargarPublicaciones();
  cargarJuegos();
  aplicarTema();
});

/* VISTAS */
function cambiarVista(v) {
  vistaHome.style.display = v === 'home' ? 'block' : 'none';
  vistaGames.style.display = v === 'games' ? 'block' : 'none';
}

/* ADMIN */
function activarAdmin() {
  const code = prompt("Código admin");
  if (code !== CODIGO_DEV) return alert("Incorrecto");

  adminActivo = true;
  editor.style.display = 'block';
  editorJuegos.style.display = 'block';
  renderPublicaciones();
  renderJuegos();
}

/* TEMA */
function aplicarTema() {
  const t = localStorage.getItem('tema') || 'dark';
  document.body.classList.toggle('light', t === 'light');
  themeToggle.textContent = t === 'light' ? '🌞' : '🌙';
}

function toggleTema() {
  const esLight = document.body.classList.toggle('light');
  localStorage.setItem('tema', esLight ? 'light' : 'dark');
  aplicarTema();
}

/* CONTENIDO */
function guardarContenido() {
  localStorage.setItem('titulo', inputTitulo.value);
  localStorage.setItem('descripcion', inputDescripcion.value);
  cargarContenido();
}

function cargarContenido() {
  titulo.textContent = localStorage.getItem('titulo') || 'Mi Página Personal';
  descripcion.textContent = localStorage.getItem('descripcion') || '';
}

/* PUBLICACIONES */
function cargarPublicaciones() {
  posts = JSON.parse(localStorage.getItem('posts')) || [];
  renderPublicaciones();
}

function agregarPublicacion() {
  if (!inputPostTexto.value) return;
  posts.push({ id: Date.now(), texto: inputPostTexto.value, img: inputPostImagen.value });
  localStorage.setItem('posts', JSON.stringify(posts));
  renderPublicaciones();
  inputPostTexto.value = '';
  inputPostImagen.value = '';
}

function renderPublicaciones() {
  publicaciones.innerHTML = '';
  posts.forEach(p => {
    const d = document.createElement('div');
    d.innerHTML = `<p>${p.texto}</p>`;
    if (p.img) d.innerHTML += `<img src="${p.img}" style="width:100%">`;
    publicaciones.appendChild(d);
  });
}

/* JUEGOS */
function cargarJuegos() {
  juegos = JSON.parse(localStorage.getItem('juegos')) || [];
  renderJuegos();
}

function agregarJuego() {
  juegos.push({
    id: Date.now(),
    titulo: inputJuegoTitulo.value,
    desc: inputJuegoDesc.value,
    img: inputJuegoImg.value
  });
  localStorage.setItem('juegos', JSON.stringify(juegos));
  renderJuegos();
}

function renderJuegos() {
  listaJuegos.innerHTML = '';
  juegos.forEach(j => {
    const s = document.createElement('section');
    s.innerHTML = `<h3>${j.titulo}</h3><p>${j.desc}</p>`;
    if (j.img) s.innerHTML += `<img src="${j.img}" style="width:100%">`;

    if (adminActivo) {
      const b = document.createElement('button');
      b.textContent = 'Eliminar';
      b.onclick = () => {
        juegos = juegos.filter(x => x.id !== j.id);
        localStorage.setItem('juegos', JSON.stringify(juegos));
        renderJuegos();
      };
      s.appendChild(b);
    }
    listaJuegos.appendChild(s);
  });
}
