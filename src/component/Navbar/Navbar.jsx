import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userLogo from '../../assets/user.png';
import { AuthContext } from '../../provider/AuthProvider';
const Navbar = () => {
    const {user,signoutUser}=use(AuthContext)
    const handleLogout=()=>{
        console.log('Logout clicked');
        signoutUser()
        .then(()=>{
            alert('User logged out successfully')
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }
    return (
        <div className='flex justify-between items-center'>
           
           <div className="left-nav"> {user && user.email} </div>
           <div className="main-nav gap-2.5 text-accent flex ">
            <NavLink to ='/' >Home</NavLink>
            <NavLink to ='/about' >About</NavLink>
            <NavLink to ='/career'>Career</NavLink>
           </div>
           <div className="flex items-center gap-4">
              <img src={userLogo} alt="User" />

              {
               user ? <button onClick={handleLogout} className='btn btn-primary px-8'>Logout</button> : 
               <Link to='/auth/login' className='btn btn-primary px-8'>Login</Link>
                }
                
           </div>
        </div>
    );
};

export default Navbar;