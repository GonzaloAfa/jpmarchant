# Plan Maestro: Rediseno de jpmarchant.cl
## De CV generico a plataforma de investigador academico

**Fecha:** Marzo 2026
**Objetivo:** Reposicionar a Juan Paulo Marchant Espinoza como investigador de referencia en violencia de genero, femicidio y politicas publicas en Chile y America Latina.

---

## 1. Posicionamiento de Marca

> **Juan Paulo Marchant Espinoza es un investigador chileno que conecta la evidencia cientifica con la transformacion de politicas publicas en violencia de genero, femicidio y reparacion a victimas -- combinando rigurosidad academica con mas de seis anos de experiencia directa en el aparato estatal chileno.**

### Diferenciador clave: Doble legitimidad
- **Academica:** Doctor en Politicas Publicas, formacion completa en U. de Chile, 17+ publicaciones
- **Institucional:** 6 anos como Coordinador Nacional en SernamEG (no como asesor externo, sino dentro del sistema)

### Pilares de marca
1. **Investigacion con Impacto Publico** -- "Investigacion que protege"
2. **Autoridad en Genero y Violencia** -- 15+ anos de consistencia tematica
3. **Formacion de Nuevas Generaciones** -- Premio Docente Inspira UNAB 2025
4. **Puente entre Academia y Estado** -- "Conocer el sistema para transformarlo"

### Tono de voz
- Riguroso pero accesible
- Comprometido pero basado en evidencia
- Propositivo (no se queda solo en el diagnostico)
- Tercera persona en bio formal, primera persona en columnas y reflexiones

---

## 2. Arquitectura de Informacion

### Estructura de paginas

```
jpmarchant.cl
|
|-- / (Home)
|   Proposito + credenciales + publicaciones destacadas + cifras de impacto + CTAs
|
|-- /publicaciones
|   Lista filtrable por tipo (articulo, libro, capitulo, tesis) y por eje tematico
|   Tags, DOIs, links a texto completo
|
|-- /investigacion
|   Lineas de investigacion (4 ejes tematicos)
|   Proyectos financiados (Fondecyt, Nucleo Milenio)
|
|-- /docencia
|   Instituciones actuales, cursos, supervision de tesis, Premio Inspira
|
|-- /prensa
|   Bio copiable para medios, temas disponibles para comentario experto
|   Apariciones en medios (columna CIPER, etc.)
|
|-- /trayectoria
|   Timeline visual, formacion academica, experiencia profesional
|   CV descargable en PDF
|
|-- /contacto
|   Formulario contextual, email, perfiles academicos
|   (ORCID, Google Scholar, Dialnet, ANID, LinkedIn)
```

### Contenido del Home (above the fold)

1. **Hero:** Foto profesional + frase de proposito ("Investigando la violencia para transformar las politicas que protegen vidas") + subtitulo con credenciales + cita ancla ("Me muevo en la vida en base a lo que considero justo") + 2 CTAs
2. **Cifras de impacto:** 17+ publicaciones | 6 paises | 2 libros | 6 anos en politica publica | 3 universidades
3. **3-5 publicaciones destacadas recientes** (cards)
4. **Areas de investigacion** (3 columnas: Femicidio y territorio / Genero y reparacion / Memoria y represion)
5. **Afiliaciones actuales** (logos: UBO, UNAB, UGM, CEDIT)
6. **CTA a contacto**

### Publicaciones por ejes tematicos (no solo cronologico)

**Eje 1: Femicidio y territorio**
- Femicide, Development, and State Capacity (2025)
- Medidas cautelares en femicidios (2024)
- Denunciar violencia de pareja (2022)

**Eje 2: Genero, violencia y reparacion**
- Nuevas masculinidades en desplazamiento (2014)
- Reparacion psicosocial en violencia domestica (2012)
- Agresion sexual y reparacion (2009)

**Eje 3: Memoria, represion y poder**
- Fetos Detenidos Desaparecidos (2012)
- Iglesia, Genero y Poder - Caso Karadima (libro, 2012)
- Represion, lenguaje y Dictadura Militar (2010)

**Eje 4: Desastres y trauma psicosocial**
- Desplazamiento de Chaiten (libro, 2011)
- Mental Health in Natural Disasters (CIHR, 2009)

---

## 3. Stack Tecnico

