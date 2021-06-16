import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './infoCart.css'

const InfoCart = ({info}) => {
    return (
      <div className="col-md-4 text-white info-cart ">
        <div className={`d-flex icon-container justify-content-center info-${info.background}`}>
          <div>
            <FontAwesomeIcon className="info-icon me-3" icon={info.icon} />
          </div>

          <div>
            <h6>{info.title}</h6>
            <small>{info.description}</small>
          </div>
        </div>
      </div>
    );
};

export default InfoCart;