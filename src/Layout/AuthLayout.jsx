import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className=' min-h-screen bg-base-200'>
            <header className='w-11/12 mx-auto py-5'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;