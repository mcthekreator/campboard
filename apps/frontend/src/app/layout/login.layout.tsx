import React, { useState } from 'react';
import LeftAuthComponent from '../components/features/left-auth.component';
import LoginComponent from '../components/features/login.component';
import AuthHeader from '../components/ui/auth-header.component';

const LoginLayout: React.FC = () => {
  return (
    <div className="flex w-full min-h-screen">
  <div className="w-[50%] hidden md:block">
    <LeftAuthComponent />
  </div>

  <div className="flex w-full md:w-[60%] items-center">
    <div className="w-10/12 mx-auto md:w-8/12">
      <AuthHeader title='Login into your account' />
      <LoginComponent />
    </div>
  </div>
</div>

  );
};

export default LoginLayout;
