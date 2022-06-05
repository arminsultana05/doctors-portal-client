import React from 'react';
import Banner from './Banner';

import Information from './Information';
import Services from './Services';



const Home = () => {
    return (
        <div className='container mx-auto'>
           <Banner></Banner>
           <Information ></Information>
           <Services></Services>
    
        </div>
    );
};

export default Home;