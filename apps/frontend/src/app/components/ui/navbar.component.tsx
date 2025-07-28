import React from 'react';
import { FiEdit, FiBell, FiUser } from 'react-icons/fi';

const NavbarComponent: React.FC = () => {
  return (
    <div className="fixed flex flex-col justify-between items-center h-screen text-black bg-purple-secondary w-full max-w-[80px] px-4 py-10">
      <div className="flex flex-col items-center gap-10">
        <img src="" alt="Logo" className="w-8 h-8" />
        <FiEdit className="w-6 h-6 cursor-pointer hover:text-purple-200" />
      </div>

      <div className="flex flex-col items-center gap-10">
        <FiBell className="w-6 h-6 cursor-pointer hover:text-purple-200" />
        <FiUser className="w-6 h-6 cursor-pointer hover:text-purple-200" />
      </div>
    </div>
  );
};

export default NavbarComponent;
