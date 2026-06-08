# FlowOps — Frontend

Aplicación web React que implementa autenticación JWT contra el backend FastAPI de este repositorio.

## Stack

| Herramienta | Propósito |
|-------------|-----------|
| React 19 | Framework de UI |
| Vite | Bundler y servidor de desarrollo |
| React Router v7 | Enrutamiento del lado del cliente |
| CSS Modules | Estilos con alcance de componente |

---

## Páginas

| Ruta | Descripción | Acceso |
|------|-------------|--------|
| `/login` | Formulario de inicio de sesión | Público |
| `/welcome` | Panel de bienvenida | Solo con sesión activa |

Cualquier URL que no exista redirige automáticamente a `/login`.

---

## Diseño

La interfaz sigue el sistema de diseño definido en [`DESIGN.md`](../DESIGN.md):

- **Paleta**: fondo blanco `#FFFFFF`, acento primario `#111827`, superficies `#E5E7EB`.
- **Tipografía**: Inter, tamaño base 14 px, peso ligero (300) para cuerpo y medio (500) para etiquetas.
- **Superficies de cristal**: `backdrop-filter: blur(4px)` con fondo `rgba(255,255,255,0.9)`.
- **Radios**: botones `9999px` (píldora), tarjetas `32px`.
- **Sombras**: sistema de sombras sutiles definido en el design system.

---

## Instrucciones de uso

### Pre-requisitos

- [Node.js](https://nodejs.org/) v18 o superior
- Backend corriendo en `http://localhost:8000` (ver instrucciones en `../backend/README.md`)

### 1. Instalar dependencias

```bash
cd frontend
npm install
```

### 2. Configurar variables de entorno (opcional)

Por defecto el frontend apunta a `http://localhost:8000`. Si el backend está en otra URL, crea un archivo `.env.local`:

```bash
cp .env.example .env.local
# Editar VITE_API_URL con la URL correcta
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en **http://localhost:5173**.

### 4. Construir para producción

```bash
npm run build
# Los archivos estáticos quedan en dist/
```

---

## Credenciales de prueba

El backend trae un usuario predefinido:

| Campo | Valor |
|-------|-------|
| Usuario | `admin` |
| Contraseña | `admin123` |

---

## Flujo de autenticación

1. El usuario ingresa sus credenciales en `/login`.
2. El frontend hace `POST /token` al backend con `{ username, password }`.
3. El backend devuelve `{ access_token, refresh_token, token_type, expires_in }`.
4. El `access_token` se guarda en `sessionStorage` (se borra al cerrar la pestaña).
5. El usuario es redirigido a `/welcome`.
6. Si el usuario intenta acceder a `/welcome` sin sesión, es redirigido a `/login`.
7. Al hacer clic en "Cerrar sesión" el token se elimina y se redirige a `/login`.

---

## Estructura del proyecto

```
frontend/
├── src/
│   ├── context/
│   │   └── AuthContext.jsx     # Estado global de autenticación
│   ├── components/
│   │   └── ProtectedRoute.jsx  # HOC para rutas protegidas
│   ├── pages/
│   │   ├── LoginPage.jsx       # Página de inicio de sesión
│   │   ├── LoginPage.module.css
│   │   ├── WelcomePage.jsx     # Panel de bienvenida (protegido)
│   │   └── WelcomePage.module.css
│   ├── App.jsx                 # Definición de rutas
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Variables CSS y reset
├── index.html
├── vite.config.js
├── .env.example
└── README.md
```
