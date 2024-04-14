// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Home from './Home';
// import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';

// function TrainManagement() {
//   const navigate=useNavigate();

//   useEffect(()=>{
//     if(!localStorage.getItem('token')){
//       navigate('/login')
//     }
//   },[])

//   const AddTrainForm = () => {
//     const [train, setTrain] = useState({
//       trainName: "",
//       trainId: "",
//       totalCoaches: "",
//       totalSeats: "",
//       // fare: "",
//       sourceStationId: "",
//       destinationStationId: "",
//       days:"",
//       cateringServices:""
//     });
//     const [stations, setStations] = useState([]);

//     useEffect(() => {
//       axios.get('http://localhost:8898/station/getRecord')
//         .then(response => {
//           const minimalStationData = response.data.map(station => ({
//             id: station.stationId,
//             name: station.stationName,
//             state: station.state
//           }));
//           console.log(minimalStationData);
//           setStations(minimalStationData);
//         })
//         .catch(error => console.error('Error fetching stations:', error));
//     }, []);

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setTrain(prevState => ({
//         ...prevState,
//         [name]: value,
//       }));
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const newTrain = {
//         ...train,
//         trainId: parseInt(train.trainId, 10),
//         totalCoach: parseInt(train.totalCoaches, 10),
//         totalSeats: parseInt(train.totalSeats, 10),
//         // fare: parseInt(train.fare, 10),
//         sourceStation: { stationId: parseInt(train.sourceStationId, 10) },
//         destinationStation: { stationId: parseInt(train.destinationStationId, 10) },
//       };
//       console.log(newTrain)
//       axios.post('http://localhost:8898/api/train/add', newTrain)
//         .then(response => {
//           console.log(response.data);
//         })
//         .catch(error => {
//           console.error('Error adding train:', error);
//         });
//     };

//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <form onSubmit={handleSubmit} style={{ width: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//           <div style={{ marginBottom: '10px' }}>
//             <input type="text" name="trainName" value={train.trainName} onChange={handleChange} placeholder="Train Name" required style={inputStyle} />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <input type="number" name="trainId" value={train.trainId} onChange={handleChange} placeholder="Train ID" required style={inputStyle} />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <input type="number" name="totalCoach" value={train.totalCoaches} onChange={handleChange} placeholder="Total Coach" required style={inputStyle} />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <input type="number" name="totalSeats" value={train.totalSeats} onChange={handleChange} placeholder="Total Seats" required style={inputStyle} />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <select name="sourceStationId" value={train.sourceStationId} onChange={handleChange} required style={inputStyle}>
//               <option value="">Select Source Station</option>
//               {stations.map(station => (
//                 <option key={station.id} value={station.id}>{station.name}</option>
//               ))}
//             </select>
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <select name="destinationStationId" value={train.destinationStationId} onChange={handleChange} required style={inputStyle}>
//               <option value="">Select Destination Station</option>
//               {stations.map(station => (
//                 <option key={station.id} value={station.id}>{station.name}</option>
//               ))}
//             </select>
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <input type="number" name="fare" value={train.fare} onChange={handleChange} placeholder="Fare" required style={inputStyle} />
//           </div>
//           <button type="submit" style={buttonStyle}>Add Train</button>
//         </form>
//       </div>
//     );
//   };

//   const inputStyle = {
//     width: '100%',
//     height: '35px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     paddingLeft: '10px',
//   };

//   const buttonStyle = {
//     width: '100%',
//     height: '40px',
//     borderRadius: '5px',
//     border: 'none',
//     backgroundColor: '#007bff',
//     color: 'white',
//     cursor: 'pointer',
//   };

//   return (
//     <div>
//       <Navbar/>  
//       <AddTrainForm />
//     </div>
//   );
// }

// export default TrainManagement;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function TrainManagement() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  const AddTrainForm = () => {
    const [train, setTrain] = useState({
      trainName: "",
      trainId: "",
      totalCoaches: "",
      totalSeats: "",
      sourceStationId: "",
      destinationStationId: "",
      days: "",
      cateringServices: ""
    });
    const [stations, setStations] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8898/station/getRecord')
        .then(response => {
          const minimalStationData = response.data.map(station => ({
            id: station.stationId,
            name: station.stationName
          }));
          setStations(minimalStationData);
        })
        .catch(error => console.error('Error fetching stations:', error));
    }, []);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setTrain(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newTrain = {
        ...train,
        trainId: parseInt(train.trainId, 10),
        totalCoaches: parseInt(train.totalCoaches, 10),
        totalSeats: parseInt(train.totalSeats, 10),
        sourceStation: { stationId: parseInt(train.sourceStationId, 10) },
        destinationStation: { stationId: parseInt(train.destinationStationId, 10) }
      };
      axios.post('http://localhost:8898/api/train/add', newTrain)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error adding train:', error);
        });
    };

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        
        <form onSubmit={handleSubmit} style={{ width: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ marginBottom: '10px' }}>
            <input type="text" name="trainName" value={train.trainName} onChange={handleChange} placeholder="Train Name" required style={inputStyle} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input type="number" name="trainId" value={train.trainId} onChange={handleChange} placeholder="Train ID" required style={inputStyle} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input type="number" name="totalCoaches" value={train.totalCoaches} onChange={handleChange} placeholder="Total Coaches" required style={inputStyle} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input type="number" name="totalSeats" value={train.totalSeats} onChange={handleChange} placeholder="Total Seats" required style={inputStyle} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <select name="sourceStationId" value={train.sourceStationId} onChange={handleChange} required style={inputStyle}>
              <option value="">Select Source Station</option>
              {stations.map(station => (
                <option key={station.id} value={station.id}>{station.name}</option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <select name="destinationStationId" value={train.destinationStationId} onChange={handleChange} required style={inputStyle}>
              <option value="">Select Destination Station</option>
              {stations.map(station => (
                <option key={station.id} value={station.id}>{station.name}</option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input type="text" name="days" value={train.days} onChange={handleChange} placeholder="Operating Days" required style={inputStyle} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input type="text" name="cateringServices" value={train.cateringServices} onChange={handleChange} placeholder="Catering Services" required style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle}>Add Train</button>
        </form>
      </div>
    );
  };

  const inputStyle = {
    width: '100%',
    height: '35px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    paddingLeft: '10px',
  };

  const buttonStyle = {
    width: '100%',
    height: '40px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div>
      <AddTrainForm />
    </div>
  );
}

export default TrainManagement;
