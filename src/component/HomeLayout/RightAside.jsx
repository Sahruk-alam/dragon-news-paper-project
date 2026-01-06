import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import SocialLogin from '../Navbar/SocialLogin';
import FindUsOn from '../Navbar/FindUsOn';

const RightAside = () => {
    return (
        <div className='space-y-5'>
           <SocialLogin></SocialLogin>
           <FindUsOn></FindUsOn>
        </div>
    );
};

export default RightAside;