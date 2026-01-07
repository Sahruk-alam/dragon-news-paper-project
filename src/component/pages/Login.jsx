import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const {signInUser}=use(AuthContext)
    const handleLogin=(event)=>{
        event.preventDefault();
      const email=event.target.email.value;
      const password=event.target.password.value;
      console.log('Login info:',email,password);
      signInUser(email,password)
      .then(result=>{
        console.log(result.user);
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
      <h2 className='font-bold text-2xl text-center'>Login Your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
            
          <label className="label font-bold">Email address</label>
          <input type="email" name='email' className="input" placeholder="Enter your Email" />
          <label className="label font-bold">Password</label>
          <input type="password" name='password' className="input" placeholder="Enter your Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>

          <p className='text-center font-semibold pt-3'>Don't have an account? 
             <Link to='/auth/registration' className="link text-blue-500">Register</Link></p>
        </fieldset>
        
      </form>
    </div>
        </div>
    );
};

export default Login;