import React from 'react';
import './Icon.css';

export interface IconProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'medium',
  className = '',
}) => {
  const iconClass = `icon icon-${size} ${className}`.trim();

  // Map icon names to actual icons/emojis
  const iconMap: Record<string, string> = {
    dashboard: '📊',
    product: '📦',
    customers: '👥',
    income: '💰',
    promote: '📢',
    help: '❓',
    search: '🔍',
    user: '👤',
    computer: '💻',
    arrow: '›',
    menu: '☰',
    close: '✕',
    edit: '✏️',
    delete: '🗑️',
    add: '+',
    check: '✓',
    warning: '⚠️',
    info: 'ℹ️',
    error: '❌',
    success: '✅',
  };

  const iconContent = iconMap[name] || name;

  return (
    <span className={iconClass} role="img" aria-label={name}>
      {iconContent}
    </span>
  );
};