| Decision | Eleccion | Razon |
|----------|----------|-------|
| **Framework** | Astro 5 | 0 KB JS por defecto, ideal para contenido estatico academico, templates como HTML |
| **Styling** | Tailwind CSS v4 + `@tailwindcss/typography` | Mobile-first, dark mode, clase `prose` para contenido largo |
| **Datos** | JSON + Astro Content Collections (validados con Zod) | Type-safe, facil de editar sin saber codigo |
| **Animaciones** | CSS nativo + Astro View Transitions | 0 dependencias, rendimiento maximo |
| **Fuentes** | Inter (headings) + Source Serif 4 (body) + JetBrains Mono (DOIs) | Self-hosted, variable, `font-display: swap` |
| **Imagenes** | Componente `<Image>` de Astro (AVIF/WebP auto) | Optimizacion automatica en build |
| **Deploy** | Vercel static (`output: 'static'`) | CDN edge global, TTFB < 50ms, cero serverless |
| **SEO** | `@astrojs/sitemap` + JSON-LD manual + meta tags Highwire Press | Google + Google Scholar indexacion |

### Estructura del proyecto

```
jpmarchant.cl/
├── astro.config.mjs
├── package.json
├── vercel.json
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   ├── fonts/            # Inter, Source Serif 4, JetBrains Mono (.woff2)
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── PublicationCard.astro
│   │   ├── ResearchCard.astro
│   │   ├── Timeline.astro
│   │   ├── StatCounter.astro
│   │   ├── SEOHead.astro       # Meta tags + JSON-LD + Highwire Press
│   │   └── MobileNav.astro
│   ├── content/
│   │   └── publications/
│   │       ├── articles.json
│   │       ├── books.json
│   │       ├── theses.json
│   │       └── conferences.json
│   ├── data/
│   │   ├── experience.json
│   │   ├── education.json
│   │   └── personal.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── publicaciones.astro
│   │   ├── investigacion.astro
│   │   ├── docencia.astro
│   │   ├── prensa.astro
│   │   ├── trayectoria.astro
│   │   └── contacto.astro
│   └── styles/
│       └── global.css
```

---

## 4. Sistema de Diseno

### Paleta de colores

```
Primario (azul academico profundo):
  #1E3A5F (primary-500)  |  #1A3353 (600)  |  #152B47 (700)

Acento (borgona / terracota):
  #8B2E3B (accent-500)  -- conecta con la gravedad de los temas

Neutrales:
  #FAFAFA (fondo)  |  #F5F5F5 (alt)  |  #E5E5E5 (bordes)
  #525252 (body text)  |  #171717 (headings)

Semanticos:
  #059669 (completado)  |  #D97706 (en progreso)  |  #2563EB (info/links)
```

### Tipografia

| Uso | Fuente | Peso |
|-----|--------|------|
| Headings | Inter Variable | 600-800 |
| Body / abstracts | Source Serif 4 Variable | 300-700 |
| DOIs, ORCID, ISSN | JetBrains Mono | 400 |

### Componentes clave

- **Publication Card:** Borde superior coloreado por tipo (articulo=azul, libro=borgona, capitulo=indigo), titulo, autores, revista en italica, tags tematicos, link DOI
- **Timeline:** Linea vertical con nodos expandibles, ano en monospace, contexto narrativo
- **Stat Counter:** Numeros grandes sobre fondo primario oscuro
- **Research Card:** Header con gradiente azul, estado (activo/completado), descripcion, institucion
- **Nav desktop:** Sticky, glassmorphism (`backdrop-filter: blur`), logo + links + CTA contacto
- **Nav mobile:** Hamburger + drawer lateral derecho con perfiles academicos

---

## 5. SEO Academico

### Datos estructurados obligatorios
- **Person** (JSON-LD): nombre, titulo, afiliaciones, `sameAs` [ORCID, Scholar, LinkedIn, Dialnet, ANID]
- **ScholarlyArticle** (por publicacion): titulo, autores, journal, DOI, fecha
- **WebSite** + **BreadcrumbList**

### Google Scholar (critico)
Meta tags Highwire Press en cada pagina de publicacion:
```html
<meta name="citation_title" content="...">
<meta name="citation_author" content="Marchant Espinoza, Juan Paulo">
<meta name="citation_publication_date" content="2025">
<meta name="citation_journal_title" content="...">
<meta name="citation_doi" content="...">
```

### Keywords prioritarias
- "femicidio en Chile" (2,000-5,000 busquedas/mes)
- "violencia de genero Chile investigacion"
- "Juan Paulo Marchant Espinoza"
- "politicas publicas genero Chile"

### Perfiles a vincular
- ORCID: 0000-0002-6589-790X
- Google Scholar: Tn9IUL8AAAAJ
- Dialnet: 2495974
- ANID: 32968
- LinkedIn: juan-paulo-marchant-espinoza-80955733

---

## 6. Personas de Usuario y Flujos

