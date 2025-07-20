import React, { useState } from 'react';
import InputComponent from '../ui/input-.component';
import { useAuth } from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../store/auth.store';

const RegisterComponent: React.FC = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const setLoading = useAuthStore((state) => state.setLoading);
const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await register(firstName, lastName, email, password);
      console.log('Login response:', response);
      toast.success('Login successful!');
       navigate('/verify', { state: { email } });
      
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
      <form onSubmit={handleSubmit} className=" w-full md:my-5">
        <div className=" gap-4 md:flex ">
          <InputComponent
            label="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Enter First Name"
          />
          <InputComponent
            label="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Enter Last Name"
          />
        </div>
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
        <button
          type="submit"
          className="w-full my-5 py-3 bg-purple-primary text-white rounded-md md:my-10"
        >
          Create account
        </button>
      </form>
      <div className="text-center text-sm md:text-based">
        <h4>
          Don't have an account?{' '}
          <span className="text-purple-primary">
            <Link to="/">login</Link>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default RegisterComponent;
