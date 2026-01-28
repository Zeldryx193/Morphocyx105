// ============================================
// DATOS DE PUBLICACIONES
// ============================================

// Aquí defines tus publicaciones
// Puedes agregar texto, una imagen, múltiples imágenes, o ambas cosas
const publicaciones = [
    {
        id: 1,
        autor: "Tu Nombre",
        avatar: "🚀", // Puedes usar emoji o URL de imagen
        fecha: "28 Enero 2026, 15:30",
        texto: `¡Hola a todos! 👋

Estoy emocionado de compartir con ustedes mi nuevo proyecto en el que he estado trabajando durante las últimas semanas.

Es un juego de plataformas con mecánicas únicas que espero que disfruten. ¡Pronto más detalles!`,
        imagenes: [
            "https://via.placeholder.com/800x500/ffd166/1a2142?text=Captura+del+Juego"
        ],
        tags: ["juegos", "desarrollo", "proyecto"],
        likes: 42,
        comentarios: 8
    },
    {
        id: 2,
        autor: "Tu Nombre",
        avatar: "🚀",
        fecha: "26 Enero 2026, 10:15",
        texto: `Reflexión del día: La mejor forma de aprender programación es construyendo proyectos reales.

No te quedes solo en tutoriales, ¡crea algo tuyo! 💪`,
        imagenes: null, // Sin imágenes
        tags: ["programación", "aprendizaje"],
        likes: 67,
        comentarios: 12
    },
    {
        id: 3,
        autor: "Tu Nombre",
        avatar: "🚀",
        fecha: "24 Enero 2026, 18:45",
        texto: `Algunos screenshots de mi progreso esta semana 📸

¿Qué les parece el nuevo diseño de UI?`,
        imagenes: [
            "https://via.placeholder.com/600x400/ff6b35/ffffff?text=Screenshot+1",
            "https://via.placeholder.com/600x400/ffd166/1a2142?text=Screenshot+2",
            "https://via.placeholder.com/600x400/06ffa5/1a2142?text=Screenshot+3"
        ],
        tags: ["desarrollo", "UI/UX"],
        likes: 89,
        comentarios: 15
    },
    {
        id: 4,
        autor: "Tu Nombre",
        avatar: "🚀",
        fecha: "22 Enero 2026, 12:00",
        texto: `Mi setup actualizado para 2026 🖥️⌨️

Después de muchos ajustes, finalmente tengo un espacio de trabajo con el que estoy 100% feliz.`,
        imagenes: [
            "https://via.placeholder.com/800x600/667eea/ffffff?text=Mi+Setup+de+Trabajo"
        ],
        tags: ["setup", "productividad"],
        likes: 124,
        comentarios: 23
    },
    {
        id: 5,
        autor: "Tu Nombre",
        avatar: "🚀",
        fecha: "20 Enero 2026, 09:30",
        texto: `Tip rápido: Si estás empezando con desarrollo web, estos son los recursos que más me ayudaron:

• MDN Web Docs
• FreeCodeCamp
• JavaScript.info
• CSS-Tricks

¿Cuáles son tus favoritos? 🤔`,
        imagenes: null,
        tags: ["recursos", "webdev"],
        likes: 156,
        comentarios: 34
    },
    {
        id: 6,
        autor: "Tu Nombre",
        avatar: "🚀",
        fecha: "18 Enero 2026, 16:20",
        texto: `¡Nuevo post en el blog! 📝

Escribí sobre mi experiencia aprendiendo diseño de juegos y los errores más comunes que cometí al principio.

Link en mi perfil ⬆️`,
        imagenes: [
            "https://via.placeholder.com/800x450/764ba2/ffffff?text=Blog+Post+Cover"
        ],
        tags: ["blog", "gamedev"],
        likes: 93,
        comentarios: 19
    }
];

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarPublicaciones();
    configurarModal();
});

// Cargar todas las publicaciones
function cargarPublicaciones() {
    const feed = document.getElementById('publicationsFeed');
    const emptyState = document.getElementById('emptyState');
    
    if (publicaciones.length === 0) {
        feed.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }
    
    feed.innerHTML = '';
    emptyState.style.display = 'none';
    
    // Ordenar por más reciente primero (por ID descendente)
    const publicacionesOrdenadas = [...publicaciones].reverse();
    
    publicacionesOrdenadas.forEach((pub, index) => {
        const pubElement = crearPublicacion(pub, index);
        feed.appendChild(pubElement);
    });
}

