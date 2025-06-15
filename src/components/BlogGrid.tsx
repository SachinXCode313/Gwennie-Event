import React from 'react';
import { Clock, User, Heart, MessageCircle } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogGridProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
  onLike: (id: number) => void;
  likedPosts: Set<number>;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts, onPostClick, onLike, likedPosts }) => {
  if (posts.length === 0) {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
        </div>
      </div>
    );
  }

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wedding-brown mb-8 text-center">
              Featured Article
            </h2>
            <article 
              className="bg-cream rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => onPostClick(featuredPost)}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-wedding-brown text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-playfair font-bold text-wedding-brown mb-4 leading-tight hover:text-wedding-burgundy transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onLike(featuredPost.id);
                        }}
                        className={`flex items-center space-x-1 transition-colors ${
                          likedPosts.has(featuredPost.id) ? 'text-red-500' : 'hover:text-red-500'
                        }`}
                      >
                        <Heart className={`h-4 w-4 ${likedPosts.has(featuredPost.id) ? 'fill-current' : ''}`} />
                        <span>{featuredPost.likes}</span>
                      </button>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{featuredPost.comments}</span>
                      </div>
                    </div>
                    <button className="text-wedding-brown hover:text-wedding-burgundy font-semibold transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {regularPosts.length > 0 && (
          <>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-wedding-brown mb-8 text-center">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-cream border border-wedding-brown/10 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => onPostClick(post)}
                >
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
                    <h3 className="text-xl font-playfair font-bold text-wedding-brown mb-3 leading-tight hover:text-wedding-burgundy transition-colors">
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
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onLike(post.id);
                          }}
                          className={`flex items-center space-x-1 transition-colors ${
                            likedPosts.has(post.id) ? 'text-red-500' : 'hover:text-red-500'
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                          <span>{post.likes}</span>
                        </button>
                        <div className="flex items-center space-x-1">
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
          </>
        )}
      </div>
    </div>
  );
};

export default BlogGrid;