import React, { useState, useMemo } from 'react';
import { Customer, SortOption } from '../types';
import './CustomersTable.css';

interface CustomersTableProps {
  customers: Customer[];
}

export const CustomersTable: React.FC<CustomersTableProps> = ({ customers }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('Newest');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const filteredCustomers = useMemo(() => {
    return customers.filter(customer => {
      const query = searchQuery.toLowerCase();
      return (
        customer.name.toLowerCase().includes(query) ||
        customer.company.toLowerCase().includes(query) ||
        customer.email.toLowerCase().includes(query)
      );
    });
  }, [customers, searchQuery]);

  const sortedCustomers = useMemo(() => {
    const sorted = [...filteredCustomers];
    
    switch (sortBy) {
      case 'Name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Status':
        sorted.sort((a, b) => {
          if (a.status === b.status) return 0;
          return a.status === 'Active' ? -1 : 1;
        });
        break;
      case 'Newest':
      default:
        // Keep original order (mock data is already in newest order)
        break;
    }
    
    return sorted;
  }, [filteredCustomers, sortBy]);

  const paginatedCustomers = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedCustomers.slice(startIndex, startIndex + pageSize);
  }, [sortedCustomers, currentPage]);

  const totalPages = Math.ceil(sortedCustomers.length / pageSize);
  const startEntry = sortedCustomers.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endEntry = Math.min(currentPage * pageSize, sortedCustomers.length);

  const renderPageNumbers = () => {
    const pages = [];
    
    for (let i = 1; i <= Math.min(4, totalPages); i++) {
      pages.push(
        <button
          key={i}
          className={`page-number ${currentPage === i ? 'active' : ''}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    
    if (totalPages > 4) {
      pages.push(<span key="ellipsis" className="page-ellipsis">...</span>);
      pages.push(
        <button
          key={totalPages}
          className={`page-number ${currentPage === totalPages ? 'active' : ''}`}
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }
    
    return pages;
  };

  return (
    <div className="customers-table-container">
      <div className="table-header">
        <div className="table-title-section">
          <h2 className="table-title">All Customers</h2>
          <span className="active-members-link">Active Members</span>
        </div>
        <div className="table-controls">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search"
              className="table-search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="sort-wrapper">
            <label>Short by :</label>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="Newest">Newest</option>
              <option value="Name">Name</option>
              <option value="Status">Status</option>
            </select>
          </div>
        </div>
      </div>

      <table className="customers-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCustomers.length === 0 ? (
            <tr>
              <td colSpan={6} className="empty-state">
                No customers found
              </td>
            </tr>
          ) : (
            paginatedCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.company}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.country}</td>
                <td>
                  <span className={`status-badge ${customer.status.toLowerCase()}`}>
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="table-footer">
        <div className="footer-info">
          Showing data {startEntry} to {endEntry} of {sortedCustomers.length > 256000 ? '256K' : sortedCustomers.length} entries
        </div>
        <div className="pagination">
          <button
            className="page-arrow"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {renderPageNumbers()}
          <button
            className="page-arrow"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

