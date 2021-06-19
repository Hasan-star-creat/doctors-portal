import React from 'react';
import Headers from '../Headers/Headers';
import Services from '../Services/Services';
import FeaturedService from '../FeaturedService/FeatureedService'
import MakeAppointMent from '../MakeAppointMent/MakeApointMent'
import Testimonals from '../Testimonals/Testimonals';
import Blogs from '../Blogs/Blogs';



const Home = () => {
    return (
        <div>
           <Headers></Headers>
           <Services></Services>
           <FeaturedService></FeaturedService>
          <MakeAppointMent></MakeAppointMent>
          <Testimonals></Testimonals>
          <Blogs></Blogs>
        
        </div>
    );
};

export default Home;