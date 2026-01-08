import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRRoute = ({ children }) => {
    const {user,loading}=use(AuthContext)
    
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }

     if(user && user?.email ){
         return children;
     }
   
    return <Navigate to='/auth/login'></Navigate>

}
export default PrivateRRoute;