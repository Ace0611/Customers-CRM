import React, { useState, useMemo } from 'react';
import { Customer, SortOption } from '../../../types';
import { Badge } from '../../atoms/Badge/Badge';
import { LoadingSpinner } from '../../atoms/LoadingSpinner/LoadingSpinner';
import { TableHeader } from '../../molecules/TableHeader/TableHeader';
import { TableControls } from '../../molecules/TableControls/TableControls';
import { Pagination } from '../../molecules/Pagination/Pagination';
import './CustomersTable.css';

interface CustomersTableProps {
  customers: Customer[];
  isLoading?: boolean;
  error?: string | null;
}

const SORT_OPTIONS = [
  { value: 'Newest', label: 'Newest' },
  { value: 'Name', label: 'Name' },
  { value: 'Status', label: 'Status' },
];

export const CustomersTable: React.FC<CustomersTableProps> = ({ 
  customers, 
  isLoading = false, 
  error = null 
}) => {
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

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const getStatusVariant = (status: string): 'success' | 'error' => {
    return status === 'Active' ? 'success' : 'error';
  };

  // Render loading state
  if (isLoading) {
    return (
      <div className="customers-table-container">
        <TableHeader 
          title="All Customers" 
          subtitle="Active Members"
        >
          <TableControls
            searchValue={searchQuery}
            onSearchChange={handleSearchChange}
            sortValue={sortBy}
            sortOptions={SORT_OPTIONS}
            onSortChange={(value) => setSortBy(value as SortOption)}
            searchPlaceholder="Search"
          />
        </TableHeader>
        <div className="table-loading">
          <LoadingSpinner size="large" />
          <p>Loading customers...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="customers-table-container">
        <TableHeader 
          title="All Customers" 
          subtitle="Active Members"
        />
        <div className="table-error">
          <div className="error-icon">⚠️</div>
          <h3>Something went wrong</h3>
          <p>{error}</p>
          <button 
            className="retry-button"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Render empty state (when no customers at all)
  if (customers.length === 0) {
    return (
      <div className="customers-table-container">
        <TableHeader 
          title="All Customers" 
          subtitle="Active Members"
        >
          <TableControls
            searchValue={searchQuery}
            onSearchChange={handleSearchChange}
            sortValue={sortBy}
            sortOptions={SORT_OPTIONS}
            onSortChange={(value) => setSortBy(value as SortOption)}
            searchPlaceholder="Search"
          />
        </TableHeader>
        <div className="table-empty">
          <div className="empty-icon">📊</div>
          <h3>No customers yet</h3>
          <p>Get started by adding your first customer.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="customers-table-container">
      <TableHeader 
        title="All Customers" 
        subtitle="Active Members"
      >
        <TableControls
          searchValue={searchQuery}
          onSearchChange={handleSearchChange}
          sortValue={sortBy}
          sortOptions={SORT_OPTIONS}
          onSortChange={(value) => setSortBy(value as SortOption)}
          searchPlaceholder="Search"
        />
      </TableHeader>

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
                No customers found matching your search
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
                  <Badge variant={getStatusVariant(customer.status)}>
                    {customer.status}
                  </Badge>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        startEntry={startEntry}
        endEntry={endEntry}
        totalEntries={sortedCustomers.length}
      />
    </div>
  );
};

