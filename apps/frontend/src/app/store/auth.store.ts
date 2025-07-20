import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthResponse, User } from '../types/auth..types';

type AuthState = {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (data: AuthResponse) => void;
  logout: () => void;
  forgotPassword: ()=> void;
  verifyAccount: ()=> void;
  setLoading: (value: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      login: (data) =>
        set({
          user: data.user,
          token: data.accessToken,
        }),

      logout: () => set({ user: null, token: null }),
      forgotPassword: () => set({ user: null, token: null }),
      verifyAccount: () => set({ user: null, token: null }),
      setLoading: (value) => set({ loading: value }),
    }),
    { name: 'auth-store' }
  )
);
