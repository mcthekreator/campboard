import React from 'react';
import LeftAuthComponent from '../../components/features/left-auth.component';
import ResetPasswordComponent from '../../components/features/reset-password.component';
import AuthHeader from '../../components/ui/auth-header.component';

const ResetPasswordLayout: React.FC = () => {
  return (
    <div className="flex w-full ">
      <div className="w-[50%]  hidden md:block">
        <LeftAuthComponent />
      </div>
      <div className="flex w-full md:w-[60%] items-center justify-center px-6 py-20">
        <div className="w-full md:w-8/12">
          <AuthHeader title="Reset Passwrod" description="Enter your new password"/>
          <ResetPasswordComponent />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordLayout;
