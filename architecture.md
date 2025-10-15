# Architecture & Tech Decisions

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (no framework)
- **Design System**: Storybook
- **State Management**: React hooks (useState, useMemo)

## Project Structure

```
CUSTOMERS CRM/
├── src/
│   ├── components/        # React components with co-located CSS
│   │   ├── Sidebar.tsx
│   │   ├── Sidebar.css
│   │   ├── TopBar.tsx
│   │   ├── TopBar.css
│   │   ├── StatsCards.tsx
│   │   ├── StatsCards.css
│   │   ├── CustomersTable.tsx
│   │   ├── CustomersTable.css
│   │   └── *.stories.tsx  # Storybook stories
│   ├── data/             # Mock data
│   │   └── mockCustomers.ts
│   ├── types.ts          # TypeScript interfaces
│   ├── App.tsx           # Main app component
│   ├── App.css           # Global styles
│   └── main.tsx          # Entry point
├── .storybook/           # Storybook configuration
└── package.json
```

## Key Design Decisions

### 1. Component Architecture
- **Component-based**: Each UI section is a separate, reusable component
- **Co-located styles**: CSS files placed next to components for better maintainability
- **Single responsibility**: Each component handles one specific UI concern

### 2. State Management
- **Local state with hooks**: Used `useState` for search query, sort option, and pagination
- **Memoization**: `useMemo` for filtered, sorted, and paginated data to optimize performance
- **Props-based**: Data flows from parent (App) to children via props

### 3. Styling Approach
- **Vanilla CSS**: No CSS framework or preprocessor for minimal dependencies
- **BEM-inspired naming**: Clear, semantic class names
- **Responsive units**: px and % for precise control matching design specs

### 4. Data Flow
```
mockCustomers → App → CustomersTable
                    ↓
            [search, sort, pagination filters]
                    ↓
              display 8 rows
```

### 5. Client-side Features
- **Search**: Filters by name, company, and email (case-insensitive)
- **Sort**: By Newest (default), Name (alphabetical), or Status (Active first)
- **Pagination**: Page size of 8, dynamic page calculation

### 6. Scalability Considerations
- **Mock data ready for API swap**: `mockCustomers` can be easily replaced with API calls
- **Type safety**: TypeScript interfaces ensure data consistency
- **Separation of concerns**: Data, logic, and presentation are separated

## Future Enhancements (if moving to production)

1. **Backend Integration**: Replace mock data with REST/GraphQL API
2. **State Management**: Add React Context or Zustand for global state
3. **Error Handling**: Add error boundaries and loading states
4. **Testing**: Unit tests (Vitest) and E2E tests (Playwright)
5. **Accessibility**: Add ARIA labels, keyboard navigation
6. **Performance**: Virtual scrolling for large datasets
7. **Authentication**: User authentication and authorization

