# Estructura del proyecto

Guía rápida de qué hace cada archivo. Los estilos usan CSS Modules: cada
`Componente.tsx` tiene su `Componente.module.css` al lado.

```
mente-viva/
├── index.html                  Punto de entrada HTML, carga fuentes de Google Fonts
├── package.json                Dependencias y scripts (dev, build, lint)
│
├── public/
│   └── favicon.svg             Ícono del sitio (bloque "MV")
│
└── src/
    ├── main.tsx                Arranca React, importa los estilos globales
    ├── App.tsx                 Orquesta toda la página: nav, secciones, footer,
    │                           y el cambio entre el manual y la página de fuentes
    │
    ├── styles/
    │   ├── tokens.css          Variables globales: colores, tipografía, espaciados,
    │   │                       tiempos de animación. Todo el sistema de diseño vive acá.
    │   └── brutal.css          Clases reutilizables del estilo neubrutalista
    │                           (.brutal-block, .brutal-tag, .container, etc.)
    │
    ├── data/
    │   └── contenido.ts        TODO el texto del manual: equipo, objetivos, los
    │                           tres temas, conclusión y fuentes bibliográficas.
    │                           Para editar contenido, es el único archivo que
    │                           hace falta tocar.
    │
    ├── components/              Piezas reutilizables en más de un lugar
    │   ├── Nav/                 Barra de navegación fija con scroll-spy
    │   ├── Footer/               Pie de página con datos del equipo y link a fuentes
    │   ├── Modal/                 Ventana modal reutilizable (la usan las 3 actividades)
    │   └── ActivityCard/
    │       ├── DiarioEmociones.tsx      Actividad 1: registro emocional con validación
    │       ├── OrganizadorEstres.tsx    Actividad 2: matriz de Eisenhower interactiva
    │       └── TestRedes.tsx            Actividad 3: quiz de hábitos digitales con resultado
    │
    ├── sections/                 Cada bloque grande de la página principal, en orden
    │   ├── Hero/                  Portada: título, integrantes, institución
    │   ├── Intro/                  Introducción del manual
    │   ├── Objetivos/              Objetivo general + 2 específicos
    │   ├── Temas/                  Los 3 temas con selector de tabs
    │   ├── Actividades/            Las 3 tarjetas que abren cada actividad en un modal
    │   └── Conclusion/             Cierre del manual
    │
    └── pages/
        └── Fuentes.tsx            Pantalla separada con la bibliografía en APA 7
```
