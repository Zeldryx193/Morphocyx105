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
