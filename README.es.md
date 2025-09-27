# Full-Stack Boilerplate

🚀 Frontend Astro + React | Backend Flask API + PostgreSQL
Un boilerplate full-stack moderno y listo para producción para construir aplicaciones web escalables. Incluye Astro + React para un rendimiento frontend ultrarrápido y Flask API + PostgreSQL + SQLAlchemy para una arquitectura backend robusta.
📚 Documentación Extensa
✨ Características
Frontend (Astro + React)

⚡ Framework Astro - Cero JS por defecto, rendimiento ultrarrápido
⚛️ Integración React - Componentes interactivos donde se necesiten
🎨 UI Moderna - Diseño limpio y responsivo
📱 Mobile-First - Optimizado para todos los dispositivos
🔥 Hot Reload - Experiencia de desarrollo rápida

Backend (Flask API)

🐍 Python Flask - Framework web ligero y flexible
🗄️ PostgreSQL - Base de datos relacional robusta
🔧 SQLAlchemy ORM - Capa de abstracción de base de datos
📦 Pipenv - Gestión de dependencias
🔐 Autenticación Lista - Integración JWT preparada
📊 Panel de Admin - Gestión de datos integrada
🚀 Despliegue Rápido - Deploy con un comando a Render/Heroku

📋 Prerequisitos

Python 3.10+ (configurable en Pipfile)
Node.js 18+ y npm/yarn
PostgreSQL 13+
Pipenv (pip install pipenv)

🚀 Inicio Rápido
Opción 1: Desarrollo en la Nube (Recomendado)
Usando GitHub Codespaces o Gitpod - ¡Todo está preconfigurado!

Haz clic en "Use this template" o haz fork del repositorio
Ábrelo en Codespaces/Gitpod
Espera a que termine la configuración automática
¡Comienza a programar! 🎉

## Opción 2: Instalación Local

### Clonar el repositorio, debes crear una copia o usar este template para crear tu propio proyecto

```bash
    git clone https://github.com/tu-usuario/tu-proyecto.git
    cd tu-proyecto
```

### Configuracion del backend

```bash
# Instalar dependencias de Python
   pipenv install

   # Crear base de datos
   psql -U root -c 'CREATE DATABASE example;'

   # Inicializar y migrar base de datos
   pipenv run init
   pipenv run migrate
   pipenv run upgrade
```

### Configuración del frontend

```bash
   cd frontend
   #si no existe la carpeta node_modules ejecuta el siguiente comando:
   pnpm install
```

### Configuración del Entorno

```bash
   cp .env.example .env
```

Posterior a crear el nuevo archivo debes de actualizar tu variables, de la base de datos, si utilizas docker esto no es necesario.

### Iniciar el proyecto

```bash
   pipenv run start

   #En otra terminal.
   cd frontend && pnpm run dev
```

### 📁 Estructura del Proyecto

```bash
Full-stack-Boilerplate/
├── src/                      # Aplicación Flask backend
│   ├── app.py              # 🔗 Endpoints y rutas de la API
│   ├── models.py            # 🗄️ Modelos de BD y serialización
│   ├── utils.py             # 🛠️ Funciones y clases reutilizables
│   └── admin.py            # ⚙️ Configuración panel de admin
│   └── wsgi.py             # 🌐 Configuración del deployment
├── frontend/                 # Frontend Astro + React
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── pages/          # Páginas Astro
│   │   └── layouts/        # Layouts de página
│   ├── public/             # Assets estáticos
│   └── package.json
├── migrations/              # Migraciones de base de datos
├── docs/                   # 📚 Documentación
├── Pipfile                 # Dependencias Python
├── .env.example            # Template de entorno
└── README.md

```

## 🗄️ Gestión de Base de Datos

### Crear y Aplicar Migraciones

Después de hacer cambios en tus modelos en src/models.py:

```bash
   pipenv run migrate
   pipenv run upgrade
```

#### Genera el diagrama de la base de datos

```bash
   pipenv run diagram
```

## 🛠️ Scripts Disponibles

### Backend

