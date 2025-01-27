import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCities } from '../../api/api'; // Import the getCities function

const CityList = () => {
    const [cities, setCities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCities();
    }, []);

    const fetchCities = async () => {
        try {
            const response = await getCities(); // Use the getCities function
            setCities(response.data);
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    return (
        <div>
            <h1>Cities</h1>
            <ul>
                {cities.map(city => (
                    <li key={city.cityID}>
                        {city.cityName} - <button onClick={() => navigate(`/city/${city.cityID}`)}>View Details</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate('/city/new')}>Create New City</button>
        </div>
    );
};

export default CityList;