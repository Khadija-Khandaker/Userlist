import React, { useEffect, useState } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="user-list-container">
      <h2>User List from API</h2>

      <input
        type="text"
        placeholder="Search users by name..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      {filteredUsers.length > 0 ? (
        filteredUsers.map(user => (
          <p key={user.id}>{user.name}</p>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
