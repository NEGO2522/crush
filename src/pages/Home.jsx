import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useUser, UserButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

// Feature card component
const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white text-2xl mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

// Animated button component
const AnimatedButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 to-violet-600 text-white hover:shadow-lg hover:shadow-pink-500/30',
    secondary: 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20',
  };
  
  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0,transparent_70%)]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-violet-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Modern Glass Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg py-3 border-b border-white/5' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
            onClick={() => navigate('/')}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              CrushConnect
            </h1>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {!user ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => navigate('/sign-in')}
                >
                  Sign In
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg hover:opacity-90 transition-opacity"
                  onClick={() => navigate('/sign-up')}
                >
                  Get Started
                </motion.button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-300">
                  {user.firstName || user.emailAddresses[0]?.emailAddress}
                </span>
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium"
          >
            <span className="mr-2">✨</span> New way to connect on campus
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-violet-300 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Find Your <span className="block mt-2">Campus Crush</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The modern way to discover if your feelings are mutual. 
            <span className="block mt-2">Completely anonymous. No pressure. Just real connections.</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatedButton 
              onClick={() => navigate(user ? '/dashboard' : '/sign-up')}
              variant="primary"
            >
              {user ? 'Go to Dashboard' : 'Get Started Free'}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </AnimatedButton>
            
            {!user && (
              <AnimatedButton 
                onClick={() => navigate('/sign-in')}
                variant="secondary"
              >
                Already a member? Sign In
              </AnimatedButton>
            )}
          </motion.div>

          {/* App preview mockup */}
          <motion.div 
            className="relative mx-auto max-w-4xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-1 border border-gray-700/50 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-violet-600 rounded-3xl opacity-30 blur-md"></div>
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/50 backdrop-blur-sm">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-500">CrushConnect.app</div>
                <div className="w-12"></div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl mb-4">💌</div>
                  <h3 className="text-xl font-bold text-white mb-2">Your Crush is Waiting</h3>
                  <p className="text-gray-400">Sign up to see who's crushing on you!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mt-32 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Simple steps to find your perfect match on campus</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            <FeatureCard 
              icon="1️⃣"
              title="Create Your Profile"
              description="Sign up and set up your anonymous profile in minutes. No personal details needed."
              delay={0.1}
            />
            <FeatureCard 
              icon="💌"
              title="Send a Crush"
              description="See someone you like? Send them an anonymous crush. If they like you back, it's a match!"
              delay={0.2}
            />
            <FeatureCard 
              icon="🔒"
              title="Stay Anonymous"
              description="Your identity is protected until there's a mutual connection. No pressure, no awkwardness."
              delay={0.3}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-pink-900/30 to-violet-900/30 rounded-3xl p-8 md:p-12 overflow-hidden mb-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Match?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of students who've already found their campus crush</p>
            <AnimatedButton 
              onClick={() => navigate(user ? '/dashboard' : '/sign-up')}
              variant="primary"
              className="mx-auto"
            >
              {user ? 'Go to Dashboard' : 'Get Started for Free'}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </AnimatedButton>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white font-bold">
                CC
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                CrushConnect
              </span>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              Made with ❤️ for the shy hearts
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
