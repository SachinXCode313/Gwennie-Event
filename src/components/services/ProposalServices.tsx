import React from 'react';
import { Heart, Camera, Music, Palette, MapPin, Gift, ArrowRight, Star, CheckCircle } from 'lucide-react';

const ProposalServices = () => {
  const proposalFeatures = [
    {
      title: "Romantic Proposals",
      description: "Intimate and personalized marriage proposal setups that create magical moments",
      icon: Heart,
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Date Night Planning",
      description: "Romantic date experiences from candlelit dinners to adventure dates",
      icon: MapPin,
      image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Surprise Photography",
      description: "Hidden photographers to capture the perfect proposal moment and reactions",
      icon: Camera,
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Romantic Ambiance",
      description: "Beautiful lighting, music, and decorations to set the perfect mood",
      icon: Music,
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Custom Decorations",
      description: "Personalized setups with flowers, candles, and meaningful elements",
      icon: Palette,
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Memory Keepsakes",
      description: "Custom gifts and mementos to commemorate your special moment",
      icon: Gift,
      image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const proposalPackages = [
    {
      name: "Simple Proposal",
      price: "₹25,000+",
      features: ["Basic romantic setup", "Surprise photography", "Floral arrangements", "Background music", "Memory book", "2-3 hours planning"],
      popular: false
    },
    {
      name: "Dream Proposal",
      price: "₹75,000+",
      features: ["Premium location setup", "Professional photography", "Custom decorations", "Live music", "Celebration dinner", "Full day experience"],
      popular: true
    },
    {
      name: "Grand Proposal",
      price: "₹1,50,000+",
      features: ["Luxury venue", "Videography included", "Elaborate decorations", "Entertainment program", "Family celebration", "Multi-location experience"],
      popular: false
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=500"
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
            <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            <div className="w-full h-full bg-gradient-to-br from-pink-500 to-red-600"></div>
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Heart className="h-16 w-16 text-wedding-gold fill-current mr-4" />
              <h1 className="text-5xl md:text-7xl font-playfair font-bold">
                Proposal & Date Setup
              </h1>
            </div>
            <h2 className="text-2xl md:text-4xl font-playfair font-semibold mb-6">
              Creating Perfect Romantic Moments
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Make your proposal unforgettable with romantic setups and intimate date experiences that capture hearts and create lasting memories.
            </p>
            <button className="group bg-wedding-gold hover:bg-yellow-500 text-wedding-brown px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center space-x-3">
                <span>Plan Your Proposal</span>
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
              Romantic Experience Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating magical proposal moments and romantic date experiences that tell your unique love story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proposalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
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
                        <IconComponent className="h-6 w-6" />
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
              Proposal Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Romantic packages designed to make your proposal moment absolutely perfect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {proposalPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular ? 'ring-2 ring-wedding-gold transform scale-105' : 'hover:-translate-y-2'
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

                <button className={`w-full py-3 rounded-full font-semibold transition-colors duration-300 ${
                  pkg.popular
                    ? 'bg-wedding-gold hover:bg-yellow-500 text-wedding-brown'
                    : 'bg-wedding-brown hover:bg-wedding-burgundy text-white'
                }`}>
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      {/* <section className="py-20 bg-gradient-to-br from-pink-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Romantic Gallery
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Beautiful moments from our romantic proposals and date setups
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 ${
                  index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
                }`}
              >
                <img
                  src={image}
                  alt={`Proposal ${index + 1}`}
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

export default ProposalServices;