import React from 'react';
import { Heart, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin,MessageCircle } from 'lucide-react';
type PageType =
  | "home"
  | "blog"
  | "gallery"
  | "contact"
  | "wedding"
  | "birthday"
  | "engagement"
  | "anniversary"
  | "inauguration"
  | "corporate"
  | "farewell"
  | "proposal"
  | "festive";

interface NavigationProps {
  onNavigate: (page: PageType) => void;
}

const Footer: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-wedding-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-wedding-gold fill-current" />
              <span className="text-2xl font-playfair font-bold">
                Gwennies Events
              </span>
            </div>
            <p className="text-white/80 mb-6">
              Your trusted partner in creating magical Indian wedding celebrations. From traditional ceremonies to modern celebrations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61577036553067"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5  cursor-pointer transition-colors hover:text-wedding-gold" />
              </a>
              <a
                href="https://www.instagram.com/gwennies_events/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Instagram className="h-5 w-5  cursor-pointer transition-colors hover:text-wedding-gold" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=7728060071&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
              <MessageCircle className="h-5 w-5  cursor-pointer transition-colors hover:text-wedding-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><span onClick={() => onNavigate("wedding")} className="hover:text-wedding-gold transition-colors cursor-pointer">Wedding Planning</span></li>
              <li><span onClick={() => onNavigate("birthday")} className="hover:text-wedding-gold transition-colors cursor-pointer">Birthday Celebrations</span></li>
              <li><span onClick={() => onNavigate("corporate")} className="hover:text-wedding-gold transition-colors cursor-pointer">Corporate Events</span></li>
              <li><span onClick={() => onNavigate("blog")} className="hover:text-wedding-gold transition-colors cursor-pointer">Blog</span></li>
              <li><span onClick={() => onNavigate("contact")} className="hover:text-wedding-gold transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li><span onClick={() => onNavigate("wedding")} className="hover:text-wedding-gold transition-colors cursor-pointer">Wedding Events</span></li>
              <li><span onClick={() => onNavigate("birthday")} className="hover:text-wedding-gold transition-colors cursor-pointer">Birthday Parties</span></li>
              <li><span onClick={() => onNavigate("engagement")} className="hover:text-wedding-gold transition-colors cursor-pointer">Engagement Ceremonies</span></li>
              <li><span onClick={() => onNavigate("anniversary")} className="hover:text-wedding-gold transition-colors cursor-pointer">Anniversary Celebrations</span></li>
              <li><span onClick={() => onNavigate("inauguration")} className="hover:text-wedding-gold transition-colors cursor-pointer">Inauguration Events</span></li>
              <li><span onClick={() => onNavigate("corporate")} className="hover:text-wedding-gold transition-colors cursor-pointer">Corporate Events</span></li>
              <li><span onClick={() => onNavigate("farewell")} className="hover:text-wedding-gold transition-colors cursor-pointer">Farewell Parties</span></li>
              <li><span onClick={() => onNavigate("proposal")} className="hover:text-wedding-gold transition-colors cursor-pointer">Proposal & Date Nights</span></li>
              <li><span onClick={() => onNavigate("festive")} className="hover:text-wedding-gold transition-colors cursor-pointer">Festive Parties</span></li>
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
                <span>gwennieseventorganiser@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 " />
                <span>308 Vijay Path, Gurunanak Pura, Tilak Nagar, Jaipur, Rajasthan 302007</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Gwennies Events. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;