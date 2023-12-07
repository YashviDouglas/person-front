// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PeopleList from './PeopleList';
import './App.css';
import AddPerson from './AddPerson';
import EditPerson from './EditPerson';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<PeopleList />} />
          <Route path="/add" element={<AddPerson />} />
          <Route path="/edit/:id" element={<EditPerson />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
