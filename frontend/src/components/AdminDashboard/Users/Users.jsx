import React, { useState } from 'react';
import './Users.css';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock data - replace with API call later
  const mockUsers = [
    { id: 1, name: 'John Doe', phone: '+1 234-567-8901', email: 'john@example.com', lastLogin: '2024-01-17', status: 'active' },
    { id: 2, name: 'Jane Smith', phone: '+1 234-567-8902', email: 'jane@example.com', lastLogin: '2024-01-16', status: 'active' },
    { id: 3, name: 'Bob Johnson', phone: '+1 234-567-8903', email: 'bob@example.com', lastLogin: '2024-01-15', status: 'inactive' },
    // Add more mock users as needed
  ];

  // Sorting function
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Filter users based on search query
  const filteredUsers = mockUsers.filter(user => 
    Object.values(user).some(value => 
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    if (sortDirection === 'asc') {
      return aValue.localeCompare(bValue);
    }
    return bValue.localeCompare(aValue);
  });

  // Pagination
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = sortedUsers.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <h1>Users Management</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>
                Name
                {sortField === 'name' && (
                  <span className={`sort-indicator ${sortDirection === 'desc' ? 'descending' : ''}`}>
                    ▲
                  </span>
                )}
              </th>
              <th onClick={() => handleSort('phone')}>
                Phone
                {sortField === 'phone' && (
                  <span className={`sort-indicator ${sortDirection === 'desc' ? 'descending' : ''}`}>
                    ▲
                  </span>
                )}
              </th>
              <th onClick={() => handleSort('email')}>
                Email
                {sortField === 'email' && (
                  <span className={`sort-indicator ${sortDirection === 'desc' ? 'descending' : ''}`}>
                    ▲
                  </span>
                )}
              </th>
              <th onClick={() => handleSort('lastLogin')}>
                Last Login
                {sortField === 'lastLogin' && (
                  <span className={`sort-indicator ${sortDirection === 'desc' ? 'descending' : ''}`}>
                    ▲
                  </span>
                )}
              </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.lastLogin}</td>
                <td>
                  <button className="status-button">
                    <span className={`status-dot ${user.status}`}></span>
                  </button>
                </td>
                <td>
                  <button className="edit-button">✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="page-numbers">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`page-number ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
