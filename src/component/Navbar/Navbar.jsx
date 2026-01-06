import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
           
           <div className="left-nav">    </div>
           <div className="main-nav gap-2.5 text-accent flex ">
            <NavLink to ='/' >Home</NavLink>
            <NavLink to ='/about' >About</NavLink>
            <NavLink to ='/career'>Career</NavLink>
           </div>
           <div className="flex items-center gap-4">
              <img src={user} alt="User" />
                <button className='btn btn-primary px-8'>Login</button>
           </div>
        </div>
    );
};

export default Navbar;