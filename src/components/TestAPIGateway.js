import axios from 'axios'
import React, { useState } from 'react'

function TestAPIGateway() {

    const [msg, setMsg] =useState("")
    function getStations(evt)
    {
        evt.preventDefault()
        axios.get("http://localhost:8765/train-search/train-route-details", {params:{'trainName':'TRAIN 2'}})
        .then((res)=>{
            setMsg( JSON.stringify( res.data))
        })
    }

  return (
    <div>
        <h2>TESTING API GATEWAY FOR TRAIN SEARCH SERVICE</h2>
        <h3>
            <button onClick={getStations}>GET TRAIN STATIONS</button>
            {msg}
        </h3>

    </div>
  )
}

export default TestAPIGateway