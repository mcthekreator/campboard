import React from 'react';
import LeftAuthComponent from '../../components/features/left-auth.component';
import LoginComponent from '../../components/features/login.component';
import AuthHeader from '../../components/ui/auth-header.component';

const LoginLayout: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="hidden md:block md:w-1/2">
        <LeftAuthComponent />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[60%] flex items-center justify-center px-6 py-20">
        <div className="w-full md:w-8/12  ">
          <AuthHeader title="Login into your account" />
          <LoginComponent />
        </div>
      </div>
    </div>
  );
};



export default LoginLayout;
