import React, { useState } from 'react';
import { Users, Upload, Send, Heart, Star, Camera, Music, Palette, Gift } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    role: '',
    about: '',
    resume: null as File | null,
    portfolio: '',
    availability: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  let resumeUrl = '';
  if (formData.resume) {
    try {
      const storageRef = ref(storage, `resumes/${formData.resume.name}`);
      await uploadBytes(storageRef, formData.resume);
      resumeUrl = await getDownloadURL(storageRef);
      console.log('File uploaded:', resumeUrl);
    } catch (error) {
      console.error('File upload failed:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
  }

  try {
    await emailjs.send(
      'service_9nk1ze8',
      'template_v8nasuh',
      {
        ...formData,
        resume_url: resumeUrl || 'Resume upload failed, please check storage',
        to_email: 'gwennieseventorganiser@gmail.com',
      },
      'iTpt1koz5m-4FD130'
    );
    console.log('Email sent successfully');
    setSubmitStatus('success');
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      role: '',
      about: '',
      resume: null,
      portfolio: '',
      availability: ''
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  const roles = [
    'Freelancers',
    'Volunteers',
    'Freshers',
    'Experienced'
  ];

  const availabilityOptions = [
    'Immediate',
    'Next week',
    'Event-based'
  ];

  const teamBenefits = [
    {
      title: "Creative Freedom",
      description: "Express your creativity in designing memorable events",
      icon: Palette,
      color: "bg-wedding-rose"
    },
    {
      title: "Diverse Events",
      description: "Work on weddings, corporate events, and celebrations",
      icon: Star,
      color: "bg-wedding-gold"
    },
    {
      title: "Professional Growth",
      description: "Learn from experienced event planners and grow your skills",
      icon: Users,
      color: "bg-wedding-sage"
    },
    {
      title: "Flexible Schedule",
      description: "Event-based work with flexible timing options",
      icon: Gift,
      color: "bg-wedding-burgundy"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Career Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-12 w-12 text-wedding-gold mr-3" />
              <h1 className="text-4xl md:text-6xl font-playfair font-bold">
                Join Our Team
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-4">
              Apply to Join Gwennie Event
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              "Let's create unforgettable events together!"
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wedding-brown mb-4">
              Why Join Gwennie Event?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be part of a passionate team that creates magical moments and unforgettable celebrations for families across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${benefit.color} text-white`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-wedding-brown mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wedding-brown mb-4">
              Start Your Journey With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the application form below and let's discuss how you can contribute to creating magical events.
            </p>
          </div>

          <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-wedding-brown mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-wedding-brown mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-wedding-brown mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-wedding-brown mb-2">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors"
                    placeholder="Your city"
                  />
                </div>
              </div>

              {/* Role and Availability */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-wedding-brown mb-2">
                    Role You're Applying For *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors"
                  >
                    <option value="">Select a role</option>
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-wedding-brown mb-2">
                    Availability *
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors"
                  >
                    <option value="">Select availability</option>
                    {availabilityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* About Yourself */}
              <div>
                <label className="block text-sm font-semibold text-wedding-brown mb-2">
                  Tell Us About Yourself *
                </label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors resize-none"
                  placeholder="Share your experience, skills, and why you want to join our team..."
                ></textarea>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-semibold text-wedding-brown mb-2">
                  Upload Resume (PDF/Word) *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-wedding-brown file:text-white hover:file:bg-wedding-burgundy"
                  />
                  <Upload className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
                {formData.resume && (
                  <p className="mt-2 text-sm text-wedding-brown">
                    Selected: {formData.resume.name}
                  </p>
                )}
              </div>

              {/* Portfolio Link */}
              <div>
                <label className="block text-sm font-semibold text-wedding-brown mb-2">
                  Portfolio / Instagram (Optional)
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors"
                  placeholder="https://instagram.com/yourprofile or portfolio website"
                />
              </div>

              {/* Submission Feedback */}
              {submitStatus === 'success' && (
                <p className="text-green-600 font-semibold">
                  Your application has been sent successfully! We'll review it within 48 hours.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 font-semibold">
                  Failed to send your application. Please try again later.
                </p>
              )}

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-wedding-brown text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3 mx-auto ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-wedding-burgundy'
                  }`}
                >
                  <Send className="h-6 w-6" />
                  <span>{isSubmitting ? 'Submitting...' : 'Join the Celebration!'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-16 bg-gradient-to-br from-wedding-brown to-wedding-burgundy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-wedding-gold mx-auto mb-6 fill-current" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Join Our Passionate Team
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            At Gwennie Event, we believe in creating not just beautiful events, but also a supportive work environment where creativity flourishes and careers grow.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Camera className="h-8 w-8 text-wedding-gold mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Creative Projects</h3>
              <p className="text-white/80 text-sm">Work on diverse and exciting event projects</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Music className="h-8 w-8 text-wedding-gold mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Team Collaboration</h3>
              <p className="text-white/80 text-sm">Collaborate with talented professionals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Star className="h-8 w-8 text-wedding-gold mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Career Growth</h3>
              <p className="text-white/80 text-sm">Opportunities for professional development</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xl font-playfair font-bold mb-2">
              Ready to Start Your Event Planning Journey?
            </h3>
            <p className="text-white/80 mb-4">
              Submit your application and let's discuss how you can be part of our success story
            </p>
            <p className="text-wedding-gold font-semibold">
              We review applications within 48 hours and will contact you soon!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;