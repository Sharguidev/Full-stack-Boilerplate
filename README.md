# Full-Stack Boilerplate

🚀 Frontend Astro + React | Backend Flask API + PostgreSQL
A modern, production-ready full-stack boilerplate for building scalable web applications. Includes Astro + React for lightning-fast frontend performance and Flask API + PostgreSQL + SQLAlchemy for a robust backend architecture.

📚 Extensive Documentation

## ✨ Features

### Frontend (Astro + React)

- ⚡ Astro Framework - Zero JS by default, ultra-fast performance
- ⚛️ React Integration - Interactive components where needed
- 🎨 Modern UI - Clean and responsive design
- 📱 Mobile-First - Optimized for all devices
- 🔥 Hot Reload - Fast development experience

### Backend (Flask API)

- 🐍 Python Flask - Lightweight and flexible web framework
- 🗄️ PostgreSQL - Robust relational database
- 🔧 SQLAlchemy ORM - Database abstraction layer
- 📦 Pipenv - Dependency management
- 🔐 Ready-to-use Authentication - JWT integration ready
- 📊 Admin Panel - Integrated data management
- 🚀 Quick Deployment - One-command deploy to Render/Heroku

## 📋 Prerequisites

- Python 3.10+ (configurable in Pipfile)
- Node.js 18+ and npm/yarn
- PostgreSQL 13+
- Pipenv (`pip install pipenv`)

## 🚀 Quick Start

### Option 1: Cloud Development (Recommended)

### This is just a TEMPLATE, you should fork or use this template to create your own project

Using GitHub Codespaces or Gitpod - Everything is pre-configured!

1. Click "Use this template" or fork the repository
2. Open it in Codespaces/Gitpod
3. Wait for the automatic setup to complete
4. Start coding! 🎉

### Option 2: Local Installation

#### Clone the new repository to your local machine, fork it or use this template to create your own project

```bash
git clone https://github.com/your-username/the-name-of-your-project.git
cd name-of-your-project
```

#### Backend Setup

```bash
# Install Python dependencies
pipenv install

# Create database
psql -U root -c 'CREATE DATABASE example;'

# Initialize and migrate database
pipenv run init
pipenv run migrate
pipenv run upgrade
```

#### Frontend Setup

```bash
cd frontend
# If node_modules doesn't exist, run:
pnpm install
```

#### Environment Setup

```bash
cp .env.example .env
```

After creating the new file, update your database variables. This is not necessary if you're using Docker.

#### Start the Project

```bash
pipenv run start

# In another terminal
cd frontend && pnpm run dev
```

## 📁 Project Structure

```bash
Full-stack-Boilerplate/
├── src/                      # Flask backend application
│   ├── app.py               # 🔗 API endpoints and routes
│   ├── models.py            # 🗄️ Database models and serialization
│   ├── utils.py             # 🛠️ Reusable functions and classes
│   └── admin.py             # ⚙️ Admin panel configuration
│   └── wsgi.py              # 🌐 Deployment configuration
├── frontend/                # Astro + React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Astro pages
│   │   └── layouts/        # Page layouts
│   ├── public/             # Static assets
│   └── package.json
├── migrations/              # Database migrations
├── docs/                   # 📚 Documentation
├── Pipfile                 # Python dependencies
├── .env.example            # Environment template
└── README.md
```

## 🗄️ Database Management

### Create and Apply Migrations

After making changes to your models in src/models.py:

```bash
pipenv run migrate
pipenv run upgrade
```

#### Generate Database Diagram

```bash
pipenv run diagram
```

## 🛠️ Available Scripts

### Backend

```bash
pipenv run start       # Start development server
pipenv run migrate     # Generate database migrations
pipenv run upgrade     # Apply migrations
pipenv run init        # Initialize database
pipenv run deploy      # Deploy to production (Render/Heroku)
pipenv run diagram     # Generate database diagram
```

### Frontend

```bash
pnpm run dev           # Start development server
pnpm run build         # Build for production
pnpm run preview       # Preview production build
pnpm run astro         # Run Astro CLI commands
```

## 🚀 Manual Deployment Steps

### Render.com

1. Connect your GitHub repository
2. Build command: `pipenv install`
3. Start command: `pipenv run start`
4. Add environment variables

### Heroku

- Create Heroku app: `heroku create your-app-name`
- Add PostgreSQL addon: `heroku addons:create heroku-postgresql`
- Deploy: `git push heroku main`

## Netlify

```bash
cd frontend
pnpm astro add netlify
```

### Website UI deployment

If your project is stored in GitHub, GitLab, BitBucket, or Azure DevOps, you can use the Netlify website UI to deploy your Astro site.

- Click Add a new site in your Netlify dashboard

- Choose Import an existing project

- When you import your Astro repository from your Git provider, Netlify should automatically detect and pre-fill the correct configuration settings for you.

- Make sure that the following settings are entered, then press the Deploy button:
    Build Command: astro build or pnpm run build
    Publish directory: frontend/dist

- After deploying, you will be redirected to the site overview page. There, you can edit the details of your site.

Any future changes to your source repository will trigger preview and production deploys based on your deployment configuration.

## 🔧 Cloud Development Configuration

### Port Forwarding

- Important: When using Codespaces or Gitpod, make sure your forwarded port is set to public.
- Open the "Ports" tab
- Click "Open Browser" next to your port
- Set port visibility to "Public" if needed

## 🛡️ Security Best Practices

- Use environment variables for sensitive data
- Implement proper authentication/authorization
- Validate all user inputs
- Use HTTPS in production
- Keep dependencies updated

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📚 Learning Resources

- 📹 Video Tutorial
- 📖 Complete Documentation
- 🎓 4Geeks Academy Bootcamp

## 🛠️ Built With

### Front-end

- Astro - Static Site Generator
- React - UI Components
- TypeScript - Type Safety (optional)

### Back-end

- Flask - Python Web Framework
- SQLAlchemy - Database ORM
- PostgreSQL - Database
- Pipenv - Dependency Management

### DevOps

- Render.com - Deployment Platform
- Heroku - Alternative Deployment
- GitHub Codespaces - Cloud Development

## 📄 License

This project is licensed under the MIT License.

## 🙏 Credits

Created by [Alejandro Sanchez](https://github.com/alejandro86p), [Guillermo Obando](https://github.com/Sharguidev) and contributors from [4Geeks Academy](https://github.com/4GeeksAcademy).

## ⭐ Support

If this boilerplate helps you build amazing applications, give it a ⭐ on GitHub!
