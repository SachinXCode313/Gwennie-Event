import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="py-16 bg-gradient-to-r from-wedding-brown to-wedding-burgundy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <Mail className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Never Miss a Wedding Tip
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest wedding planning advice, trends, and exclusive offers delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full text-wedding-brown placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              required
            />
            <button
              type="submit"
              className="bg-wedding-gold hover:bg-yellow-500 text-wedding-brown px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Subscribe</span>
            </button>
          </form>
          
          <p className="text-white/70 text-sm mt-4">
            Join 10,000+ couples planning their dream weddings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;