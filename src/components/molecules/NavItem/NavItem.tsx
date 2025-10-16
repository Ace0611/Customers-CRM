import React from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import './NavItem.css';

export interface NavItemProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  active = false,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={`nav-item ${active ? 'active' : ''} ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <Icon name={icon} size="medium" />
      <span className="nav-label">{label}</span>
      {!active && <Icon name="arrow" size="small" />}
    </div>
  );
};

