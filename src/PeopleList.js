// PeopleList.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://personback.onrender.com/')
      .then((response) => setPeople(response.data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const handleEditPerson = (id) => {
    // Redirect to the edit page with the person's ID
    navigate(`/edit/${id}`);
  };

  const handleDeletePerson = (id) => {
    axios.delete(`https://personback.onrender.com/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        axios.get('https://personback.onrender.com/')
          .then((response) => setPeople(response.data))
          .catch((error) => console.error('Error fetching data: ', error));
      })
      .catch((error) => console.error('Error deleting person: ', error));
  };

  return (
    <div>
      <h1>People List</h1>
      <ul id="peopleList">
        {people.map((person) => (
          <li key={person._id}>
            <span>{`${person.name}, ${person.age}, ${person.address}`}</span>
            <span>
              <button onClick={() => handleEditPerson(person._id)}>Edit</button>
              <button onClick={() => handleDeletePerson(person._id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
      <Link to="/add" className="button">
        Add Person
      </Link>
    </div>
  );
};

export default PeopleList;
