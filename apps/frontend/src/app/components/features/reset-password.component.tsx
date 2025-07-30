import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputComponent from '../ui/input-.component';
import { useAuth } from '../../hooks/useAuth';
import { useAuthStore } from '../../store/auth.store';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const ResetPasswordComponent: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  const { resetPassword } = useAuth();
  const setLoading = useAuthStore((state) => state.setLoading);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!token) {
      toast.error('Reset token is missing. Please check your email link.');
      setLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      toast.error('Password must be at least 8 characters.');
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      await resetPassword(token, newPassword);
      toast.success('Password reset successful. You can now log in.');
      navigate('/');
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
          type={showNewPassword ? 'text' : 'password'}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          placeholder="********"
          rightIcon={
            showNewPassword ? (
              <FiEyeOff onClick={() => setShowNewPassword(false)} />
            ) : (
              <FiEye onClick={() => setShowNewPassword(true)} />
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
          className="w-full my-10 py-3 bg-purple-primary text-white rounded-md"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordComponent;
