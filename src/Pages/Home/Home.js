import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';

import Information from './Information';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';



const Home = () => {
    return (
        <div className='lg:container lg:mx-auto'>
           <Banner></Banner>
           <Information ></Information>
           <Services></Services>
           <Banner2></Banner2>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
    
        </div>
    );
};

export default Home;