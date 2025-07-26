import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAuthStore } from '../../store/auth.store';
import { toast } from 'react-toastify';

const VerifyUserComponent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { verifyAccount } = useAuth();
  const [email, setEmail] = useState('');
  const [otpDigits, setOtpDigits] = useState(Array(6).fill(''));

  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      toast.error('Email not found. Please register again.');
      navigate('/register');
    }
  }, [location, navigate]);

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const updated = [...otpDigits];
      updated[index] = value;
      setOtpDigits(updated);

      // Move to next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otp = otpDigits.join('');
    if (otp.length < 6) {
      toast.error('Please enter all 6 digits of the OTP');
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await verifyAccount(email, otp);
      toast.success('Verification successful! You can now log in.');
      navigate('/');
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        'Verification failed.';
      console.error('Verification error:', errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:my-10 text-center">
      <p className="mb-6">Enter the 6-digit code sent to <strong>{email}</strong></p>

      <div className="flex justify-center gap-2 mb-6">
        {otpDigits.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-12 text-center border rounded-md text-lg"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
          />
        ))}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-purple-primary text-white rounded-md"
      >
        Verify Account
      </button>
    </form>
  );
};

export default VerifyUserComponent;
