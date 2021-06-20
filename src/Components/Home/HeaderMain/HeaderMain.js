import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/Chair1.png'

const HeaderMain = () => {
    return (
      <main
        style={{ height: "600px" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h3 style={{ color: "#3A4256" }}>
            Your New Smile <br />
            Starts Heare
          </h3>
          <p className="text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            sed, harum itaque nam in nisi illum pariatur ducimus, vel impedit
            perspiciatis sunt culpa repellendus, a dolorum modi adipisci dolore
            iusto?
          </p>
          <Link
            to="/appointment"
            style={{
              background: "linear-gradient(to bottom right, #468bb3 , #46b383)",
            }}
            className="btn"
          >
            GET APPOINTMENT
          </Link>
        </div>
        <div className="col-md-6">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </main>
    );
};

export default HeaderMain;