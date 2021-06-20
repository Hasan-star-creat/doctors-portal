import React from 'react';
import chair from '../../../images/Chair1.png';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentMain = () => {

     const onChange = (value) => {
            console.log('date click', value)
     }
    return (
      <main
        style={{ height: "600px" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h3 style={{ color: "#3A4256" }}>APPOINTMENT</h3>
          <div className="mt-5">
            <Calendar onChange={onChange} value={new Date()} />
          </div>
        </div>
        <div className="col-md-6">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </main>
    );
};

export default AppointmentMain;