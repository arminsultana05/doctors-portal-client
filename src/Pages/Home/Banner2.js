import React from 'react';
import treatment from '../../assets/images/treatment.png'
const Banner2 = () => {
    return (
      
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='w-1/4' src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-1/2 ml-28'>
                        <h1 class="text-4xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>

        

    );
};

export default Banner2;