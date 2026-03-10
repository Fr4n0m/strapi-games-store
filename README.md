# Strapi Games Store

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Strapi](https://img.shields.io/badge/Strapi-Headless%20CMS-4945FF?logo=strapi)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green)

A modern video game storefront built with **Next.js + Strapi**.

- Production/demo mode runs with **mock data** (ideal for Vercel demos)
- Strapi integration remains implemented and can be enabled via environment variables

---

### Resumen

Strapi Games Store es una web de videojuegos con una UI visual, categorias, listado de juegos y paginas por categoria.

![Home](https://github.com/user-attachments/assets/a6f92e93-757d-4686-929d-0c914c2a2823)

### Caracteristicas

- Frontend en Next.js (App Router)
- Modo demo con datos mock por defecto
- Integracion Strapi lista para activar por configuracion
- Cards, carrusel y estilo gaming responsive
- Preparado para despliegue en Vercel

![Games](https://github.com/user-attachments/assets/6ac1ec1b-a0fb-468a-b5b9-b132e4ac4248)

### Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Strapi](https://strapi.io/)

### Instalacion local

```bash
git clone https://github.com/Fr4n0m/strapi-games-store.git
cd strapi-games-store
```

#### Backend (Strapi)

```bash
cd backend
npm install
npm run develop
```

#### Frontend (Next.js)

```bash
cd web
npm install
npm run dev
```

### Configuracion de datos (mock o Strapi)

Archivo: `web/.env.example`

```env
# true = usa mocks (recomendado para demo en Vercel)
NEXT_PUBLIC_USE_MOCK_DATA=true

# Solo necesario si activas Strapi (NEXT_PUBLIC_USE_MOCK_DATA=false)
STRAPI_HOST=http://localhost:1337
STRAPI_TOKEN=replace_with_strapi_readonly_token
```

### Deploy en Vercel

- Deploy recomendado con `NEXT_PUBLIC_USE_MOCK_DATA=true`
- Si quieres consumir Strapi real en produccion, define:
  - `NEXT_PUBLIC_USE_MOCK_DATA=false`
  - `STRAPI_HOST`
  - `STRAPI_TOKEN`

![Categories](https://github.com/user-attachments/assets/bb867fac-537f-4172-be2b-2e9e2a48f1fb)

### Contribuciones

PRs are welcome. Abre una rama, aplica cambios y crea tu Pull Request.

### Licencia

MIT. Ver [LICENSE](LICENSE).

---

## English

### Overview

Strapi Games Store is a game storefront with a visual UI, categories, game listing, and per-category pages.

![Home](https://github.com/user-attachments/assets/a6f92e93-757d-4686-929d-0c914c2a2823)

### Features

- Next.js frontend (App Router)
- Mock-data demo mode enabled by default
- Strapi integration kept in place and configurable
- Responsive gaming-style UI with cards and carousel
- Ready for Vercel deployment

![Games](https://github.com/user-attachments/assets/6ac1ec1b-a0fb-468a-b5b9-b132e4ac4248)

### Tech stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Strapi](https://strapi.io/)

### Local setup

```bash
git clone https://github.com/Fr4n0m/strapi-games-store.git
cd strapi-games-store
```

#### Backend (Strapi)

```bash
cd backend
npm install
npm run develop
```

#### Frontend (Next.js)

```bash
cd web
npm install
npm run dev
```

### Data source configuration (mock or Strapi)

File: `web/.env.example`

```env
# true = use mocks (recommended for Vercel demo)
NEXT_PUBLIC_USE_MOCK_DATA=true

# Required only when enabling Strapi (NEXT_PUBLIC_USE_MOCK_DATA=false)
STRAPI_HOST=http://localhost:1337
STRAPI_TOKEN=replace_with_strapi_readonly_token
```

### Vercel deployment

- Recommended demo deployment: `NEXT_PUBLIC_USE_MOCK_DATA=true`
- To use live Strapi in production, set:
  - `NEXT_PUBLIC_USE_MOCK_DATA=false`
  - `STRAPI_HOST`
  - `STRAPI_TOKEN`

![Categories](https://github.com/user-attachments/assets/bb867fac-537f-4172-be2b-2e9e2a48f1fb)

### Contributing

PRs are welcome. Create a branch, apply your changes, and open a Pull Request.

### License

MIT. See [LICENSE](LICENSE).

---

## Links

- Portfolio: [Fr4n0m](https://codebyfran.es)
- Repository: [github.com/Fr4n0m/strapi-games-store](https://github.com/Fr4n0m/strapi-games-store)
