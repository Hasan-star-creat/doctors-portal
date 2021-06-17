import React from 'react';
import AppoinMentDetails from '../AppointMentDetails/AppoinMentDetails';

import './Appintment.css';

const ApointMent = () => {
    return (
      <div className="appointment-doctor container">
        <AppoinMentDetails></AppoinMentDetails>
      </div>
    );
};

export default ApointMent;