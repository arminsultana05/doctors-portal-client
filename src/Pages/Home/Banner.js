import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <section className=''>
            <div class="hero min-h-screen bg-base-100 ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='lg:w-1/2' src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2'>
                        <h1 class="lg:text-5xl font-bold">Your New Smile start <br /> Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;