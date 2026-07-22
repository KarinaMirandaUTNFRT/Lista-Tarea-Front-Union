# 💻 CRUD de Tareas de programación

Este proyecto es una aplicación web desarrollada con React y TypeScript que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un listado de tareas. Es ideal para aprender y practicar conceptos de desarrollo frontend moderno.

## 🦖 Demo

mira la demo del proyecto [aqui](https://catalogo-tareas-c23.netlify.app/)

## 🚀 Librerías utilizadas

- React
- TypeScript
- Vite
- React Router
- Tailwind
- react-icons
- sweetalert 2

## 📦 Pasos para usar el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/rollingcodeschool/crud-tareas-c23
   ```
2. **Instalar dependencias:**
   ```bash
   pnpm install
   ```
3. **Crear la variable de entorno:**
   - Crea un archivo llamado `.env` en la raíz del proyecto.
   - Agrega las siguientes líneas (ajusta el valor según corresponda):
     ```bash
     VITE_EMAIL=email-admin
     VITE_PASSWORD=password-admin
     ```
4. **Iniciar el proyecto:**
   ```bash
   pnpm run dev
   ```

## 📂 Estructura de carpetas

```
├── public/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── Administrador.tsx
│   │   │   ├── DetalleTarea.tsx
│   │   │   ├── Error404.tsx
│   │   │   ├── FormularioTarea.tsx
│   │   │   ├── Inicio.tsx
│   │   │   └── Login.tsx
│   │   ├── routes/
│   │   │   └── ProtectorRutas.tsx
│   │   ├── services/
│   │   │   ├── CardTarea.tsx
│   │   │   └── ItemTabla.tsx
│   │   └── shared/
│   │       ├── Footer.tsx
│   │       └── Menu.tsx
│   ├── context/
│   │   └── AppContext.tsx
│   └── interfaces/
│       └── tareas.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 👩🏻‍💻 Autor

Hecho con 💜 por [Emilse Arias](https://github.com/emiarias)