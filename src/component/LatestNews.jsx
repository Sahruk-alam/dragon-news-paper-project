import React, { use } from 'react';
import Marquee from 'react-fast-marquee';
const categoryPromise= fetch('/news.json').then(res=>   
     res.json());

     const LatestNews = () => {
    const category=use(categoryPromise);
    // console.log(category);
    return (
        <div className='flex items-center gap-3 bg-base-200 px-4 py-2.5'>
            <p className='bg-secondary text-white px-3 py-2'>Latest</p>
          
           <Marquee pauseOnHover={true} speed={70}>
            {
            category.map(news=> <span  key={news.id} className='mx-3'>{news.title}</span>)
            }
           </Marquee>
            
        </div>
    );
};

export default LatestNews;