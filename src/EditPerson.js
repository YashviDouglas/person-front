// EditPerson.js
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPerson = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://personback.onrender.com/${id}`)
      .then((response) => {
        const person = response.data;
        setName(person.name);
        setAge(person.age);
        setAddress(person.address);
      })
      .catch((error) => console.error('Error fetching person data: ', error));
  }, [id]);

  const handleUpdatePerson = (e) => {
    e.preventDefault();

    const updatedDetail = {
      name,
      age,
      address,
    };

    axios.post(`https://personback.onrender.com/update/${id}`, { detail: updatedDetail })
      .then((response) => {
        console.log(response.data);
        navigate('/');
      })
      .catch((error) => console.error('Error updating person: ', error));
  };

  return (
    <div>
      <h1>Edit Person</h1>
      <form id="editForm" onSubmit={handleUpdatePerson}>
        <label htmlFor="editName">Name:</label>
        <input type="text" id="editName" required value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="editAge">Age:</label>
        <input type="number" id="editAge" required value={age} onChange={(e) => setAge(e.target.value)} />
        <label htmlFor="editAddress">Address:</label>
        <input type="text" id="editAddress" required value={address} onChange={(e) => setAddress(e.target.value)} />
        <button type="submit" className="button">
          Update
        </button>
      </form>
      <Link to="/" className="link">
        Back to List
      </Link>
    </div>
  );
};

export default EditPerson;
