import React from 'react';
import ApointMent from '../AppointMent/ApointMent';
import Exseptional from '../Exsoptional/Exseptional';
import Headers from '../Headers/Headers';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
           <Headers></Headers>
           <Services></Services>
           <Exseptional></Exseptional>
           <ApointMent></ApointMent>
        
        </div>
    );
};

export default Home;