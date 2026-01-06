import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise= fetch('/categories.json').then(res=>
    res.json());

const Category = () => {
    const category=use(categoryPromise);
    // console.log(category);
    return (
        <div>
            <h2 className='font-semibold'> All Category ({category.length}) </h2>
            <div className='grid grid-cols-1 mt-3 gap-2'>
           {
                category.map((category)=>
                <NavLink className={'btn justify-start bg-base-100 border-0 hover:bg-base-300'} 
                to={`/category/${category.id}`}> 
                {category.name}</NavLink>)
            }

            </div>
            
        </div>
    );
};

export default Category;