import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiSearch } from 'react-icons/fi';
import { useAuthStore } from '../../store/auth.store';

const SearchComponent: React.FC = () => {
  const setLoading = useAuthStore((state) => state.setLoading);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || error?.message || 'Login failed. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-5/6 mx-auto hidden md:block">
      <form onSubmit={handleSubmit} className=" mx-auto my-10">
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
