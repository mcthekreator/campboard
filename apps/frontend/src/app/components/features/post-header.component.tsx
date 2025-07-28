import React, { useState } from 'react';
import SearchComponent from './search.component';
import FilterComponent from './filters.component';
import { FiEdit, FiMenu } from 'react-icons/fi';
import SideMenuComponent from './side-menu.component';
import { useNavigate } from 'react-router-dom';

const PostForYouComponent: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    console.log("clicked");
  };
  const openWriter =()=>{
    navigate('/writer');
  }
  return (
    <div className="items-center gap-4 sticky top-0 bg-white py-5">
      <div className="flex items-center justify-between">
        <FiMenu onClick={toggleMenu} className="w-6 h-6 cursor-pointer md:hidden" />
        <SearchComponent />
        <SideMenuComponent
          isOpen={showMenu}
          onClose={() => setShowMenu(false)}
        />
        <FiEdit onClick={openWriter} className="w-6 h-6 cursor-pointer md:hidden" />
      </div>
      <FilterComponent />
    </div>
  );
};

export default PostForYouComponent;