```bash
pipenv run start       # Iniciar servidor de desarrollo
pipenv run migrate     # Generar migraciones de BD
pipenv run upgrade     # Aplicar migraciones
pipenv run init        # Inicializar base de datos
pipenv run deploy      # Desplegar a producción (Render/Heroku)
pipenv run diagram     # Generar diagrama de BD

```

### Frontend

```bash
   pnpm run dev           # Iniciar servidor de desarrollo
   pnpm run build         # Construir para producción
   pnpm run preview       # Vista previa del build de producción
   pnpm run astro         # Ejecutar comandos CLI de Astro
```

## 🚀 Pasos de Despliegue Manual

### Render.com

Conecta tu repositorio GitHub
Comando de build: pipenv install
Comando de inicio: pipenv run start
Agregar variables de entorno

### Heroku

- Crear app Heroku: `heroku create nombre-de-tu-app`
- Agregar addon PostgreSQL: `heroku addons:create heroku-postgresql`
- Desplegar: `git push heroku main`

## Netlify

```bash
cd frontend
pnpm astro add netlify
```

### Despliegue mediante la interfaz web

Si tu proyecto está almacenado en GitHub, GitLab, BitBucket o Azure DevOps, puedes usar la interfaz web de Netlify para desplegar tu sitio Astro.

- Haz clic en "Add a new site" (Añadir nuevo sitio) en tu panel de control de Netlify
- Selecciona "Import an existing project" (Importar un proyecto existente)
- Al importar tu repositorio de Astro desde tu proveedor de Git, Netlify debería detectar automáticamente y completar la configuración correcta por ti
- Asegúrate de que se ingresen las siguientes configuraciones y luego presiona el botón "Deploy" (Desplegar):
- Comando de construcción: astro build o pnpm run build
- Directorio de publicación: frontend/dist
- Después del despliegue, serás redirigido a la página de resumen del sitio. Allí podrás editar los detalles de tu sitio
- Cualquier cambio futuro en tu repositorio fuente activará despliegues de vista previa y producción según tu configuración de despliegue.

## 🔧 Configuración Desarrollo en la Nube

### Reenvío de Puertos

- Importante: Al usar Codespaces o Gitpod, asegúrate de que tu puerto reenviado esté configurado como público.

- Abre la pestaña "Ports"
- Haz clic en "Open Browser" junto a tu puerto
- Configura la visibilidad del puerto como "Public" si es necesario

## 🛡️ Mejores Prácticas de Seguridad

- Usa variables de entorno para datos sensibles
- Implementa autenticación/autorización apropiada
- Valida todas las entradas de usuario
- Usa HTTPS en producción
- Mantén las dependencias actualizadas

## 🤝 Contribuir

- Ingresa al repositorio o crea una copia en local

```bash
    git clone https://github.com/Sharguidev/Full-stack-Boilerplate.git
    cd Full-stack-Boilerplate
```

- Crea una rama de funcionalidad: `git checkout -b feature/funcionalidad-increible`
- Confirma los cambios: `git commit -m 'Agregar funcionalidad increíble'`
- Push a la rama: `git push origin feature/funcionalidad-increible`
- Abre un Pull Request

## 📚 Recursos de Aprendizaje

- 📖 Documentación Completa
- 🎓 Bootcamp 4Geeks Academy

🛠️ Construido Con Frontend-Sharguidev

Astro - Generador de Sitios Estáticos
React - Componentes UI
TypeScript - Tipado Seguro (opcional)

Backend-4geeksAcademy

Flask - Framework Web Python
SQLAlchemy - ORM Base de Datos
PostgreSQL - Base de Datos
Pipenv - Gestión de Dependencias

DevOps

Render.com - Plataforma de Despliegue
Heroku - Despliegue Alternativo
GitHub Codespaces - Desarrollo en la Nube

📄 Licencia
Este proyecto está licenciado bajo la Licencia MIT.
🙏 Créditos
Creado por [Alejandro Sanchez](https://github.com/alejandro86p), [Guillermo Obando](https://github.com/Sharguidev) y colaboradores de [4Geeks Academy](https://github.com/4GeeksAcademy).
⭐ Apoyo
Si este boilerplate te ayuda a construir aplicaciones increíbles, ¡dale una ⭐ en GitHub!
