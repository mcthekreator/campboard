import React from 'react';
import LeftAuthComponent from '../../components/features/left-auth.component';
import ResetPasswordComponent from '../../components/features/reset-password.component';

const ResetPasswordLayout: React.FC = () => {
  return (
    <div className="flex w-full ">
      <div className="w-[50%]  hidden md:block">
        <LeftAuthComponent />
      </div>
      <div className="w-full md:w-[60%]">
        <div className="w-10/12 mx-auto my-auto md:w-8/12">
          <div className="text-center my-20">
            <h1 className="my-4">Reset Password</h1>
            <p>Please enter your detials to reset</p>
          </div>
          <ResetPasswordComponent />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordLayout;
