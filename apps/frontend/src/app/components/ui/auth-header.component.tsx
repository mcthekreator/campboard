import React from 'react';

interface InputProps {
  title?: string;
  description?: string;
}

const AuthHeader: React.FC<InputProps> = ({ title, description }) => {
  return (
    <div className=" text-center mb-14">
      <img className="w-40 my-5 mx-auto" src="logo-dark-transparent.png" alt="" />
      <h1 className="my-2 text-xl font-semibold text-gray-800 md:text-2xl">{title}</h1>
      <p className="font-normal text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default AuthHeader;
