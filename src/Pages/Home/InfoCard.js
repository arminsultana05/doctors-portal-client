import React from 'react';

const InfoCard = ({img ,cartTitle,bgClass}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl container mx-auto ${bgClass}`}>
            <figure><img className='pl-5' src={img} alt="Album" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title ">{cartTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                
            </div>
        </div>
    );
};

export default InfoCard;