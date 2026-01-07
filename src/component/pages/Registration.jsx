import React, { use,  } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Registration = () => {
    const {createUser,setUser}=use(AuthContext);
    const handleRegister=(event)=>{
        event.preventDefault();
      
        const email=event.target.email.value;
        const password=event.target.password.value;
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            setUser(result.user);
            event.target.reset();
        })
        .catch((error)=>{
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        })
    }
    return (
            <div className='flex justify-center items-center min-h-screen'>
            <div className="card py-6 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h2 className='font-bold text-2xl text-center'>Register your account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">

        <label className="label font-bold">Your Name </label>
          <input type="text" name='name'required className="input" placeholder="Enter your Name" />  
          
        <label className="label font-bold">Photo URL</label>
          <input type="text" name='photo' required className="input" placeholder="Enter your Photo URL" />
          
          <label className="label font-bold">Email address</label>
          <input type="email" name='email' required className="input" placeholder="Enter your Email" />
          
          <label className="label font-bold">Password</label>
          <input type="password" name='password' required className="input" placeholder="Enter your Password" />
        
          <div className='flex mt-2'>
            <input type="checkbox" name="terms" required id="terms" className='mr-2'/>
            <p>Agree to terms and conditions</p>
          </div>
          
          <button type='submit' className="btn btn-neutral mt-2">Register</button>
          <p className='text-center font-semibold pt-3'>Already have an account? 
             <Link to='/auth/login' className="link text-blue-500">Login</Link></p>
        </fieldset>
        
      </form>
    </div> 
        </div>
    );
};

export default Registration;