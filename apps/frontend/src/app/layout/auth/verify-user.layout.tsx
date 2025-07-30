import React from 'react';
import LeftAuthComponent from '../../components/features/left-auth.component';
import AuthHeader from '../../components/ui/auth-header.component';
import VerifyUserComponent from '../../components/features/verify-user.component';

const VerifyUserLayout: React.FC = () => {
  return (
    <div className="flex w-full">
  <div className="w-[50%] hidden md:block">
    <LeftAuthComponent />
  </div>

  <div className="flex w-full md:w-[60%] items-center justify-center px-6 py-20">
    <div className="w-full md:w-8/12">
      <AuthHeader  title='Verify email account' description='Please check your indox and enter the verification code'/>
      <VerifyUserComponent />
    </div>
  </div>
</div>

  );
};

export default VerifyUserLayout;
