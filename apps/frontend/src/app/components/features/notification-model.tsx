import React, { useEffect, useRef } from 'react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications: string[] = [
  'Your post has been approved',
  'New comment on your article',
  'You have a new follower',
  'System maintenance at 12 AM',
];

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
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

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="absolute bottom-16 left-14 w-72 text-black bg-white rounded-xl shadow-lg z-50 overflow-hidden"
    >
      <div className="p-4 font-semibold border-b">Notifications</div>
      <ul className="max-h-64 overflow-y-auto">
        {notifications.length === 0 ? (
          <li className="p-4 text-sm text-gray-500">No notifications</li>
        ) : (
          notifications.map((note, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {note}
              <p>loremsdfjhbshjdbufb adfbjsb fadbarebfsfbn j</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default NotificationModal;
