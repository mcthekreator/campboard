import React from 'react';
import LeftAuthComponent from '../../components/features/left-auth.component';
import AuthHeader from '../../components/ui/auth-header.component';
import ForgotPasswordComponent from '../../components/features/forgot-password.component';

const ForgotPasswordLayout: React.FC = () => {
  return (
    <div className="flex w-full min-h-screen">
  <div className="w-[50%] hidden md:block">
    <LeftAuthComponent />
  </div>

  <div className="flex w-full md:w-[60%] items-center">
    <div className="w-10/12 mx-auto md:w-8/12">
      <AuthHeader title='Login into your account' />
      <ForgotPasswordComponent />
    </div>
  </div>
</div>

  );
};

export default ForgotPasswordLayout;
