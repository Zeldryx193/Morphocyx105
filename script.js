/* ===== script.js v6 ===== */

const CODIGO_DEV = "1234";
let adminActivo = false;

let posts = JSON.parse(localStorage.getItem('posts')) || [];
let juegos = JSON.parse(localStorage.getItem('juegos')) || [];

document.addEventListener('DOMContentLoaded', () => {
  tabHome.onclick = () => cambiarVista('home');
  tabGames.onclick = () => cambiarVista('games');
  btnDev.onclick = activarAdmin;
  themeToggle.onclick = toggleTema;

  cargarContenido();
  renderPublicaciones();
  renderJuegos();
  aplicarTema();
});

/* VISTAS */
function cambiarVista(v){
  vistaHome.style.display = v === 'home' ? 'block' : 'none';
  vistaGames.style.display = v === 'games' ? 'block' : 'none';
}

/* ADMIN */
function activarAdmin(){
  const code = prompt("Código admin:");
  if(code !== CODIGO_DEV) return alert("Código incorrecto");

  adminActivo = true;
  editor.style.display = 'block';
  editorJuegos.style.display = 'block';
  renderPublicaciones();
  renderJuegos();
}

/* TEMA */
function aplicarTema(){
  const t = localStorage.getItem('tema') || 'dark';
  document.body.classList.toggle('light', t === 'light');
  themeToggle.textContent = t === 'light' ? '🌞' : '🌙';
}

function toggleTema(){
  const light = document.body.classList.toggle('light');
  localStorage.setItem('tema', light ? 'light' : 'dark');
  aplicarTema();
}

/* CONTENIDO */
function guardarContenido(){
  localStorage.setItem('titulo', inputTitulo.value);
  localStorage.setItem('descripcion', inputDescripcion.value);
  cargarContenido();
}

function cargarContenido(){
  titulo.textContent = localStorage.getItem('titulo') || 'Mi Página Personal';
  descripcion.textContent = localStorage.getItem('descripcion') || '';
}

/* PUBLICACIONES */
function agregarPublicacion(){
  if(!inputPostTexto.value) return;

  posts.push({
    id: Date.now(),
    texto: inputPostTexto.value,
    img: inputPostImagen.value
  });

  localStorage.setItem('posts', JSON.stringify(posts));
  inputPostTexto.value = '';
  inputPostImagen.value = '';
  renderPublicaciones();
}

function renderPublicaciones(){
  publicaciones.innerHTML = '';

  posts.forEach(p => {
    const card = document.createElement('section');
    card.innerHTML = `<p>${p.texto}</p>`;
    if(p.img) card.innerHTML += `<img src="${p.img}">`;

    if(adminActivo){
      const del = document.createElement('button');
      del.textContent = 'Eliminar';
      del.onclick = () => {
        posts = posts.filter(x => x.id !== p.id);
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPublicaciones();
      };
      card.appendChild(del);
    }

    publicaciones.appendChild(card);
  });
}

/* JUEGOS */
function agregarJuego(){
  juegos.push({
    id: Date.now(),
    titulo: inputJuegoTitulo.value,
    desc: inputJuegoDesc.value,
    img: inputJuegoImg.value
  });

  localStorage.setItem('juegos', JSON.stringify(juegos));
  inputJuegoTitulo.value = '';
  inputJuegoDesc.value = '';
  inputJuegoImg.value = '';
  renderJuegos();
}

function renderJuegos(){
  listaJuegos.innerHTML = '';

  juegos.forEach(j => {
    const card = document.createElement('section');
    card.innerHTML = `<h3>${j.titulo}</h3><p>${j.desc}</p>`;
    if(j.img) card.innerHTML += `<img src="${j.img}">`;

    if(adminActivo){
      const del = document.createElement('button');
      del.textContent = 'Eliminar';
      del.onclick = () => {
        juegos = juegos.filter(x => x.id !== j.id);
        localStorage.setItem('juegos', JSON.stringify(juegos));
        renderJuegos();
      };
      card.appendChild(del);
    }

    listaJuegos.appendChild(card);
  });
}
