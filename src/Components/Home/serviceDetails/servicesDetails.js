import React from 'react';

const ServicesDetails = ({ service }) => {
  return (
    <section className="col-md-4 text-center mt-5 mb-5">
        <img className="mb-3" style={{ height: "48px" }} src={service.img} alt="" />
      <h6>{service.name}</h6>
      <p className="text-secondary text-justify mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
        vitae!
      </p>
    </section>
  );
};

export default ServicesDetails;