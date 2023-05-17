import React from 'react';
import './style.css';
import Home from './commponents/Home.jsx';
import Blogs from './commponents/Blogs.jsx';
import Contact from './commponents/Contact.jsx';
import { BrowserRouter, Router, Routes } from 'react-router-dom';

export default function App() {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [renderData, setRenderData] = React.useState('');
  const [renderDataText, setRenderDataText] = React.useState('');

  const handleText = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setName(value);
  };

  const handleNumber = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setNumber(value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setRenderData(number);
    setRenderDataText(name);
    setNumber('');
    setName('');
  };

  return (
    <div>
      <input type="text" name="textName" value={name} onChange={handleText} />
      <label> Enter the Name </label>

      <input
        type="text"
        name="textNumber"
        value={number}
        onChange={handleNumber}
      />
      <label>Enter the 10 digit phone number</label>

      <button onClick={handleAdd}> Add Contact </button>

      {/* Show Data */}
      <h2> Contact </h2>
      <ul>
        <li>
          {' '}
          {renderDataText} - {renderData}
        </li>
      </ul>

      {/* Routing */}
      <div>
        <BrowserRouter>
          <Router>
            <Routes path="/home" element={<Home />} />
            <Routes path="/blogs" element={<Blogs />} />
            <Routes path="/contact" element={<Contact />} />
          </Router>
        </BrowserRouter>
      </div>
    </div>
  );
}
