import React from 'react'
import {jsPDF} from 'jspdf'
import 'jspdf-autotable'

function Ticket() {



  const tableBorder = { 'border':'2px solid', 'padding':'5px 100px'}

    const ticket = JSON.parse( localStorage.getItem("ticket"))


const exportPDF = ()=>{
  const doc = new jsPDF({ orientation:'portrait'})
  doc.autoTable({
    html:'#myTable'
  })
  doc.autoTable({
    html:'#myTicket1'
  })
  doc.autoTable({
    html:'#myTicket2'
  })


  doc.setTextColor("black")
  doc.setFontSize(1000)
  doc.save("Ticket.pdf")

}

    
  return (
      
        <div>      
        <div  style={{'margin':'1% 10%', 'padding':'1% 2%', 'textAlign':'center'}}>
        
        <table id='myTable'  cellPadding="5px" cellSpacing="5px" style={{'textAlign':'center', 'margin':'0% 42.5%', 'padding':'5px'}}>
        <tr><th></th><th></th><th></th><th></th><th></th><th></th></tr>
          <tr><th></th><th></th><th></th><th></th><th>TICKET</th><th></th></tr>
          <tr><th></th><th></th><th></th><th></th><th></th><th></th></tr>
        </table>

        <table id='myTicket1'  cellPadding="5px" cellSpacing="10px" style={{'textAlign':'center', 'margin':'0% 5% 5% 5%', 'padding':'5px'}}>
        <tr>
        <th>BOOKING ID</th>
        <th>FROM</th>
        <th>TO</th>
        <th>TRAIN NUMBER</th>
        <th>DEPARTURE DATE</th>
        <th>BOOKING CLASS</th>
        <th>PASSENGERS</th>
        <th>PRICE PER TICKET</th>

        </tr>
        <tr>
          <td>{ticket.bookingId}</td>
          <td>{ticket.boardingStationId}</td>
          <td>{ticket.destinationStationId}</td>
          <td>{ticket.trainId}</td>
          <td>{ticket.departureDate}</td>
          <td>{ticket.bookingClass}</td>
          <td>{ticket.numberOfPassengers}</td>
          <td>{ticket.pricePerTicket}</td>

        </tr>
        </table>

        <table id='myTicket2' cellPadding="10px" cellSpacing="15px" style={ {'border-collapse':'collapse', 'textAlign':'center', 'margin':'2% 15%'}}>
        <tr style={{...tableBorder}}>
            <th>PNR</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>CATERING SERVICE OPTION</th>
            <th>STATUS</th>
            <th>SEAT NUMBER</th>

            </tr>
            {
                ticket.passengers.map((d, index)=>{
                  if(d.status!=="CANCELLED")
                    {return(
                        <tr key={index} style={{...tableBorder}}>
                            <td>{d.passengerId}</td>
                            <td>{d.name}</td>
                            <td>{d.age}</td>
                            <td>{d.age}</td>
                            <td>{d.cateringOption}</td>
                            <td>{d.status}</td>
                            <td>{d.seatNo }</td>
                            
                        </tr>
                    )
                    }

                    return (<div></div>)
                })
            }
        </table>
        </div>
        <button onClick={exportPDF}>DOWNLOAD</button>
        </div> 
              
    
  )
}

export default Ticket