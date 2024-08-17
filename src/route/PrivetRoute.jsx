import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show a loading spinner while authentication state is being determined
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  // Check if the user is authenticated
  if (user && user.email) {
    return children;
  }

  // Redirect to login page if not authenticated
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
