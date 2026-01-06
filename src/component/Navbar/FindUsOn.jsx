import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div className=''>
            <h2 className='font-semibold'>Find Us On</h2>
            
    <div className="join join-vertical w-full mt-4">
  <button className="btn bg-base-100 justify-start join-item"><FaFacebook></FaFacebook> Facebook</button>
  <button className="btn bg-base-100 justify-start join-item"><FaTwitter></FaTwitter>Twitter</button>
  <button className="btn bg-base-100 justify-start join-item"><FaInstagram></FaInstagram>Instragram</button>
</div>
            </div>
      
    );
};

export default FindUsOn;