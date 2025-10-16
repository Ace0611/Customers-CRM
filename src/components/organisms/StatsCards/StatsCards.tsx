import React from 'react';
import './StatsCards.css';

interface StatCard {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: string;
  avatars?: string[];
}

const stats: StatCard[] = [
  {
    title: 'Total Customers',
    value: '5,423',
    trend: '16% this month',
    trendUp: true,
    icon: '👥',
  },
  {
    title: 'Members',
    value: '1,893',
    trend: '1% this month',
    trendUp: false,
    icon: '👤',
  },
  {
    title: 'Active Now',
    value: '189',
    icon: '💻',
    avatars: ['https://i.pravatar.cc/24?img=2', 'https://i.pravatar.cc/24?img=3', 'https://i.pravatar.cc/24?img=4', 'https://i.pravatar.cc/24?img=5'],
  },
];

export const StatsCards: React.FC = () => {
  return (
    <div className="stats-cards">
      {stats.map((stat) => (
        <div key={stat.title} className="stat-card">
          <div className={`stat-icon ${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
            {stat.icon}
          </div>
          <div className="stat-content">
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
            {stat.trend && (
              <div className={`stat-trend ${stat.trendUp ? 'trend-up' : 'trend-down'}`}>
                <span className="trend-icon">{stat.trendUp ? '↑' : '↓'}</span>
                {stat.trend}
              </div>
            )}
            {stat.avatars && (
              <div className="stat-avatars">
                {stat.avatars.map((avatar, i) => (
                  <img key={i} src={avatar} alt="" className="avatar" />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

