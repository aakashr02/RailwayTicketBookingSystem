import React, { useEffect, useState } from 'react'
import './TrainSearchStyles.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar-Footer/Navbar';
import axios from 'axios';

export default function TrainSearch() {
    const [data, setData] = useState([]);
    const [selectedBox, setSelectedBox] = useState(null);
    const [coach_type, setCoachType] = useState();
    const [seats, setSeats] = useState();
    const [price, setPrice] = useState();

    const location = useLocation();
    const { stationIds, date } = location.state;
    useEffect(() => {
        const fetchTrains = async () => {
            try {
                for (const stationIdPair of stationIds) {
                    const queryString = new URLSearchParams({
                        fromStationId: stationIdPair.from_station_id,
                        toStationId: stationIdPair.to_station_id,
                        date,
                    }).toString();

                    const response = await fetch(`http://localhost:8765/train-search/train-search?${queryString}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch trains');
                    }
                    const data = await response.json();
                    setData(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTrains();
    }, [stationIds, date]);
    const navigate = useNavigate();
    const fetchTrainSchedule = (train_name) => {
        navigate("/train-route-details", { state: { trainName: train_name } })
    };

    const handleBoxClick = (boxId, c_type, t_id, date, fromstop, tostop) => {
        setSelectedBox(boxId);
        setCoachType(c_type);
        console.log("tid: ", t_id);
        console.log("from stop: ", fromstop);
        console.log("date: ", fromstop);
        const queryString = new URLSearchParams({
            fromStopNo: fromstop,
            toStopNo: tostop,
            trainId: t_id,
            date: date,
            coachType: c_type
        })
        axios.get('http://localhost:8765/train-search/seat-availability-price', { params: queryString })
            .then((res) => {
                setSeats(res.data[0].seats)
                setPrice(res.data[0].price)

            })

    };

    function handleBook(train_id, t_date, src, dst, ctr) {
        // console.log("Source and dest", src," : ", dst, "coach-type : ", coach_type);
        // console.log("date : ", date);
        if (localStorage.getItem('isLoggedIn')) {
            // console.log("Train date : ", date);
            console.log("Train catering : ", ctr);
            navigate("/book-ticket", { state: { trainId: train_id, date: date, source: src, destination: dst, coachType: coach_type, catering: ctr, pricePerTkt: price } })
        }
        else {
            navigate("/login")
        }
    }

    return (
        <div className='train-search'>
            {data.map(item => (
                <div className='train-info'>
                    <div className='heading'>
                        <h3>{item.train_name} ({item.train_id}) </h3>
                        <h5>Runs On : {item.days}</h5>
                        <h4><a href='/train-route-details' onClick={() => {
                            fetchTrainSchedule(item.train_name)
                        }}>Train Schedule</a></h4>
                    </div>
                    <div className='info'>
                        <div className='source-info'>
                            <h3>{item.start}</h3>
                            <h3> | </h3>
                            <p>{item.source}</p>
                        </div>
                        <div className='dstn-info'>
                            <h3>{item.reach}</h3>
                            <h3> | </h3>
                            <p>{item.destination}</p>
                        </div>
                    </div>
                    <div className='classes'>

                    </div>
                    <div className='classes'>
                        <div className={`box ${selectedBox === 1 ? 'selected' : ''} diff-classes`} onClick={() => handleBoxClick(1, "Sleeper", item.train_id, item.journey_start_date, item.beginStopNo, item.endStopNo)}>
                            <h5>Sleeper</h5>
                            <p>Refresh <FontAwesomeIcon className='refresh-icon' icon={faArrowsRotate} /></p>
                        </div>

                        <div className={`box ${selectedBox === 2 ? 'selected' : ''} diff-classes`} onClick={() => handleBoxClick(2, "3AC", item.train_id, item.journey_start_date, item.beginStopNo, item.endStopNo)}>
                            <h5>3AC</h5>
                            <p>Refresh <FontAwesomeIcon className='refresh-icon' icon={faArrowsRotate} /></p>

                        </div>
                        <div className={`box ${selectedBox === 3 ? 'selected' : ''} diff-classes`} onClick={() => handleBoxClick(3, "2AC", item.train_id, item.journey_start_date, item.beginStopNo, item.endStopNo)}>
                            <h5>2AC</h5>
                            <p>Refresh <FontAwesomeIcon className='refresh-icon' icon={faArrowsRotate} /></p>

                        </div>
                        <div className={`box ${selectedBox === 4 ? 'selected' : ''} diff-classes`} onClick={() => handleBoxClick(4, "1AC", item.train_id, item.journey_start_date, item.beginStopNo, item.endStopNo)}>
                            <h5>1AC</h5>
                            <p>Refresh <span><FontAwesomeIcon className='refresh-icon' icon={faArrowsRotate} /></span></p>

                        </div>
                    </div>
                    <div className='seats'>
                        <div className='seat-info' style={{ display: selectedBox === 1 ? 'block' : 'none' }}>
                            <p style={{"font-weight":"bold"}}>Seats Available: <span style={{"font-weight":"400"}}>{seats}</span></p>
                            <p style={{"font-weight":"bold"}}>Price: <span style={{"color":"green", "font-weight":"400"}}>{price}</span></p>
                        </div>
                        <div className='seat-info' style={{ display: selectedBox === 2 ? 'block' : 'none' }}>
                            <p style={{"font-weight":"bold"}}>Seats Available: <span style={{"font-weight":"400"}}>{seats}</span></p>
                            <p style={{"font-weight":"bold"}}>Price: <span style={{"color":"green", "font-weight":"400"}}>{price}</span></p>
                        </div>
                        <div className='seat-info' style={{ display: selectedBox === 3 ? 'block' : 'none' }}>
                            <p style={{"font-weight":"bold"}}>Seats Available: <span style={{"font-weight":"400"}}>{seats}</span></p>
                            <p style={{"font-weight":"bold"}}>Price: <span style={{"color":"green", "font-weight":"400"}}>{price}</span></p>
                        </div>
                        <div className='seat-info' style={{ display: selectedBox === 4 ? 'block' : 'none' }}>
                            <p style={{"font-weight":"bold"}}>Seats Available: <span style={{"font-weight":"400"}}>{seats}</span></p>
                            <p style={{"font-weight":"bold"}}>Price: <span style={{"color":"green", "font-weight":"400"}}>{price}</span></p>
                        </div>
                    </div>
                    <div className='book-button-div'>
                        <button className='book-button' onClick={() => {
                            handleBook(item.train_id, item.date, item.source, item.destination, item.catering)
                        }}>Book Now</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
