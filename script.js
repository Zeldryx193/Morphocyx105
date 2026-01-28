// Tabs
tabHome.onclick = () => switchView("home");
tabGames.onclick = () => switchView("games");

function switchView(v){
  vistaHome.style.display="none";
  vistaGames.style.display="none";
  const t = v==="home"?vistaHome:vistaGames;
  t.style.display="block";
  t.style.animation="none";
  t.offsetHeight;
  t.style.animation="fadeUp .6s ease";
}

// Tema
themeToggle.onclick=()=>{
  document.body.classList.toggle("light");
  themeToggle.textContent=document.body.classList.contains("light")?"☀️":"🌙";
};

// Admin
const btnDev = document.getElementById("btnDev");
const editor = document.getElementById("editor");
const editorJuegos = document.getElementById("editorJuegos");

btnDev.addEventListener("click", () => {
  const abierto = editor.style.display === "block";

  editor.style.display = abierto ? "none" : "block";
  editorJuegos.style.display = abierto ? "none" : "block";

  editor.style.animation = "fadeUp 0.5s ease";
  editorJuegos.style.animation = "fadeUp 0.5s ease";
});
// Contenido base
const titulo=document.getElementById("titulo");
const descripcion=document.getElementById("descripcion");

function guardarContenido(){
  titulo.textContent=inputTitulo.value;
  descripcion.textContent=inputDescripcion.value;
}

// Publicaciones
const publicaciones=document.getElementById("publicaciones");

function agregarPublicacion(){
  const s=document.createElement("section");
  s.innerHTML=`
    <p>${inputPostTexto.value}</p>
    ${inputPostImagen.value?`<img src="${inputPostImagen.value}" style="max-width:100%;border-radius:8px">`:""}
  `;
  s.style.animation="fadeUp .5s ease";
  publicaciones.prepend(s);
}

// Juegos
const listaJuegos=document.getElementById("listaJuegos");

function agregarJuego(){
  const s=document.createElement("section");
  s.innerHTML=`
    <h3>${inputJuegoTitulo.value}</h3>
    <p>${inputJuegoDesc.value}</p>
    ${inputJuegoImg.value?`<img src="${inputJuegoImg.value}" style="max-width:100%;border-radius:8px">`:""}
  `;
  s.style.animation="fadeUp .5s ease";
  listaJuegos.prepend(s);
}
