import React from 'react';
import { useState } from 'react';
import Footer from '../../Shard/Footer/Footer';
import Navbar from '../../Shard/Navbar/Navbar';
import AppointmentBook from '../AppointmentBook/AppointmentBook';
import AppoinmentHeader from '../AppointmentHeader/AppointmentHeader';


const Appointment = () => {
  const  [selectedDAte , setSelectedDate] = useState(new Date())
  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
    return (
      <div className="Appoint-container">
        <Navbar></Navbar>
        <AppoinmentHeader handleDateChange={handleDateChange}></AppoinmentHeader>
         <AppointmentBook date={selectedDAte}></AppointmentBook>
          <Footer></Footer>
      </div>
    );
};

export default Appointment;