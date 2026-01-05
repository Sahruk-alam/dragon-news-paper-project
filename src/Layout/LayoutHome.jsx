import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';
import LatestNews from '../component/LatestNews';

const LayoutHome = () => {
    return (
        <div>
            <header>
        <Header></Header>
        <section className='w-11/12 mx-auto py-3'>
            <LatestNews></LatestNews>
        </section>
            </header>
            <main>
                <section className="left_nav">

                </section>

                <section className="main">
                <Outlet></Outlet>
                </section>

                <section className="right_nav">

                </section>
            </main>
            
        </div>
    );
};

export default LayoutHome;