import React from 'react';
import LogoComponent from './logo.component';

interface InputProps {
  title?: string;
  description?: string;
}

const AuthHeader: React.FC<InputProps> = ({ title, description }) => {
  return (
    <div className=" text-center mb-14">
      <LogoComponent/>
      <h1 className="mb-2 mt-5 text-xl font-medium md:font-normal text-gray-800 md:text-2xl">
        {title}
      </h1>
      <p className="font-light text-gray-500 text-sm md:text-base">
        {description}
      </p>

    </div>
  );
};

export default AuthHeader;
