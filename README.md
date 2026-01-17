# Admin Panel Generator

Production-ready admin panel template with Next.js + Strapi.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Git

### Backend Setup

1. **Clone repository:**
```bash
   git clone https://github.com/anbazurt/admin-panel-generator.git
   cd admin-panel-generator
```

2. **Start PostgreSQL:**
```bash
   docker-compose up -d
```

3. **Install dependencies & run:**
```bash
   cd backend
   npm install
   npm run develop
```

4. **Create admin user:**
   - Open: http://localhost:1337/admin
   - Fill registration form
   - Access dashboard

## 📁 Project Structure
```
admin-panel-generator/
├── backend/              # Strapi CMS
│   ├── config/          # Database & server config
│   ├── src/             # API & content types
│   └── package.json
├── docker-compose.yml   # PostgreSQL container
└── README.md
```

## 🔧 Tech Stack

**Backend:**
- Strapi 4.x (Headless CMS)
- PostgreSQL 15 (Database)
- Docker (Containerization)

**Frontend:** _(Coming soon - Week 2)_
- Next.js 14
- Tailwind CSS + shadcn/ui
- TypeScript

## 📊 Development Progress

### ✅ Week 1 - Backend Foundation

**Day 1:** _(Completed)_
- [x] Project setup
- [x] Docker PostgreSQL configured
- [x] Strapi installed & running
- [x] Database connection working
- [x] Admin panel accessible

**Day 2:** _(Monday - Next)_
- [ ] Content Types (User, Post, Category, Settings)
- [ ] Model relationships
- [ ] Roles & permissions
- [ ] API endpoints testing

**Day 3-5:**
- [ ] Custom endpoints
- [ ] Authentication & JWT
- [ ] Deploy to Railway
- [ ] Production testing

## 🎯 Project Goals

Create a **production-ready admin panel template** that includes:
- ✅ Authentication & authorization
- ✅ CRUD operations for multiple entities
- ✅ Role-based permissions
- ✅ Dashboard with metrics
- ✅ Dark/Light mode
- ✅ Responsive design
- ✅ Docker deployment
- ✅ Complete documentation

## 🚢 Deployment

**Development:**
- Local: http://localhost:1337

**Production:**
- Backend: Railway _(Week 1)_
- Frontend: Vercel _(Week 2)_

## 📝 Notes

- Admin credentials stored locally (not in repo)
- PostgreSQL data persisted in Docker volume
- Development mode with hot reload enabled

---

**Status:** 🟢 In Active Development

**Next Session:** Monday - Content Types & API

**Built with ❤️ as a #BuildInPublic project**