import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}

export default ProtectedRoute;
