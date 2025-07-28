import React from 'react';
import LeftAuthComponent from '../../components/features/left-auth.component';
import AuthHeader from '../../components/ui/auth-header.component';
import VerifyUserComponent from '../../components/features/verify-user.component';

const VerifyUserLayout: React.FC = () => {
  return (
    <div className="flex w-full min-h-screen">
  <div className="w-[50%] hidden md:block">
    <LeftAuthComponent />
  </div>

  <div className="flex w-full md:w-[60%] items-center">
    <div className="w-10/12 mx-auto md:w-8/12">
      <AuthHeader title='Verify email account' />
      <VerifyUserComponent />
    </div>
  </div>
</div>

  );
};

export default VerifyUserLayout;
