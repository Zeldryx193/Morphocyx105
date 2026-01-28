# Morphocyx105
# 🚀 Mi Portafolio Personal - Guía de Uso

¡Bienvenido a tu nuevo sitio web personal! Esta guía te ayudará a personalizar y usar tu página.

## 📁 Archivos Incluidos

- **index.html** - Estructura y estilos de tu página
- **script.js** - Funcionalidad e interactividad
- **README.md** - Este archivo (no es necesario subirlo a GitHub Pages)

## 🎨 Características

✅ Diseño moderno y responsivo
✅ Modo claro/oscuro
✅ Sistema de filtrado de proyectos
✅ Animaciones suaves
✅ Compatible con móviles
✅ Menú hamburguesa en pantallas pequeñas
✅ Scroll suave entre secciones

## 🛠️ Cómo Personalizar

### 1. Información Personal

Abre `index.html` y busca estas líneas para cambiar tu información:

```html
<!-- Línea 342: Cambia el logo -->
<a href="#" class="logo">TuNombre</a>

<!-- Línea 353: Cambia el título hero -->
<h1>Hola, soy [Tu Nombre]</h1>
<p>Desarrollador, creador de juegos y escritor de pensamientos aleatorios</p>

<!-- Líneas 418-434: Actualiza tu información de contacto -->
<a href="mailto:tu@email.com">tu@email.com</a>
<a href="https://github.com/tuusuario" target="_blank">@tuusuario</a>
<a href="https://twitter.com/tuusuario" target="_blank">@tuusuario</a>
```

### 2. Agregar Proyectos

Abre `script.js` y busca el array `proyectos` (línea 5):

```javascript
const proyectos = [
    {
        id: 1,
        titulo: "Nombre del Proyecto",
        descripcion: "Descripción breve del proyecto",
        categoria: "juegos", // Opciones: "juegos", "web", "otros"
        emoji: "🎮", // Cambia el emoji que quieras
        link: "https://enlace-a-tu-proyecto.com"
    },
    // Agrega más proyectos aquí...
];
```

### 3. Agregar Notas de Blog

En `script.js`, busca el array `notasBlog` (línea 48):

```javascript
const notasBlog = [
    {
        id: 1,
        titulo: "Título de tu nota",
        extracto: "Un breve resumen de lo que trata la nota...",
        fecha: "28 Enero 2026",
        link: "enlace-a-nota-completa.html"
    },
    // Agrega más notas aquí...
];
```

### 4. Cambiar Colores

En `index.html`, busca las variables CSS (línea 21):

```css
:root {
    --bg-primary: #0a0e27;      /* Color de fondo principal */
    --bg-secondary: #151b3d;     /* Color de fondo secundario */
    --accent: #ffd166;           /* Color de acento/resaltado */
    /* ... más colores ... */
}
```

### 5. Agregar Más Secciones

Puedes agregar nuevas secciones copiando esta estructura en `index.html`:

```html
<section id="nueva-seccion">
    <h2 class="section-title">Título de Sección</h2>
    <p class="section-subtitle">Subtítulo descriptivo</p>
    
    <!-- Tu contenido aquí -->
</section>
```

No olvides agregar el enlace en el menú de navegación.

## 📤 Subir a GitHub Pages

1. Ve a tu repositorio de GitHub
2. Sube los archivos `index.html` y `script.js`
3. Ve a Settings → Pages
4. Selecciona la rama principal (main/master)
5. Guarda y espera unos minutos
6. Tu sitio estará en: `https://tuusuario.github.io/tu-repositorio`

## 💡 Funciones Avanzadas

### Agregar Contenido Desde la Consola del Navegador

Puedes agregar proyectos y notas dinámicamente usando la consola:

```javascript
// Agregar un proyecto
agregarProyecto(
    "Título del Proyecto",
    "Descripción",
    "juegos",
    "🎯",
    "https://enlace.com"
);

// Agregar una nota de blog
agregarNotaBlog(
    "Título de la Nota",
    "Extracto de la nota...",
    "28 Enero 2026",
    "https://enlace.com"
);
```

### Cambiar Entre Modo Claro y Oscuro

El tema se guarda automáticamente en `localStorage`. Los usuarios pueden cambiar entre temas con el botón en el header.

## 🎯 Categorías de Proyectos

Actualmente hay 3 categorías disponibles:
- **juegos** - Para tus videojuegos
- **web** - Para proyectos web
- **otros** - Para todo lo demás

Para agregar más categorías:
1. Agrega un nuevo botón en el HTML (línea 365)
2. Usa esa categoría en tus proyectos

## 📱 Responsive Design

El sitio se adapta automáticamente a:
- 📱 Móviles (< 768px)
- 💻 Tablets y laptops
- 🖥️ Pantallas grandes

## 🐛 Solución de Problemas

**El JavaScript no funciona:**
- Asegúrate de que `script.js` esté en la misma carpeta que `index.html`
- Verifica que la línea `<script src="script.js"></script>` esté al final del HTML

**Las fuentes no cargan:**
- Necesitas conexión a internet para cargar las fuentes de Google Fonts

