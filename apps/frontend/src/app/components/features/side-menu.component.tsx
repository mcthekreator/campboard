import React, { useEffect, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications: string[] = ['Profile', 'Stories', 'Library', 'Sign out'];

const SideMenuComponent: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleProfileRoute = (route: string) => {
    const normalized = route.toLowerCase();

    switch (normalized) {
      case 'profile':
        navigate('/profile');
        break;
      case 'stories':
        navigate('/stories');
        break;
      case 'library':
        navigate('/library');
        break;
      case 'sign out':
        logout();
        navigate('/');
        break;
      default:
        break;
    }

    onClose();
  };

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
      ref={modalRef}
    >
      <div className="p-4 font-semibold border-b">{user?.name}</div>
      <ul className="max-h-[calc(100%-60px)] overflow-y-auto">
        {notifications.map((note, index) => (
          <li
            key={index}
            onClick={() => handleProfileRoute(note)}
            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
          >
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenuComponent;
