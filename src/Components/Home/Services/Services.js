import React from 'react';
import fluoride from '../../../images/fluoride.png'
import Cavity from '../../../images/cavity.png';
import Teath from '../../../images/teath.png';
import ServicesDetails from '../serviceDetails/servicesDetails'



const Services = () => {
  const ourService = [
    {
      name: "Fluoride Treatment",
      img: fluoride
    },
    {
      name: "Cavity Filling",
      img: Cavity
    },
    {
      name: "Teath Whitening",
      img: Teath,
    },
  ];

    return (
      <section className="service-container">
        <div className="text-center mt-5">
          <h5>OUR SERVICES</h5>
          <h2>Services We Provide</h2>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="w-75 row">
            {ourService.map((service) => (
              <ServicesDetails  service={service}></ServicesDetails>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Services;