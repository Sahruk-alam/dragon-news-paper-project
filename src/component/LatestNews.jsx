import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 px-4 py-2.5'>
            <p className='bg-secondary text-white px-3 py-2'>Latest</p>
           
           <Marquee className='gap-4' pauseOnHover={true} speed={70}>
            <p className='font-semibold '>Lorem ipsum dolor sit amet adipisicing elit. Magnam eius amet eveniet non quis rem !</p>
            <p className='font-semibold '>Lorem ipsum dolor sit amet adipisicing elit. Magnam eius amet eveniet non quis rem !</p>
            <p className='font-semibold '>Lorem ipsum dolor sit amet adipisicing elit. Magnam eius amet eveniet non quis rem !</p>
           </Marquee>
            
        </div>
    );
};

export default LatestNews;