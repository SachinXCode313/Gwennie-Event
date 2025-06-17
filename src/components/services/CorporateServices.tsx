import React from "react";
import {
  Briefcase,
  Users,
  Camera,
  Music,
  Palette,
  Calendar,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";
import corporate from "../../assets/Corporate.mp4";
import logo from "../../assets/Logo1.png";
import conference from "../../assets/corporate1.jpg";
import team from "../../assets/corporate2.jpg";
import parties from "../../assets/corporate3.jpg";
import brand from "../../assets/corporate4.jpg";
import product from "../../assets/corporate5.jpg";

type PageType = "contact"

interface NavigationProps {
  onNavigate: (page: PageType) => void;
}

const CorporateServices: React.FC<NavigationProps> = ({ onNavigate }) => {
  const corporateFeatures = [
    {
      title: "Conference Management",
      description:
        "Professional conferences, seminars, and business meetings with full technical support",
      image: conference
    },
    {
      title: "Team Building Events",
      description:
        "Engaging activities and retreats to strengthen team bonds and improve collaboration",
      image: team
    },
    {
      title: "Product Launches",
      description:
        "Impactful product launch events with media coverage and brand activation",
      image: product
    },
    {
      title: "Corporate Parties",
      description:
        "Annual celebrations, award ceremonies, and milestone achievement events",
      image: parties
    },
    {
      title: "Brand Activations",
      description:
        "Creative brand experiences and promotional events to engage target audiences",
      image: brand
    },
  ];

  const corporatePackages = [
    {
      name: "Business Meeting",
      price: "₹75,000+",
      features: [
        "Conference room setup",
        "AV equipment",
        "Refreshments",
        "Basic photography",
        "50-100 attendees",
        "Half day event",
      ],
      popular: false,
    },
    {
      name: "Corporate Conference",
      price: "₹2,50,000+",
      features: [
        "Professional venue",
        "Full AV support",
        "Catering services",
        "Photography & videography",
        "200-300 attendees",
        "Full day event",
      ],
      popular: true,
    },
    {
      name: "Grand Corporate Event",
      price: "₹5,00,000+",
      features: [
        "Premium venue",
        "Complete event management",
        "Live streaming",
        "Entertainment program",
        "500+ attendees",
        "Multi-day event",
      ],
      popular: false,
    },
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={corporate} type="video/mp4" />
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center ">
              <img src={logo} alt="logo" className="w-40 h-full" />
            </div>
            <div className="flex items-center justify-center mb-8">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold">
                Corporate Services
              </h1>
            </div>
            <h2 className="text-2xl md:text-4xl font-playfair font-semibold mb-6">
              Professional Business Events
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Elevate your business gatherings with professional corporate event
              management that impresses clients and motivates teams.
            </p>
            <button onClick={()=> onNavigate("contact")} className="group bg-wedding-gold hover:bg-yellow-500 text-wedding-brown px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center space-x-3">
                <span>Plan Your Event</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-brown mb-6">
              Corporate Event Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive corporate event management services that deliver
              professional excellence and business results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateFeatures.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-48">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-wedding-brown mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-brown mb-6">
              Corporate Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional packages designed for different corporate event needs
              and scales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular
                    ? "ring-2 ring-wedding-gold transform scale-105"
                    : "hover:-translate-y-2"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-wedding-gold text-wedding-brown px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-playfair font-bold text-wedding-brown mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-wedding-burgundy">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-wedding-gold" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-colors duration-300 ${
                    pkg.popular
                      ? "bg-wedding-gold hover:bg-yellow-500 text-wedding-brown"
                      : "bg-wedding-brown hover:bg-wedding-burgundy text-white"
                  }`}
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Corporate Gallery
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Professional moments from our successful corporate events and
              business gatherings
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 ${
                  index === 0
                    ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
                    : "aspect-square"
                }`}
              >
                <img
                  src={image}
                  alt={`Corporate ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CorporateServices;
