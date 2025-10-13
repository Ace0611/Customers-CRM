import React from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { StatsCards } from './components/StatsCards';
import { CustomersTable } from './components/CustomersTable';
import { mockCustomers } from './data/mockCustomers';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <TopBar />
        <StatsCards />
        <CustomersTable customers={mockCustomers} />
      </main>
    </div>
  );
}

export default App;

