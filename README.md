# 🎨 Customer CRM - Design System & Dashboard

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-7.6-pink.svg)](https://storybook.js.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg)](https://vitejs.dev/)
[![Deployment](https://img.shields.io/badge/Deployed-GitHub%20Pages-green.svg)](https://ace0611.github.io/Customers-CRM/)

A modern, responsive Customer Relationship Management (CRM) dashboard built with **React**, **TypeScript**, and **Atomic Design principles**. Features a complete **Storybook design system** with 25+ documented components, showcasing professional frontend development skills.

## 🎯 Project Overview

This project demonstrates **enterprise-level frontend development** skills including:
- **Component-driven architecture** using Atomic Design methodology
- **Type-safe development** with full TypeScript integration
- **Design system creation** with interactive Storybook documentation
- **Responsive web design** with mobile-first approach
- **CI/CD automation** with GitHub Actions deployment
- **Performance optimization** with React best practices

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

- **🏠 Landing Page:** [Choose Your Experience](https://ace0611.github.io/Customers-CRM/)
- **📱 Live Application:** [View CRM Dashboard](https://ace0611.github.io/Customers-CRM/app/)
- **🎨 Design System:** [View Storybook](https://ace0611.github.io/Customers-CRM/storybook/)
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

## 🎨 Project Structure

The project follows **Atomic Design** methodology with a well-organized folder structure:

```
Customers-CRM/
├── 📁 .github/
│   └── workflows/                    # GitHub Actions CI/CD
│       └── deploy-both.yml          # Automated deployment
│
├── 📁 .storybook/                   # Storybook configuration
│   ├── main.ts                      # Storybook config
│   └── preview.ts                   # Global styles & parameters
│
├── 📁 src/
│   ├── 📁 components/               # Component library (Atomic Design)
│   │   ├── 📁 atoms/                # Basic building blocks (6 components)
│   │   │   ├── 📁 Badge/
│   │   │   │   ├── Badge.tsx        # Status badge component
│   │   │   │   ├── Badge.css        # Badge styles
│   │   │   │   └── Badge.stories.tsx # Storybook stories
│   │   │   ├── 📁 Button/
│   │   │   │   ├── Button.tsx       # Button with 4 variants, 3 sizes
│   │   │   │   ├── Button.css       # Button styles
│   │   │   │   └── Button.stories.tsx
│   │   │   ├── 📁 Icon/
│   │   │   │   ├── Icon.tsx         # Icon system (12+ icons)
│   │   │   │   ├── Icon.css         # Icon styles
│   │   │   │   └── Icon.stories.tsx
│   │   │   ├── 📁 Input/
│   │   │   │   ├── Input.tsx        # Form input component
│   │   │   │   ├── Input.css        # Input styles
│   │   │   │   └── Input.stories.tsx
│   │   │   ├── 📁 LoadingSpinner/
│   │   │   │   ├── LoadingSpinner.tsx # Loading indicators
│   │   │   │   ├── LoadingSpinner.css
│   │   │   │   └── LoadingSpinner.stories.tsx
│   │   │   └── 📁 Select/
│   │   │       ├── Select.tsx       # Dropdown component
│   │   │       ├── Select.css       # Select styles
│   │   │       └── Select.stories.tsx
│   │   │
│   │   ├── 📁 molecules/            # Simple combinations (6 components)
│   │   │   ├── 📁 NavItem/
│   │   │   │   ├── NavItem.tsx      # Navigation menu item
│   │   │   │   ├── NavItem.css
│   │   │   │   └── NavItem.stories.tsx
│   │   │   ├── 📁 Pagination/
│   │   │   │   ├── Pagination.tsx   # Smart pagination
│   │   │   │   ├── Pagination.css
│   │   │   │   └── Pagination.stories.tsx
│   │   │   ├── 📁 SearchBar/
│   │   │   │   ├── SearchBar.tsx    # Search input + icon
│   │   │   │   ├── SearchBar.css
│   │   │   │   └── SearchBar.stories.tsx
│   │   │   ├── 📁 StatCard/
│   │   │   │   ├── StatCard.tsx     # Metric display card
│   │   │   │   ├── StatCard.css
│   │   │   │   └── StatCard.stories.tsx
│   │   │   ├── 📁 TableControls/
│   │   │   │   ├── TableControls.tsx # Search + sort controls
│   │   │   │   ├── TableControls.css
│   │   │   │   └── TableControls.stories.tsx
│   │   │   └── 📁 TableHeader/
│   │   │       ├── TableHeader.tsx  # Table title + actions
│   │   │       ├── TableHeader.css
│   │   │       └── TableHeader.stories.tsx
│   │   │
│   │   ├── 📁 organisms/            # Complex UI sections (6 components)
│   │   │   ├── 📁 CustomersTable/
│   │   │   │   ├── CustomersTable.tsx # Main data table
│   │   │   │   ├── CustomersTable.css
│   │   │   │   └── CustomersTable.stories.tsx
│   │   │   ├── 📁 Navigation/
│   │   │   │   ├── Navigation.tsx   # Sidebar navigation
│   │   │   │   ├── Navigation.css
│   │   │   │   └── Navigation.stories.tsx
│   │   │   ├── 📁 Sidebar/
│   │   │   │   ├── Sidebar.tsx      # Application sidebar
│   │   │   │   ├── Sidebar.css
│   │   │   │   └── Sidebar.stories.tsx
│   │   │   ├── 📁 StatsCards/
│   │   │   │   ├── StatsCards.tsx   # Statistics display
│   │   │   │   ├── StatsCards.css
│   │   │   │   └── StatsCards.stories.tsx
│   │   │   ├── 📁 StatsGrid/
│   │   │   │   ├── StatsGrid.tsx    # Stats layout grid
│   │   │   │   ├── StatsGrid.css
│   │   │   │   └── StatsGrid.stories.tsx
│   │   │   └── 📁 TopBar/
│   │   │       ├── TopBar.tsx       # Header bar
│   │   │       ├── TopBar.css
│   │   │       └── TopBar.stories.tsx
│   │   │
│   │   └── 📁 templates/            # Page layouts (1 component)
│   │       └── 📁 DashboardLayout/
│   │           ├── DashboardLayout.tsx # Complete dashboard
│   │           ├── DashboardLayout.css
│   │           └── DashboardLayout.stories.tsx
│   │
│   ├── 📁 data/                     # Mock data
│   │   └── mockCustomers.ts         # Sample customer data
│   │
│   ├── App.tsx                      # Main application component
│   ├── App.css                      # Global application styles
│   ├── main.tsx                     # Application entry point
│   └── types.ts                     # TypeScript interfaces
│
├── 📁 dist/                         # Production build output
├── 📁 storybook-static/             # Storybook build output
├── 📁 node_modules/                 # Dependencies
│
├── 📄 package.json                  # Dependencies & scripts
├── 📄 vite.config.ts                # Vite configuration
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 architecture.md               # Technical documentation
├── 📄 TESTING.md                    # Testing instructions
├── 📄 test-deployment.sh            # Local deployment testing
└── 📄 README.md                     # This file
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

## 🎯 Key Components (25+ Components)

### ⚛️ Atoms (6 components) - Basic Building Blocks
- **Button** - 4 variants (primary, secondary, outline, ghost), 3 sizes
- **Input** - Form inputs with validation states and multiple types
- **Badge** - 5 variants (success, warning, error, info, neutral)
- **Icon** - 12+ icons with 3 sizes (small, medium, large)
- **LoadingSpinner** - Loading indicators with size variants
- **Select** - Dropdown selections with custom styling

### 🧬 Molecules (6 components) - Simple Combinations
- **SearchBar** - Input with integrated search icon
- **StatCard** - Metric display with icon, value, and trend indicators
- **NavItem** - Navigation item with icon, label, and active states
- **Pagination** - Smart pagination with ellipsis handling
- **TableControls** - Search and sort controls for data tables
- **TableHeader** - Table titles with optional action buttons

### 🦠 Organisms (6 components) - Complex UI Sections
- **Navigation** - Complete sidebar with logo, menu, and user profile
- **StatsGrid** - Responsive grid layout for stat cards
- **CustomersTable** - Full-featured data table with search, sort, pagination
- **Sidebar** - Application sidebar with responsive behavior
- **StatsCards** - Statistics display with trend indicators
- **TopBar** - Header bar with user actions and search

### 📐 Templates (1 component) - Page Layouts
- **DashboardLayout** - Complete dashboard template with navigation and content areas

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

### 💻 Technical Skills
- ✅ **React 18 & TypeScript** - Modern frontend development with type safety
- ✅ **Component Architecture** - Atomic Design methodology implementation
- ✅ **Responsive Design** - Mobile-first CSS with breakpoints
- ✅ **State Management** - React hooks (useState, useMemo, useEffect)
- ✅ **Design Systems** - Complete Storybook documentation
- ✅ **CI/CD Pipeline** - GitHub Actions automation and deployment
- ✅ **Performance Optimization** - Memoized computations and efficient rendering
- ✅ **Clean Code** - Separation of concerns, DRY principles, TypeScript interfaces

### 🎨 Design & UX Abilities
- ✅ **UI/UX Design** - Clean, professional interface with consistent styling
- ✅ **Design System Creation** - Systematic component organization and documentation
- ✅ **Responsive Layouts** - Adaptive design for mobile, tablet, and desktop
- ✅ **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- ✅ **Visual Hierarchy** - Clear information architecture and user flow
- ✅ **Component Documentation** - Interactive Storybook with multiple variants

### 🚀 Production Readiness
- ✅ **Deployment Automation** - GitHub Actions with GitHub Pages
- ✅ **Error Handling** - Loading states, error boundaries, fallbacks
- ✅ **Type Safety** - Full TypeScript coverage with strict typing
- ✅ **Code Organization** - Modular architecture with clear separation
- ✅ **Documentation** - Comprehensive README and component stories

## 📊 Application Features

### 🔍 Search & Filter
- **Real-time search** across customer name, company, and email
- **Case-insensitive filtering** with instant results
- **Smart pagination** that resets when searching

### 📈 Data Management
- **Sorting options**: Newest (default), Name (alphabetical), Status (Active first)
- **Pagination**: 8 items per page with smart page number display
- **Loading states**: Skeleton loading, error handling, empty states
- **Responsive table**: Horizontal scroll on mobile devices

### 📱 Mobile Experience
- **Hamburger menu** with smooth slide-in animation
- **Touch-friendly** interface with appropriate sizing
- **Stacked layout** for optimal mobile viewing
- **Mobile overlay** for menu dismissal

## 📝 Data Structure

The application uses mock data (`src/data/mockCustomers.ts`) with 12 realistic customer records. The data structure is designed for easy replacement with backend API calls:

```typescript
interface Customer {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: 'Active' | 'Inactive';
}
```

## 🛠️ Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run storybook        # Start Storybook

# Building
npm run build            # Build for production
npm run build-storybook  # Build Storybook static files

# Testing
npm run test-build       # Test build locally
npm run test-deployment  # Simulate GitHub Actions environment

# Utilities
npm run clean            # Clean all build artifacts
```

## 🎯 Perfect for Showcasing

This project is ideal for demonstrating:

1. **Frontend Architecture** - Component-driven development
2. **Design System Skills** - Atomic Design implementation
3. **TypeScript Proficiency** - Type-safe development
4. **Responsive Design** - Mobile-first approach
5. **DevOps Knowledge** - CI/CD with GitHub Actions
6. **Documentation Skills** - Comprehensive Storybook setup
7. **Performance Optimization** - React best practices

## 🤝 Contributing

This is a portfolio/showcase project demonstrating modern frontend development skills. Feel free to fork and adapt for your own use!

## 📄 License

MIT License - feel free to use this project for learning or portfolio purposes.

## 👤 Author

**Mayur Ray**
- GitHub: [@ace0611](https://github.com/ace0611)
- Project: [Customer CRM Dashboard](https://ace0611.github.io/Customers-CRM/)

---

**Built with ❤️ using React, TypeScript, and Atomic Design principles**

