import React from 'react';

const TestimonalsDetails = ({ testimonal }) => {
     const { quote, name, from, img } = testimonal;
  return (
    <section className="col-md-4 mt-5 mb-5">
      <div className="shadow text-center px-5">
        <p className="card-text text-center">{quote}</p>
        <div className="footer d-flex  align-items-center">
          <p>
            <img className="mx-3" src={img} alt="" width="60px" />
          </p>
          <div>
            <p className="text-primary">{name}</p>
            <p className="m-0">{from}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonalsDetails;