import React, { useState } from 'react';

const ArrayUpdate = () => {
  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

  const handleAddFood = () => {
    const inpVal = document.getElementById("foodInp").value;
    document.getElementById("foodInp").value = "";
    setFoods([...foods, inpVal]);
  };

  const handleRemoveFood = (index) => {
    setFoods(foods.filter((item, i) => i !== index));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>List Of Foods</h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {foods.map((elem, index) => (
          <li
            key={index}
            onClick={() => handleRemoveFood(index)}
            style={{
              backgroundColor: '#f4f4f4',
              padding: '10px',
              margin: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            {elem}
          </li>
        ))}
      </ul>
      <input id="foodInp" type="text" placeholder="Enter Foods name" style={{ padding: '8px', margin: '10px 0', width: '100%' }} />
      <button onClick={handleAddFood} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add Food</button>
    </div>
  );
};

export default ArrayUpdate;
