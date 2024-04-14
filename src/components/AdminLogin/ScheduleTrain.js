import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TimePicker from 'react-time-picker';
// import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const ScheduleTrain = () => {
  const navigate=useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/')
    }
  },[])

  const AddRouteData =()=>{
  const [trains, setTrains] = useState([]);
  const [stations, setStations] = useState([]);
  const [formData, setFormData] = useState({
    trainId: '',
    stationId: '',
    stopNumber: '',
    arrivalTime: '',
    departureTime: '',
    priceToNextStop: '',
    distanceToNextStop: ''
  });
  const [isArrivalTimePickerOpen, setIsArrivalTimePickerOpen] = useState(false);
  const [isDepartureTimePickerOpen, setIsDepartureTimePickerOpen] = useState(false);

  useEffect(() => {
    fetchTrains();
    fetchStations();
  }, []);

  const fetchTrains = async () => {
    try {
      const response = await axios.get('http://localhost:8898/api/train/getRecord');
     
      const minimalTrainData = response.data.map(train => ({
        id: train.trainId,
        name: train.trainName,
        
      }));
      setTrains(minimalTrainData);
    } catch (error) {
      console.error('Error fetching stations:', error);
    }
  };
  
  

  const fetchStations = async () => {
    try {
      const response = await axios.get('http://localhost:8898/station/getRecord');
     
      const minimalStationData = response.data.map(station => ({
        id: station.stationId,
        name: station.stationName,
        state: station.state
      }));
      setStations(minimalStationData);
    } catch (error) {
      console.error('Error fetching stations:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTimeChange = (time, field) => {
    setFormData({
      ...formData,
      [field]: time
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    const newRoute = {
      train: { trainId: parseInt(formData.trainId, 10) },
      station: { stationId: parseInt(formData.stationId, 10) },
      stopNumber: parseInt(formData.stopNumber, 10),
      arrivalTime: formData.arrivalTime,
      departureTime: formData.departureTime,
      priceToNextStop: parseInt(formData.priceToNextStop, 10),
      distanceToNextStop: parseInt(formData.distanceToNextStop, 10)
    };
    console.log("newRoute = ", newRoute);
    axios.post('http://localhost:8898/api/route/create', newRoute)
      .then(response => {
        console.log('Route Created:', response.data);
        // Optionally clear the form after successful submission
        setFormData({
          trainId: '',
          stationId: '',
          stopNumber: '',
          arrivalTime: '',
          departureTime: '',
          priceToNextStop: '',
          distanceToNextStop: ''
        });
      })
      .catch(error => {
        console.error('Error creating route:', error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <div className="login-container">
      <h2 style={{"textAlign": "center"}}>Add Route</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <select name="trainId" value={formData.trainId} onChange={handleChange} required>
          <option value="">Select a Train</option>
          {trains.map(train => (
            <option key={train.id} value={train.id}>{train.name}</option>
          ))}
        </select>

        <select name="stationId" value={formData.stationId} onChange={handleChange} required>
          <option value="">Select a Station</option>
          {stations.map(station => (
            <option key={station.id} value={station.id}>{station.name}</option>
          ))}
        </select>

        <div>
          <input
            type="number"
            name="stopNumber"
            value={formData.stopNumber}
            onChange={handleChange}
            placeholder="Stop Number"
            
          />
        </div>

        <div>
          <input
            type="text"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
            placeholder="Arrival Time"
            
          />
          <button onClick={() => setIsArrivalTimePickerOpen(!isArrivalTimePickerOpen)}>Select Time</button>
          {isArrivalTimePickerOpen && (
            <TimePicker
              onChange={(time) => handleTimeChange(time, 'arrivalTime')}
              value={formData.arrivalTime}
              clearIcon={null} // Hide the clear icon
              required
            />
          )}
        </div>

        <div>
          <input
            type="text"
            name="departureTime"
            value={formData.departureTime}
            onChange={handleChange}
            placeholder="Departure Time"
            required
          />
          <button onClick={() => setIsDepartureTimePickerOpen(!isDepartureTimePickerOpen)}>Select Time</button>
          {isDepartureTimePickerOpen && (
            <TimePicker
              onChange={(time) => handleTimeChange(time, 'departureTime')}
              value={formData.departureTime}
              clearIcon={null} // Hide the clear icon
              required
            />
          )}
        </div>

        <input
          type="number"
          name="priceToNextStop"
          value={formData.priceToNextStop}
          onChange={handleChange}
          placeholder="Price to Next Stop"
          required
        />
        <input
          type="number"
          name="distanceToNextStop"
          value={formData.distanceToNextStop}
          onChange={handleChange}
          placeholder="Distance to Next Stop"
          required
        />

        <button type="submit">Create Route</button>
      </form>
    </div>
  );
}
return (
  <div>
    <AddRouteData />
  </div>
);
};

export default ScheduleTrain;
