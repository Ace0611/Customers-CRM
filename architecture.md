# Architecture & Tech Decisions

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (no framework)
- **Design System**: Storybook with Atomic Design
- **State Management**: React hooks (useState, useMemo)
- **Architecture**: Atomic Design Pattern

## Project Structure

```
CUSTOMERS CRM/
├── src/
│   ├── components/
│   │   ├── atoms/                    # Basic building blocks
│   │   │   ├── Badge/               # Status indicators
│   │   │   ├── Button/              # Interactive elements
│   │   │   ├── Icon/                # Icon system
│   │   │   ├── Input/               # Form inputs
│   │   │   ├── LoadingSpinner/      # Loading indicators
│   │   │   └── Select/              # Dropdown selections
│   │   ├── molecules/               # Simple component groups
│   │   │   ├── NavItem/             # Navigation items
│   │   │   ├── Pagination/          # Page navigation
│   │   │   ├── SearchBar/           # Search functionality
│   │   │   ├── StatCard/            # Statistics display
│   │   │   ├── TableControls/       # Search + Sort controls
│   │   │   └── TableHeader/         # Table title + actions
│   │   ├── organisms/               # Complex UI sections
│   │   │   ├── CustomersTable/      # Main data table
│   │   │   ├── Navigation/          # Side navigation
│   │   │   ├── Sidebar/             # Application sidebar
│   │   │   ├── StatsCards/          # Statistics grid
│   │   │   ├── StatsGrid/           # Stats layout
│   │   │   └── TopBar/              # Header bar
│   ├── data/                        # Mock data
│   │   └── mockCustomers.ts
│   ├── types.ts                     # TypeScript interfaces
│   ├── App.tsx                      # Main app component
│   ├── App.css                      # Global styles
│   └── main.tsx                     # Entry point
├── .storybook/                      # Storybook configuration
└── package.json
```

## Key Design Decisions

### 1. Atomic Design Architecture
- **Atoms**: Basic building blocks (Button, Input, Badge, etc.)
- **Molecules**: Simple component combinations (SearchBar, TableControls)
- **Organisms**: Complex UI sections (CustomersTable, Sidebar, TopBar)
- **Co-located files**: Each component has its own folder with .tsx, .css, and .stories.tsx

### 2. Component Composition
- **Reusable atoms**: Button, Input, Select, Badge can be used anywhere
- **Composed molecules**: TableControls combines SearchBar + Select
- **Feature organisms**: CustomersTable orchestrates multiple molecules
- **Single responsibility**: Each component has one clear purpose
- **Props-based composition**: Components receive data and callbacks via props

### 3. State Management
- **Local state with hooks**: `useState` for component-specific state
- **Memoization**: `useMemo` for expensive computations (filtering, sorting, pagination)
- **Props drilling**: Data flows from App → Organisms → Molecules → Atoms
- **State lifting**: Shared state managed at appropriate parent level

### 4. Data Flow
```
mockCustomers → App → CustomersTable (organism)
                    ↓
              TableControls (molecule)
                    ↓
              SearchBar + Select (atoms)
                    ↓
            [search, sort, pagination filters]
                    ↓
              display 8 rows with Badge (atom)
```

### 5. Feature Implementation
- **Search**: Real-time filtering by name, company, email (case-insensitive)
- **Sort**: By Newest (default), Name (alphabetical), or Status (Active first)
- **Pagination**: Page size of 8 with smart page number display
- **Loading States**: LoadingSpinner atom with loading/error/empty states
- **Error Handling**: Non-fatal error states with retry functionality

### 6. Styling Architecture
- **Vanilla CSS**: No framework dependencies for maximum control
- **Component-scoped styles**: Each component has its own CSS file
- **Consistent naming**: BEM-inspired class naming convention
- **Responsive design**: Mobile-first approach with breakpoints
- **Design tokens**: Consistent colors, spacing, and typography

### 7. TypeScript Integration
- **Interface definitions**: All props and data structures typed
- **Type safety**: Compile-time error checking for better reliability
- **Reusable types**: Shared interfaces in `types.ts`
- **Generic components**: Flexible components that accept type parameters

## Component Hierarchy & Responsibilities

### Atoms (6 components)
- **Badge**: Status indicators with variants (success, error, warning, info, neutral)
- **Button**: Interactive elements with variants and sizes
- **Icon**: Icon system for consistent iconography
- **Input**: Form inputs with validation states
- **LoadingSpinner**: Loading indicators with size variants
- **Select**: Dropdown selections with custom styling

### Molecules (6 components)
- **NavItem**: Navigation items with active states
- **Pagination**: Page navigation with smart ellipsis handling
- **SearchBar**: Search functionality combining Input + Icon
- **StatCard**: Statistics display cards
- **TableControls**: Search and sort controls for tables
- **TableHeader**: Table titles with optional actions

### Organisms (6 components)
- **CustomersTable**: Main data table with full CRUD functionality
- **Navigation**: Side navigation with menu items
- **Sidebar**: Application sidebar with responsive behavior
- **StatsCards**: Statistics grid layout
- **StatsGrid**: Stats layout with responsive grid
- **TopBar**: Header bar with user actions


## Storybook Documentation
- **Comprehensive stories**: Every component has multiple story variations
- **Interactive docs**: Auto-generated documentation from TypeScript
- **Design system**: Centralized component showcase and testing
- **Organized by atomic levels**: Atoms → Molecules → Organisms (18 components total)

## Current Feature Set

### ✅ Implemented Features
1. **Search & Filter**: Real-time search across customer data
2. **Sorting**: Multiple sort options with clear logic
3. **Pagination**: Smart pagination with page size of 8
4. **Loading States**: Loading, error, and empty state handling
5. **Responsive Design**: Mobile-first responsive layout
6. **Type Safety**: Full TypeScript integration
7. **Component Library**: Complete atomic design system
8. **Storybook**: Comprehensive component documentation

### 🔄 Data Management
- **Mock data**: Realistic customer data for development
- **Type-safe interfaces**: Customer and SortOption types
- **Client-side operations**: All filtering, sorting, pagination in browser
- **Performance optimized**: Memoized computations for large datasets