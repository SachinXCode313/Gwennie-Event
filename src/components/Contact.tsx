import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Heart,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import bg from "../assets/festive6.jpg"; // Replace with your background image
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bg}
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <Phone className="h-12 w-12 text-wedding-gold mr-3" />
              <h1 className="text-4xl md:text-6xl font-playfair font-bold">
                Contact Us
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Let's discuss your dream event and bring your vision to life with
              our expert planning services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wedding-brown mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help you plan the perfect event. Reach out to us
              through any of the following channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-wedding-brown text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-wedding-brown mb-2">
                Phone
              </h3>
              <p className="text-gray-600 mb-2">Call us directly</p>
              <a
                href="tel:+917728060071"
                className="text-wedding-burgundy font-semibold hover:text-wedding-brown transition-colors"
              >
                +91 7728060071
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-wedding-gold text-wedding-brown w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-wedding-brown mb-2">
                Email
              </h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a
                href="mailto:gwennieseventorganiser@gmail.com"
                className="text-wedding-burgundy font-semibold hover:text-wedding-brown transition-colors break-words"
              >
                gwennieseventorganiser@gmail.com
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-wedding-rose text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-wedding-brown mb-2">
                Address
              </h3>
              <p className="text-gray-600 mb-2">Visit our office</p>
              <a
                href="https://maps.app.goo.gl/x7sSt5sXY8DibR93A"
                className="text-wedding-burgundy font-semibold text-sm hover:text-wedding-brown transition-colors"
              >
                308 Vijay Path, Gurunanak Pura
                <br />
                Tilak Nagar, Jaipur, Rajasthan
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-wedding-burgundy text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-wedding-brown mb-2">
                Hours
              </h3>
              <p className="text-gray-600 mb-2">We're available</p>
              <p className="text-wedding-burgundy font-semibold text-sm">
                Mon - Sat: 9:00 AM - 8:00 PM
                <br />
                Sun: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wedding-brown mb-6">
                Plan Your Event
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours to discuss your event requirements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                  <div>
                    <label className="block text-sm font-semibold text-wedding-brown mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="engagement">Engagement</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="inauguration">Inauguration</option>
                      <option value="farewell">Farewell/Welcome</option>
                      <option value="proposal">Proposal Setup</option>
                      <option value="festival">Festival Party</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-wedding-brown mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-wedding-brown mb-2">
                      Guest Count
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors"
                    >
                      <option value="">Select guest count</option>
                      <option value="50-100">50-100 guests</option>
                      <option value="100-200">100-200 guests</option>
                      <option value="200-300">200-300 guests</option>
                      <option value="300-500">300-500 guests</option>
                      <option value="500+">500+ guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-wedding-brown mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="1-3">₹1-3 Lakhs</option>
                    <option value="3-5">₹3-5 Lakhs</option>
                    <option value="5-10">₹5-10 Lakhs</option>
                    <option value="10-20">₹10-20 Lakhs</option>
                    <option value="20+">₹20+ Lakhs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-wedding-brown mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown/30 focus:border-wedding-brown transition-colors resize-none"
                    placeholder="Tell us about your event vision, special requirements, or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-wedding-brown hover:bg-wedding-burgundy text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wedding-brown mb-6">
                Visit Our Office
              </h2>
              <p className="text-gray-600 mb-8">
                Located in the heart of Jaipur, our office is easily accessible
                and we welcome you to visit us for a personal consultation.
              </p>

              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0123456789!2d75.8!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6e8b1234567%3A0x1234567890abcdef!2s308%20Vijay%20Path%2C%20Gurunanak%20Pura%2C%20Tilak%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shaadi Samachar Office Location"
                ></iframe>
              </div>

              <div className="mt-8 bg-cream rounded-2xl p-6">
                <h3 className="text-xl font-playfair font-bold text-wedding-brown mb-4">
                  Office Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-wedding-burgundy mt-1" />
                    <div>
                      <p className="font-semibold text-wedding-brown">
                        Address:
                      </p>
                      <p className="text-gray-600">
                        308 Vijay Path, Gurunanak Pura, Tilak Nagar, Jaipur,
                        Rajasthan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-wedding-burgundy mt-1" />
                    <div>
                      <p className="font-semibold text-wedding-brown">
                        Business Hours:
                      </p>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 8:00 PM
                      </p>
                      <p className="text-gray-600">
                        Sunday: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & CTA */}
      <section className="py-16 bg-gradient-to-br from-wedding-brown to-wedding-burgundy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-wedding-gold mx-auto mb-6 fill-current" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Follow Our Journey
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Stay connected with us on social media for the latest event
            inspiration, behind-the-scenes moments, and client celebrations.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
                href="https://www.facebook.com/profile.php?id=61577036553067"
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
                href="https://www.instagram.com/gwennies_events/"
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
                href="https://api.whatsapp.com/send/?phone=7728060071&text&type=phone_number&app_absent=0"
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
