import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Navbar from './Navbar';
import './StationManagementStyles.css'
import { useNavigate } from 'react-router-dom';

function StationManagement() {
  const [stationName, setStationName] = useState('');
  const [state, setState] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8898/station/insert/', {
        stationName,
        state
      });
      console.log('Station inserted:', response.data);
      // Optionally, you can reset the form fields after successful submission
      setStationName('');
      setState('');
      alert(' Station Insert Successfully')
    } catch (error) {
      console.error('Error inserting station:', error);
    }
  };

  return (
    <div className='station-mgmt'>
      <div className='login-container station-div'>
        <h2>Add Station</h2>
        <form onSubmit={handleSubmit} className='login-form'>
          <div className="form-group">
            <label htmlFor="stationName">Station Name:</label>
            <input
              type="text"
              id="stationName"
              value={stationName}
              onChange={(e) => setStationName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Station</button>
        </form>
      </div>
    </div>
  );
}

export default StationManagement;
