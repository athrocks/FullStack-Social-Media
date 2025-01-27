import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCityById, deleteCity } from '../../api/api'; // Import the required functions

const CityDetail = () => {
    const [city, setCity] = useState(null);
    const { id } = useParams(); // Get the city ID from the URL
    const navigate = useNavigate();

    const fetchCity = useCallback(async () => {
        try {
            const response = await getCityById(id); // Use the getCityById function
            setCity(response.data);
        } catch (error) {
            console.error('Error fetching city:', error);
        }
    }, [id]);

    useEffect(() => {
        fetchCity();
    }, [fetchCity]);

    const handleDelete = async () => {
        try {
            await deleteCity(id); // Use the deleteCity function
            alert('City deleted successfully!');
            navigate('/cities'); // Redirect to the city list after deletion
        } catch (error) {
            console.error('Error deleting city:', error);
        }
    };

    if (!city) return <div>Loading...</div>;

    return (
        <div>
            <h1>{city.cityName}</h1>
            <p>Map URL: <a href={city.cityMapURL} target="_blank" rel="noopener noreferrer">{city.cityMapURL}</a></p>
            <button onClick={() => navigate(`/city/edit/${city.cityID}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => navigate('/cities')}>Back to Cities</button>
        </div>
    );
};

export default CityDetail;