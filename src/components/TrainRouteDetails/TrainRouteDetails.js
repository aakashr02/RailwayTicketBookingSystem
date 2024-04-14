import React, { useEffect, useState } from 'react'
import './TrainRouteDetailsStyles.css'
import {useLocation} from 'react-router-dom'

function TrainRouteDetails() {
    const [data, setData] = useState([]);

    const location = useLocation();
    const {trainName} = location.state;

    useEffect(()=>{
        const queryString = new URLSearchParams({
            trainName : trainName,
        })
        fetch(`http://localhost:8765/train-search/train-route-details?${queryString}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log('Error fetching data: ', error));
    }, [trainName]);

  return (
    <div className='train-route'>
        <table>
            <thead>
                <tr>
                    <th>Train Number</th>
                    <th>Train Name</th>
                    <th>Stop Number</th>
                    <th>Station Id</th>
                    <th>Station Name</th>
                    <th>Arrival Time</th>
                    <th>Departure Time</th>
                    <th>Halt time</th>
                    <th>Cumulative Distance</th>
                    <th>Runs on</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.train_id}</td>
                        <td>{item.train_name}</td>
                        <td>{item.stop_number}</td>
                        <td>{item.station_id}</td>
                        <td>{item.station_name}</td>
                        <td>{item.arrival_time ? item.arrival_time : '-'}</td>
                        <td>{item.departure_time ? item.departure_time : '-'}</td>
                        <td>{item.halt_time ? item.halt_time : '-'}</td>
                        <td>{item.cumulative_distance}</td>
                        <td>{item.days}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TrainRouteDetails