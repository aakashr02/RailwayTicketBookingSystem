import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './BookingHistoryStyles.css'

function BookingHistory() {

    const[ hist, setHistory] = useState(
        [
            // {
            // bookingId:"",
            // boardingStationId:"",
            // destinationStationId:"",
            // trainId:"",
            // numberOfPassengers:""
            // }
        ]
    )
        // axios.get("http://localhost:8765/user-service/bookingHistory")
        // .then((res)=>{
        //     if(res.status !== 200)
        //     {
        //         navigate("/login")
        //     }
        //     return (res.data)
        // })
    const navigate = useNavigate()
    
        useEffect(() => {
          
            axios.get("http://localhost:8765/user-service/bookingHistory")
            .then((res)=>{
                setHistory(res.data)
            })
          
          }, []  )
        
        // evt.preventDefault()
        
    // }

    // setHistory()

    function viewTicket(evt,h)
    {
        evt.preventDefault()
        localStorage.setItem("ticket", JSON.stringify(h))
        navigate("/viewTicket")
    }


  return (
    <div className='booking-history'>
    <h2 style={{"textAlign":"center"}}>BookingHistory</h2>
    <br/>
    <table className='content-table'>
        <thead>
        <tr>
        <th>Booking ID</th>
        <th>From</th>
        <th>To</th>
        <th>Train Number</th>
        <th>Passengers</th>
        <th></th>
        <th></th>
        </tr>
        </thead>
        {
            hist.map((h, index)=>{
                return(
                
                <tr key={index}>
                    <td>{h.bookingId}</td>
                    <td>{h.boardingStationId}</td>
                    <td>{h.destinationStationId}</td>
                    <td>{h.trainId}</td>
                    <td>{h.numberOfPassengers}</td>
                    <td>
                        <button className='btn'>
                        <Link style={{'textDecoration':'none', 'color':'white'}} to="/passengerDetails" state={h.passengers}>
                            VIEW PASSENGER DETAILS
                        </Link>
                        </button>
                    </td>
                    <td><button className='btn' disabled={h.numberOfPassengers===0} onClick={(evt)=>viewTicket(evt,h)}>VIEW TICKET</button></td>
                </tr>
                
                )
            })
        }

    </table>
        {/* <button onClick={getHistory}>BOOKING HISTORY</button> */}
    
    </div>
  )
}

export default BookingHistory