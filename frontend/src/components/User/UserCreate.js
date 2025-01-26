import React, { useState } from 'react';
import { createUser } from '../../api/api';

const UserCreate = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserNmae] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { firstName, lastName, userName };

    createUser(newUser)
      .then((response) => {
        console.log('User created:', response.data);
        // You can redirect or show a success message
      })
      .catch((error) => console.error('Error creating user:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New User</h2>
      <input
        type="text"
        placeholder="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => setUserNmae(e.target.value)}
        required
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserCreate;
