import React from 'react';
import SearchComponent from '../features/search.component';
import FilterComponent from '../features/filters.component';
import { FiEdit, FiMenu } from 'react-icons/fi';

const PostForYouComponent: React.FC = () => {
  return (
    <div className=" items-center gap-4 sticky top-0 bg-white py-5">
      <div className="flex items-center justify-between">
        <FiMenu className="w-6 h-6 cursor-pointer  md:hidden" />
        <SearchComponent/>
        <FiEdit className="w-6 h-6 cursor-pointer md:hidden" />
      </div>
      <FilterComponent />


    </div>
  );
};

export default PostForYouComponent;
