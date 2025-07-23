import React, { useState } from 'react';
import InputComponent from '../ui/input-.component';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../store/auth.store';

const LoginComponent: React.FC = () => {
  const { login } = useAuth();

  const setLoading = useAuthStore((state) => state.setLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await login(email, password);
      toast.success('Login successful!');
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        'Login failed. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="w-full md:my-10">
        <InputComponent
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="mail@ttu.edu.gh"
        />
        <InputComponent
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="********"
        />
        <Link className="text-purple-primary text-sm" to="/forgot-password">
          {' '}
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="w-full my-10 py-3 bg-purple-primary text-white rounded-md"
        >
          Login
        </button>
      </form>
      <div className="text-center text-sm md:text-base">
        <h4>
          Don't have an account?{' '}
          <span className="text-purple-primary">
            <Link to="/register">register</Link>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default LoginComponent;

