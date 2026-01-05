import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex my-6 justify-center flex-col items-center gap-3'>
            <img src={logo} alt="Logo" />
            <h3 className='text-[18px] text-accent'>Journalism Without Fear or Favour</h3>
            <p className='text-accent text-semibold '>{format(new Date(), 'EEEE, MMMM dd, yyyy')}</p>
        </div>
    );
};

export default Header;