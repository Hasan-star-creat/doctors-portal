import React from 'react';
import InfoCart from '../InfoCart/infoCart';
import { faClock, faMapMarker, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";


const serviceInfo = [
  {
    title: "Opening Hours",
    icon: faClock,
    description: "Lorem ipsum is the simply dumpy here",
    background: 'dark'
  },
  {
    title: "Visit Our Location",
    icon: faMapMarker,
    description: "Broklyn, ny 1907, USA",
    background: 'primary',
  },
  {
    title: "Contact Us",
    icon: faPhoneVolume,
    description: "Lorem ipsum is the simply dumpy here",
    background: 'dark'
  },
];

const BussinesInfo = () => {
    return (
      <div className="d-flex justify-content-center">
        <div className="w-75 row">
          {serviceInfo.map((info) => (
            <InfoCart info={info}></InfoCart>
          ))}
        </div>
      </div>
    );
};

export default BussinesInfo;