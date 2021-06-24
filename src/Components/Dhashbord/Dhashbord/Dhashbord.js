import React, { useContext, useState } from 'react';

import Calendar from "react-calendar";

import DhashbordSidbar from '../DhashbordSidebar/DhashbordSidbar'
import DashbordDate from '../DashbordDate/DashbordDate';
import { useEffect } from 'react';
import { UserContext } from '../../../App';

const dashbordStyl = {
  backgroundColor: "#F4FDFB",
  height:'100%'
};

const Dashbord = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [appointments, setAppointments] = useState([])
   const handleChange = (date) => {
       setSelectedDate(date);
   }
   useEffect(() => {
     fetch("https://salty-temple-22791.herokuapp.com/addAppointByDate", {
       method: "POST",
       headers: { "content-type": "application/json" },
       body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
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
          <div className="col-md-4 ms-5">
            <Calendar onChange={handleChange} value={new Date()} />
          </div>
          <div className="col-md-5">
            <DashbordDate appointments={appointments}></DashbordDate>
          </div>
        </div>
      </section>
    );
};

export default Dashbord;