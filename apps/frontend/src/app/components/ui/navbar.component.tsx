import React, { useState } from 'react';
import { FiEdit, FiBell, FiUser } from 'react-icons/fi';
import NotificationModal from '../features/notification-model';
import UserProfileModelComponent from '../features/user-profile-model.component';

const NavbarComponent: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserProfile, setshowUserProfile] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };
  const toggleUserProfile = () => {
    setshowUserProfile((prev) => !prev);
  };
  return (
    <div className="fixed flex flex-col justify-between items-center h-screen text-white bg-purple-primary w-full max-w-[80px] px-4 py-10">
      <div className="flex flex-col items-center gap-10">
        <img src="logo.png" alt="Logo" className="w-8 h-8" />
        <FiEdit className="w-6 h-6 cursor-pointer hover:text-purple-200" />
      </div>

      <div className="relative flex flex-col items-center gap-10">
        <FiBell
          className="w-6 h-6 cursor-pointer hover:text-purple-200"
          onClick={toggleNotifications}
        />
        <FiUser className="w-6 h-6 cursor-pointer hover:text-purple-200 " onClick={toggleUserProfile} />
        <UserProfileModelComponent

          isOpen={showUserProfile}
          onClose={() => setshowUserProfile(false)}
        />

        <NotificationModal
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
        />
      </div>
    </div>
  );
};

export default NavbarComponent;
