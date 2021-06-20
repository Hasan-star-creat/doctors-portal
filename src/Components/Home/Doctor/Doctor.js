import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Doctor = (props) => {
    const {img, name , phone} = props.doctor
    return (
        <section className="col-md-4 text-center">
            <img height="200px" src={img} alt="" />
            <h4>{name}</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> {phone}</p>

        </section>
    );
};

export default Doctor;