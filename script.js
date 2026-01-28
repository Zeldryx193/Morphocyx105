// ============================================
// CONFIGURACIÓN DE DATOS
// ============================================

// Aquí puedes agregar tus proyectos
const proyectos = [
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
        titulo: "---",
        descripcion: "noai :p",
        categoria: "juegos",
        emoji: "🧩",
        link: "#"
    },
    {
        id: 3,
        titulo: "---",
        descripcion: "noai :p",
        categoria: "juegos",
        emoji: "🧩",
        link: "#"
    },
    {
        id: 4,
        titulo: "---",
        descripcion: "noai :p",
        categoria: "juegos",
        emoji: "🧩",
        link: "#"
    },
    {
        id: 5,
        titulo: "---",
        descripcion: "noai :p",
        categoria: "juegos",
        emoji: "🧩",
        link: "#"
    },
    {
        id: 6,
        titulo: "---",
        descripcion: "noai :p",
        categoria: "juegos",
        emoji: "🧩",
        link: "#"
    },
];

// Aquí puedes agregar tus notas/posts de blog
const notasBlog = [
    {
        id: 1,
        titulo: "Cómo empecé en el desarrollo de juegos",
        extracto: "Mi viaje desde los primeros pasos hasta crear mi primer juego completo. Lecciones aprendidas y errores cometidos.",
        fecha: "28 Enero 2026",
        link: "#"
    },
];

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarProyectos('todos');
    cargarNotasBlog();
    configurarScrollSuave();
    aplicarAnimacionesEntrada();
});

// Cargar proyectos en el grid
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

// Crear tarjeta de proyecto
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

// Cargar notas del blog
function cargarNotasBlog() {
    const grid = document.getElementById('blogGrid');
    grid.innerHTML = '';
    
    notasBlog.forEach((nota, index) => {
        const card = crearTarjetaBlog(nota, index);
        grid.appendChild(card);
    });
}

// Crear tarjeta de blog
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
// FILTROS DE PROYECTOS
// ============================================

function filterProjects(categoria) {
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Cargar proyectos filtrados
    cargarProyectos(categoria);
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
    
    // Actualizar texto del botón
    const btn = document.querySelector('.theme-toggle');
    btn.textContent = newTheme === 'light' ? '🌙 Modo' : '☀️ Modo';
}

// Cargar tema guardado
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

// Cerrar menú al hacer clic en un enlace
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
                const offsetTop = target.offsetTop - 80; // 80px para el header fijo
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
    
    // Observar secciones
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

// ============================================
// FUNCIONES PARA AGREGAR CONTENIDO DINÁMICAMENTE
// ============================================

// Función para agregar un nuevo proyecto
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

// Función para agregar una nueva nota de blog
function agregarNotaBlog(titulo, extracto, fecha, link) {
    const nuevaNota = {
        id: notasBlog.length + 1,
        titulo,
        extracto,
        fecha,
        link
    };
    
    notasBlog.unshift(nuevaNota); // Agregar al inicio
    cargarNotasBlog();
    
    console.log('Nota agregada:', nuevaNota);
}

// ============================================
// CONSOLE LOG DE BIENVENIDA
// ============================================

console.log(`
╔═══════════════════════════════════════╗
║   🚀 Portafolio Personal Cargado     ║
║                                       ║
║   Proyectos: ${proyectos.length}                        ║
║   Notas: ${notasBlog.length}                            ║
║                                       ║
║   Hecho con ❤️ y JavaScript          ║
╚═══════════════════════════════════════╝
`);

// ============================================
// EXPORTAR FUNCIONES (opcional)
// ============================================

// Si quieres usar estas funciones desde la consola del navegador
window.agregarProyecto = agregarProyecto;
window.agregarNotaBlog = agregarNotaBlog;
