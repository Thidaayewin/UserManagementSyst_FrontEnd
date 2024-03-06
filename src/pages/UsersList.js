// UserList.js
import React, { useState } from 'react';

const UsersList = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isDeleteMode, setDeleteMode] = useState(false);

  const users = [
    { id: 1, name: 'John Doe', username: 'john_doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Doe', username: 'jane_doe', role: 'User', status: 'Inactive' },
    // Add more users as needed
  ];

  const handleCheckboxChange = (userId) => {
    const isSelected = selectedUsers.includes(userId);

    if (isSelected) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const toggleDeleteMode = () => {
    setDeleteMode(!isDeleteMode);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>
          {/* Left side */}
          <input type="text" placeholder="Search..." />
        </div>
        <div>
          {/* Right side */}
          {isDeleteMode ? (
            <button onClick={toggleDeleteMode}>Delete</button>
          ) : (
            <>
              <button onClick={toggleDeleteMode}>Delete Mode</button>
              <button>Filter</button>
              <button>Export</button>
              <button>Create User</button>
            </>
          )}
        </div>
      </div>

      {/* User List Table */}
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Username</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                {isDeleteMode ? (
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(user.id)}
                    checked={selectedUsers.includes(user.id)}
                  />
                ) : (
                  <div>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
