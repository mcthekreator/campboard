import LeftAuthComponent from '../../components/features/left-auth.component';
import RegisterComponent from '../../components/features/register.component';
import AuthHeader from '../../components/ui/auth-header.component';
import React from 'react';

const RegisterLayout: React.FC = () => {
  return (
    <div className="flex w-full min-h-screen">
  <div className="w-[50%] hidden md:block">
    <LeftAuthComponent />
  </div>

  <div className="flex w-full md:w-[60%] items-center">
    <div className="w-10/12 mx-auto my-10 md:w-8/12 ">
      <AuthHeader title='Create an Account' description='Please provide your details to get started'/>
      <RegisterComponent />
    </div>
  </div>
</div>

  );
};

export default RegisterLayout;
