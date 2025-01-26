import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams
import { getUserById, updateUser } from '../../api/api';

const UserUpdate = () => {
  const { id: userId } = useParams();  // Use useParams to get the userId from the URL
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getUserById(userId)
      .then((response) => {
        const { firstName, lastName, userName } = response.data;
        setFirstName(firstName);
        setLastName(lastName);
        setUserName(userName);
      })
      .catch((error) => console.error('Error fetching user:', error));
  }, [userId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = { firstName, lastName, userName };

    updateUser(userId, updatedUser)
      .then((response) => {
        console.log('User updated:', response.data);
        // You can redirect or show a success message
      })
      .catch((error) => console.error('Error updating user:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update User</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UserUpdate;
