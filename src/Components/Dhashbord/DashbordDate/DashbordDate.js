import React from 'react';

const DashbordDate = ({ appointments }) => {
    console.log(appointments)
  return (
    <div>
      <h3>dashbord date: {appointments.length}</h3>
      {appointments.map((app) => (
        <div>
          <li key={app._id}>Name: {app.name}</li>
          <li>Service: {app.servic}</li>
        </div>
      ))}
    </div>
  );
};

export default DashbordDate;