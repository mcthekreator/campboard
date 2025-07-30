import LeftAuthComponent from '../../components/features/left-auth.component';
import RegisterComponent from '../../components/features/register.component';
import AuthHeader from '../../components/ui/auth-header.component';
import React from 'react';

const RegisterLayout: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left image or content - hidden on small devices */}
      <div className="hidden md:block md:w-1/2">
        <LeftAuthComponent />
      </div>

      {/* Right form section */}
      <div className="flex items-center justify-center w-full md:w-1/2 px-4 py-10">
        <div className="w-full max-w-md">
          <AuthHeader
            title="Create an Account"
            description="Please provide your details to get started"
          />
          <RegisterComponent />
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
