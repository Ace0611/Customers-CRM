import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { StatsCards } from './components/StatsCards';
import { CustomersTable } from './components/CustomersTable';
import { mockCustomers } from './data/mockCustomers';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app">
      <button 
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'visible' : ''}`}
        onClick={closeMobileMenu}
      ></div>
      
      <Sidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      
      <main className="main-content">
        <TopBar />
        <StatsCards />
        <CustomersTable customers={mockCustomers} />
      </main>
    </div>
  );
}

export default App;

