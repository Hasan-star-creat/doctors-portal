import React from 'react';
import doctor from "../../../images/doctor.png";

const AppoinMentDetails = () => {
    return (
      <section className="row mt-5">
        <div className="col-md-5">
          <img style={{ height: "620px" }} src={doctor} alt="" />
        </div>
        <div className="col-md-6 mt-5 ms-5 content" style={{ padding: "15px" }}>
          <h6 style={{ color: "#468bb3" }} className="mt-5">
            APPOINTMENT
          </h6>
          <h2 className="lh-base mt-3 text-white">
            Make an AppointMent <br /> Today
          </h2>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            numquam ea, iure aut a repellat obcaecati temporibus doloribus
            voluptate dolore.
          </p>
          <button className="btn main-btn">Learn MOre</button>
        </div>
      </section>
    );
};

export default AppoinMentDetails;