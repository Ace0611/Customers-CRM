import { useState } from 'react';
import { Sidebar } from './components/organisms/Sidebar/Sidebar';
import { TopBar } from './components/organisms/TopBar/TopBar';
import { StatsCards } from './components/organisms/StatsCards/StatsCards';
import { CustomersTable } from './components/organisms/CustomersTable/CustomersTable';
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

