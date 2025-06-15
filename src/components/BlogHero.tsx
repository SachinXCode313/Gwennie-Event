import React from 'react';
import { Calendar, Users, Star, Heart } from 'lucide-react';
import logo from "../assets/Logo1.png";
const BlogHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-wedding-brown to-wedding-burgundy text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
                      <div className="flex items-center justify-center ">
              <img src={logo} alt="logo" className="w-28 h-full" />
            </div>
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold">
              Gwennie Event
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-4">
            Event Management Blog
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your ultimate guide to planning perfect events. From traditional Indian weddings to corporate gatherings, 
            birthday celebrations, and social parties.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm mb-8">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-wedding-gold" />
              <span>Wedding Specialists</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>All Event Types</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Expert Planning</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span>Premium Service</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-wedding-gold">500+</div>
                <div className="text-sm text-white/80">Events Managed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-wedding-gold">50+</div>
                <div className="text-sm text-white/80">Wedding Venues</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-wedding-gold">100+</div>
                <div className="text-sm text-white/80">Corporate Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-wedding-gold">1000+</div>
                <div className="text-sm text-white/80">Happy Families</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;