import React from 'react';
import './Sidebar.css';

interface MenuItem {
  icon: string;
  label: string;
  active?: boolean;
}

const menuItems: MenuItem[] = [
  { icon: '📊', label: 'Dashboard' },
  { icon: '📦', label: 'Product' },
  { icon: '👥', label: 'Customers', active: true },
  { icon: '💰', label: 'Income' },
  { icon: '📢', label: 'Promote' },
  { icon: '❓', label: 'Help' },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="logo">⬡</span>
        <span className="logo-text">Dashboard</span>
        <span className="version">v.01</span>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div key={item.label} className={`nav-item ${item.active ? 'active' : ''}`}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {!item.active && <span className="nav-arrow">›</span>}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <img src="https://i.pravatar.cc/40?img=1" alt="User" className="user-avatar" />
        <div className="user-info">
          <div className="user-name">Evano</div>
          <div className="user-role">Project Manager</div>
        </div>
      </div>
    </aside>
  );
};

