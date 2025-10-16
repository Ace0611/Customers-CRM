import React from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import { Badge } from '../../atoms/Badge/Badge';
import './StatCard.css';

export interface StatCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: string;
  avatars?: string[];
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  trendUp,
  icon,
  avatars,
  className = '',
}) => {
  const iconClass = `stat-icon stat-icon-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`stat-card ${className}`}>
      <div className={iconClass}>
        <Icon name={icon} size="large" />
      </div>
      <div className="stat-content">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
        {trend && (
          <div className={`stat-trend ${trendUp ? 'trend-up' : 'trend-down'}`}>
            <span className="trend-icon">{trendUp ? '↑' : '↓'}</span>
            {trend}
          </div>
        )}
        {avatars && (
          <div className="stat-avatars">
            {avatars.map((avatar, i) => (
              <img key={i} src={avatar} alt="" className="avatar" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
