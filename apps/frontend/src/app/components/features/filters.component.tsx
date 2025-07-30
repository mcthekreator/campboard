import React from 'react';

const FilterComponent: React.FC = () => {
  return (
    <div className="w-full border-b bg-white py-3">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <ul className="flex gap-3 md:gap-6 px-4 py-2 text-base text-text-tertiary whitespace-nowrap overflow-x-auto">
          <li className="hover:text-purple-primary cursor-pointer">All</li>
          <li className="hover:text-purple-primary cursor-pointer">News</li>
          <li className="hover:text-purple-primary cursor-pointer">Articles</li>
          <li className="hover:text-purple-primary cursor-pointer">Events</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterComponent;