// Crear elemento de publicación
function crearPublicacion(pub, index) {
    const article = document.createElement('article');
    article.className = 'publication';
    article.style.animationDelay = `${index * 0.1}s`;
    
    // Header
    const header = `
        <div class="pub-header">
            <div class="pub-avatar">${pub.avatar}</div>
            <div class="pub-info">
                <div class="pub-author">${pub.autor}</div>
                <div class="pub-date">${pub.fecha}</div>
            </div>
        </div>
    `;
    
    // Content
    let content = `<div class="pub-content">`;
    
    // Texto
    if (pub.texto) {
        content += `<div class="pub-text">${pub.texto}</div>`;
    }
    
    // Imágenes
    if (pub.imagenes && pub.imagenes.length > 0) {
        const gridClass = `grid-${Math.min(pub.imagenes.length, 4)}`;
        content += `<div class="pub-images-grid ${gridClass}">`;
        
        pub.imagenes.forEach((img, imgIndex) => {
            content += `<img src="${img}" alt="Imagen ${imgIndex + 1}" onclick="openImageModal('${img}')">`;
        });
        
        content += `</div>`;
    }
    
    // Tags
    if (pub.tags && pub.tags.length > 0) {
        content += `<div class="pub-tags">`;
        pub.tags.forEach(tag => {
            content += `<span class="pub-tag">#${tag}</span>`;
        });
        content += `</div>`;
    }
    
    content += `</div>`;
    
    // Footer con estadísticas
    const footer = `
        <div class="pub-footer">
            <div class="pub-stat">
                <span class="pub-stat-icon">❤️</span>
                <span>${pub.likes}</span>
            </div>
            <div class="pub-stat">
                <span class="pub-stat-icon">💬</span>
                <span>${pub.comentarios}</span>
            </div>
        </div>
    `;
    
    article.innerHTML = header + content + footer;
    return article;
}

// ============================================
// MODAL DE IMAGEN
// ============================================

function configurarModal() {
    const modal = document.getElementById('imageModal');
    
    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Cerrar modal con tecla ESC
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
    document.body.style.overflow = 'hidden'; // Evitar scroll
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
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
// FUNCIONES PARA AGREGAR PUBLICACIONES
// ============================================

// Función para agregar una nueva publicación
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

// Obtener fecha actual formateada
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
// EJEMPLOS DE USO (desde la consola)
// ============================================

/*
CÓMO AGREGAR PUBLICACIONES DESDE LA CONSOLA DEL NAVEGADOR:

1. Solo texto:
agregarPublicacion(
    "Tu Nombre",
    "🚀",
    "¡Este es mi primer post!",
    null,
    ["prueba"]
);

2. Texto con una imagen:
agregarPublicacion(
    "Tu Nombre",
    "🚀",
    "Mira esta increíble foto",
    ["URL_DE_TU_IMAGEN"],
    ["fotos", "viaje"]
);

3. Texto con múltiples imágenes:
agregarPublicacion(
    "Tu Nombre",
    "🚀",
    "Galería de mi proyecto",
    ["URL_IMAGEN_1", "URL_IMAGEN_2", "URL_IMAGEN_3"],
    ["proyecto", "galería"]
);

4. Solo imágenes (sin texto):
agregarPublicacion(
    "Tu Nombre",
    "🚀",
    "",
    ["URL_DE_TU_IMAGEN"],
    ["foto"]
);
*/

// ============================================
// EXPORTAR FUNCIONES
// ============================================

window.agregarPublicacion = agregarPublicacion;
window.cargarPublicaciones = cargarPublicaciones;

// ============================================
// CONSOLE LOG DE BIENVENIDA
// ============================================

console.log(`
╔═══════════════════════════════════════╗
║   📱 Feed de Publicaciones Cargado    ║
║                                       ║
║   Publicaciones: ${publicaciones.length}                   ║
║                                       ║
║   Usa agregarPublicacion() para       ║
║   agregar contenido desde la consola  ║
╚═══════════════════════════════════════╝
`);
