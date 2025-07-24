import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Modern Glass Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">CrushConnect</h1>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Login</a>
            <a 
              href="#" 
              className="relative px-6 py-2.5 group"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-1 translate-y-1 bg-pink-600 group-hover:translate-x-0 group-hover:translate-y-0 rounded"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-violet-500 rounded opacity-80 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative text-white font-medium">Sign Up</span>
            </a>
          </motion.div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-radial from-pink-500/10 to-transparent rounded-full"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-violet-500/10 to-transparent rounded-full"></div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Find Your <span className="block">Campus Crush</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The modern way to discover if your feelings are mutual. 
              <span className="block mt-2">Completely anonymous. No pressure. Just real connections.</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="#" 
                className="relative px-8 py-4 group overflow-hidden rounded-lg"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-1 translate-y-1 bg-pink-600 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative text-white text-lg font-semibold">Get Started Free</span>
              </a>
              
              <a 
                href="#" 
                className="relative px-8 py-4 group overflow-hidden rounded-lg border-2 border-white/20 hover:border-white/40 transition-colors"
              >
                <span className="text-white text-lg font-semibold relative">Already a member? Sign In</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {['100% Anonymous', 'No Social Media Links', 'Campus-Focused'].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home;
