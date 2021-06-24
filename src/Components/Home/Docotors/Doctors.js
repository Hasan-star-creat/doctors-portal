import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const [isDoctors,setIsDoctors] = useState([])
     useEffect(() => {
      fetch("https://salty-temple-22791.herokuapp.com/doctors")
        .then((res) => res.json())
        .then((data) => setIsDoctors(data));
     }, [])

     console.log(isDoctors)
    return (
      <section className="doctors">
        <div className="container">
          <p className="text-center text-primary mb-5">
            <b> OUR DOCTORS</b>
          </p>
          <div className="row">
            {isDoctors.map((doctor) => 
              <Doctor doctor={doctor}></Doctor>
            )}
          </div>
        </div>
      </section>
    );
};

export default Doctors;