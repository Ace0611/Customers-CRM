import { useState, useEffect } from 'react';
import { Sidebar } from './components/organisms/Sidebar/Sidebar';
import { TopBar } from './components/organisms/TopBar/TopBar';
import { StatsCards } from './components/organisms/StatsCards/StatsCards';
import { CustomersTable } from './components/organisms/CustomersTable/CustomersTable';
import { fetchCustomers } from './data/mockCustomers';
import { Customer } from './types';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch customers on component mount
  useEffect(() => {
    const loadCustomers = async () => {
      try {
        setLoading(true);
        debugger;
        const data = await fetchCustomers();
        setCustomers(data);
      } catch (err) {
        setError('Failed to load customers');
      } finally {
        setLoading(false);
      }
    };
    
    loadCustomers();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app">
      {/* For responsive designing */}
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
        <CustomersTable 
          customers={customers} 
          isLoading={loading}
          error={error}
        />
      </main>
    </div>
  );
}

export default App;

