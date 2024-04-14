import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./BookTicketStyles.css"

function BookTicket() {

    const [data, setData] = useState([{ name: "", age: "", gender: "Male", cateringOption: "No Option" }])

    const navigate = useNavigate();

    const location = useLocation();
    const trainDetails = location.state;
    // console.log("Train catering : ", trainDetails.catering);
    const cateringService = "yes"
    const [ticket, setTicket] = useState({

        // Even though it is boardingStationId, pass the boarding Station Name. Same for DestinationStation
        boardingStationId: trainDetails.source,
        destinationStationId: trainDetails.destination,
        trainId: trainDetails.trainId,
        pricePerTicket: trainDetails.pricePerTkt,
        numberOfPassengers: 0,
        departureDate: trainDetails.date,
        passengers: [],
        bookingClass: trainDetails.coachType
    })

    const [msg, setMsg] = useState(JSON.stringify(ticket))


    useEffect(() => {
        if (data.length === 0 || data[0].name === "") setTicket({ ...ticket, passengers: [], numberOfPassengers: 0 })
        else setTicket({ ...ticket, passengers: data, numberOfPassengers: data.length })

        // setMsg(JSON.stringify(ticket))

    }, [ticket, data])



    const handleClick = () => {
        setData([...data, { name: "", age: "", gender: "Male", cateringOption: "No Option" }])
    }
    const handleChange = (e, i) => {
        const { name, value } = e.target
        const onchangeVal = [...data]
        onchangeVal[i][name] = value
        setData(onchangeVal)
        // console.log(e.target.name + "  " + e.target.value)

    }
    const handleDelete = (e, i) => {
        const deleteVal = [...data]
        deleteVal.splice(i, 1)
        setData(deleteVal)

    }


    function bookTicket(evt) {
        evt.preventDefault();
        console.log(ticket);
        if (ticket.passengers.length !== 0) {

            axios.post("http://localhost:8765/user-service/bookingRequest", ticket)
                .then((res) => {
                    if (res.status !== 200) {
                        navigate("/login")
                    }
                    setMsg(JSON.stringify(res.data))
                    localStorage.setItem("ticket", JSON.stringify(res.data))
                    localStorage.setItem("bookingSuccess", true)
                    navigate("/bookingHistory")
                })
        }
        else {
            alert("NO PASSENGERS")
        }
    }


    return (
        <div className="book-ticket">
            <div className='book-div'>
                <form onSubmit={bookTicket}>
                    <button className='book-btn add' onClick={handleClick}>ADD PASSENGER</button> <br /><br />
                    {
                        data.map((val, i) =>
                            <div>
                                <input name="name" type="text" value={val.name} onChange={(e) => handleChange(e, i)} placeholder='PASSENGER NAME' required /> <br /><br />
                                <input name="age" type="number" value={val.age} onChange={(e) => handleChange(e, i)} placeholder='AGE' required /> <br /><br />
                                {/* <input name="gender" type="text" value={val.gender} onChange={(e)=>handleChange(e,i)} placeholder='GENDER' required/> */}

                                <select required name='gender' value={val.gender} onChange={(e) => handleChange(e, i)}>
                                    <option value="Male" >Male</option>
                                    <option value="Female" >Female</option>
                                    <option value="Transgender" >Transgender</option>
                                </select>
                                <br/><br/>
                                <select required name="cateringOption" value={val.cateringOption} onChange={(e) => handleChange(e, i)} hidden={(cateringService === "yes") ? false : true}>
                                    <option value="No Option" >No Option</option>
                                    <option value="Veg" >Veg</option>
                                    <option value="Non Veg" >Non Veg</option>
                                </select> <br /><br />


                                {/* <input hidden={(ticket.cateringService==="Yes")? false : true} name="cateringOption" type="text" value={val.cateringOption} onChange={(e)=>handleChange(e,i)} placeholder='CATERING SERVICE OPTION' required/> */}
                                <button className='btn del' onClick={(e) => handleDelete(e, i)}>Delete Passenger</button>
                            </div>
                        )
                    }

                    {/* <p>{JSON.stringify(data)}</p> */}
                    <br></br>
                    <button className='book-btn book' type='submit'>BOOK TICKET</button> <br/> <br/>
                    <button className='book-btn hist' onClick={(evt) => { evt.preventDefault(); navigate("/bookingHistory") }}>BOOKING HISTORY</button>
                    <br></br>
                    {/* {JSON.stringify(data)} */}
                    {/* {msg} */}
                </form>
            </div>
        </div>
    )

}

export default BookTicket