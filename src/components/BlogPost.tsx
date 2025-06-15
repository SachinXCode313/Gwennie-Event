import React from 'react';
import { Clock, User, ArrowLeft, Heart, MessageCircle, Share2 } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types/blog';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
  onLike: (id: number) => void;
  isLiked: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack, onLike, isLiked }) => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white border-b border-wedding-brown/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-wedding-brown hover:text-wedding-burgundy transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </button>
          
          <div className="mb-4">
            <span className="bg-wedding-brown text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-wedding-brown mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <span>{post.date}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onLike(post.id)}
                className={`flex items-center space-x-1 transition-colors ${
                  isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                }`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>{post.likes}</span>
              </button>
              <div className="flex items-center space-x-1 text-gray-500">
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </div>
              <button className="text-gray-500 hover:text-wedding-brown transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="h-64 md:h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              '--tw-prose-headings': '#765638',
              '--tw-prose-body': '#374151',
              '--tw-prose-links': '#765638',
            } as React.CSSProperties}
          />
          
          {/* Engagement Actions */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => onLike(post.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                    isLiked 
                      ? 'bg-red-50 text-red-600 border border-red-200' 
                      : 'bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-600 border border-gray-200'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{isLiked ? 'Liked' : 'Like'}</span>
                  <span className="text-sm">({post.likes})</span>
                </button>
                
                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-50 text-gray-600 hover:bg-wedding-brown hover:text-white transition-colors border border-gray-200">
                  <MessageCircle className="h-5 w-5" />
                  <span>Comment</span>
                  <span className="text-sm">({post.comments})</span>
                </button>
              </div>
              
              <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-50 text-gray-600 hover:bg-wedding-brown hover:text-white transition-colors border border-gray-200">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;