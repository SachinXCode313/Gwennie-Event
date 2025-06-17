import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Search, ChevronDown } from "lucide-react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "../assets/Logo1.png"; // Adjust the path as necessary

interface NavigationProps {
  onSearchToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  showSearch: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  onSearchToggle,
  searchQuery,
  onSearchChange,
  showSearch,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation(); // Get current route

  const services = [
    { name: "Wedding Events", page: "/wedding", priority: true },
    { name: "Birthday Parties", page: "/birthday" },
    { name: "Engagement Ceremonies", page: "/engagement" },
    { name: "Anniversary Celebrations", page: "/anniversary" },
    { name: "Inauguration Events", page: "/inauguration" },
    { name: "Corporate Events", page: "/corporate" },
    { name: "Farewell & Welcome", page: "/farewell" },
    { name: "Proposal & Date Setup", page: "/proposal" },
    { name: "Festive Parties", page: "/festive" },
  ];

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="bg-cream/95 backdrop-blur-sm shadow-sm border-b border-wedding-brown/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-14 h-full" />
            <span className="text-xl md:text-2xl font-playfair font-bold text-wedding-brown">
              Gwennies Events
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                location.pathname === "/"
                  ? "text-wedding-burgundy font-semibold"
                  : "text-wedding-brown hover:text-wedding-burgundy"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={handleServicesClick}
                className={`flex items-center space-x-1 transition-colors ${
                  services.some((service) => location.pathname === service.page)
                    ? "text-wedding-burgundy font-semibold"
                    : "text-wedding-brown hover:text-wedding-burgundy"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-wedding-brown/10 py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.page}
                      to={service.page}
                      onClick={() => setIsServicesOpen(false)}
                      className={`block w-full text-left px-4 py-3 hover:bg-cream transition-colors flex items-center justify-between ${
                        location.pathname === service.page
                          ? "text-wedding-burgundy font-semibold bg-cream"
                          : "text-wedding-brown"
                      }`}
                    >
                      <span>{service.name}</span>
                      {service.priority && (
                        <span className="text-xs bg-wedding-gold text-wedding-brown px-2 py-1 rounded-full font-medium">
                          Priority
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`transition-colors ${
                location.pathname === "/blog"
                  ? "text-wedding-burgundy font-semibold"
                  : "text-wedding-brown hover:text-wedding-burgundy"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/career"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left transition-colors ${
                location.pathname === "/career"
                  ? "text-wedding-burgundy font-semibold"
                  : "text-wedding-brown hover:text-wedding-burgundy"
              }`}
            >
              Career
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${
                location.pathname === "/contact"
                  ? "text-wedding-burgundy font-semibold"
                  : "text-wedding-brown hover:text-wedding-burgundy"
              }`}
            >
              Contact
            </Link>
            {location.pathname === "/blog" && (
              <Search
                className="h-5 w-5 text-wedding-brown hover:text-wedding-burgundy cursor-pointer transition-colors"
                onClick={onSearchToggle}
              />
            )}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61577036553067"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-wedding-brown cursor-pointer transition-colors hover:text-wedding-gold" />
              </a>
              <a
                href="https://www.instagram.com/gwennies_events/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-wedding-brown cursor-pointer transition-colors hover:text-wedding-gold" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=7728060071&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 text-wedding-brown cursor-pointer transition-colors hover:text-wedding-gold" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61577036553067"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-wedding-brown cursor-pointer transition-colors hover:text-wedding-gold" />
              </a>
              <a
                href="https://www.instagram.com/gwennies_events/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-wedding-brown cursor-pointer transition-colors hover:text-wedding-gold" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=7728060071&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 text-wedding-brown cursor-pointer transition-colors hover:text-wedding-gold" />
              </a>
            </div>
            {location.pathname === "/blog" && (
              <Search
                className="h-5 w-5 text-wedding-brown hover:text-wedding-burgundy cursor-pointer transition-colors"
                onClick={onSearchToggle}
              />
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-wedding-brown hover:text-wedding-burgundy transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && location.pathname === "/blog" && (
          <div className="py-4 border-t border-wedding-brown/10">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-2 border border-wedding-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 bg-white"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-wedding-brown/10">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${
                  location.pathname === "/"
                    ? "text-wedding-burgundy font-semibold"
                    : "text-wedding-brown hover:text-wedding-burgundy"
                }`}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-wedding-brown font-semibold">
                  Services:
                </div>
                {services.map((service) => (
                  <Link
                    key={service.page}
                    to={service.page}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left pl-4 py-2 transition-colors flex items-center justify-between ${
                      location.pathname === service.page
                        ? "text-wedding-burgundy font-semibold"
                        : "text-wedding-brown hover:text-wedding-burgundy"
                    }`}
                  >
                    <span>{service.name}</span>
                    {service.priority && (
                      <span className="text-xs bg-wedding-gold text-wedding-brown px-2 py-1 rounded-full font-medium">
                        Priority
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${
                  location.pathname === "/blog"
                    ? "text-wedding-burgundy font-semibold"
                    : "text-wedding-brown hover:text-wedding-burgundy"
                }`}
              >
                Blog
              </Link>
              <Link
                to="/career"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${
                  location.pathname === "/career"
                    ? "text-wedding-burgundy font-semibold"
                    : "text-wedding-brown hover:text-wedding-burgundy"
                }`}
              >
                Career
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${
                  location.pathname === "/contact"
                    ? "text-wedding-burgundy font-semibold"
                    : "text-wedding-brown hover:text-wedding-burgundy"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
