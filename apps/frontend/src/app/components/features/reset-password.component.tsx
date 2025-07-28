import React, { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputComponent from '../ui/input-.component';
import { useAuth } from '../../hooks/useAuth';
import { useAuthStore } from '../../store/auth.store';

const ResetPasswordComponent: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate()

  const { resetPassword } = useAuth();
  const setLoading = useAuthStore((state) => state.setLoading);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    if (!token) {
      toast.error('Reset token is missing. Please check your email link.');
      return;
    }

    if (newPassword.length < 8) {
      toast.error('Password must be at least 8 characters.');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
       await resetPassword(token, newPassword);
      toast.success('Password reset successful. You can now log in.');
       navigate('/');
      // Optional: redirect to login
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        'Password reset failed. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="w-full md:my-10">
        <InputComponent
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          placeholder="********"
        />
        <InputComponent
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="********"
        />

        <button
          type="submit"
          className="w-full my-10 py-3 bg-purple-primary text-white rounded-md"
        >
          Reset Password
        </button>
      </form>
      <div className="text-center text-sm md:text-base">
        <h4>
          Don't have an account?{' '}
          <span className="text-purple-primary">
            <Link to="/register">Register</Link>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default ResetPasswordComponent;
