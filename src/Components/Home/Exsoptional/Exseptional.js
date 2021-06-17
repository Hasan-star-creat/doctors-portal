import React from 'react';
import care from '../../../images/care.png'

const Exseptional = () => {
    return (
      <section className="row mt-5 mb-5 container">
        <div className="col-md-4 offset-md-1">
          <img
            className="img-fluid"
            style={{ height: "415px", width: "350px", borderRadius: "1px" }}
            src={care}
            alt=""
          />
        </div>
        <div style={{ padding: "10px" }} className="col-md-6 mt-3 ">
          <h2>
            Exceptional Dental <br /> Care, On Your Terms{" "}
          </h2>
          <p className="text-secondary lh-lg text-align-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            ipsam. Doloremque doloribus rem magnam eligendi, exercitationem
            accusamus voluptas optio dolores explicabo ex ipsum esse animi! In
            maiores, modi architecto expedita, exercitationem nobis mollitia
            illo quam molestiae fugit animi suscipit, recusandae voluptatem
            consequuntur id inventore magni. Perspiciatis, consectetur soluta!
            Nemo, similique.
          </p>
          <div className="mt-5">
            <button
              className="btn main-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
};

export default Exseptional;