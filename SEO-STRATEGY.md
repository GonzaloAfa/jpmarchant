# Estrategia SEO Integral para jpmarchant.cl
## Juan Paulo Marchant Espinoza - Investigador Academico

**Fecha**: Marzo 2026
**Sitio**: jpmarchant.cl
**Plataforma objetivo**: Vercel (SSR/Static)
**Idioma principal**: Espanol | Secundarios: Ingles, Catalan, Portugues

---

## Tabla de Contenidos

1. [Diagnostico del Estado Actual](#1-diagnostico-del-estado-actual)
2. [Estrategia de Palabras Clave](#2-estrategia-de-palabras-clave)
3. [Datos Estructurados Schema.org](#3-datos-estructurados-schemaorg)
4. [Estrategia de Meta Tags por Tipo de Pagina](#4-estrategia-de-meta-tags-por-tipo-de-pagina)
5. [Optimizacion para Google Scholar](#5-optimizacion-para-google-scholar)
6. [Mejores Practicas SEO Academico](#6-mejores-practicas-seo-academico)
7. [Estrategia de Enlazado Interno](#7-estrategia-de-enlazado-interno)
8. [Checklist Tecnico para Vercel](#8-checklist-tecnico-para-vercel)
9. [Estrategia de Contenido](#9-estrategia-de-contenido)
10. [Link Building Academico](#10-link-building-academico)

---

## 1. Diagnostico del Estado Actual

### Problemas Criticos del Sitio Existente

El sitio actual presenta deficiencias severas que limitan completamente su visibilidad organica:

- **Sin meta description**: La etiqueta `<meta name="description" content="">` esta vacia
- **Title tag generico**: Solo dice "JPMarchant" sin palabras clave ni contexto
- **Idioma incorrecto**: El HTML declara `lang="en"` cuando el contenido es en espanol
- **Sin datos estructurados**: Cero markup Schema.org
- **Sin canonical URL**: No hay etiquetas canonicas definidas
- **Tecnologia obsoleta**: jQuery 1.6.2 (2011), condicionales para IE6-8
- **Sin HTTPS forzado**: Enlaces internos usan `http://`
- **Sin Open Graph / Twitter Cards**: Cero presencia en redes sociales al compartir
- **Contenido en una sola pagina**: Todo el CV en un unico HTML sin estructura de URLs
- **Sin sitemap XML ni robots.txt**: Google no tiene guia de rastreo
- **Sin integracion academica**: No hay enlace a ORCID, Google Scholar, ni Dialnet
- **Sin meta tags de citacion**: Las publicaciones no son indexables por Google Scholar

### Metricas de Referencia (Estimadas)

| Metrica | Estado Actual | Objetivo 12 Meses |
|---------|--------------|-------------------|
| Paginas indexadas | ~1 | 30-50 |
| Palabras clave posicionadas | ~0 | 100+ |
| Domain Rating | ~0 | 15-25 |
| Trafico organico mensual | ~0 | 500-1,500 sesiones |
| Perfil Google Scholar enlazado | No | Si |
| Core Web Vitals | No medibles | Todo en verde |

---

## 2. Estrategia de Palabras Clave

### 2.1 Cluster Principal: Identidad del Investigador (Navegacional + Marca Personal)

| Palabra Clave | Volumen Est. | Dificultad | Intent | Prioridad |
|---------------|-------------|------------|--------|-----------|
| Juan Paulo Marchant Espinoza | Bajo | Muy baja | Navegacional | Critica |
| Juan Paulo Marchant investigador | Bajo | Muy baja | Navegacional | Critica |
| Juan Paulo Marchant femicidio | Bajo | Muy baja | Navegacional | Alta |
| Juan Paulo Marchant publicaciones | Bajo | Muy baja | Informacional | Alta |

**Objetivo**: Dominar completamente las SERPs para busquedas de nombre propio. Actualmente compiten LinkedIn, The Org, Universidad Mayor y Dialnet.

### 2.2 Cluster Tematico: Femicidio en Chile

#### Pillar Page: `/investigacion/femicidio-chile`

| Palabra Clave (ES) | Volumen Est. | KD | Intent | URL Objetivo |
|---------------------|-------------|-----|--------|-------------|
| femicidio en Chile | 2,000-5,000 | Media | Informacional | /investigacion/femicidio-chile |
| estadisticas femicidio Chile | 1,000-2,000 | Media | Informacional | /blog/estadisticas-femicidio-chile |
| ley femicidio Chile | 500-1,000 | Media | Informacional | /blog/marco-legal-femicidio-chile |
| femicidio cifras Chile 2024 2025 | 500-1,000 | Baja | Informacional | /blog/cifras-femicidio-actualizadas |
| causas del femicidio | 500-1,000 | Media | Informacional | /blog/factores-riesgo-femicidio |
| prevencion femicidio | 300-500 | Baja | Informacional | /blog/politicas-prevencion-femicidio |
| reparacion victimas femicidio | 200-500 | Baja | Informacional | /blog/reparacion-victimas-femicidio |
| Ley 21565 reparacion femicidio | 100-300 | Muy baja | Informacional | /blog/ley-21565-analisis |
| medidas cautelares femicidio Chile | 100-300 | Baja | Informacional | /publicaciones/medidas-cautelares-femicidio |

#### Contenido de Soporte (Long-tail)

| Palabra Clave Long-tail (ES) | Vol. Est. | Intent | Formato |
|-------------------------------|----------|--------|---------|
| cuantos femicidios hay en Chile por ano | 200-500 | Informacional | Articulo datos |
| que hacer si soy victima de violencia de pareja | 300-500 | Informacional | Guia |
| como denunciar violencia intrafamiliar Chile | 500-1,000 | Transaccional | Guia paso a paso |
| diferencia entre femicidio y feminicidio | 200-500 | Informacional | Articulo |
| casas de acogida violencia Chile | 100-300 | Transaccional | Recurso |
| politicas publicas violencia de genero Chile | 100-300 | Informacional | Analisis |
| perfil agresor femicida Chile | 100-200 | Informacional | Articulo investigacion |

### 2.3 Cluster Tematico: Violencia de Genero y Politicas Publicas

| Palabra Clave (ES) | Volumen Est. | KD | Intent | URL Objetivo |
|---------------------|-------------|-----|--------|-------------|
| violencia de genero Chile | 2,000-5,000 | Alta | Informacional | /investigacion/violencia-genero-chile |
| politicas publicas genero Chile | 200-500 | Baja | Informacional | /blog/politicas-publicas-genero |
| masculinidades nuevas | 100-300 | Baja | Informacional | /blog/nuevas-masculinidades |
| violencia intrafamiliar Chile estadisticas | 500-1,000 | Media | Informacional | /blog/vif-chile-datos |
| denuncia violencia de pareja Chile | 300-500 | Media-Baja | Informacional | /publicaciones/denuncia-violencia-pareja |

### 2.4 Palabras Clave en Ingles (Audiencia Internacional)

| Keyword (EN) | Volume Est. | KD | Intent | Target URL |
|--------------|------------|-----|--------|------------|
| femicide Chile | 100-300 | Baja | Informacional | /en/research/femicide-chile |
| gender violence Latin America | 200-500 | Media | Informacional | /en/blog/gender-violence-latam |
| femicide prevention public policy | 50-100 | Muy baja | Informacional | /en/publications/ |
| intimate partner violence Chile | 50-100 | Baja | Informacional | /en/research/ |
| victim reparation femicide | 10-50 | Muy baja | Informacional | /en/publications/ |

### 2.5 Mapa de Intenciones de Busqueda

```
INFORMACIONAL (top-of-funnel) → 60% del contenido
├── Estadisticas y datos sobre femicidio
├── Analisis de leyes y politicas publicas
├── Explicaciones conceptuales (que es femicidio, tipos de violencia)
└── Resenas de investigaciones

COMERCIAL-INVESTIGACION (mid-funnel) → 25% del contenido
├── Comparativas de politicas publicas entre paises
├── Analisis critico de intervenciones estatales
├── Perfil de investigador (credenciales, publicaciones)
└── Recursos para periodistas y medios

NAVEGACIONAL (bottom-funnel) → 15% del contenido
├── Busquedas de nombre propio
├── Acceso directo a publicaciones especificas
└── Contacto para consultoria/entrevistas
```

---

## 3. Datos Estructurados Schema.org

### 3.1 Schema Person (Pagina Principal / Sobre Mi)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://jpmarchant.cl/#person",
  "name": "Juan Paulo Marchant Espinoza",
  "givenName": "Juan Paulo",
  "familyName": "Marchant Espinoza",
  "jobTitle": "Investigador en Politicas Publicas y Violencia de Genero",
  "description": "Psicologo, Magister en Estudios de Genero (U. de Chile), Doctor en Politicas Publicas. Investigador especializado en femicidio, violencia de genero, reparacion a victimas y politicas publicas en Chile.",
  "url": "https://jpmarchant.cl",
  "image": "https://jpmarchant.cl/images/juan-paulo-marchant.jpg",
  "email": "contacto@jpmarchant.cl",
  "sameAs": [
    "https://scholar.google.com/citations?user=Tn9IUL8AAAAJ",
    "https://orcid.org/0000-0002-6589-790X",
    "https://dialnet.unirioja.es/servlet/autor?codigo=2495974",
    "https://www.linkedin.com/in/juan-paulo-marchant-espinoza-80955733/",
    "https://ciss.umayor.cl/equipo/juan-paulo-marchant-espinoza"
  ],
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Universidad de Chile",
      "department": "Magister en Estudios de Genero y Cultura"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Universidad Mayor",
      "department": "Doctorado en Politicas Publicas"
    }
  ],
  "affiliation": [
    {
      "@type": "Organization",
      "name": "Universidad Andres Bello",
      "url": "https://www.unab.cl"
    },
    {
      "@type": "Organization",
      "name": "Universidad Mayor - CISS",
      "url": "https://ciss.umayor.cl"
    }
  ],
  "knowsAbout": [
    "Femicidio",
    "Violencia de genero",
    "Politicas publicas",
    "Reparacion a victimas",
    "Victimologia",
    "Genero y poder"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Doctor en Politicas Publicas"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Magister en Estudios de Genero y Cultura, mencion Humanidades"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Psicologo"
    }
  ]
}
```

### 3.2 Schema ScholarlyArticle (Pagina de cada Publicacion)

```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "@id": "https://jpmarchant.cl/publicaciones/medidas-cautelares-femicidio-chile",
  "headline": "Characterization and analysis of preventive measures in cases of femicides in Chile (2008-2022)",
  "name": "Characterization and analysis of preventive measures in cases of femicides in Chile (2008-2022)",
  "author": [
    {
      "@type": "Person",
      "@id": "https://jpmarchant.cl/#person",
      "name": "Juan Paulo Marchant Espinoza"
    },
    {
      "@type": "Person",
      "name": "Teresita Rocha Jimenez"
    },
    {
      "@type": "Person",
      "name": "Cynthia Alejandra Cordova Sanchez"
    }
  ],
  "datePublished": "2024",
  "isPartOf": {
    "@type": "PublicationVolume",
    "volumeNumber": "14",
    "isPartOf": {
      "@type": "Periodical",
      "name": "Onati Socio-Legal Series",
      "issn": "2079-5971"
    }
  },
  "pageStart": "1768",
  "pageEnd": "1791",
  "about": ["Femicidio", "Medidas cautelares", "Chile", "Violencia de genero"],
  "abstract": "Analisis de medidas preventivas en casos de femicidio en Chile entre 2008 y 2022...",
  "url": "https://jpmarchant.cl/publicaciones/medidas-cautelares-femicidio-chile",
  "sameAs": "https://opo.iisj.net/index.php/osls/article/view/2100",
  "inLanguage": "es",
  "citation": "Marchant Espinoza, J.P., Rocha Jimenez, T., & Cordova Sanchez, C.A. (2024). Characterization and analysis of preventive measures in cases of femicides in Chile (2008-2022). Onati Socio-Legal Series, 14(6), 1768-1791."
}
```

### 3.3 Schema Book (Para los Libros Publicados)

```json
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Iglesia, Genero y Poder: El Caso Karadima",
  "author": {
    "@type": "Person",
    "@id": "https://jpmarchant.cl/#person",
    "name": "Juan Paulo Marchant Espinoza"
  },
  "isbn": "9783848478675",
  "publisher": {
    "@type": "Organization",
    "name": "Editorial Academica Espanola"
  },
  "inLanguage": "es",
  "about": ["Iglesia Catolica", "Genero", "Poder", "Caso Karadima", "Chile"],
  "url": "https://jpmarchant.cl/publicaciones/iglesia-genero-poder-karadima"
}
```

### 3.4 Schema WebSite (Nivel Sitio)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Juan Paulo Marchant Espinoza - Investigador",
  "url": "https://jpmarchant.cl",
  "author": {
    "@type": "Person",
    "@id": "https://jpmarchant.cl/#person"
  },
  "inLanguage": ["es", "en"],
  "description": "Sitio academico de Juan Paulo Marchant Espinoza. Investigacion sobre femicidio, violencia de genero, politicas publicas y reparacion a victimas en Chile."
}
```

### 3.5 Schema BreadcrumbList (Todas las Paginas Internas)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://jpmarchant.cl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Publicaciones",
      "item": "https://jpmarchant.cl/publicaciones"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Medidas Cautelares en Femicidio Chile",
      "item": "https://jpmarchant.cl/publicaciones/medidas-cautelares-femicidio-chile"
    }
  ]
}
```

---

## 4. Estrategia de Meta Tags por Tipo de Pagina

### 4.1 Pagina Principal (Home)

```html
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Juan Paulo Marchant Espinoza | Investigador en Femicidio y Politicas Publicas - Chile</title>
  <meta name="description" content="Psicologo, Mg. en Genero (U. de Chile), Dr. en Politicas Publicas. Investigador especializado en femicidio, violencia de genero y reparacion a victimas. 17+ publicaciones en revistas indexadas.">
  <link rel="canonical" href="https://jpmarchant.cl/">

  <!-- Open Graph -->
  <meta property="og:type" content="profile">
  <meta property="og:title" content="Juan Paulo Marchant Espinoza | Investigador Academico">
  <meta property="og:description" content="Investigador en femicidio, violencia de genero y politicas publicas en Chile. Doctor en Politicas Publicas, 17+ publicaciones academicas.">
  <meta property="og:url" content="https://jpmarchant.cl/">
  <meta property="og:image" content="https://jpmarchant.cl/images/og-home.jpg">
  <meta property="og:locale" content="es_CL">
  <meta property="profile:first_name" content="Juan Paulo">
  <meta property="profile:last_name" content="Marchant Espinoza">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Juan Paulo Marchant Espinoza | Investigador en Femicidio y Politicas Publicas">
  <meta name="twitter:description" content="Investigador en femicidio, violencia de genero y politicas publicas. 17+ publicaciones academicas.">
  <meta name="twitter:image" content="https://jpmarchant.cl/images/og-home.jpg">

  <!-- Hreflang (si existe version en ingles) -->
  <link rel="alternate" hreflang="es" href="https://jpmarchant.cl/">
  <link rel="alternate" hreflang="en" href="https://jpmarchant.cl/en/">
  <link rel="alternate" hreflang="x-default" href="https://jpmarchant.cl/">
</head>
```

### 4.2 Pagina de Publicacion Individual (ScholarlyArticle)

```html
<head>
  <title>Medidas Cautelares en Femicidios Chile (2008-2022) | Juan Paulo Marchant</title>
  <meta name="description" content="Analisis de medidas preventivas en 629 casos de femicidio en Chile. Publicado en Onati Socio-Legal Series, Vol. 14. Autores: Marchant, Rocha, Cordova.">
  <link rel="canonical" href="https://jpmarchant.cl/publicaciones/medidas-cautelares-femicidio-chile">

  <!-- CRITICO: Meta Tags Highwire Press para Google Scholar -->
  <meta name="citation_title" content="Characterization and analysis of preventive measures in cases of femicides in Chile (2008-2022)">
  <meta name="citation_author" content="Marchant Espinoza, Juan Paulo">
  <meta name="citation_author" content="Rocha Jimenez, Teresita">
  <meta name="citation_author" content="Cordova Sanchez, Cynthia Alejandra">
  <meta name="citation_publication_date" content="2024">
  <meta name="citation_journal_title" content="Onati Socio-Legal Series">
  <meta name="citation_volume" content="14">
  <meta name="citation_issue" content="6">
  <meta name="citation_firstpage" content="1768">
  <meta name="citation_lastpage" content="1791">
  <meta name="citation_issn" content="2079-5971">
  <meta name="citation_pdf_url" content="https://jpmarchant.cl/papers/marchant-2024-femicides-chile.pdf">
  <meta name="citation_language" content="es">
  <meta name="citation_doi" content="10.35295/osls.iisl/0000-0000-0000-1440">

  <!-- Dublin Core (respaldo) -->
  <meta name="DC.title" content="Characterization and analysis of preventive measures in cases of femicides in Chile (2008-2022)">
  <meta name="DC.creator" content="Marchant Espinoza, Juan Paulo">
  <meta name="DC.date" content="2024">
  <meta name="DC.type" content="Text">
  <meta name="DC.format" content="text/html">
  <meta name="DC.language" content="es">

  <!-- Open Graph para compartir en redes -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="Medidas Cautelares en Femicidios Chile (2008-2022)">
  <meta property="og:description" content="Investigacion sobre medidas preventivas en 629 femicidios en Chile. Publicado en Onati Socio-Legal Series.">
  <meta property="article:author" content="https://jpmarchant.cl/">
  <meta property="article:published_time" content="2024-01-01">
  <meta property="article:tag" content="femicidio">
  <meta property="article:tag" content="Chile">
  <meta property="article:tag" content="politicas publicas">
</head>
```

### 4.3 Pagina de Listado de Publicaciones

```html
<head>
  <title>Publicaciones Academicas | Juan Paulo Marchant Espinoza</title>
  <meta name="description" content="17+ publicaciones en revistas indexadas sobre femicidio, violencia de genero, politicas publicas y reparacion a victimas. Scopus, WoS, Dialnet, Scielo.">
  <link rel="canonical" href="https://jpmarchant.cl/publicaciones">
</head>
```

### 4.4 Pagina de Blog/Analisis

```html
<head>
  <title>Estadisticas de Femicidio en Chile: Datos Actualizados 2025 | Juan Paulo Marchant</title>
  <meta name="description" content="Datos y analisis sobre femicidios en Chile. 629 casos entre 2008-2022. Distribucion territorial, factores de riesgo y evaluacion de politicas publicas de prevencion.">
  <link rel="canonical" href="https://jpmarchant.cl/blog/estadisticas-femicidio-chile">
  <meta property="og:type" content="article">
  <meta property="article:author" content="https://jpmarchant.cl/">
  <meta property="article:section" content="Investigacion">
</head>
```

### 4.5 Pagina de Investigacion/Lineas de Trabajo

```html
<head>
  <title>Lineas de Investigacion: Femicidio, Genero y Politicas Publicas | JP Marchant</title>
  <meta name="description" content="Lineas de investigacion de Juan Paulo Marchant: femicidio y capacidad estatal, violencia de genero, reparacion integral a victimas, nuevas masculinidades y politicas publicas en Chile.">
  <link rel="canonical" href="https://jpmarchant.cl/investigacion">
</head>
```

---

## 5. Optimizacion para Google Scholar

### 5.1 Requisitos Tecnicos para Indexacion en Google Scholar

Google Scholar tiene requisitos especificos y estrictos. Para que las publicaciones de Marchant sean descubribles desde su propio sitio:

#### A. Estructura de Paginas de Publicacion

Cada publicacion DEBE tener su propia URL dedicada con:

1. **Meta tags Highwire Press obligatorios** (los 3 campos minimos):
   - `citation_title` - Titulo completo del articulo
   - `citation_author` - Un tag por cada autor (formato: Apellido, Nombre)
   - `citation_publication_date` - Ano de publicacion (formato: YYYY o YYYY/MM/DD)

2. **Meta tags Highwire Press recomendados**:
   - `citation_journal_title` - Nombre de la revista
   - `citation_volume` / `citation_issue`
   - `citation_firstpage` / `citation_lastpage`
   - `citation_doi` - DOI del articulo
   - `citation_pdf_url` - URL directa al PDF (CRITICO)
   - `citation_issn` - ISSN de la revista
   - `citation_language` - Idioma del articulo
   - `citation_abstract_html_url` - URL del abstract

3. **PDF asociado**: Google Scholar prioriza fuertemente paginas que enlazan a un PDF del articulo completo. Si es posible legalmente (open access o preprint), alojar PDFs en `/papers/`.

#### B. Formato de la Pagina de Publicacion

```
URL: /publicaciones/[slug-descriptivo]

Contenido visible:
- Titulo completo del articulo (en H1)
- Lista de autores con afiliaciones
- Nombre de la revista, volumen, numero, paginas, ano
- Abstract completo
- Palabras clave
- DOI enlazado
- Enlace al PDF (si disponible)
- Seccion "Referencias" con formato de lista ordenada (<ol>)
- Enlace "Citar este articulo" con formato BibTeX, APA, etc.
```

#### C. Pagina Indice de Publicaciones

La pagina `/publicaciones` debe funcionar como un listado navegable que enlaza a cada publicacion individual. Google Scholar rastrea estas paginas indice para descubrir nuevos articulos.

### 5.2 Relacion con Perfil de Google Scholar Existente

El perfil de Google Scholar de Marchant (ID: `Tn9IUL8AAAAJ`) ya existe. Las acciones son:

1. **Verificar que el perfil esta actualizado** con todas las 17+ publicaciones
2. **Agregar la URL del sitio web** al perfil de Google Scholar
3. **Incluir afiliacion actualizada** en el perfil
4. **Enlazar desde jpmarchant.cl** al perfil de Scholar con `sameAs` en Schema.org
5. **Fusionar duplicados** si hay entradas duplicadas en Scholar

### 5.3 Lista de Publicaciones Confirmadas para Crear Paginas

Basado en la investigacion, estas son las publicaciones confirmadas que necesitan pagina individual:

1. "Characterization and analysis of preventive measures in cases of femicides in Chile (2008-2022)" - Onati, 2024
2. "Femicide, development, and State Capacity in Chile" - Springer, 2025/2026
3. "Denunciar violencia de pareja en Chile" - Sortuz, 2022
4. "Nuevas masculinidades en desplazamiento" - Tabula Rasa, 2014
5. "Incesto, memoria y legitima defensa" - Revista de Ciencias Sociales, 2013
6. "Reacciones maternas inusuales frente al incesto paterno-filial" - ICEV, 2009
7. "Peritajes psicologicos en delitos sexuales" - Ciencia Policial, 2008
8. "Iglesia, Genero y Poder: El Caso Karadima" - Libro, Editorial Academica Espanola
9. Segundo libro publicado en Alemania (confirmar titulo)
10. + Publicaciones adicionales hasta completar las 17+

---

## 6. Mejores Practicas SEO Academico

### 6.1 Integracion ORCID

El ORCID de Marchant es `0000-0002-6589-790X`. Implementar:

```html
<!-- En el head de todas las paginas -->
<link rel="me" href="https://orcid.org/0000-0002-6589-790X">

<!-- Icono ORCID visible en el sitio -->
<a href="https://orcid.org/0000-0002-6589-790X" target="_blank" rel="noopener">
  <img alt="ORCID iD" src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png"
       width="16" height="16"> 0000-0002-6589-790X
</a>
```

Incluir ORCID en:
- Header o footer del sitio (visible globalmente)
- Pagina "Sobre mi"
- Cada pagina de publicacion (junto al nombre del autor)
- Schema.org Person (`identifier` o via `sameAs`)
- Meta tags de autoria

### 6.2 Enlazado de Citaciones

Para cada publicacion, implementar:

1. **DOI como enlace principal**: Enlazar siempre al DOI resolver (`https://doi.org/10.xxxx`)
2. **Cita formateada**: Ofrecer la cita en multiples formatos:
   - APA 7
   - Chicago
   - Vancouver
   - BibTeX
3. **Enlace a la version del editor**: URL directa a la revista
4. **Enlace a repositorios**: Dialnet, Scopus, Web of Science si esta indexado
5. **Metricas de citacion**: Mostrar conteo de citas desde Google Scholar (actualizar periodicamente)

```html
<!-- Ejemplo de seccion de citacion -->
<section id="citar">
  <h3>Citar este articulo</h3>
  <div class="citation-apa">
    <p>Marchant Espinoza, J.P., Rocha Jimenez, T., & Cordova Sanchez, C.A. (2024).
    Characterization and analysis of preventive measures in cases of femicides in Chile
    (2008-2022). <em>Onati Socio-Legal Series</em>, 14(6), 1768-1791.
    <a href="https://doi.org/10.35295/osls.iisl.xxxx">https://doi.org/10.35295/osls.iisl.xxxx</a></p>
  </div>
  <button onclick="copyBibtex()">Copiar BibTeX</button>
</section>
```

### 6.3 Identificadores Academicos a Integrar

| Plataforma | Enlace | Estado | Accion |
|------------|--------|--------|--------|
| ORCID | 0000-0002-6589-790X | Existe | Enlazar y mostrar |
| Google Scholar | Tn9IUL8AAAAJ | Existe | Enlazar, actualizar |
| Dialnet | Codigo 2495974 | Existe | Enlazar |
| ResearchGate | Verificar | Crear si no existe | Crear perfil |
| Scopus Author ID | Verificar | Crear si no existe | Vincular publicaciones |
| Web of Science ResearcherID | Verificar | Crear si no existe | Vincular |
| Semantic Scholar | Verificar | Verificar | Reclamar perfil |
| LinkedIn | Existe | Existe | Actualizar URL del sitio |

### 6.4 Senales E-E-A-T para Investigadores

Para maximizar las senales de Experiencia, Expertise, Autoridad y Confianza:

**Experiencia (Experience)**:
- Mencionar los 10+ anos de trabajo en violencia contra la mujer
- Destacar el rol como Coordinador Nacional en SERNAM/SernamEG
- Incluir testimonios o menciones en medios (como el articulo en CIPER Chile)

**Expertise**:
- Mostrar grados academicos prominentemente
- Listar todas las publicaciones con sus metricas
- Incluir areas de especializacion especificas

**Authoritativeness**:
- Enlaces desde universidades afiliadas (U. Mayor, UNAB, U. de Talca)
- Citaciones en medios de comunicacion
- Participacion en politicas publicas reales (Ley 21.565)

**Trustworthiness**:
- Pagina "Sobre mi" detallada con foto profesional
- Informacion de contacto verificable
- Enlaces a perfiles institucionales verificables
- HTTPS obligatorio

---

## 7. Estrategia de Enlazado Interno

### 7.1 Arquitectura del Sitio Propuesta

```
jpmarchant.cl/
├── / (Home - Pagina principal con resumen de perfil)
├── /sobre-mi (Biografia completa, credenciales, E-E-A-T)
├── /investigacion/ (Hub de lineas de investigacion)
│   ├── /investigacion/femicidio-chile (Pillar: Femicidio)
│   ├── /investigacion/violencia-genero (Pillar: Violencia de genero)
│   └── /investigacion/politicas-publicas-genero (Pillar: Politicas publicas)
├── /publicaciones/ (Listado completo de publicaciones)
│   ├── /publicaciones/medidas-cautelares-femicidio-chile
│   ├── /publicaciones/femicidio-desarrollo-capacidad-estatal
│   ├── /publicaciones/denuncia-violencia-pareja-chile
│   ├── /publicaciones/nuevas-masculinidades-desplazamiento
│   ├── /publicaciones/iglesia-genero-poder-karadima
│   └── /publicaciones/[slug-por-cada-publicacion]
├── /blog/ (Analisis, columnas de opinion, datos)
│   ├── /blog/estadisticas-femicidio-chile
│   ├── /blog/ley-21565-analisis
│   ├── /blog/politicas-prevencion-femicidio
│   └── /blog/[articulos-periodicos]
├── /medios/ (Apariciones en prensa, entrevistas)
├── /docencia/ (Cursos, talleres, material)
├── /contacto (Formulario, email, redes)
└── /en/ (Mirror en ingles de paginas clave)
    ├── /en/ (Home EN)
    ├── /en/about
    ├── /en/research/
    └── /en/publications/
```

### 7.2 Modelo de Enlazado Hub-and-Spoke

```
                    [HOME]
                   /  |  \
                  /   |   \
    [Sobre Mi] [Investigacion] [Publicaciones] [Blog] [Medios]
                   /  |  \          |    |        |
                  /   |   \         |    |        |
     [Femicidio] [VG] [PP]   [Pub1][Pub2]  [Post1][Post2]
         |  \     |          /  |          /
         |   \    |         /   |         /
    [Blog1] [Blog2]-------/  [Blog3]----/
```

### 7.3 Reglas de Enlazado Interno

1. **Cada publicacion enlaza a**: su linea de investigacion padre, publicaciones relacionadas, y posts de blog que la analizan
2. **Cada post de blog enlaza a**: la publicacion academica original, la pagina pillar de investigacion, y 2-3 posts relacionados
3. **Las paginas pillar de investigacion enlazan a**: todas las publicaciones de ese tema, los posts de blog relevantes, y recursos externos autoritativos
4. **El footer global incluye**: enlaces a las 3 lineas de investigacion principales y la pagina de publicaciones
5. **Breadcrumbs en todas las paginas**: Navegacion jerarquica visible con Schema.org BreadcrumbList
6. **Sidebar contextual**: En publicaciones y blog, mostrar "Publicaciones relacionadas" y "Tambien te puede interesar"
7. **Anchor text descriptivo**: Nunca "click aqui". Usar texto como "analisis de medidas cautelares en femicidios" o "publicacion sobre nuevas masculinidades"

### 7.4 Prioridad de Link Equity

Distribuir autoridad interna priorizando:
1. **Prioridad maxima**: Paginas pillar de investigacion (mayor potencial de ranking)
2. **Prioridad alta**: Publicaciones mas citadas y recientes
3. **Prioridad media**: Posts de blog con keywords de alto volumen
4. **Prioridad normal**: Paginas biograficas y de contacto

---

## 8. Checklist Tecnico para Vercel

### 8.1 Configuracion de Vercel y Next.js/Astro

#### Rendimiento y Core Web Vitals

- [ ] **Framework SSR/SSG**: Usar Next.js (App Router) o Astro para generacion estatica con hidratacion selectiva
- [ ] **Image Optimization**: Usar `next/image` o `@astrojs/image` con formatos WebP/AVIF automaticos
- [ ] **Font Optimization**: Cargar Google Fonts con `next/font` (self-hosted, sin layout shift)
- [ ] **Bundle Splitting**: Code splitting automatico por ruta
- [ ] **Prefetching**: Links con prefetch para navegacion instantanea
- [ ] **CSS critico inline**: Extraer CSS above-the-fold automaticamente
- [ ] **JavaScript minimo**: Paginas de publicacion pueden ser 100% estaticas sin JS del lado del cliente

#### Objetivos Core Web Vitals

| Metrica | Objetivo | Estrategia |
|---------|----------|------------|
| LCP | < 1.5s | Imagenes optimizadas, font-display: swap, SSG |
| INP | < 100ms | Minimo JS interactivo, no SPAs pesadas |
| CLS | < 0.05 | Dimensiones de imagen explicitas, font preload |

#### Configuracion del Dominio y SSL

- [ ] **HTTPS forzado**: Vercel lo hace automaticamente
- [ ] **www vs non-www**: Elegir `jpmarchant.cl` (sin www) y redirigir www
- [ ] **DNS**: Configurar registros A y CNAME segun documentacion Vercel
- [ ] **HSTS**: Headers de seguridad habilitados

### 8.2 Archivos Tecnicos SEO

#### robots.txt (`/public/robots.txt`)

```
User-agent: *
Allow: /

Sitemap: https://jpmarchant.cl/sitemap.xml

# Bloquear rutas sin valor SEO
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
```

#### Sitemap XML (generacion dinamica)

Generar automaticamente con el framework. Debe incluir:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://jpmarchant.cl/</loc>
    <lastmod>2026-03-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="es" href="https://jpmarchant.cl/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://jpmarchant.cl/en/"/>
  </url>
  <url>
    <loc>https://jpmarchant.cl/publicaciones</loc>
    <lastmod>2026-03-01</lastmod>
    <priority>0.9</priority>
  </url>
  <!-- Una entrada por cada publicacion, post de blog, y pagina -->
</urlset>
```

### 8.3 Headers HTTP (vercel.json)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    },
    {
      "source": "/papers/(.*).pdf",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" },
        { "key": "X-Robots-Tag", "value": "noindex" }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/index.html",
      "destination": "/",
      "permanent": true
    }
  ]
}
```

**Nota sobre PDFs**: Los PDFs de publicaciones deben tener `X-Robots-Tag: noindex` para que Google Scholar indexe la version HTML (con meta tags de citacion) como version canonica, pero siga pudiendo acceder al PDF via `citation_pdf_url`.

### 8.4 Checklist Tecnico Completo

#### Rastreo e Indexacion
- [ ] robots.txt accesible y correcto
- [ ] Sitemap XML generado y enviado a Search Console
- [ ] Todas las paginas con canonical self-referencing
- [ ] Hreflang para paginas en ingles
- [ ] Sin paginas huerfanas (todas accesibles desde la navegacion)
- [ ] Sin cadenas de redireccion (maximo 1 salto)
- [ ] Codigos de estado correctos (200 para paginas activas, 404 para inexistentes)
- [ ] Sin contenido duplicado entre versiones es/en

#### Rendimiento
- [ ] Lighthouse Performance > 95 en mobile
- [ ] Tiempo de respuesta del servidor (TTFB) < 200ms (Vercel edge)
- [ ] Tamano total de pagina < 500KB (sin imagenes hero)
- [ ] Imagenes lazy-loaded excepto above-the-fold
- [ ] Fuentes con display:swap y preload
- [ ] Sin render-blocking resources

#### Accesibilidad (influencia indirecta en SEO)
- [ ] Contraste de color WCAG AA minimo
- [ ] Todas las imagenes con alt text descriptivo
- [ ] Estructura de headings jerarquica (H1 > H2 > H3)
- [ ] Navegacion accesible por teclado
- [ ] Skip-to-content link
- [ ] Etiquetas ARIA donde sea necesario

#### Mobile
- [ ] Viewport meta tag configurado
- [ ] Diseno responsive sin scroll horizontal
- [ ] Touch targets minimo 48x48px
- [ ] Texto legible sin zoom (minimo 16px body)

#### Seguridad
- [ ] HTTPS en todos los recursos (sin mixed content)
- [ ] Headers de seguridad configurados
- [ ] Sin informacion sensible expuesta

---

## 9. Estrategia de Contenido para Trafico Organico

### 9.1 Seccion Blog/Analisis: "Perspectivas"

Propuesta: Crear una seccion llamada **"Perspectivas"** o **"Analisis"** (`/blog/` o `/perspectivas/`) que publique contenido de alta calidad basado en la experiencia investigativa de Marchant.

#### Calendario Editorial - Primeros 6 Meses

**Mes 1-2: Contenido Fundacional (SEO + Autoridad)**

| Articulo | Keyword Principal | Vol. Est. | Tipo |
|----------|-------------------|----------|------|
| Estadisticas de Femicidio en Chile: Datos Actualizados | estadisticas femicidio Chile | 1,000-2,000 | Datos + Analisis |
| Que es el Femicidio: Definicion, Tipos y Marco Legal en Chile | que es femicidio Chile | 500-1,000 | Guia educativa |
| Ley 21.565: Analisis de la Reparacion a Victimas de Femicidio | Ley 21565 femicidio | 100-300 | Analisis experto |
| Violencia de Pareja en Chile: Como Denunciar y Donde Pedir Ayuda | como denunciar violencia de pareja Chile | 500-1,000 | Guia practica |

**Mes 3-4: Contenido de Profundizacion**

| Articulo | Keyword Principal | Vol. Est. | Tipo |
|----------|-------------------|----------|------|
| Mapa del Femicidio en Chile: Desigualdad Territorial y Violencia | femicidio por region Chile | 200-500 | Datos + Visualizacion |
| Casas de Acogida en Chile: Que Son y Como Funcionan | casas de acogida violencia Chile | 100-300 | Guia informativa |
| Medidas Cautelares en Violencia de Genero: Funcionan? | medidas cautelares violencia genero | 100-300 | Analisis |
| Nuevas Masculinidades: Que Son y Por Que Importan | nuevas masculinidades | 100-300 | Articulo conceptual |

**Mes 5-6: Contenido de Autoridad + Internacional**

| Articulo | Keyword Principal | Vol. Est. | Tipo |
|----------|-------------------|----------|------|
| Femicidio en America Latina: Comparativa de Politicas Publicas | femicidio America Latina | 200-500 | Comparativa |
| El Rol del Estado en la Prevencion del Femicidio | prevencion femicidio politicas publicas | 100-200 | Opinion experta |
| (EN) Femicide in Chile: Data, Policy and Prevention | femicide Chile policy | 50-100 | Articulo en ingles |
| (EN) Gender Violence in Latin America: A Comparative Analysis | gender violence Latin America | 200-500 | Articulo en ingles |

### 9.2 Formato de Contenido Optimizado para SEO

Cada articulo del blog debe seguir esta estructura:

```
H1: [Titulo con keyword principal]

Parrafo introductorio (keyword en las primeras 100 palabras)
[Tabla de contenidos con anchor links]

H2: [Subtema 1 - targeting PAA question]
  Contenido con datos, citaciones, y contexto
  [Enlace interno a publicacion relacionada]

H2: [Subtema 2 - targeting related keyword]
  H3: [Detalle]
  [Tabla o lista para featured snippet]
  [Enlace interno a otro articulo del blog]

H2: [Subtema 3]
  [Visualizacion de datos o grafico]

H2: Preguntas Frecuentes (FAQ)
  H3: [Pregunta PAA 1]
  Respuesta concisa (40-60 palabras) seguida de contexto
  H3: [Pregunta PAA 2]
  Respuesta concisa

H2: Referencias
  <ol> con citaciones formales </ol>

[Schema FAQ + Article]
[Author box con foto, bio breve, ORCID, Scholar]
```

### 9.3 Contenido Evergreen vs. Contenido Temporal

**Evergreen (80% del esfuerzo)**: Guias, datos historicos, marcos conceptuales, analisis de leyes. Se actualiza anualmente.

**Temporal (20%)**: Reacciones a nuevas leyes, comentarios sobre casos mediaticos, actualizacion de cifras anuales. Genera trafico rapido y menciones en prensa.

### 9.4 Pagina de Medios / Press Kit

Crear `/medios/` con:
- Bio corta y larga lista para copiar
- Foto profesional en alta resolucion descargable
- Temas sobre los que puede opinar como experto
- Formulario de contacto para periodistas
- Apariciones previas en medios (ej: columna CIPER Chile)

Esto facilita que periodistas lo citen como fuente experta, generando backlinks naturales de medios de comunicacion.

---

## 10. Link Building Academico

### 10.1 Fuentes de Backlinks Naturales (Ya Existentes o Inmediatos)

| Fuente | DR Estimado | Tipo de Enlace | Accion |
|--------|------------|----------------|--------|
| Universidad Mayor (ciss.umayor.cl) | 60+ | Perfil con link | Solicitar actualizacion con URL del sitio |
| Universidad Andres Bello (unab.cl) | 65+ | Perfil academico | Solicitar inclusion de URL personal |
| Dialnet (dialnet.unirioja.es) | 80+ | Perfil de autor | Ya existe, verificar URL |
| Google Scholar | 95+ | Perfil | Agregar URL del sitio |
| ORCID (orcid.org) | 90+ | Perfil | Ya existe, agregar URL |
| LinkedIn | 99 | Perfil | Actualizar URL del sitio |
| CIPER Chile (ciperchile.cl) | 70+ | Articulo/columna | Ya publicado, verificar link |
| Springer (link.springer.com) | 93 | Publicacion | Ya existe via paper 2025/2026 |

### 10.2 Estrategias de Adquisicion de Enlaces

#### A. Repositorios y Directorios Academicos

- [ ] **ResearchGate**: Crear/actualizar perfil, subir preprints, enlazar al sitio
- [ ] **Academia.edu**: Perfil con publicaciones y enlace al sitio
- [ ] **Semantic Scholar**: Reclamar perfil de autor
- [ ] **Scopus**: Verificar perfil de autor, vincular publicaciones
- [ ] **Web of Science / Publons**: Crear perfil de reviewer
- [ ] **CLACSO**: Red latinoamericana de ciencias sociales, buscar inclusion
- [ ] **Scielo**: Verificar que publicaciones en revistas Scielo enlacen correctamente

#### B. Digital PR Academico

1. **Columnas de opinion en medios**: CIPER Chile (ya publicado), El Mostrador, La Tercera (seccion opinion), The Clinic. Escribir columnas de analisis sobre femicidio con bio que enlace al sitio.

2. **Entrevistas en medios**: Posicionarse como fuente experta ante periodistas que cubren violencia de genero. Cada mencion deberia incluir referencia al sitio.

3. **Comunicados de prensa de universidades**: Cuando se publica un nuevo paper, solicitar que la oficina de comunicaciones de la universidad emita una nota de prensa enlazando al sitio personal.

4. **Redes de investigacion**: Participar en redes como el Nucleo Milenio de Sociomedicina, que generan paginas de equipo con enlaces.

#### C. Contenido como Activo Enlazable

1. **Mapa interactivo de femicidios en Chile**: Visualizacion de datos por region y ano. Alto potencial de ser citado por medios, ONGs y otros investigadores.

2. **Base de datos abierta**: Si es posible, publicar datasets anonimizados de la investigacion doctoral. Los datos abiertos generan citaciones y enlaces.

3. **Infografia anual de femicidio en Chile**: Publicacion anual con datos actualizados en formato visual, compartible y citeable.

4. **Guia para periodistas**: "Como informar sobre femicidio" - recurso que periodistas enlazarian como referencia.

#### D. Guest Posting Academico

- Contribuir con articulos invitados en blogs de universidades latinoamericanas
- Escribir para plataformas como "Agenda Estado de Derecho" (ya citan la tematica)
- Participar en blogs de ONGs de derechos humanos (Amnistia, ONU Mujeres Chile)

#### E. Recuperacion de Enlaces y Menciones

1. **Menciones sin enlace**: Buscar menciones de "Juan Paulo Marchant" en la web que no enlacen al sitio y solicitar la adicion del link
2. **Citaciones academicas**: Cuando otros papers citan publicaciones de Marchant, verificar si hay version digital con enlace recuperable
3. **Perfiles desactualizados**: Actualizar todos los perfiles institucionales con la URL correcta

### 10.3 Metas Mensuales de Link Building

| Mes | Accion Principal | Enlaces Esperados |
|-----|-----------------|-------------------|
| 1 | Actualizar todos los perfiles academicos con URL | 8-10 (directorios) |
| 2 | Columna en medio + perfil ResearchGate/Academia | 3-5 |
| 3 | Lanzar mapa interactivo + contactar medios | 5-8 |
| 4 | Guest post en blog academico + mencion sin enlace | 3-5 |
| 5 | Publicar infografia anual + distribucion | 5-10 |
| 6 | Comunicado de prensa por nueva publicacion | 3-5 |

---

## Resumen de Prioridades de Implementacion

### Fase 1 - Fundacion (Semanas 1-4)
1. Configurar sitio en Vercel con arquitectura de URLs propuesta
2. Implementar Schema.org Person en pagina principal
3. Crear paginas individuales para cada publicacion con meta tags Highwire Press
4. Configurar robots.txt, sitemap.xml, canonical tags
5. Actualizar todos los perfiles academicos con URL del sitio
6. Registrar en Google Search Console y Bing Webmaster Tools

### Fase 2 - Contenido (Semanas 5-12)
1. Publicar 4 articulos fundacionales del blog
2. Implementar Schema ScholarlyArticle en cada publicacion
3. Crear pagina de medios / press kit
4. Configurar hreflang para contenido en ingles
5. Optimizar Core Web Vitals (objetivo: todo en verde)

### Fase 3 - Autoridad (Meses 3-6)
1. Lanzar activo enlazable principal (mapa interactivo o dataset)
2. Publicar 1-2 columnas en medios de comunicacion por mes
3. Continuar calendario editorial del blog (2 articulos/mes)
4. Monitorear rankings y ajustar estrategia de keywords
5. Iniciar recuperacion de menciones sin enlace

### Fase 4 - Escalamiento (Meses 6-12)
1. Expandir contenido en ingles para audiencia internacional
2. Desarrollar segundo y tercer activo enlazable
3. Evaluar oportunidades de featured snippets y PAA
4. Analizar datos de Search Console para descubrir nuevas oportunidades
5. Producir contenido basado en queries reales de busqueda

---

## Herramientas Recomendadas

| Herramienta | Uso | Costo |
|-------------|-----|-------|
| Google Search Console | Monitoreo de indexacion, rendimiento, CWV | Gratis |
| Google Analytics 4 | Trafico, comportamiento, conversiones | Gratis |
| Google Scholar Profile | Gestion de perfil academico | Gratis |
| Ahrefs / SEMrush (1 mes) | Keyword research inicial, backlink audit | ~$99-199/mes |
| Screaming Frog (gratis hasta 500 URLs) | Auditoria tecnica del sitio | Gratis |
| Schema Markup Validator | Validar datos estructurados | Gratis |
| Google Rich Results Test | Verificar elegibilidad de rich results | Gratis |
| PageSpeed Insights | Core Web Vitals en campo y laboratorio | Gratis |

---

*Documento preparado como estrategia SEO integral para jpmarchant.cl. Revisar y actualizar trimestralmente en funcion de datos de rendimiento.*
