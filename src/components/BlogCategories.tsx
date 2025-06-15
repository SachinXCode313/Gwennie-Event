import React from 'react';
import { Calendar, Camera, Users, Utensils, Palette, Gift, Music, MapPin, Heart, Briefcase, PartyPopper } from 'lucide-react';

interface BlogCategoriesProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({ selectedCategory, onCategorySelect }) => {
  const categories = [
    { name: 'All', icon: Calendar, count: 10, color: 'bg-wedding-brown' },
    { name: 'Wedding Events', icon: Heart, count: 4, color: 'bg-wedding-rose' },
    { name: 'Birthday Events', icon: Gift, count: 2, color: 'bg-wedding-gold' },
    { name: 'Corporate Events', icon: Briefcase, count: 2, color: 'bg-wedding-sage' },
    { name: 'Party Events', icon: PartyPopper, count: 2, color: 'bg-wedding-burgundy' },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wedding-brown mb-4">
            Our Event Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From dream weddings to corporate gatherings, we create memorable experiences for every occasion. 
            Explore our specialized event management services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.name;
            const isWedding = category.name === 'Wedding Events';
            return (
              <div
                key={index}
                onClick={() => onCategorySelect(category.name)}
                className={`group cursor-pointer border rounded-xl p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isSelected 
                    ? 'bg-wedding-brown text-white border-wedding-brown' 
                    : 'bg-cream hover:bg-white border-wedding-brown/10'
                } ${isWedding ? 'ring-2 ring-wedding-gold ring-opacity-50' : ''}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 ${
                  isSelected 
                    ? 'bg-white text-wedding-brown' 
                    : `${category.color} text-white`
                }`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className={`font-semibold text-sm mb-1 ${
                  isSelected ? 'text-white' : 'text-wedding-brown'
                }`}>
                  {category.name}
                  {isWedding && <span className="text-wedding-gold ml-1">★</span>}
                </h3>
                <p className={`text-xs ${
                  isSelected ? 'text-white/80' : 'text-gray-500'
                }`}>
                  {category.count} {category.count === 1 ? 'article' : 'articles'}
                </p>
                {isWedding && !isSelected && (
                  <p className="text-xs text-wedding-gold font-medium mt-1">Priority Service</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Service Highlights */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-wedding-rose to-wedding-burgundy text-white p-6 rounded-xl">
            <Heart className="h-8 w-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Wedding Events</h3>
            <p className="text-sm opacity-90">Complete wedding planning from traditional ceremonies to modern celebrations</p>
          </div>
          <div className="bg-gradient-to-br from-wedding-gold to-yellow-500 text-wedding-brown p-6 rounded-xl">
            <Gift className="h-8 w-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Birthday Parties</h3>
            <p className="text-sm opacity-90">Memorable birthday celebrations for all ages with personalized themes</p>
          </div>
          <div className="bg-gradient-to-br from-wedding-sage to-green-600 text-white p-6 rounded-xl">
            <Briefcase className="h-8 w-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Corporate Events</h3>
            <p className="text-sm opacity-90">Professional gatherings, conferences, and team building activities</p>
          </div>
          <div className="bg-gradient-to-br from-wedding-burgundy to-red-700 text-white p-6 rounded-xl">
            <PartyPopper className="h-8 w-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Social Parties</h3>
            <p className="text-sm opacity-90">Themed celebrations, festivals, and social gatherings for every occasion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;