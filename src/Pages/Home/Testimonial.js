import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews =[
        {
            id:1,
            name:'Winson Herry',
            reviews:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eveniet officiis accusamus, consectetur possimus magni.',
            location:'America USA',
            img:people1
        },
        {
            id:2,
            name:'Winson Herry',
            reviews:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eveniet officiis accusamus, consectetur possimus magni.',
            location:'Calofornia',
            img:people2
        },
        {
            id:3,
            name:'Winson Herry',
            reviews:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eveniet officiis accusamus, consectetur possimus magni.',
            location:"bangladesh",
            img:people3
        },
    ];
    return (
  <section>
      <div className='flex justify-between py-20'>
         <div>
             <h4 className="text-xl text-primary font-bold">Testimonials</h4>
             <h2 className="text-3xl"> What Our Patients Say?</h2>
         </div>
         <div>
             <img className='w-24 lg:w-48' src={quote} alt="" />

         </div>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
              reviews.map(review => <Review 
              key={review._id}
              review={review}></Review>)
          }

      </div>
  </section>
    );
};

export default Testimonial;