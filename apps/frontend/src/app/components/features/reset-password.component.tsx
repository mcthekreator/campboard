import React, { useState } from 'react';
import InputComponent from '../ui/input-.component';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const ResetPasswordComponent: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=" w-full">
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
          className="w-full my-10 py-3 bg-purple-primary text-white rounded-md"
        >
          Login
        </button>
      </form>
      <div className="text-center">
        <h4>
          Don't have an account?{' '}
          <span>
            <Link to="/register">register</Link>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default ResetPasswordComponent;
