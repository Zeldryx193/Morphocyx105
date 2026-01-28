/* ===== script.js v=3 ===== */

/* CONFIG */
const CODIGO_DEV = "1234";

/* ESTADO */
let adminActivo = false;
let posts = [];
let juegos = [];

/* INIT */
document.addEventListener('DOMContentLoaded', () => {
  // botones navegación
  document.getElementById('tabHome')?.addEventListener('click', () => cambiarVista('home'));
  document.getElementById('tabGames')?.addEventListener('click', () => cambiarVista('games'));

  // botones globales
  document.getElementById('btnDev')?.addEventListener('click', activarEditor);
  document.getElementById('themeToggle')?.addEventListener('click', toggleTema);

  cargarContenido();
  cargarPublicaciones();
  cargarJuegos();
  aplicarTema();
});

/* VISTAS */
function cambiarVista(vista) {
  document.getElementById('vistaHome').style.display = vista === 'home' ? 'block' : 'none';
  document.getElementById('vistaGames').style.display = vista === 'games' ? 'block' : 'none';
}

/* ADMIN */
function activarEditor() {
  const codigo = prompt('Código desarrollador');
  if (codigo !== CODIGO_DEV) return alert('Código incorrecto');

  adminActivo = true;
  document.getElementById('editor').style.display = 'block';
  document.getElementById('editorJuegos').style.display = 'block';
  renderPublicaciones();
  renderJuegos();
}

/* TEMA */
function aplicarTema() {
  const tema = localStorage.getItem('tema') || 'dark';
  document.body.classList.toggle('light', tema === 'light');
  document.getElementById('themeToggle').textContent = tema === 'light' ? '🌞' : '🌙';
}

function toggleTema() {
  const esLight = document.body.classList.toggle('light');
  localStorage.setItem('tema', esLight ? 'light' : 'dark');
  aplicarTema();
}

/* CONTENIDO PRINCIPAL */
function guardarContenido() {
  localStorage.setItem('titulo', inputTitulo.value);
  localStorage.setItem('descripcion', inputDescripcion.value);
  titulo.textContent = inputTitulo.value;
  descripcion.textContent = inputDescripcion.value;
}

function cargarContenido() {
  titulo.textContent = localStorage.getItem('titulo') || 'Mi Página Personal';
  descripcion.textContent = localStorage.getItem('descripcion') || 'Contenido privado';
}

/* PUBLICACIONES GENERALES */
function cargarPublicaciones() {
  posts = JSON.parse(localStorage.getItem('posts')) || [];
  renderPublicaciones();
}

function guardarPublicaciones() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

function agregarPublicacion() {
  if (!inputPostTexto.value && !inputPostImagen.value) return;

  posts.push({
    id: Date.now(),
    texto: inputPostTexto.value,
    imagen: inputPostImagen.value
  });

  guardarPublicaciones();
  renderPublicaciones();
  inputPostTexto.value = '';
  inputPostImagen.value = '';
}

function renderPublicaciones() {
  publicaciones.innerHTML = '';
  posts.forEach(p => {
    const div = document.createElement('div');
    div.style.marginBottom = '20px';
    div.style.background = 'var(--bg-card)';
    div.style.padding = '15px';
    div.style.borderRadius = '10px';

    if (p.texto) {
      const t = document.createElement('p');
      t.textContent = p.texto;
      div.appendChild(t);
    }

    if (p.imagen) {
      const img = document.createElement('img');
      img.src = p.imagen;
      img.style.width = '100%';
      img.style.borderRadius = '8px';
      div.appendChild(img);
    }

    publicaciones.appendChild(div);
  });
}

/* JUEGOS */
function cargarJuegos() {
  juegos = JSON.parse(localStorage.getItem('juegos')) || [];
  renderJuegos();
}

function guardarJuegos() {
  localStorage.setItem('juegos', JSON.stringify(juegos));
}

function agregarJuego() {
  if (!inputJuegoTitulo.value) return;

  juegos.push({
    id: Date.now(),
    titulo: inputJuegoTitulo.value,
    descripcion: inputJuegoDesc.value,
    imagen: inputJuegoImg.value
  });

  guardarJuegos();
  renderJuegos();

  inputJuegoTitulo.value = '';
  inputJuegoDesc.value = '';
  inputJuegoImg.value = '';
}

function renderJuegos() {
  listaJuegos.innerHTML = '';

  juegos.forEach(j => {
    const card = document.createElement('section');
    const h = document.createElement('h3');
    h.textContent = j.titulo;

    card.appendChild(h);

    if (j.descripcion) {
      const p = document.createElement('p');
      p.textContent = j.descripcion;
      card.appendChild(p);
    }

    if (j.imagen) {
      const img = document.createElement('img');
      img.src = j.imagen;
      img.style.width = '100%';
      img.style.borderRadius = '8px';
      card.appendChild(img);
    }

    listaJuegos.appendChild(card);
  });
  function eliminarJuego(id) {
  if (!confirm('¿Eliminar este juego?')) return;
  juegos = juegos.filter(j => j.id !== id);
  guardarJuegos();
  renderJuegos();
}
