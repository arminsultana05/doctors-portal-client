import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'


const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center mt-20 '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl  text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make An Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem mollitia quasi atque incidunt, odio veritatis alias obcaecati ex at, quod eum voluptatem placeat corrupti laborum repellat et quidem numquam ea excepturi cupiditate repudiandae sequi ab? Suscipit illum odit minus ab.</p>
                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-5">Get Started</button>

            </div>

        </section>
    );
};

export default MakeAppointment;