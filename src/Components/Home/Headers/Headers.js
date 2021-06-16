import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './headers.css'
import BussinesInfo from '../BussinesInfo/BussinesInfo';

const Headers = () => {
    return (
      <div className="header-container">
        <Navbar></Navbar>
        <HeaderMain></HeaderMain>
        <BussinesInfo></BussinesInfo>
      </div>
    );
};

export default Headers;