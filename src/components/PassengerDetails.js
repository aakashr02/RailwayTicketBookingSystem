import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function PassengerDetails() {
    
    const location = useLocation();
    //the data here will be an object since an object was
    const data = location.state;

    const[l, setL] = useState([])

    const navigate = useNavigate();
    
    function handleChange(evt)
    {
        // const flag = isChecked[index]
        // isChecked[index] = !flag
        if(evt.target.checked===true)
        {
            
            setL([...l, parseInt(evt.target.value)])
            
        }
        else{
            setL(oldValues => {
                return oldValues.filter(fruit => fruit !== parseInt(evt.target.value))
              })
        }
        
    }


    function cancelTicket()
    {
        if(l.length!==0)
        {
        var flag = window.confirm("Confirm Ticket Cancellation of PNR "+l)
        if( flag===true  )
        {
            axios.post("http://localhost:8765/user-service/cancelTicket", 
            {pnr:l})
            .then((res)=>{
                
                if(res.status !== 200)
                {
                    navigate("/login")
                }
                alert(res.data)

             navigate("/bookingHistory") })

            
        }
    }

    }

  return (
    <div style={{"textAlign":"center"}}>
        <h2>PassengerDetails</h2>
        <table>
            <tr>
            <th>PNR</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>CATERING SERVICE OPTION</th>
            <th>STATUS</th>
            <th>SEAT NUMBER</th>
            <th>CANCEL TICKET</th>
            </tr>
            {
                data.map((d, index)=>{

                    return(
                        <tr key={index}>
                            <td>{d.passengerId}</td>
                            <td>{d.name}</td>
                            <td>{d.age}</td>
                            <td>{d.gender}</td>
                            <td>{d.cateringOption}</td>
                            <td>{d.status}</td>
                            <td>{(d.seatNo!==0)? d.seatNo : "--"}</td>
                            <td>{(d.status!=="CANCELLED")?<input type="checkbox" value={d.passengerId}  onChange={(evt)=>handleChange(evt)}></input> : <div></div> }</td>
                        </tr>
                    )
                })
            }
        </table>
        <button disabled={l.length===0} onClick={cancelTicket}>CANCEL TICKETS</button>
    </div>
  )
}

export default PassengerDetails