| Persona | Meta principal | Tiempo objetivo | Flujo critico |
|---------|---------------|-----------------|---------------|
| **Par academica** | Evaluar trayectoria, proponer colaboracion | < 3 min | Home → Publicaciones → DOI/ORCID → Contacto |
| **Periodista** | Confirmar experticia, obtener contacto | < 60 seg | Home → Prensa → Bio copiable + contacto |
| **Estudiante postgrado** | Evaluar como director de tesis | 5-10 min | Home → Investigacion → Publicaciones → Docencia → Contacto |
| **Evaluador ANID/Fondecyt** | Verificar productividad y trayectoria | < 3 min | Home → Publicaciones → Proyectos → ORCID → CV PDF |

---

## 7. Estrategia de Marketing y Visibilidad

### Prioridades inmediatas (semana 1-2)
1. Actualizar perfil Google Scholar (afiliacion: "CEDIT Nucleo Milenio | UNAB")
2. Actualizar ORCID con todas las publicaciones
3. Actualizar LinkedIn con doctorado y cargos actuales
4. Subir papers a ResearchGate

### Corto plazo (mes 1-3)
5. Lanzar sitio nuevo
6. Escribir primera columna de opinion en CIPER Chile o El Mostrador
7. Crear perfil de Twitter/X academico
8. Solicitar backlinks desde perfiles institucionales (UNAB, UBO, CEDIT)

### Mediano plazo (mes 3-12)
9. Publicar 1 articulo de blog/mes (cifras femicidio, analisis de politica publica)
10. Newsletter mensual para red academica
11. 10+ apariciones en medios como fuente experta
12. Activo enlazable: mapa/dashboard de femicidios en Chile

### Metricas a 12 meses
- 1,000+ visitantes unicos/mes
- Top 10 Google para "femicidio Chile"
- 10+ apariciones en medios
- 300+ suscriptores newsletter

---

## 8. Fases de Implementacion

### Fase 1: Setup y datos (2-3 dias)
- [ ] Inicializar proyecto Astro 5 + Tailwind v4
- [ ] Configurar Vercel + dominio
- [ ] Migrar datos de `juan-paulo-marchant.md` a JSONs estructurados
- [ ] Descargar y self-hostear fuentes
- [ ] Crear componente SEOHead con JSON-LD

### Fase 2: Layout y navegacion (2-3 dias)
- [ ] BaseLayout con Header/Footer
- [ ] Navegacion responsive (desktop sticky + mobile drawer)
- [ ] Dark mode toggle
- [ ] View Transitions entre paginas

### Fase 3: Homepage (2-3 dias)
- [ ] Hero section con foto, proposito, CTAs
- [ ] Stat counters
- [ ] Publicaciones destacadas (3-5 cards)
- [ ] Areas de investigacion (3 columnas)
- [ ] Afiliaciones con logos
- [ ] CTA contacto

### Fase 4: Paginas internas (3-5 dias)
- [ ] /publicaciones -- lista filtrable por tipo y eje tematico
- [ ] /investigacion -- lineas + proyectos financiados
- [ ] /docencia -- instituciones, cursos, Premio Inspira
- [ ] /prensa -- bio copiable, temas de experticia
- [ ] /trayectoria -- timeline visual + CV PDF descargable
- [ ] /contacto -- formulario + perfiles academicos

### Fase 5: SEO y optimizacion (1-2 dias)
- [ ] Meta tags Highwire Press en publicaciones
- [ ] Schema.org JSON-LD en todas las paginas
- [ ] Sitemap XML + robots.txt
- [ ] Open Graph + Twitter Cards
- [ ] Core Web Vitals: LCP < 1.5s, CLS < 0.05
- [ ] Lighthouse 95+ en todas las categorias

### Fase 6: Lanzamiento
- [ ] Deploy a Vercel
- [ ] Verificar en Google Search Console
- [ ] Actualizar URL en todos los perfiles academicos
- [ ] Solicitar backlinks institucionales

---

## Documentos de Referencia

Los siguientes documentos detallados fueron generados por los agentes especializados:

| Documento | Contenido |
|-----------|-----------|
| `brand-strategy.md` | Posicionamiento, pilares, tono de voz, identidad visual completa |
| `SEO-STRATEGY.md` | Keywords, schema.org, meta tags, Google Scholar, link building |
| `ESTRATEGIA_MARKETING_ACADEMICO.md` | Presencia digital, contenido, redes, medios, metricas |
| `juan-paulo-marchant.md` | Datos completos del investigador (fuente de verdad para contenido) |

---

*Plan generado con aportes de 7 agentes especializados: Brand Guardian, UX Researcher, UI Designer, Visual Storyteller, Frontend Developer, SEO Specialist y Growth Hacker.*
