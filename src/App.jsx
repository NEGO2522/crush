import React from 'react';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './auth/LoginPage';
import SignUpPage from './auth/SignUpPage';

// Get the Publishable Key from the environment
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithNavigate({ children }) {
  const navigate = useNavigate();
  
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      {children}
    </ClerkProvider>
  );
}

function App() {
  return (
    <Router>
      <ClerkProviderWithNavigate>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/sign-in/*" element={<LoginPage />} />
          <Route path="/sign-up/*" element={<SignUpPage />} />
          
          {/* Protected routes - Add any protected routes here */}
          <Route
            path="/dashboard"
            element={
              <>
                <SignedIn>
                  <div className="min-h-screen flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-white">Dashboard - Protected Content</h1>
                  </div>
                </SignedIn>
                <SignedOut>
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-3xl font-bold text-white mb-4">Please sign in to view this page</h1>
                      <a 
                        href="/sign-in" 
                        className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                      >
                        Sign In
                      </a>
                    </div>
                  </div>
                </SignedOut>
              </>
            }
          />
          
          {/* 404 route */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white">404 - Page Not Found</h1>
          </div>} />
        </Routes>
      </ClerkProviderWithNavigate>
    </Router>
  );
}

export default App;