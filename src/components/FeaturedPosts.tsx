import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Complete Guide to Planning a Traditional Hindu Wedding Ceremony",
      excerpt: "From the sacred rituals of Ganesh Puja to the seven vows of Saptapadi, discover the deep meanings behind each traditional ceremony and how to plan them perfectly.",
      author: "Priya Sharma",
      readTime: "12 min read",
      date: "March 15, 2024",
      category: "Traditional Ceremonies",
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Destination Wedding Planning: Top 10 Venues in India",
      excerpt: "Explore breathtaking palaces, beachfront resorts, and heritage hotels that make for unforgettable wedding destinations across incredible India.",
      author: "Rajesh Kumar",
      readTime: "8 min read",
      date: "March 10, 2024",
      category: "Venues",
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Modern Mehendi Designs: Trending Patterns for 2024",
      excerpt: "From minimalist designs to elaborate bridal patterns, discover the latest mehendi trends that are perfect for contemporary Indian brides.",
      author: "Kavita Patel",
      readTime: "6 min read",
      date: "March 8, 2024",
      category: "Beauty & Style",
      image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Budget-Friendly Wedding Catering: Indian Menu Ideas",
      excerpt: "Create a memorable feast without breaking the bank. Expert tips on planning delicious Indian wedding menus that satisfy guests and budgets alike.",
      author: "Chef Amrita Singh",
      readTime: "10 min read",
      date: "March 5, 2024",
      category: "Catering & Food",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wedding-brown mb-4">
            Featured Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked articles from our wedding planning experts to help you create your dream celebration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Main Featured Post */}
          <div className="lg:row-span-2">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="relative h-80">
                <img
                  src={featuredPosts[0].image}
                  alt={featuredPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-wedding-brown text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPosts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-wedding-brown mb-4 leading-tight">
                  {featuredPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <span>{featuredPosts[0].date}</span>
                </div>
                <button className="flex items-center space-x-2 text-wedding-brown hover:text-wedding-burgundy font-semibold transition-colors group">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          </div>

          {/* Side Featured Posts */}
          <div className="space-y-6">
            {featuredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="relative h-48 md:h-full">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-wedding-brown text-white px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-lg font-playfair font-bold text-wedding-brown mb-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;