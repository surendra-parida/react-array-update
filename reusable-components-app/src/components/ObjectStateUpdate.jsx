import React, { useState } from 'react';

const ObjectStateUpdate = () => {
    const [car, setCar] = useState({ year: 2024, make: "Toyota", model: "Fortuner" });

    const handleYearchange = (e) => {
        setCar({ ...car, year: e.target.value });
    };

    const handleMakechange = (e) => {
        setCar({ ...car, make: e.target.value });
    };

    const handleModelchange = (e) => {
        setCar({ ...car, model: e.target.value });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '0 auto', textAlign: 'center', marginTop: '150px' }}>
            <h1>Car Component</h1>
            <p>Your favourite car is: {car.year} {car.make} {car.model} </p>
            <input type="number" value={car.year} onChange={handleYearchange} placeholder='Enter mfg Year' style={{ padding: '8px', marginBottom: '10px', width: '100%' }} />
            <input type="text" value={car.make} onChange={handleMakechange} placeholder='Enter Company Name' style={{ padding: '8px', marginBottom: '10px', width: '100%' }} />
            <input type="text" value={car.model} onChange={handleModelchange} placeholder='Enter Model Name' style={{ padding: '8px', marginBottom: '10px', width: '100%' }} />
        </div>
    );
};

export default ObjectStateUpdate;
