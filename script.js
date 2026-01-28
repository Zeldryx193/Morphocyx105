const ADMIN_CODE = "1234";
let role = "viewer";

let posts = JSON.parse(localStorage.getItem("posts")) || [];
let juegos = JSON.parse(localStorage.getItem("juegos")) || [];

document.addEventListener("DOMContentLoaded", () => {
  tabHome.onclick = () => switchView("home");
  tabGames.onclick = () => switchView("games");
  themeToggle.onclick = toggleTheme;
  btnLogin.onclick = login;

  cargarContenido();
  renderPosts();
  renderGames();
  aplicarTema();
  cargarColores();
});

function switchView(v){
  vistaHome.style.display = v==="home"?"block":"none";
  vistaGames.style.display = v==="games"?"block":"none";
}

function login(){
  const r = prompt("Rol: admin / editor / viewer");
  if(r==="admin"){
    if(prompt("Código admin")!==ADMIN_CODE) return alert("Incorrecto");
  }
  role = r;
  if(role!=="viewer") panelAdmin.style.display="block";
}

function toggleTheme(){
  const l = document.body.classList.toggle("light");
  localStorage.setItem("theme", l?"light":"dark");
}

function aplicarTema(){
  if(localStorage.getItem("theme")==="light") document.body.classList.add("light");
}

/* COLORES */
function guardarColores(){
  const c = {
    primary:colorPrimary.value,
    bgDark:colorBgDark.value,
    bgLight:colorBgLight.value
  };
  localStorage.setItem("colors",JSON.stringify(c));
  cargarColores();
}

function cargarColores(){
  const c = JSON.parse(localStorage.getItem("colors"));
  if(!c) return;
  document.documentElement.style.setProperty("--primary",c.primary);
  document.documentElement.style.setProperty("--bg-dark",c.bgDark);
  document.documentElement.style.setProperty("--bg-light",c.bgLight);
}

/* CONTENIDO */
function guardarContenido(){
  localStorage.setItem("titulo",inputTitulo.value);
  localStorage.setItem("descripcion",inputDescripcion.value);
  cargarContenido();
}

function cargarContenido(){
  titulo.textContent=localStorage.getItem("titulo")||"Mi Página";
  descripcion.textContent=localStorage.getItem("descripcion")||"";
}

/* IMÁGENES */
function fileToBase64(file,cb){
  const r=new FileReader();
  r.onload=()=>cb(r.result);
  r.readAsDataURL(file);
}

/* POSTS */
function agregarPublicacion(){
  if(!inputPostTexto.value) return;
  const f=inputPostImg.files[0];
  if(f){
    fileToBase64(f,img=>{
      posts.push({id:Date.now(),texto:inputPostTexto.value,img});
      guardarPosts();
    });
  }else{
    posts.push({id:Date.now(),texto:inputPostTexto.value});
    guardarPosts();
  }
}

function guardarPosts(){
  localStorage.setItem("posts",JSON.stringify(posts));
  inputPostTexto.value="";
  inputPostImg.value="";
  renderPosts();
}

function renderPosts(){
  publicaciones.innerHTML="";
  posts.forEach(p=>{
    const s=document.createElement("section");
    s.innerHTML=`<p>${p.texto}</p>`;
    if(p.img) s.innerHTML+=`<img src="${p.img}">`;
    if(role!=="viewer"){
      const d=document.createElement("button");
      d.textContent="Eliminar";
      d.onclick=()=>{posts=posts.filter(x=>x.id!==p.id);guardarPosts();}
      s.appendChild(d);
    }
    publicaciones.appendChild(s);
  });
}

/* JUEGOS */
function agregarJuego(){
  const f=inputJuegoImg.files[0];
  fileToBase64(f,img=>{
    juegos.push({id:Date.now(),titulo:inputJuegoTitulo.value,desc:inputJuegoDesc.value,img});
    localStorage.setItem("juegos",JSON.stringify(juegos));
    renderGames();
  });
}

function renderGames(){
  listaJuegos.innerHTML="";
  juegos.forEach(j=>{
    const s=document.createElement("section");
    s.innerHTML=`<h3>${j.titulo}</h3><p>${j.desc}</p><img src="${j.img}">`;
    if(role!=="viewer"){
      const d=document.createElement("button");
      d.textContent="Eliminar";
      d.onclick=()=>{juegos=juegos.filter(x=>x.id!==j.id);localStorage.setItem("juegos",JSON.stringify(juegos));renderGames();}
      s.appendChild(d);
    }
    listaJuegos.appendChild(s);
  });
}
