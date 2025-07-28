import React from 'react';

const FilterComponent: React.FC = () => {
  return (
    <div className="w-5/6 mx-auto  pt-5 sticky top-0 z-20 bg-white overflow-hidden overscroll-x-auto  ">
      <div className="mx-auto border-b border-gray-200  text-text-tertiary text-base">
        <ul className="inline-flex gap-10 justify-items-start py-3 md:flex-wrap md:flex">
          <li className="hover:text-purple-primary cursor-pointer">notice</li>
          <li className="hover:text-purple-primary cursor-pointer">news</li>
          <li className="hover:text-purple-primary cursor-pointer">articles</li>
          <li className="hover:text-purple-primary cursor-pointer">events</li>
          <li className="hover:text-purple-primary cursor-pointer">events</li>
          <li className="hover:text-purple-primary cursor-pointer">events</li>
          <li className="hover:text-purple-primary cursor-pointer">events</li>
          <li className="hover:text-purple-primary cursor-pointer">updates</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterComponent;
