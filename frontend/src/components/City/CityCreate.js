import React, { useState } from 'react';
import { createCity } from '../../api/api';

const CityCreate = () => {
  const [cityName, setCityName] = useState('');
  const [cityMapURL, setCityMapURL] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create city object from form values
    const cityData = { cityName, cityMapURL };

    createCity(cityData)
      .then((response) => {
        console.log('City created:', response.data);
        // Optionally, you can redirect or show a success message here
      })
      .catch((error) => {
        console.error('Error creating city:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New City</h2>
      
      <input
        type="text"
        placeholder="City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        required
      />
      
      <input
        type="text"
        placeholder="City Map URL"
        value={cityMapURL}
        onChange={(e) => setCityMapURL(e.target.value)}
        required
      />
      
      <button type="submit">Create City</button>
    </form>
  );
};

export default CityCreate;
