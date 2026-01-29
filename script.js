// ============================================
// CONFIGURACIÓN DE DATOS - PROYECTOS
// ============================================

const proyectos = [
// ============================================
// CATEGORIAS
// juegos
// web
// otros
// ============================================
    {
        id: 1,
        titulo: "Juego de Plataformas",
        descripcion: "Un emocionante juego de plataformas con mecánicas únicas y gráficos pixel art",
        categoria: "juegos",
        emoji: "🎮",
        link: "#"
    },
    {
        id: 2,
        titulo: "Portfolio Web",
        descripcion: "Sitio web moderno y responsive para mostrar proyectos personales",
        categoria: "web",
        emoji: "🌐",
        link: "#"
    },
];

// ============================================
// CONFIGURACIÓN DE DATOS - BLOG
// ============================================

const notasBlog = [
    {
        id: 1,
        titulo: "Ideas",
        extracto: "Aqui publicare Ideas sobre algunos juegos que tengo en mente y si sobre se me ocurre crear algo con ellas xd.",
        fecha: "28 Enero 2026",
        link: "#"
    },
];

// ============================================
// CONFIGURACIÓN DE DATOS - PUBLICACIONES
// ============================================

const publicaciones = [
    {
        id: 1,
        autor: "Tu Nombre",
        avatar: "🫥",
        fecha: "28 Enero 2026, 15:30",
        texto: `¡Hola a todos! 👋

Estoy emocionado de compartir con ustedes mi nueva pagina que desarrollé
espero que disfruten. ¡Pronto más detalles!`,
        imagenes: [
            " "
        ],
        tags: ["juegos", "desarrollo", "proyecto"],
    },
];

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarProyectos('todos');
    cargarNotasBlog();
    cargarPublicaciones();
    configurarScrollSuave();
    aplicarAnimacionesEntrada();
    configurarModal();
});

// ============================================
// FUNCIONES DE PROYECTOS
// ============================================

function cargarProyectos(filtro = 'todos') {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    
    const proyectosFiltrados = filtro === 'todos' 
        ? proyectos 
        : proyectos.filter(p => p.categoria === filtro);
    
    proyectosFiltrados.forEach((proyecto, index) => {
        const card = crearTarjetaProyecto(proyecto, index);
        grid.appendChild(card);
    });
}

function crearTarjetaProyecto(proyecto, index) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="project-image">
            <span>${proyecto.emoji}</span>
        </div>
        <div class="project-content">
            <span class="project-tag">${capitalizarPrimeraLetra(proyecto.categoria)}</span>
            <h3 class="project-title">${proyecto.titulo}</h3>
            <p class="project-description">${proyecto.descripcion}</p>
        </div>
    `;
    
    card.onclick = () => window.location.href = proyecto.link;
    
    return card;
}

function filterProjects(categoria) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    cargarProyectos(categoria);
}

// ============================================
// FUNCIONES DE BLOG
// ============================================

function cargarNotasBlog() {
    const grid = document.getElementById('blogGrid');
    grid.innerHTML = '';
    
    notasBlog.forEach((nota, index) => {
        const card = crearTarjetaBlog(nota, index);
        grid.appendChild(card);
    });
}

function crearTarjetaBlog(nota, index) {
    const card = document.createElement('div');
    card.className = 'blog-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="blog-date">
            <span>${nota.fecha}</span>
        </div>
        <div class="blog-content">
            <h3 class="blog-title">${nota.titulo}</h3>
            <p class="blog-excerpt">${nota.extracto}</p>
        </div>
    `;
    
    card.onclick = () => window.location.href = nota.link;
    
    return card;
}

// ============================================
// FUNCIONES DE PUBLICACIONES
// ============================================

function cargarPublicaciones() {
    const feed = document.getElementById('publicationsFeed');
    
    if (publicaciones.length === 0) {
        feed.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No hay publicaciones todavía.</p>';
        return;
    }
    
    feed.innerHTML = '';
    
    const publicacionesOrdenadas = [...publicaciones].reverse();
    
    publicacionesOrdenadas.forEach((pub, index) => {
        const pubElement = crearPublicacion(pub, index);
        feed.appendChild(pubElement);
    });
}

