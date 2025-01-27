import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCityById, createCity } from '../../api/api'; // Correct import path

const CityUpdate = () => {
    const [cityName, setCityName] = useState('');
    const [cityMapURL, setCityMapURL] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    // Memoize fetchCity using useCallback
    const fetchCity = useCallback(async () => {
        try {
            const response = await getCityById(id);
            const city = response.data;
            setCityName(city.cityName);
            setCityMapURL(city.cityMapURL);
        } catch (error) {
            console.error('Error fetching city:', error);
        }
    }, [id]); // Add id as a dependency for fetchCity

    // Use fetchCity in useEffect
    useEffect(() => {
        fetchCity();
    }, [fetchCity]); // Add fetchCity to the dependency array

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cityData = { cityName, cityMapURL };

        try {
            await createCity(cityData);
            alert('City updated successfully!');
            navigate(`/city/${id}`);
        } catch (error) {
            console.error('Error updating city:', error);
        }
    };

    return (
        <div>
            <h1>Update City</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>City Name:</label>
                    <input
                        type="text"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>City Map URL:</label>
                    <input
                        type="text"
                        value={cityMapURL}
                        onChange={(e) => setCityMapURL(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update City</button>
            </form>
        </div>
    );
};

export default CityUpdate;