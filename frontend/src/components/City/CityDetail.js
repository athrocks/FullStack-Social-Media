import React, { useState, useEffect } from 'react';
import { getCityById } from '../../api/api';  // Assuming this is your API utility
import { useParams } from 'react-router-dom';

const CityDetail = () => {
  const [city, setCity] = useState(null);
  const { id } = useParams();  // Extract city ID from URL params

  useEffect(() => {
    // Fetch city details by ID
    const fetchCity = async () => {
      try {
        const response = await getCityById(id);
        setCity(response.data);
      } catch (error) {
        console.error('Error fetching city details:', error);
      }
    };

    fetchCity();
  }, [id]);  // Re-fetch if city ID changes

  return city ? (
    <div>
      <h2>City Details</h2>
      <h4>{id}</h4>
      <h3>{city.cityName}</h3>
      <p>{city.cityMapURL}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CityDetail;
