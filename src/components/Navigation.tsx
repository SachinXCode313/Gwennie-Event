import React, { useState } from "react";
import { Menu, X, Heart, Search, ChevronDown } from "lucide-react";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import logo from "../assets/Logo1.png"; // Adjust the path as necessary

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
  onSearchToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  showSearch: boolean;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  onSearchToggle,
  searchQuery,
  onSearchChange,
  showSearch,
  currentPage,
  onNavigate,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Wedding Events", page: "wedding" as PageType, priority: true },
    { name: "Birthday Parties", page: "birthday" as PageType },
    { name: "Engagement Ceremonies", page: "engagement" as PageType },
    { name: "Anniversary Celebrations", page: "anniversary" as PageType },
    { name: "Inauguration Events", page: "inauguration" as PageType },
    { name: "Corporate Events", page: "corporate" as PageType },
    { name: "Farewell & Welcome", page: "farewell" as PageType },
    { name: "Proposal & Date Setup", page: "proposal" as PageType },
    { name: "Festive Parties", page: "festive" as PageType },
  ];

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleServiceSelect = (page: PageType) => {
    onNavigate(page);
    setIsServicesOpen(false);
  };

  return (
    <nav className="bg-cream/95 backdrop-blur-sm shadow-sm border-b border-wedding-brown/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            {/* <Heart className="h-8 w-8 text-wedding-brown fill-current" /> */}
            <img src={logo} alt="logo" className="w-14 h-full" />
            <span className="text-xl md:text-2xl font-playfair font-bold text-wedding-brown">
              Gwennies Events
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate("home")}
              className={`transition-colors ${
                currentPage === "home"
                  ? "text-wedding-burgundy font-semibold"
                  : "text-wedding-brown hover:text-wedding-burgundy"
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={handleServicesClick}
                className={`flex items-center space-x-1 transition-colors ${
                  [
                    "wedding",
                    "birthday",
                    "engagement",
                    "anniversary",
                    "inauguration",
                    "corporate",
                    "farewell",
                    "proposal",
                    "festive",
                  ].includes(currentPage)
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
                    <button
                      key={service.page}
                      onClick={() => handleServiceSelect(service.page)}
                      className={`w-full text-left px-4 py-3 hover:bg-cream transition-colors flex items-center justify-between ${
                        currentPage === service.page
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
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate("blog")}
              className={`transition-colors ${
                currentPage === "blog"
                  ? "text-wedding-burgundy font-semibold"
                  : "text-wedding-brown hover:text-wedding-burgundy"
              }`}
            >
              Blog
            </button>
            {/* <button 
              onClick={() => onNavigate('gallery')}
              className={`transition-colors ${
                currentPage === 'gallery' 
                  ? 'text-wedding-burgundy font-semibold' 
                  : 'text-wedding-brown hover:text-wedding-burgundy'
              }`}
            >
              Gallery
            </button> */}
            <button
              onClick={() => onNavigate("contact")}
              className={`transition-colors ${
                currentPage === "contact"
                  ? "text-wedding-burgundy font-semibold"
                  : "text-wedding-brown hover:text-wedding-burgundy"
              }`}
            >
              Contact
            </button>
            {currentPage === "blog" && (
              <Search
                className="h-5 w-5 text-wedding-brown hover:text-wedding-burgundy cursor-pointer transition-colors"
                onClick={onSearchToggle}
              />
            )}
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
            {currentPage === "blog" && (
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
        {showSearch && currentPage === "blog" && (
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
              <button
                onClick={() => {
                  onNavigate("home");
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors ${
                  currentPage === "home"
                    ? "text-wedding-burgundy font-semibold"
                    : "text-wedding-brown hover:text-wedding-burgundy"
                }`}
              >
                Home
              </button>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-wedding-brown font-semibold">
                  Services:
                </div>
                {services.map((service) => (
                  <button
                    key={service.page}
                    onClick={() => {
                      onNavigate(service.page);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left pl-4 py-2 transition-colors flex items-center justify-between ${
                      currentPage === service.page
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
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  onNavigate("blog");
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors ${
                  currentPage === "blog"
                    ? "text-wedding-burgundy font-semibold"
                    : "text-wedding-brown hover:text-wedding-burgundy"
                }`}
              >
                Blog
              </button>
              {/* <button 
                onClick={() => {
                  onNavigate('gallery');
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors ${
                  currentPage === 'gallery' 
                    ? 'text-wedding-burgundy font-semibold' 
                    : 'text-wedding-brown hover:text-wedding-burgundy'
                }`}
              >
                Gallery
              </button> */}
              <button
                onClick={() => {
                  onNavigate("contact");
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors ${
                  currentPage === "contact"
                    ? "text-wedding-burgundy font-semibold"
                    : "text-wedding-brown hover:text-wedding-burgundy"
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
