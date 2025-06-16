import React from 'react';
import { Heart, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wedding-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-wedding-gold fill-current" />
              <span className="text-2xl font-playfair font-bold">
                Gwennies Event
              </span>
            </div>
            <p className="text-white/80 mb-6">
              Your trusted partner in creating magical Indian wedding celebrations. From traditional ceremonies to modern celebrations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-wedding-gold cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-wedding-gold cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-wedding-gold cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-wedding-gold cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Wedding Planning</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Traditional Ceremonies</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Vendor Directory</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Wedding Gallery</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Budget Calculator</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Full Event Planning</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Venue Selection</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Catering Services</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Photography</a></li>
              <li><a href="#" className="hover:text-wedding-gold transition-colors">Decoration</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 7728060071</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Gwennieseventorganiser@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 " />
                <span>308 Vijay Path, Gurunanak Pura, Tilak Nagar, Jaipur, Rajasthan 302007</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Shaadi Samachar. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;