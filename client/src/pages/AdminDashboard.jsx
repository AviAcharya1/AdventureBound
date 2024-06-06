import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('/api/admin/users');
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