function crearPublicacion(pub, index) {
    const article = document.createElement('article');
    article.className = 'publication';
    article.style.animationDelay = `${index * 0.1}s`;
    
    const header = `
        <div class="pub-header">
            <div class="pub-avatar">${pub.avatar}</div>
            <div class="pub-info">
                <div class="pub-author">${pub.autor}</div>
                <div class="pub-date">${pub.fecha}</div>
            </div>
        </div>
    `;
    
    let content = `<div class="pub-content">`;
    
    if (pub.texto) {
        content += `<div class="pub-text">${pub.texto}</div>`;
    }
    
    if (pub.imagenes && pub.imagenes.length > 0) {
        const gridClass = `grid-${Math.min(pub.imagenes.length, 4)}`;
        content += `<div class="pub-images-grid ${gridClass}">`;
        
        pub.imagenes.forEach((img, imgIndex) => {
            content += `<img src="${img}" alt="Imagen ${imgIndex + 1}" onclick="openImageModal('${img}')">`;
        });
        
        content += `</div>`;
    }
    
    if (pub.tags && pub.tags.length > 0) {
        content += `<div class="pub-tags">`;
        pub.tags.forEach(tag => {
            content += `<span class="pub-tag">#${tag}</span>`;
        });
        content += `</div>`;
    }
    
    content += `</div>`;
    
    const footer = `
    `;
    
    article.innerHTML = header + content + footer;
    return article;
}

function agregarPublicacion(autor, avatar, texto, imagenes = null, tags = []) {
    const nuevaPublicacion = {
        id: publicaciones.length + 1,
        autor: autor,
        avatar: avatar,
        fecha: obtenerFechaActual(),
        texto: texto,
        imagenes: imagenes,
        tags: tags,
        likes: 0,
        comentarios: 0
    };
    
    publicaciones.push(nuevaPublicacion);
    cargarPublicaciones();
    
    console.log('Publicación agregada:', nuevaPublicacion);
    return nuevaPublicacion;
}

function obtenerFechaActual() {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    
    return `${dia} ${mes} ${año}, ${horas}:${minutos}`;
}

// ============================================
// MODAL DE IMAGEN
// ============================================

function configurarModal() {
    const modal = document.getElementById('imageModal');
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
}

function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modalImg.src = imageSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// TEMA CLARO/OSCURO
// ============================================

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? '' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const btn = document.querySelector('.theme-toggle');
    btn.textContent = newTheme === 'light' ? '🌙 Modo' : '☀️ Modo';
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        const btn = document.querySelector('.theme-toggle');
        btn.textContent = savedTheme === 'light' ? '🌙 Modo' : '☀️ Modo';
    }
});

// ============================================
// MENÚ MÓVIL
// ============================================

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// ============================================
// SCROLL SUAVE
// ============================================

function configurarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// ANIMACIONES DE ENTRADA
// ============================================

function aplicarAnimacionesEntrada() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// HEADER AL HACER SCROLL
// ============================================

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// UTILIDADES
// ============================================

function capitalizarPrimeraLetra(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function agregarProyecto(titulo, descripcion, categoria, emoji, link) {
    const nuevoProyecto = {
        id: proyectos.length + 1,
        titulo,
        descripcion,
        categoria,
        emoji,
        link
    };
    
    proyectos.push(nuevoProyecto);
    cargarProyectos('todos');
    
    console.log('Proyecto agregado:', nuevoProyecto);
}

function agregarNotaBlog(titulo, extracto, fecha, link) {
    const nuevaNota = {
        id: notasBlog.length + 1,
        titulo,
        extracto,
        fecha,
        link
    };
    
    notasBlog.unshift(nuevaNota);
    cargarNotasBlog();
    
    console.log('Nota agregada:', nuevaNota);
}

// ============================================
// EXPORTAR FUNCIONES
// ============================================

window.agregarProyecto = agregarProyecto;
window.agregarNotaBlog = agregarNotaBlog;
window.agregarPublicacion = agregarPublicacion;

// ============================================
// CONSOLE LOG DE BIENVENIDA
// ============================================

console.log(`
╔═══════════════════════════════════════╗
║   🚀 Portafolio Personal Cargado     ║
║                                       ║
║   Proyectos: ${proyectos.length}                        ║
║   Notas: ${notasBlog.length}                            ║
║   Publicaciones: ${publicaciones.length}                 ║
║                                       ║
║   Hecho con ❤️ y JavaScript          ║
╚═══════════════════════════════════════╝
`);
