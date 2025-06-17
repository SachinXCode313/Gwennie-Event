import React, { useState, useMemo, useEffect } from "react";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import BlogHero from "./components/BlogHero";
import BlogCategories from "./components/BlogCategories";
import BlogGrid from "./components/BlogGrid";
import BlogPost from "./components/BlogPost";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import WeddingServices from "./components/services/WeddingServices";
import BirthdayServices from "./components/services/BirthdayServices";
import EngagementServices from "./components/services/EngagementServices";
import AnniversaryServices from "./components/services/AnniversaryServices";
import InaugurationServices from "./components/services/InaugurationServices";
import CorporateServices from "./components/services/CorporateServices";
import FarewellServices from "./components/services/FarewellServices";
import ProposalServices from "./components/services/ProposalServices";
import FestiveServices from "./components/services/FestiveServices";

import { blogPosts as initialBlogPosts } from "./data/blogData";
import { BlogPost as BlogPostType } from "./types/blog";

type PageType =
  | "home"
  | "blog"
  | "gallery"
  | "contact"
  | "wedding"
  | "birthday"
  | "engagement"
  | "anniversary"
  | "inauguration"
  | "corporate"
  | "farewell"
  | "proposal"
  | "festive";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [blogPosts, selectedCategory, searchQuery]);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery("");
    }
  };

  const handlePostClick = (post: BlogPostType) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const newLikedPosts = new Set(prev);
      const liked = newLikedPosts.has(postId);

      if (liked) {
        newLikedPosts.delete(postId);
      } else {
        newLikedPosts.add(postId);
      }

      // Immutably update likes count in posts state
      setBlogPosts((prevPosts) =>
        prevPosts.map((p) =>
          p.id === postId ? { ...p, likes: p.likes + (liked ? -1 : 1) } : p
        )
      );

      return newLikedPosts;
    });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery("");
    setShowSearch(false);
  };

  const handleNavigation = (page: PageType) => {
    setCurrentPage(page);
    setSelectedPost(null);
    setSearchQuery("");
    setShowSearch(false);
  };

  const pages: Record<PageType, JSX.Element> = {
    home: (
      <HomePage
        onNavigate={handleNavigation}
      />
    ),
    gallery: <Gallery />,
    contact: <Contact />,
    wedding: <WeddingServices />,
    birthday: <BirthdayServices />,
    engagement: <EngagementServices />,
    anniversary: <AnniversaryServices />,
    inauguration: <InaugurationServices />,
    corporate: <CorporateServices />,
    farewell: <FarewellServices />,
    proposal: <ProposalServices />,
    festive: <FestiveServices />,
    blog: (
      <>
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
      </>
    ),
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedPost]);

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

      {selectedPost ? (
        <BlogPost
          post={selectedPost}
          onBack={handleBackToBlog}
          onLike={handleLike}
          isLiked={likedPosts.has(selectedPost.id)}
        />
      ) : (
        pages[currentPage] || pages["blog"]
      )}

      {currentPage === "home"}
      <Footer
        onNavigate={handleNavigation}
      />
    </div>
  );
}

export default App;
