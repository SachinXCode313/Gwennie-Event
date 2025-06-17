import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route , useLocation} from "react-router-dom";
import emailjs from "@emailjs/browser";
emailjs.init("iTpt1koz5m-4FD130");

import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import BlogHero from "./components/BlogHero";
import BlogCategories from "./components/BlogCategories";
import BlogGrid from "./components/BlogGrid";
import BlogPost from "./components/BlogPost";
import Newsletter from "./components/Newsletter";
import Career from './components/Career';
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

function ScrollToFirstSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Attempt to find the first section with id="first-section"
    const firstSection = document.getElementById("first-section");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "auto", block: "start" });
    } else {
      // Fallback to top of the page if no first-section is found
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
}


function App() {
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

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <Router >
      <div className="min-h-screen bg-cream">
        <ScrollToFirstSection />
        <Navigation
          onSearchToggle={handleSearchToggle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showSearch={showSearch}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wedding" element={<WeddingServices />} />
          <Route path="/birthday" element={<BirthdayServices />} />
          <Route path="/engagement" element={<EngagementServices />} />
          <Route path="/anniversary" element={<AnniversaryServices />} />
          <Route path="/inauguration" element={<InaugurationServices />} />
          <Route path="/corporate" element={<CorporateServices />} />
          <Route path="/farewell" element={<FarewellServices />} />
          <Route path="/proposal" element={<ProposalServices />} />
          <Route path="/festive" element={<FestiveServices />} />
          <Route
            path="/blog"
            element={
              selectedPost ? (
                <BlogPost
                  post={selectedPost}
                  onBack={handleBackToBlog}
                  onLike={handleLike}
                  isLiked={likedPosts.has(selectedPost.id)}
                />
              ) : (
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
              )
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;