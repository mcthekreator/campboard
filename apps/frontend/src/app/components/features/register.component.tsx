import React, { useState } from 'react';
import InputComponent from '../ui/input-.component';
import { useAuth } from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthStore } from '../../store/auth.store';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const RegisterComponent: React.FC = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const setLoading = useAuthStore((state) => state.setLoading);
  const navigate = useNavigate();

  const isValidEmail = (email: string) => /^[a-zA-Z0-9._%+-]+@ttu\.edu\.gh$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error('All fields are required');
      return;
    }

    if (!isValidEmail(email)) {
      toast.error('Email must be a valid TTU email (ending with @ttu.edu.gh)');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
       await register(firstName, lastName, email, password);
      toast.success('Registration successful!');
      navigate('/verify', { state: { email } });
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        'Registration failed. Please try again.';
      toast.error(Array.isArray(errorMessage) ? errorMessage[0] : errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full md:my-5">
        <div className="gap-4 md:flex">
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
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="********"
          rightIcon={
            showPassword ? (
              <FiEyeOff onClick={() => setShowPassword(false)} />
            ) : (
              <FiEye onClick={() => setShowPassword(true)} />
            )
          }
        />
        <InputComponent
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="********"
          rightIcon={
            showConfirmPassword ? (
              <FiEyeOff onClick={() => setShowConfirmPassword(false)} />
            ) : (
              <FiEye onClick={() => setShowConfirmPassword(true)} />
            )
          }
        />

        <button
          type="submit"
          className="w-full my-5 py-3 bg-purple-primary text-white rounded-md md:my-10"
        >
          Create account
        </button>
      </form>

      <div className="text-center text-sm md:text-lg">
        <h4>
          Already have an account?{' '}
          <span className="text-purple-primary">
            <Link to="/">Login</Link>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default RegisterComponent;
