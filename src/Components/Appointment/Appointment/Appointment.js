import React from 'react';
import Footer from '../../Shard/Footer/Footer';
import Navbar from '../../Shard/Navbar/Navbar';
import AppoinmentMain from '../AppointmentMain/AppointmentMain';


const Appointment = () => {
    return (
      <div className="Appoint-container">
        <Navbar></Navbar>
        <AppoinmentMain></AppoinmentMain>
      
          <Footer></Footer>
      </div>
    );
};

export default Appointment;