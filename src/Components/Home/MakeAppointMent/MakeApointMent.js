import React from 'react';
import doctor from '../../../images/doctor.png'

import './MakeAppintment.css';

const ApointMent = () => {
    return (
      <section className="make-appointment">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-none d-md-block">
              <img src={doctor} alt="" />
            </div>
            <div className="col-md-6 text-white pe-5 py-5 appointment-contain">
              <h5 className="text-primary text-uppercase ">Appointment</h5>
              <h1 className="my-4">
                Make an Appointment <br /> Today
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                magnam ad consequuntur assumenda saepe hic amet nemo ea facere
                a!
              </p>
              <button className="btn main-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ApointMent;