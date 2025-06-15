import React from 'react';
import { Clock, User, Heart, MessageCircle } from 'lucide-react';

const RecentPosts = () => {
  const recentPosts = [
    {
      id: 5,
      title: "Essential Wedding Photography Checklist: Moments You Can't Miss",
      excerpt: "Ensure your photographer captures every precious moment with this comprehensive checklist of must-have wedding shots.",
      author: "Vikram Malhotra",
      readTime: "7 min read",
      date: "March 3, 2024",
      category: "Photography",
      likes: 124,
      comments: 18,
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "Sustainable Indian Weddings: Eco-Friendly Celebration Ideas",
      excerpt: "Plan an environmentally conscious wedding without compromising on tradition or beauty. Green wedding ideas that make a difference.",
      author: "Eco Wedding Co.",
      readTime: "9 min read",
      date: "March 1, 2024",
      category: "Planning Tips",
      likes: 89,
      comments: 12,
      image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      title: "Wedding Guest Etiquette: Do's and Don'ts for Indian Celebrations",
      excerpt: "Navigate Indian wedding customs with confidence. A complete guide to guest etiquette, dress codes, and cultural expectations.",
      author: "Cultural Expert",
      readTime: "5 min read",
      date: "February 28, 2024",
      category: "Etiquette",
      likes: 156,
      comments: 24,
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 8,
      title: "DIY Wedding Decor: Budget-Friendly Indian Wedding Decorations",
      excerpt: "Create stunning wedding decorations without the hefty price tag. Step-by-step tutorials for beautiful DIY Indian wedding decor.",
      author: "Decor by Design",
      readTime: "11 min read",
      date: "February 25, 2024",
      category: "Decor & Themes",
      likes: 203,
      comments: 31,
      image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 9,
      title: "Pre-Wedding Skincare Routine: Glow Like a Bollywood Bride",
      excerpt: "Achieve radiant, camera-ready skin with this comprehensive pre-wedding skincare routine designed for Indian brides.",
      author: "Beauty Guru",
      readTime: "8 min read",
      date: "February 22, 2024",
      category: "Beauty & Style",
      likes: 178,
      comments: 27,
      image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 10,
      title: "Wedding Music Playlist: Traditional and Modern Songs for Every Ceremony",
      excerpt: "Curate the perfect soundtrack for your special day with our collection of traditional and contemporary Indian wedding songs.",
      author: "Music Director",
      readTime: "6 min read",
      date: "February 20, 2024",
      category: "Entertainment",
      likes: 145,
      comments: 19,
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wedding-brown mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the newest trends, tips, and insights in Indian wedding planning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-white border border-wedding-brown/10 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-wedding-brown px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-wedding-brown mb-3 leading-tight hover:text-wedding-burgundy transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
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

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1 hover:text-wedding-burgundy cursor-pointer transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-wedding-burgundy cursor-pointer transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <button className="text-wedding-brown hover:text-wedding-burgundy font-semibold text-sm transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-wedding-brown hover:bg-wedding-burgundy text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;