**Los enlaces no funcionan:**
- Reemplaza todos los `#` en los enlaces con URLs reales

## 🎨 Personalización Avanzada

### Cambiar Fuentes

Busca en el `<head>` del HTML (línea 9) y cambia el enlace de Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap" rel="stylesheet">
```

Luego actualiza en el CSS:

```css
font-family: 'TuFuente', sans-serif;
```

### Animaciones Personalizadas

Todas las animaciones están en CSS. Busca `@keyframes` en el HTML para modificarlas.

## 📚 Recursos Adicionales

- [Documentación de GitHub Pages](https://docs.github.com/es/pages)
- [Guía de HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Guía de CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [Guía de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

## ✨ Créditos

Sitio creado con:
- HTML5
- CSS3 (con variables CSS y animaciones)
- JavaScript vanilla (sin frameworks)
- Google Fonts (Playfair Display y Work Sans)

## 🤝 Contribuir

¡Siéntete libre de modificar, mejorar y personalizar este código según tus necesidades!

---

**¿Necesitas ayuda?** Revisa los comentarios en el código o busca tutoriales en línea.

¡Feliz codificación! 🚀

# 📱 Guía de Publicaciones - Feed Estilo Twitter

¡Tu nueva página de publicaciones está lista! Ahora puedes compartir pensamientos, imágenes y actualizaciones como en una red social.

## 📁 Archivos Nuevos

- **publicaciones.html** - Página de feed de publicaciones
- **publicaciones.js** - Lógica y datos de las publicaciones
- **GUIA_PUBLICACIONES.md** - Este archivo

## ✨ Características

✅ Feed estilo Twitter/X
✅ Publicaciones con texto e imágenes
✅ Múltiples imágenes por publicación (hasta 4)
✅ Sistema de tags/hashtags
✅ Vista de imagen en modal (clic para ampliar)
✅ Contador de likes y comentarios
✅ Diseño consistente con tu página principal
✅ Modo claro/oscuro
✅ Responsive (móviles y tablets)

## 📝 Cómo Agregar Publicaciones

### Opción 1: Editando el archivo publicaciones.js

Abre `publicaciones.js` y busca el array `publicaciones` (línea 7):

```javascript
const publicaciones = [
    {
        id: 1,
        autor: "Tu Nombre",
        avatar: "🚀", // Emoji o URL de imagen
        fecha: "28 Enero 2026, 15:30",
        texto: `Tu texto aquí.
        
Puedes usar múltiples líneas.
Y emojis también! 🎉`,
        imagenes: [
            "https://url-de-tu-imagen.com/imagen.jpg"
        ], // null si no hay imágenes
        tags: ["etiqueta1", "etiqueta2"],
        likes: 42,
        comentarios: 8
    },
    // Agrega más publicaciones aquí...
];
```

### Opción 2: Desde la Consola del Navegador

Puedes agregar publicaciones dinámicamente abriendo la consola del navegador (F12) y usando:

#### Solo texto:
```javascript
agregarPublicacion(
    "Tu Nombre",
    "🚀",
    "¡Este es mi primer post!",
    null,
    ["prueba"]
);
```

#### Texto con una imagen:
```javascript
agregarPublicacion(
    "Tu Nombre",
    "🚀",
    "Mira esta increíble foto",
    ["https://url-de-tu-imagen.jpg"],
    ["fotos", "viaje"]
);
```

#### Texto con múltiples imágenes:
```javascript
agregarPublicacion(
    "Tu Nombre",
    "🚀",
    "Galería de mi proyecto",
    [
        "https://imagen1.jpg",
        "https://imagen2.jpg",
        "https://imagen3.jpg"
    ],
    ["proyecto", "galería"]
);
```

#### Solo imágenes (sin texto):
```javascript
agregarPublicacion(
    "Tu Nombre",
    "🚀",
    "",
    ["https://tu-imagen.jpg"],
    ["foto"]
);
```

## 🖼️ Sobre las Imágenes

### Formatos de imagen soportados:
- URLs directas de imágenes (jpg, png, gif, webp)
- Imágenes desde tu repositorio de GitHub

### Cómo subir imágenes a GitHub:

1. **Opción A: Usar una carpeta "images"**
   ```
   tu-repositorio/
   ├── index.html
   ├── script.js
   ├── publicaciones.html
   ├── publicaciones.js
   └── images/
       ├── post1.jpg
       ├── post2.png
       └── post3.jpg
   ```
   
   Luego usa: `"images/post1.jpg"` en tus publicaciones

2. **Opción B: Usar GitHub Issues**
   - Crea un issue en tu repositorio
   - Arrastra y suelta una imagen
   - Copia la URL que se genera automáticamente
   - Úsala en tus publicaciones

3. **Opción C: Servicios externos**
   - Imgur (https://imgur.com)
   - ImgBB (https://imgbb.com)
   - Cloudinary (https://cloudinary.com)

### Layouts de imágenes:

- **1 imagen**: Ocupa todo el ancho
- **2 imágenes**: Grid 2x1
- **3 imágenes**: Primera imagen grande arriba, dos pequeñas abajo
- **4+ imágenes**: Grid 2x2 (solo muestra primeras 4)

## 🎨 Personalización

### Cambiar el avatar:

Puedes usar:
- **Emojis**: `"🚀"`, `"👨‍💻"`, `"🎮"`
- **URLs de imagen**: `"https://tu-avatar.jpg"`

### Modificar colores:

En `publicaciones.html`, busca las variables CSS (línea 10):

```css
:root {
    --bg-primary: #0a0e27;    /* Fondo principal */
    --bg-card: #1a2142;       /* Fondo de tarjetas */
    --accent: #ffd166;        /* Color de acento */
    /* ... */
}
```

### Cambiar nombre de autor:

En cada publicación, cambia el campo `autor`:

```javascript
autor: "Tu Nombre Real",
```

## 📊 Estadísticas (Likes y Comentarios)

Actualmente son solo visuales (números estáticos). Si quieres hacerlos funcionales, necesitarías:

1. Un backend (servidor)
2. Base de datos
3. Sistema de autenticación

Para GitHub Pages (sitio estático), los números son decorativos.

## 🔗 Integración con el Sitio Principal

La página ya está integrada en tu menú de navegación. Los usuarios pueden ir a "Publicaciones" desde cualquier página.

## 📱 Responsive

El diseño se adapta automáticamente a:
- Móviles: 1 columna, imágenes optimizadas
- Tablets: Diseño fluido
- Desktop: Vista completa

## 🎯 Tips y Trucos

### Formato de texto:

Usa saltos de línea para mejor legibilidad:

```javascript
texto: `Primera línea

Segunda línea con espacio

Tercera línea`
```

### Usar emojis efectivamente:

```javascript
texto: `🎉 ¡Lanzamiento! 🚀

Después de mucho trabajo, finalmente...`
```

### Tags efectivos:

```javascript
tags: ["webdev", "javascript", "proyectos"]
// Se mostrarán como: #webdev #javascript #proyectos
```

## 🚀 Ejemplo Completo de Publicación

```javascript
{
    id: 7,
    autor: "Juan Pérez",
    avatar: "👨‍💻",
    fecha: "29 Enero 2026, 10:00",
    texto: `¡Gran noticia! 🎉

Acabo de lanzar mi nuevo proyecto open source.

Es una herramienta para desarrolladores que simplifica el manejo de APIs. Espero que les sea útil!

Link en mi GitHub 🔗`,
    imagenes: [
        "images/proyecto-banner.jpg",
        "images/screenshot-1.png",
        "images/screenshot-2.png"
    ],
    tags: ["opensource", "javascript", "api", "herramientas"],
    likes: 0,
    comentarios: 0
}
```

## 🔧 Solución de Problemas

**Las imágenes no cargan:**
- Verifica que las URLs sean correctas y públicas
- Usa URLs HTTPS (no HTTP)
- Comprueba que las imágenes existan

**El feed está vacío:**
- Asegúrate de tener al menos una publicación en el array
- Revisa la consola del navegador (F12) para errores

**El diseño se ve mal:**
- Limpia la caché del navegador (Ctrl + Shift + R)
- Verifica que todos los archivos estén en la misma carpeta

## 📚 Estructura de Datos

Cada publicación debe tener:

```javascript
{
    id: número único,
    autor: "string",
    avatar: "emoji o URL",
    fecha: "string con formato libre",
    texto: "string o null",
    imagenes: ["url1", "url2"] o null,
    tags: ["tag1", "tag2"] o [],
    likes: número,
    comentarios: número
}
```

## 🎨 Ideas de Contenido

Puedes publicar:
- 📣 Anuncios de proyectos
- 💡 Pensamientos y reflexiones
- 🖼️ Screenshots y progress updates
- 📚 Tips y tutoriales
- 🎮 Actualizaciones de juegos
- 💻 Snippets de código
- 🎉 Logros y celebraciones
- 📝 Notas rápidas

## 🔄 Actualizar Publicaciones

Si quieres editar una publicación existente:

1. Encuentra la publicación por su ID en `publicaciones.js`
2. Modifica los campos que necesites
3. Guarda el archivo
4. Recarga la página

## 📦 Subir a GitHub Pages

1. Asegúrate de tener estos archivos en tu repositorio:
   - index.html
   - script.js
   - publicaciones.html
   - publicaciones.js

2. Sube cualquier carpeta de imágenes que uses

3. Espera unos minutos para que GitHub Pages actualice

4. Tu página estará en:
   - Principal: `https://tuusuario.github.io/tu-repo/`
   - Publicaciones: `https://tuusuario.github.io/tu-repo/publicaciones.html`

## ✨ Próximas Mejoras (Opcionales)

Si quieres agregar más funcionalidad:
- Sistema de búsqueda
- Filtros por tags
- Paginación
- Modo de vista de galería
- Exportar a JSON
- RSS Feed

---

¡Disfruta compartiendo tu contenido! 🎉

Si tienes preguntas, revisa los comentarios en el código o experimenta con la consola del navegador.
