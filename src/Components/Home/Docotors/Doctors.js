import React from 'react';
import image from '../../../images/doctor.png';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const doctors = [{
        name:'Dr.Kaudi',
        phone:'+61 4564973',
        img: image,
    },
    {
        name:'Dr.Kaudi',
        phone:'+61 4564973',
        img: image,
    },
    {
        name:'Dr.Kaudi',
        phone:'+61 4564973',
        img: image,
    }
    ]
    return (
      <section className="doctors">
        <div className="container">
          <p className="text-center text-primary mb-5">
            <b> OUR DOCTORS</b>
          </p>
          <div className="row">
            {doctors.map((doctor) => (
              <Doctor doctor={doctor}></Doctor>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Doctors;