import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCity } from '../../api/api'; // Correct import path

const CityCreate = () => {
    const [cityName, setCityName] = useState('');
    const [cityMapURL, setCityMapURL] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cityData = { cityName, cityMapURL };

        try {
            await createCity(cityData);
            alert('City created successfully!');
            navigate('/cities');
        } catch (error) {
            console.error('Error creating city:', error);
        }
    };

    return (
        <div>
            <h1>Create New City</h1>
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
                <button type="submit">Create City</button>
            </form>
        </div>
    );
};

export default CityCreate;