import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { getUserById } from '../../api/api';

const UserDetail = () => {
  const { id: userId } = useParams(); // Use useParams to get the ID
  const [user, setUser] = useState(null);

  useEffect(() => {
    // console.log('Fetching user with ID:', userId);
    getUserById(userId)
      .then((response) => {
        // console.log('User data:', response.data);  // Log response data
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [userId]);

  return user ? (
    <div>
      <h2>User Details</h2>
      <p>Firstname: {user.firstName}</p>
      <p>Lastname: {user.lastName}</p>
      <p>Username: {user.userName}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default UserDetail;
