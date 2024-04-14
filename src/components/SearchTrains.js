import React, { useEffect, useState } from 'react'
import "./SearchTrains.css"
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar-Footer/Navbar';

function SearchTrains() {
  const [formData, setFormData] = useState({
    fromStation: '',
    toStation: '',
    date: ''
  });

  const [stations, setStations] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8765/train-search/stations')
      .then(res => res.json())
      .then(stations => setStations(stations))
      .catch(error => console.log('Error fetching data: ', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const handleStationIds = (stationIds) => {
    navigate("/train-search", { state: { stationIds, date: formData.date } })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const queryString = new URLSearchParams({
      fromStation: formData.fromStation,
      toStation: formData.toStation,
      date: formData.date,
    }).toString();

    fetch(`http://localhost:8765/train-search/station-id?${queryString}`)
      .then((res) => res.json())
      .then((data) => {
        handleStationIds(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  };

  function onSearchFrom(searchTerm) {
    setFormData({ ...formData, fromStation: searchTerm });
  }
  function onSearchTo(searchTerm) {
    setFormData({ ...formData, toStation: searchTerm });
  }


  return (
    <div className='search-trains'>
      <div className='search-form'>
        <h3>Search Train</h3> <br />
        <form onSubmit={handleSubmit}>
          <div className='search-container'>
            <label>From : </label>
            <input type='text' name='fromStation' value={formData.fromStation} placeholder='From Station' onChange={handleChange} /> <br /><br />
            <div className='dropdown'>
              {stations.filter(item => {
                const searchTerm = formData.fromStation.toLowerCase();
                const station_name = item.stationName.toLowerCase();
                return searchTerm && station_name.startsWith(searchTerm) && station_name !== searchTerm
              })
                .map((item) => (
                  <div onClick={() => onSearchFrom(item.stationName)} className='dropdown-row'>{item.stationName}</div>
                ))}
            </div>
          </div>
          <div className='search-container'>
            <label>To : </label>
            <input type='text' name='toStation' value={formData.toStation} placeholder='to Station' onChange={handleChange} /><br /><br />
            <div className='dropdown'>
              {stations.filter(item => {
                const searchTerm = formData.toStation.toLowerCase();
                const station_name = item.stationName.toLowerCase();
                return searchTerm && station_name.startsWith(searchTerm) && station_name !== searchTerm
              })
                .map((item) => (
                  <div onClick={() => onSearchTo(item.stationName)} className='dropdown-row'>{item.stationName}</div>
                ))}
            </div>
          </div>
          <label>Date : </label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} /><br /><br />
          <button className='search-btn' type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchTrains