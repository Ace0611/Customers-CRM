# Customer CRM - Customers Dashboard

A modern, minimalistic React + TypeScript application recreating the Customers screen from the provided design.

## Features

✅ **Sidebar Navigation** - Dashboard, Product, Customers (active), Income, Promote, Help  
✅ **Top Bar** - Personalized greeting and global search  
✅ **Stats Cards** - Total Customers, Members, Active Now with trends  
✅ **Customers Table** - Searchable, sortable, paginated customer data  
✅ **Search** - Filter by name, company, or email  
✅ **Sort** - By Newest, Name, or Status  
✅ **Pagination** - 8 entries per page with navigation  
✅ **Storybook** - Component design system  

## Tech Stack

- React 18
- TypeScript
- Vite
- Vanilla CSS
- Storybook

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Run Storybook

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`

## Project Structure

```
src/
├── components/       # UI components with co-located CSS
├── data/            # Mock customer data
├── types.ts         # TypeScript interfaces
├── App.tsx          # Main application
└── main.tsx         # Entry point
```

## Mock Data

The application uses mock data (`mockCustomers.ts`) with 12 sample customers. The data structure is designed to be easily replaceable with backend API calls.

## Architecture

See [architecture.md](./architecture.md) for detailed technical decisions and design rationale.

