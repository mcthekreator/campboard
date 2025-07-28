import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
                                                         children,
                                                         requiredRole
                                                       }) => {
  const { user, token } = useAuthStore();
  const location = useLocation();

  // Check if user is authenticated
  if (!token || !user) {
    // Redirect to login page with return url
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Check if user has required role
  if (requiredRole && user.role !== requiredRole) {
    // You can redirect to unauthorized page or back to login
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
