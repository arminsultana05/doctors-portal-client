import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'

const Information = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto'>
            <InfoCard img={clock}></InfoCard>
            <InfoCard img={clock}></InfoCard>
            <InfoCard img={clock}></InfoCard>
            
        </div>
    );
};

export default Information;