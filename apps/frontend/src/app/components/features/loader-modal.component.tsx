import React from 'react';
import Loader from './loader.component';

interface LoaderModalProps {
  isOpen: boolean;
  loaderType?: 'dots' | 'bars' | 'ring';
}

const LoaderModal: React.FC<LoaderModalProps> = ({ isOpen, loaderType = 'bars' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-50"></div>
      <div className="relative z-10">
        <Loader loaderType={loaderType} />
      </div>
    </div>
  );
};

export default LoaderModal;
