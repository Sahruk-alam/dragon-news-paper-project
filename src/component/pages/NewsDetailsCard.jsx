import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div>
            <h2 className='font-bold mb-6'>Dragon News</h2>

            <div className='space-y-4 shadow-lg p-6'>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt={news.title} />
            <h3 className='font-semibold text-2xl mt-4'>{news.title}</h3>
            <p className='mt-2'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary'>All news in this category</Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;