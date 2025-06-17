import React from "react";
import {
  Heart,
  Camera,
  Music,
  Utensils,
  Palette,
  Gift,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";
import wedding from "../../assets/wedding.mp4";
import logo from "../../assets/Logo1.png";
import haldi from "../../assets/haldi.png";
import destinationwedding from "../../assets/destinationwedding.jpg";
import mehndi from "../../assets/mehndi.jpg";
import sangeet1 from "../../assets/sangeet1.jpg";
import decor from "../../assets/decor.jpg";
import { useNavigate } from "react-router-dom";

const WeddingServices: React.FC = () => {
  const navigate = useNavigate();
  const weddingFeatures = [
    {
      title: "Destination Weddings",
      description:
        "Exotic locations across India and abroad for your dream destination wedding",
      image: destinationwedding,
    },
    {
      title: "Haldi Function",
      description:
        "Let love begin with laughter, turmeric, and yellow hues of joy",
      image:haldi,
    },
    {
      title: "Decoration & Themes",
      description:
        "Stunning mandap designs, floral arrangements, and themed decorations",
      image: decor,
    },
    {
      title: "Mehendi Function",
      description:
        "Color your hands with love, and your evening with music",
      image: mehndi,
    },
    {
      title: "Sangeet Night",
      description:
        "Where music meets magic, and hearts dance without fear",
      image: sangeet1,
    },
  ];

  const weddingPackages = [
    {
      name: "Royal Wedding Package",
      price: "₹15,00,000+",
      features: [
        "Palace venue",
        "500+ guests",
        "3-day celebration",
        "Premium catering",
        "Professional photography",
        "Live entertainment",
      ],
      popular: true,
    },
    {
      name: "Traditional Wedding",
      price: "₹8,00,000+",
      features: [
        "Heritage venue",
        "300+ guests",
        "2-day celebration",
        "Authentic cuisine",
        "Traditional decor",
        "Cultural programs",
      ],
    },
    {
      name: "Intimate Wedding",
      price: "₹3,00,000+",
      features: [
        "Boutique venue",
        "100+ guests",
        "1-day celebration",
        "Personalized service",
        "Custom decor",
        "Professional photos",
      ],
    },
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=500",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={wedding} type="video/mp4" />
            <div className="w-full h-full bg-gradient-to-br from-wedding-brown to-wedding-burgundy"></div>
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
                Wedding Services
              </h1>
            </div>
            <h2 className="text-2xl md:text-4xl font-playfair font-semibold mb-6">
              Creating Your Perfect Love Story
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              From traditional ceremonies to modern celebrations, we craft
              unforgettable wedding experiences that honor your love and
              heritage.
            </p>
            <button onClick={() => navigate("/contact")} className="group bg-wedding-gold hover:bg-yellow-500 text-wedding-brown px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center space-x-3">
                <span>Plan Your Wedding</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Wedding Features */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-brown mb-6">
              Complete Wedding Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail meticulously planned to create the wedding of your
              dreams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingFeatures.map((feature, index) => {
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
                    <div className="absolute bottom-4 left-4">
                    </div>
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

      {/* Wedding Packages */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-brown mb-6">
              Wedding Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated wedding packages designed to
              suit every budget and style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
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
      {/* <section className="py-20 bg-gradient-to-br from-wedding-brown to-wedding-burgundy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Wedding Gallery
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Witness the magic we create through our stunning wedding
              celebrations
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
                  alt={`Wedding ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-wedding-gold hover:bg-yellow-500 text-wedding-brown px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              View Full Gallery
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default WeddingServices;
