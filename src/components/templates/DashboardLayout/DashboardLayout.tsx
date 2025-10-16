import React, { useState } from 'react';
import { Navigation } from '../../organisms/Navigation/Navigation';
import { SearchBar } from '../../molecules/SearchBar/SearchBar';
import { StatsGrid } from '../../organisms/StatsGrid/StatsGrid';
import './DashboardLayout.css';

export interface DashboardLayoutProps {
  title?: string;
  stats?: any[];
  children?: React.ReactNode;
  navItems?: any[];
  user?: any;
  onSearch?: (query: string) => void;
  className?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  title = 'Hello Evano 👋',
  stats = [],
  children,
  navItems = [],
  user,
  onSearch,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (query: string) => {
    onSearch?.(query);
  };

  return (
    <div className={`dashboard-layout ${className}`}>
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
      
      <Navigation
        items={navItems}
        user={user}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
      
      <main className="main-content">
        <header className="dashboard-header">
          <h1 className="dashboard-title">{title}</h1>
          <div className="search-container">
            <SearchBar
              placeholder="Search"
              onChange={handleSearch}
              size="medium"
            />
          </div>
        </header>

        {stats.length > 0 && (
          <StatsGrid stats={stats} />
        )}

        <div className="dashboard-content">
          {children}
        </div>
      </main>
    </div>
  );
};
