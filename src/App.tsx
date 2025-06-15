import React, { useState, useMemo } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import BlogHero from './components/BlogHero';
import BlogCategories from './components/BlogCategories';
import BlogGrid from './components/BlogGrid';
import BlogPost from './components/BlogPost';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WeddingServices from './components/services/WeddingServices';
import BirthdayServices from './components/services/BirthdayServices';
import EngagementServices from './components/services/EngagementServices';
import AnniversaryServices from './components/services/AnniversaryServices';
import InaugurationServices from './components/services/InaugurationServices';
import CorporateServices from './components/services/CorporateServices';
import FarewellServices from './components/services/FarewellServices';
import ProposalServices from './components/services/ProposalServices';
import FestiveServices from './components/services/FestiveServices';
import { blogPosts } from './data/blogData';
import { BlogPost as BlogPostType } from './types/blog';

type PageType = 'home' | 'blog' | 'wedding' | 'birthday' | 'engagement' | 'anniversary' | 'inauguration' | 'corporate' | 'farewell' | 'proposal' | 'festive';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery('');
    }
  };

  const handlePostClick = (post: BlogPostType) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newLikedPosts = new Set(prev);
      if (newLikedPosts.has(postId)) {
        newLikedPosts.delete(postId);
        // Update the post likes count
        const post = blogPosts.find(p => p.id === postId);
        if (post) post.likes -= 1;
      } else {
        newLikedPosts.add(postId);
        // Update the post likes count
        const post = blogPosts.find(p => p.id === postId);
        if (post) post.likes += 1;
      }
      return newLikedPosts;
    });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setShowSearch(false);
  };

  const handleNavigation = (page: PageType) => {
    setCurrentPage(page);
    setSelectedPost(null);
    setSearchQuery('');
    setShowSearch(false);
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-cream">
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        <BlogPost
          post={selectedPost}
          onBack={handleBackToBlog}
          onLike={handleLike}
          isLiked={likedPosts.has(selectedPost.id)}
        />
        <Footer />
      </div>
    );
  }

  // Service pages
  if (currentPage === 'wedding') {
    return (
      <div className="min-h-screen">
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        <WeddingServices />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    );
  }

  if (currentPage === 'birthday') {
    return (
      <div className="min-h-screen">
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        <BirthdayServices />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    );
  }

  if (currentPage === 'engagement') {
    return (
      <div className="min-h-screen">
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        <EngagementServices />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    );
  }

  if (currentPage === 'anniversary') {
    return (
      <div className="min-h-screen">
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        <AnniversaryServices />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    );
  }

  if (currentPage === 'inauguration') {
    return (
      <div className="min-h-screen">
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        <InaugurationServices />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    );
  }

  if (currentPage === 'corporate') {
    return (
      <div className="min-h-screen">
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        <CorporateServices />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    );
  }

  if (currentPage === 'farewell') {
    return (
      <div className="min-h-screen">
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        <FarewellServices />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    );
  }

  if (currentPage === 'proposal') {
    return (
      <div className="min-h-screen">
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        <ProposalServices />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    );
  }

  if (currentPage === 'festive') {
    return (
      <div className="min-h-screen">
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        <FestiveServices />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    );
  }

  if (currentPage === 'home') {
    return (
      <div className="min-h-screen">
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />
        <HomePage />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation
        onSearchToggle={handleSearchToggle}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showSearch={showSearch}
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />
      <BlogHero />
      <BlogCategories
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <BlogGrid
        posts={filteredPosts}
        onPostClick={handlePostClick}
        onLike={handleLike}
        likedPosts={likedPosts}
      />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}

export default App;