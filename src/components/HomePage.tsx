import React, { useState, useEffect } from "react";
import {
  Heart,
  Play,
  ArrowRight,
  Star,
  Users,
  Calendar,
  Camera,
  Utensils,
  Music,
  Gift,
  CheckCircle,
} from "lucide-react";

import home from "../assets/home1.mp4"; 
import logo from "../assets/Logo1.png";
const HomePage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const services = [
    {
      title: "Wedding Planning",
      description:
        "Complete wedding planning from traditional ceremonies to modern celebrations",
      image:
        "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Heart,
      featured: true,
    },
    {
      title: "Birthday Celebrations",
      description:
        "Memorable birthday parties for all ages with personalized themes",
      image:
        "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Gift,
    },
    {
      title: "Corporate Events",
      description:
        "Professional gatherings, conferences, and team building activities",
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Users,
    },
    {
      title: "Social Parties",
      description: "Themed celebrations, festivals, and social gatherings",
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Music,
    },
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const planningSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "Share your vision and requirements with our expert planners",
      icon: Users,
    },
    {
      step: 2,
      title: "Budget & Timeline",
      description:
        "Create a realistic budget and timeline for your perfect event",
      icon: Calendar,
    },
    {
      step: 3,
      title: "Venue Selection",
      description: "Choose from our curated list of premium venues",
      icon: Star,
    },
    {
      step: 4,
      title: "Vendor Coordination",
      description: "We handle all vendor bookings and coordination",
      icon: CheckCircle,
    },
    {
      step: 5,
      title: "Event Execution",
      description: "Sit back and enjoy your perfectly planned celebration",
      icon: Heart,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % planningSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src={home}
              type="video/mp4"
            />
            {/* Fallback image if video doesn't load */}
            <div className="w-full h-full bg-gradient-to-br from-wedding-brown to-wedding-burgundy"></div>
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className=" max-w-4xl mx-auto px-4">
            {/* Logo */}
            <div className="flex items-center justify-center ">
              <img src={logo} alt="logo" className="w-40 h-full" />
            </div>

            <div className="flex items-center justify-center mb-8">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold">
                Gwennies Events
              </h1>
            </div>

            {/* Title & Slogan */}
            <h2 className="text-2xl md:text-4xl font-playfair font-semibold mb-4">
              Your Moment, Our Royal Touch
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              From traditional Indian weddings to corporate events, we bring
              your dreams to life with unmatched elegance and attention to
              detail.
            </p>

            {/* CTA Button */}
            <button className="group bg-wedding-gold hover:bg-yellow-500 text-wedding-brown px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center space-x-3">
                <span>Plan Your Event</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-wedding-gold">500+</div>
                <div className="text-sm text-white/80">Events Managed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-wedding-gold">50+</div>
                <div className="text-sm text-white/80">Premium Venues</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-wedding-gold">100+</div>
                <div className="text-sm text-white/80">Corporate Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-wedding-gold">
                  1000+
                </div>
                <div className="text-sm text-white/80">Happy Families</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-brown mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating unforgettable experiences across all
              types of celebrations, with wedding planning as our signature
              expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    service.featured ? "lg:col-span-2 lg:row-span-1" : ""
                  }`}
                >
                  <div
                    className={`relative ${service.featured ? "h-80" : "h-64"}`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-wedding-gold text-wedding-brown px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-current" />
                          <span>Priority Service</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-wedding-gold text-wedding-brown p-2 rounded-full">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3
                        className={`font-playfair font-bold ${
                          service.featured ? "text-2xl" : "text-xl"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                    <button className="mt-4 text-wedding-gold hover:text-yellow-300 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wedding-brown mb-6">
              Our Event Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the magic we create through our carefully curated
              collection of memorable celebrations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-square hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-wedding-brown hover:bg-wedding-burgundy text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Planning Steps Section */}
      <section className="py-20 bg-gradient-to-br from-wedding-brown to-wedding-burgundy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Plan Your Wedding in Just 5 Simple Steps
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our streamlined process ensures your dream wedding becomes reality
              with minimal stress and maximum joy.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {planningSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = currentStep === index;
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-500 transform ${
                    isActive ? "scale-110" : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`relative mb-6 ${
                      isActive ? "animate-pulse" : ""
                    }`}
                  >
                    <div
                      className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-wedding-gold text-wedding-brown shadow-2xl"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      <IconComponent className="h-10 w-10" />
                    </div>
                    <div
                      className={`absolute -top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-wedding-burgundy text-white"
                          : "bg-wedding-gold text-wedding-brown"
                      }`}
                    >
                      {step.step}
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-playfair font-bold mb-3 transition-colors duration-300 ${
                      isActive ? "text-wedding-gold" : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <button className="bg-wedding-gold hover:bg-yellow-500 text-wedding-brown px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Planning Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
