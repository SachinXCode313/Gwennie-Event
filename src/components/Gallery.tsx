import React, { useState } from 'react';
import { Camera, Heart, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { name: 'All', count: 24 },
    { name: 'Weddings', count: 8 },
    { name: 'Birthdays', count: 4 },
    { name: 'Corporate', count: 4 },
    { name: 'Festivals', count: 4 },
    { name: 'Proposals', count: 4 }
  ];

  const galleryImages = [
    // Wedding Images
    { id: 1, category: 'Weddings', title: 'Royal Palace Wedding', image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, category: 'Weddings', title: 'Traditional Ceremony', image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, category: 'Weddings', title: 'Mehendi Celebration', image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, category: 'Weddings', title: 'Sangam Night', image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 5, category: 'Weddings', title: 'Baraat Procession', image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, category: 'Weddings', title: 'Reception Party', image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 7, category: 'Weddings', title: 'Destination Wedding', image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 8, category: 'Weddings', title: 'Garden Wedding', image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600' },

    // Birthday Images
    { id: 9, category: 'Birthdays', title: 'Kids Birthday Party', image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 10, category: 'Birthdays', title: 'Milestone Celebration', image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 11, category: 'Birthdays', title: 'Themed Party', image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 12, category: 'Birthdays', title: 'Adult Birthday', image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600' },

    // Corporate Images
    { id: 13, category: 'Corporate', title: 'Conference Event', image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 14, category: 'Corporate', title: 'Product Launch', image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 15, category: 'Corporate', title: 'Team Building', image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 16, category: 'Corporate', title: 'Annual Meeting', image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600' },

    // Festival Images
    { id: 17, category: 'Festivals', title: 'Diwali Celebration', image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 18, category: 'Festivals', title: 'Holi Festival', image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 19, category: 'Festivals', title: 'Navratri Night', image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 20, category: 'Festivals', title: 'Cultural Program', image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600' },

    // Proposal Images
    { id: 21, category: 'Proposals', title: 'Romantic Proposal', image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 22, category: 'Proposals', title: 'Beach Proposal', image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 23, category: 'Proposals', title: 'Garden Setup', image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 24, category: 'Proposals', title: 'Surprise Moment', image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <Camera className="h-12 w-12 text-wedding-gold mr-3" />
              <h1 className="text-4xl md:text-6xl font-playfair font-bold">
                Event Gallery
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Witness the magic we create through our stunning event photography and memorable celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Filter className="h-6 w-6 text-wedding-brown mr-3" />
            <h2 className="text-2xl font-playfair font-bold text-wedding-brown">
              Filter by Category
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-wedding-brown text-white shadow-lg'
                    : 'bg-white text-wedding-brown hover:bg-wedding-brown hover:text-white border border-wedding-brown'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-xl cursor-pointer hover:shadow-2xl transition-all duration-500 ${
                  index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } ${index % 11 === 0 ? 'lg:col-span-2' : ''}`}
                onClick={() => openLightbox(image.id)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-playfair font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {image.category}
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            <img
              src={selectedImageData.image}
              alt={selectedImageData.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white font-playfair font-bold text-xl mb-2">
                {selectedImageData.title}
              </h3>
              <p className="text-white/80">
                {selectedImageData.category}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-wedding-brown to-wedding-burgundy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-wedding-gold mx-auto mb-6 fill-current" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Create Your Own Magical Moments?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us capture the beauty and emotion of your special day with our professional event management and photography services.
          </p>
          <button className="bg-wedding-gold hover:bg-yellow-500 text-wedding-brown px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Plan Your Event
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;