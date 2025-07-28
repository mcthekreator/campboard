import React, { useEffect, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications: string[] = ['Profile', 'Stories', 'Library', 'Sign out'];

const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="absolute bottom-4 left-14 w-52 text-black bg-white rounded-xl shadow-lg z-50 overflow-hidden"
    >
      <div className="p-4 font-semibold border-b">{user?.name}</div>
      <ul className="max-h-64 overflow-y-auto">
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

export default UserProfileModal;
