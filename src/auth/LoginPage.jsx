import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-pink-500 to-violet-600 p-6 text-center">
            <motion.h2 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome Back!
            </motion.h2>
            <motion.p 
              className="text-pink-100 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Sign in to continue to your account
            </motion.p>
          </div>
          
          {/* Sign In Form */}
          <div className="p-8">
            <SignIn
              path="/sign-in"
              routing="path"
              signUpUrl="/sign-up"
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'shadow-none w-full',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  socialButtonsBlock: 'space-y-3',
                  socialButtonsBlockButton: {
                    border: '1px solid #E5E7EB',
                    color: '#374151',
                    '&:hover': {
                      backgroundColor: '#F9FAFB',
                      borderColor: '#D1D5DB',
                    },
                  },
                  dividerLine: 'bg-gray-200',
                  dividerText: 'text-gray-400 text-xs',
                  formFieldLabel: 'text-gray-700 text-sm font-medium',
                  formFieldInput: {
                    border: '1px solid #E5E7EB',
                    borderRadius: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.875rem',
                    '&:focus': {
                      borderColor: '#EC4899',
                      boxShadow: '0 0 0 3px rgba(236, 72, 153, 0.1)',
                    },
                  },
                  formButtonPrimary: {
                    backgroundColor: '#EC4899',
                    '&:hover': {
                      backgroundColor: '#DB2777',
                    },
                  },
                  footerActionLink: {
                    color: '#EC4899',
                    '&:hover': {
                      color: '#DB2777',
                    },
                  },
                },
                variables: {
                  colorPrimary: '#EC4899',
                  colorText: '#1F2937',
                  colorInputText: '#1F2937',
                  colorBackground: '#FFFFFF',
                  colorInputBackground: '#FFFFFF',
                },
              }}
              afterSignInUrl="/"
              signInForceRedirectUrl="/"
            />
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <motion.a 
                  href="/sign-up" 
                  className="text-pink-500 font-medium hover:text-pink-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Create one
                </motion.a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Back to home link */}
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="/" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
