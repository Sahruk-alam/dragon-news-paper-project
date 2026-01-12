import React, { use, useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/AuthProvider';
const SocialLogin = () => {
     const {googleSign,user,githubSign,setUser}=useContext(AuthContext)
     const handleGoogleSign=()=>{
     googleSign()
     .then(result=>{
        console.log("Google pop up",result.user)
     })
     .catch(error=>{
        console.log(error)
     })

     }

     const handleGithub=()=>{
        githubSign()
        .then(result=>{
           console.log("Github pop up",result.user)
           const loggedInUser=result.user;
           if(!loggedInUser.email){
            if(loggedInUser.providerData){
                const gitProvider=loggedInUser.providerData.find(provider=>
                    provider.providerId==='github.com');
                if(gitProvider && gitProvider.email){
                    loggedInUser.email=gitProvider.email;
                 console.log('GitHub Provider Data:', gitProvider);
                 setUser(loggedInUser);
                }
            }
           }
           
        })
        .catch(error=>{
           console.log(error)
        })
     }
    return (
       
        <div>
             <h2 className='font-bold text-xl'>Login with </h2>
            {
                user ? <p className='text-green-500 font-semibold'>{user.displayName}</p> : null
            }
            <div className='space-y-3 mt-5'>
                
                {
                    user ? null : <button onClick={handleGoogleSign} className='btn btn-outline btn-secondary w-full'><FcGoogle size={24} />Login with Google</button>
                }
                
                {
                    user ? null : <button onClick={handleGithub} className='btn btn-outline btn-primary w-full'><FaGithub size={24} />Login with Github</button>
                }
               
            </div>
        </div>
    );
};

export default SocialLogin;