import React from "react";
import {
  Gift,
  Cake,
  Music,
  Camera,
  Palette,
  Users,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";
import birthday from "../../assets/birthday.mp4";
import logo from "../../assets/Logo1.png";
import kidsbirthday from "../../assets/birthday4.jpg";
import adultbirthday from "../../assets/birthday2.jpg";
import themedbirthday from "../../assets/birthday3.jpg";
import entertainmentbirthday from "../../assets/birthday6.jpg";
import photographyservice from "../../assets/birthday5.jpg";
import { useNavigate } from "react-router-dom";

const BirthdayServices: React.FC = () => {
  const navigate = useNavigate();
  const birthdayFeatures = [
    {
      title: "Kids Birthday Parties",
      description:
        "Magical themed parties with entertainment, games, and age-appropriate activities",
      image: kidsbirthday,
    },
    {
      title: "Adult Celebrations",
      description:
        "Sophisticated milestone birthday parties with elegant themes and entertainment",
      image: adultbirthday,
    },
    {
      title: "Themed Decorations",
      description:
        "Custom decorations matching your favorite themes, colors, and personality",
      image: themedbirthday,
    },
    {
      title: "Entertainment & Games",
      description:
        "Professional entertainers, DJs, games, and interactive activities for all ages",
      image: entertainmentbirthday,
    },
    {
      title: "Photography Services",
      description:
        "Capture every smile and precious moment with professional birthday photography",
      image: photographyservice,
    },
  ];

  const birthdayPackages = [
    {
      name: "Kids Party Package",
      price: "₹25,000+",
      features: [
        "Themed decorations",
        "Entertainment & games",
        "Birthday cake",
        "Party favors",
        "Photography",
        "2-3 hours celebration",
      ],
      popular: true,
    },
    {
      name: "Teen Celebration",
      price: "₹40,000+",
      features: [
        "Modern themes",
        "DJ & music",
        "Photo booth",
        "Catering",
        "Decorations",
        "4-5 hours party",
      ],
    },
    {
      name: "Adult Milestone",
      price: "₹60,000+",
      features: [
        "Elegant venue",
        "Premium catering",
        "Live entertainment",
        "Professional photography",
        "Custom decorations",
        "Full day celebration",
      ],
    },
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=500",
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
            <source src={birthday} type="video/mp4" />
            <div className="w-full h-full bg-gradient-to-br from-wedding-gold to-yellow-500"></div>
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center ">
              <img src={logo} alt="logo" className="w-40 h-full" />
            </div>
            <div className="flex items-center justify-center mb-8">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold">
                Birthday Services
              </h1>
            </div>
            <h2 className="text-2xl md:text-4xl font-playfair font-semibold mb-6">
              Celebrating Life's Special Moments
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              From magical kids parties to milestone celebrations, we create
              unforgettable birthday experiences filled with joy and laughter.
            </p>
            <button onClick={() => navigate("/contact")} className="group bg-wedding-gold hover:bg-yellow-500 text-wedding-brown px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center space-x-3">
                <span>Plan Your Party</span>
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
              Birthday Party Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating magical moments for birthdays of all ages with
              personalized themes and entertainment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {birthdayFeatures.map((feature, index) => {
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
                      <div className="bg-wedding-gold text-wedding-brown p-2 rounded-full">
                      </div>
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

      {/* Packages Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-brown mb-6">
              Birthday Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored birthday packages for every age and celebration style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {birthdayPackages.map((pkg, index) => (
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
      {/* <section className="py-20 bg-gradient-to-br from-wedding-gold to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-brown mb-6">
              Birthday Gallery
            </h2>
            <p className="text-xl text-wedding-brown/80 max-w-3xl mx-auto">
              Moments of joy and celebration from our memorable birthday parties
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
                  alt={`Birthday ${index + 1}`}
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

export default BirthdayServices;
