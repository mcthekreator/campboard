import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchComponent: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="w-5/6 mx-auto hidden md:block">
      <form className=" mx-auto ">
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-primary w-5 h-5" />
          <input
            className="bg-white-tertiary w-full py-3 pl-12 pr-4 font-light rounded-full text-text-primary placeholder:text-text-primary/60 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
