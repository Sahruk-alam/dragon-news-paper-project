import React from 'react';
import swimming from '../../assets/swimming.png';
import classlogo from '../../assets/class.png';
import playground from '../../assets/playground.png';
const Qzone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h2 className='font-bold mb-3'>Q-Zone</h2>
            <div className="space-y-3 flex flex-col">
                <img src={swimming} alt="Swimming" /> 
                <img src={classlogo} alt="Class" />
                <img src={playground} alt="Playground" />
            </div>
        </div>
    );
};

export default Qzone;