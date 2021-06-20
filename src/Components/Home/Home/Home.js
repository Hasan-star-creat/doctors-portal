import React from 'react';
import Headers from '../Headers/Headers';
import Services from '../Services/Services';
import FeaturedService from '../FeaturedService/FeatureedService'
import MakeAppointMent from '../MakeAppointMent/MakeApointMent'
import Testimonals from '../Testimonals/Testimonals';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Docotors/Doctors';
import Contact from '../Contacts/Contact';
import Footer from '../../Shard/Footer/Footer';



const Home = () => {
    return (
        <div>
           <Headers></Headers>
           <Services></Services>
           <FeaturedService></FeaturedService>
          <MakeAppointMent></MakeAppointMent>
          <Testimonals></Testimonals>
          <Blogs></Blogs>
          <Doctors></Doctors>
          <Contact></Contact>
          <Footer></Footer>
        
        </div>
    );
};

export default Home;