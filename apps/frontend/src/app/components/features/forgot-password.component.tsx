import React, { useState } from 'react';
import InputComponent from '../ui/input-.component';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../store/auth.store';

const ForgotPasswordComponent: React.FC = () => {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState('');

  const setLoading = useAuthStore((state) => state.setLoading);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await forgotPassword(email);
      console.log('Login response:', response);
      toast.success('Login successful!');
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        'Login failed. Please try again.';

      console.error('Login error:', errorMessage);
      toast.error(errorMessage[0]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=" w-full md:my-10">
        <InputComponent
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="mail@ttu.edu.gh"
        />
        <button
          type="submit"
          className="w-full my-10 py-3 bg-purple-primary text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordComponent;
