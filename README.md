# 🎨 Customer CRM - Design System & Dashboard

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-7.6-pink.svg)](https://storybook.js.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg)](https://vitejs.dev/)

A modern, responsive Customer Relationship Management (CRM) dashboard built with **React**, **TypeScript**, and **Atomic Design principles**. Features a complete **Storybook design system** showcasing reusable components from atoms to templates.

## ✨ Features

### 🎯 Application Features
- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Sidebar Navigation** - Smooth mobile menu with hamburger toggle
- ✅ **Top Bar** - Personalized greeting and global search
- ✅ **Stats Cards** - Dynamic metrics with trend indicators
- ✅ **Customers Table** - Advanced search, sort, and pagination
- ✅ **Modern UI** - Clean, professional design with vanilla CSS

### 🎨 Design System Features
- ✅ **Atomic Design** - Organized as Atoms, Molecules, Organisms, Templates
- ✅ **Storybook Integration** - Interactive component documentation
- ✅ **Type Safety** - Full TypeScript support
- ✅ **Reusable Components** - Modular, composable architecture
- ✅ **Responsive Components** - Mobile-first approach

## 🚀 Live Demo

- **🎨 Design System (Storybook):** [View Storybook](https://ace0611.github.io/Customers-CRM/)
- **📱 Live Application:** [View App](https://ace0611.github.io/Customers-CRM/)
- **📖 Source Code:** [GitHub Repository](https://github.com/ace0611/Customers-CRM)

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Vanilla CSS** | Styling (no frameworks) |
| **Storybook 7.6** | Component documentation |
| **GitHub Actions** | CI/CD deployment |

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ace0611/Customers-CRM.git
cd Customers-CRM

# Install dependencies
npm install
```

### Development

```bash
# Run the CRM application
npm run dev
# → Opens at http://localhost:5173

# Run Storybook design system
npm run storybook
# → Opens at http://localhost:6006

# Build for production
npm run build

# Build Storybook
npm run build-storybook
```

## 🎨 Design System Structure

The project follows **Atomic Design** methodology:

```
src/components/
├── atoms/              # Basic building blocks
│   ├── Button/         # Button component with variants
│   ├── Input/          # Form input component
│   ├── Badge/          # Status badge component
│   └── Icon/           # Icon component
│
├── molecules/          # Combinations of atoms
│   ├── SearchBar/      # Search input with icon
│   ├── StatCard/       # Metric card with icon & trend
│   └── NavItem/        # Navigation menu item
│
├── organisms/          # Complex components
│   ├── Navigation/     # Complete sidebar navigation
│   └── StatsGrid/      # Grid of stat cards
│
├── templates/          # Page layouts
│   └── DashboardLayout/  # Complete dashboard template
│
└── [Legacy Components] # Original components
    ├── Sidebar.tsx
    ├── TopBar.tsx
    ├── StatsCards.tsx
    └── CustomersTable.tsx
```

### Component Hierarchy

```
Template (DashboardLayout)
  ↓
Organisms (Navigation, StatsGrid)
  ↓
Molecules (NavItem, StatCard, SearchBar)
  ↓
Atoms (Button, Input, Badge, Icon)
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile:** ≤ 480px - Stacked layout, hamburger menu
- **Tablet:** ≤ 768px - Adapted spacing, vertical cards
- **Desktop:** > 768px - Full sidebar, horizontal layout

## 🎯 Key Components

### Atoms
- **Button** - 4 variants (primary, secondary, outline, ghost), 3 sizes
- **Input** - 5 types, 3 sizes, error states
- **Badge** - 5 variants (success, warning, error, info, neutral)
- **Icon** - 20+ icons with 3 sizes

### Molecules
- **SearchBar** - Input with integrated search icon
- **StatCard** - Metric display with icon, value, and trend
- **NavItem** - Navigation item with icon, label, and active state

### Organisms
- **Navigation** - Complete sidebar with logo, menu, and user profile
- **StatsGrid** - Responsive grid of stat cards

### Templates
- **DashboardLayout** - Full dashboard with navigation, header, and content area

## 📊 Architecture

See [architecture.md](./architecture.md) for:
- Tech stack decisions
- Component architecture
- State management approach
- Scalability considerations
- Future enhancements

## 🚀 Deployment

The project includes GitHub Actions workflows for automatic deployment:

### Deploy to GitHub Pages

1. **Enable GitHub Pages** in repository Settings → Pages
2. **Set source to "GitHub Actions"**
3. **Push to main branch** - Auto-deploys!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Alternative Deployments

```bash
# Deploy to Vercel
vercel

# Deploy to Netlify
netlify deploy --prod
```

## 🎓 What This Project Demonstrates

### Technical Skills
- ✅ **React & TypeScript** - Modern frontend development
- ✅ **Component Architecture** - Atomic Design principles
- ✅ **Responsive Design** - Mobile-first CSS
- ✅ **State Management** - React hooks (useState, useMemo)
- ✅ **Design Systems** - Storybook documentation
- ✅ **CI/CD** - GitHub Actions automation
- ✅ **Clean Code** - Separation of concerns, DRY principles

### Design Abilities
- ✅ **UI/UX Design** - Clean, professional interface
- ✅ **Design Systems** - Systematic component organization
- ✅ **Responsive Layouts** - Adaptive to all screen sizes
- ✅ **Accessibility** - Semantic HTML, ARIA labels
- ✅ **Visual Hierarchy** - Clear information architecture

## 📝 Mock Data

The application uses mock data (`src/data/mockCustomers.ts`) with 12 sample customers. The data structure is designed for easy replacement with backend API calls.

## 🤝 Contributing

This is a portfolio/showcase project. Feel free to fork and adapt for your own use!

## 📄 License

MIT License - feel free to use this project for learning or portfolio purposes.

## 👤 Author

**Your Name**
- GitHub: [@ace0611](https://github.com/ace0611)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/YOUR_PROFILE)

---

**Built with ❤️ using React, TypeScript, and Atomic Design principles**

