import React, { useState } from 'react';

import Calendar from "react-calendar";

import DhashbordSidbar from '../DhashbordSidebar/DhashbordSidbar'
import DashbordDate from '../DashbordDate/DashbordDate';
import { useEffect } from 'react';

const dashbordStyl = {
  backgroundColor: "#F4FDFB",
  height:'100%'
};

const Dhashbord = () => {
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [appoinments, setAppointments] = useState([])
   const handleChange = (date) => {
       setSelectedDate(date);
   }
   useEffect(() => {
     fetch("http://localhost:5050/addAppointByDate", {
       method: "POST",
       headers: { "content-type": "application/json" },
       body: JSON.stringify({ date: selectedDate}),
     })
       .then((res) => res.json())
       .then((data) => setAppointments(data));

   }, [selectedDate])
      
    return (
      <section style={dashbordStyl}>
        <div className="container-fluid row">
          <div className="col-md-2">
            <DhashbordSidbar></DhashbordSidbar>
          </div>
          <div className="col-md-5">
            <Calendar onChange={handleChange} value={new Date()} />
          </div>
          <div className="col-md-5">
            <DashbordDate appointments={appoinments}></DashbordDate>
          </div>
        </div>
      </section>
    );
};

export default Dhashbord;