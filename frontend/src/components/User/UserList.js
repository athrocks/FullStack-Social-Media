import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/api'; // Ensure the correct import

const UserList = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        console.log(response.data);  // Add a log to check the response
        setUsers(response.data);     // Set data
      } catch (error) {
        console.error('Error fetching users:', error); // Check if there's an error
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.userID}>
              {user.firstName} {user.lastName}
            </li>
          ))
        ) : (
          <li>No users available</li>
        )}
      </ul>
    </div>
  );
};

export default UserList;
