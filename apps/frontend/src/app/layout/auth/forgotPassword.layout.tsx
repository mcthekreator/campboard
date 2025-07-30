import React from 'react';
import LeftAuthComponent from '../../components/features/left-auth.component';
import AuthHeader from '../../components/ui/auth-header.component';
import ForgotPasswordComponent from '../../components/features/forgot-password.component';

const ForgotPasswordLayout: React.FC = () => {
  return (

 <div>
   <div className="flex w-full">

     <div className="w-[50%] hidden md:block md:w-1/2">
       <LeftAuthComponent />
     </div>

     <div className="flex w-full md:w-[60%] items-center justify-center px-6 py-20">
       <div className="w-full md:w-8/12">
         <AuthHeader
           title="Forgot your password"
           description="Please enter the email adderess "
         />
         <ForgotPasswordComponent />
       </div>
     </div>
   </div>
 </div>
  );
};

export default ForgotPasswordLayout;
