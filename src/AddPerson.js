// AddPerson.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPerson = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleAddPerson = (e) => {
    e.preventDefault();

    const newDetail = {
      name,
      age,
      address,
    };

    axios.post('https://personback.onrender.com/add', { detail: newDetail })
      .then((response) => {
        console.log(response.data);
        navigate('/');
      })
      .catch((error) => console.error('Error adding person: ', error));
  };

  return (
    <div>
      <h1>Add Person</h1>
      <form id="addForm" onSubmit={handleAddPerson}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" required value={age} onChange={(e) => setAge(e.target.value)} />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" required value={address} onChange={(e) => setAddress(e.target.value)} />
        <button type="submit" className="button">
          Add
        </button>
      </form>
      <Link to="/" className="link">
        Back to List
      </Link>
    </div>
  );
};

export default AddPerson;
