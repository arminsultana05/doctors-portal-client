import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitining from '../../assets/images/whitening.png';
import Service from './service';
import Servic from './Servic';


const Services = () => {
    const services = [
        {
            _id:1,
            name: 'Fluoride Treatment',
            description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, esse',
            img:fluoride

        },
        {
            _id:2,
            name: 'Cavity Filling',
            description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, esse',
            img:cavity

        },
        {
            _id:3,
            name: 'Teeth Whitining',
            description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, esse',
            img:whitining

        },
    ];
    return (
        <div className='my-28'>
            <div className="text-center ">
            <h1 className='text-primary text-xl font-bold uppercase'>Our servicers</h1>
            <h2 className='text-4xl'>Services We provide</h2>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 s">
                {
                    services.map(service=> <Servic
                    key={service._id}
                    service={service}>

                    </Servic>)
                }
            </div>

            
        </div>
    );
};

export default Services;