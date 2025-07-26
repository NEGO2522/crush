import React from 'react';
import { SignUp } from '@clerk/clerk-react';

function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Join us today and start your journey
          </p>
        </div>
        <div className="mt-8">
          <SignUp 
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
            appearance={{
              elements: {
                formFieldInput: {
                  backgroundColor: 'transparent',
                  borderColor: '#9CA3AF',
                  color: 'white',
                  '&:focus': {
                    borderColor: '#EC4899',
                    boxShadow: '0 0 0 1px #EC4899',
                  },
                },
                formFieldLabel: {
                  color: '#E5E7EB',
                },
                formFieldAction: {
                  color: '#9CA3AF',
                },
                footerActionLink: {
                  color: '#EC4899',
                  '&:hover': {
                    color: '#DB2777',
                  },
                },
                card: {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                },
                headerTitle: {
                  color: 'white',
                },
                headerSubtitle: {
                  color: '#9CA3AF',
                },
                socialButtonsBlockButton: {
                  borderColor: '#4B5563',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                },
                dividerLine: {
                  backgroundColor: '#4B5563',
                },
                dividerText: {
                  color: '#9CA3AF',
                },
                formFieldInputShowPasswordButton: {
                  color: '#9CA3AF',
                },
                formFieldInputShowPasswordIcon: {
                  '--cl-internal-focus-ring-color': '#EC4899',
                },
              },
              variables: {
                colorPrimary: '#EC4899',
                colorText: 'white',
                colorInputText: 'white',
                colorBackground: 'transparent',
                colorInputBackground: 'rgba(255, 255, 255, 0.05)',
              },
            }}
            afterSignUpUrl="/"
            unsafeMetadata={{
              signup_source: 'web_app',
            }}
            signUpForceRedirectUrl="/"
          />
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <a href="/sign-in" className="text-pink-400 hover:text-pink-300 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
