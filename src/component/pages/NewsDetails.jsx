import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RightAside from '../HomeLayout/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const [news,setNews]=useState([]);
    console.log('news details data : ',news);
    useEffect(()=>{
        const newsFind=data.find(res=>res.id==id)
        setNews(newsFind);
    },[data,id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 py-5 mx-auto grid grid-cols-12 gap-6 ' >
                <section className='col-span-9'>
                  
               <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>

                <aside className='col-span-3'>
                <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;