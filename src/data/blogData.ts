import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  // Wedding Events (Priority - Featured and Multiple Posts)
  {
    id: 1,
    title: "Complete Guide to Hindu Wedding Ceremonies",
    excerpt: "From Ganesh Puja to Saptapadi, discover the sacred rituals and their meanings in traditional Hindu weddings.",
    content: `
      <h2>Understanding Hindu Wedding Traditions</h2>
      <p>Hindu weddings are rich with tradition and spiritual significance. Each ceremony has deep meaning and connects the couple to their cultural heritage.</p>
      
      <h3>Pre-Wedding Ceremonies</h3>
      <ul>
        <li><strong>Ganesh Puja:</strong> Invoking Lord Ganesh's blessings for obstacle-free celebrations</li>
        <li><strong>Mehendi:</strong> Henna application ceremony symbolizing joy and spiritual awakening</li>
        <li><strong>Sangam:</strong> Musical celebration bringing families together</li>
        <li><strong>Haldi:</strong> Turmeric ceremony for purification and blessing</li>
      </ul>
      
      <h3>Main Wedding Rituals</h3>
      <ul>
        <li><strong>Baraat:</strong> Groom's procession to the wedding venue</li>
        <li><strong>Jaimala:</strong> Exchange of garlands between bride and groom</li>
        <li><strong>Saptapadi:</strong> Seven sacred vows around the holy fire</li>
        <li><strong>Sindoor Daan:</strong> Application of vermillion marking the union</li>
      </ul>
      
      <p>Each ritual is performed with specific mantras and has profound spiritual significance that binds the couple in sacred matrimony.</p>
    `,
    author: "Priya Sharma",
    readTime: "8 min read",
    date: "March 15, 2024",
    category: "Wedding Events",
    likes: 156,
    comments: 23,
    image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: 2,
    title: "Destination Wedding Planning in India",
    excerpt: "Explore stunning palaces, heritage hotels, and destination venues perfect for your dream Indian wedding celebration.",
    content: `
      <h2>Magnificent Wedding Venues Across India</h2>
      <p>India offers breathtaking venues that combine luxury with cultural heritage, perfect for creating unforgettable wedding memories.</p>
      
      <h3>1. Udaipur Palace Hotels</h3>
      <p>The City of Lakes offers royal palaces with stunning lake views, perfect for destination weddings with regal grandeur.</p>
      
      <h3>2. Goa Beach Resorts</h3>
      <p>Beachfront celebrations with sunset ceremonies and tropical ambiance for couples seeking a relaxed yet elegant atmosphere.</p>
      
      <h3>3. Rajasthan Heritage Hotels</h3>
      <p>Former maharaja palaces converted into luxury hotels, offering authentic royal wedding experiences.</p>
      
      <h3>4. Kerala Backwater Resorts</h3>
      <p>Serene waterside venues surrounded by lush greenery, ideal for intimate celebrations in nature's lap.</p>
      
      <h3>Planning Tips</h3>
      <ul>
        <li>Book venues 8-12 months in advance</li>
        <li>Consider guest accommodation and transportation</li>
        <li>Plan for weather contingencies</li>
        <li>Coordinate with local vendors and suppliers</li>
      </ul>
    `,
    author: "Rajesh Kumar",
    readTime: "6 min read",
    date: "March 12, 2024",
    category: "Wedding Events",
    likes: 89,
    comments: 15,
    image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Wedding Catering: Traditional Indian Menu Planning",
    excerpt: "Create memorable Indian wedding feasts with traditional dishes, dietary considerations, and presentation ideas.",
    content: `
      <h2>Planning the Perfect Wedding Menu</h2>
      <p>Indian wedding catering requires careful planning to accommodate diverse tastes while honoring traditional flavors.</p>
      
      <h3>Traditional Main Courses</h3>
      <ul>
        <li>Paneer Makhani and Dal Makhani for vegetarian guests</li>
        <li>Chicken Biryani and Mutton Curry for non-vegetarian options</li>
        <li>Regional specialties based on family traditions</li>
        <li>Live cooking stations for fresh preparations</li>
      </ul>
      
      <h3>Street Food Stations</h3>
      <p>Interactive food counters featuring chaat, dosa, and live cooking stations add excitement and variety to the dining experience.</p>
      
      <h3>Dessert Selection</h3>
      <ul>
        <li>Traditional sweets like Gulab Jamun and Rasgulla</li>
        <li>Modern fusion desserts combining Indian flavors</li>
        <li>Live dessert counters for fresh preparations</li>
      </ul>
      
      <h3>Dietary Considerations</h3>
      <p>Ensure options for Jain, vegan, and gluten-free guests. Label dishes clearly and train serving staff about ingredients.</p>
    `,
    author: "Chef Amrita Singh",
    readTime: "7 min read",
    date: "March 8, 2024",
    category: "Wedding Events",
    likes: 98,
    comments: 19,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
  },

  // Birthday Events
  {
    id: 4,
    title: "Milestone Birthday Celebrations: Planning Memorable Parties",
    excerpt: "From sweet sixteen to golden jubilee, create unforgettable birthday celebrations that reflect personality and style.",
    content: `
      <h2>Creating Memorable Birthday Celebrations</h2>
      <p>Birthday parties are personal celebrations that should reflect the individual's personality, interests, and milestone significance.</p>
      
      <h3>Milestone Birthday Ideas</h3>
      <ul>
        <li><strong>Sweet 16:</strong> Elegant themes with photo booths and dance floors</li>
        <li><strong>21st Birthday:</strong> Sophisticated celebrations with cocktail bars</li>
        <li><strong>30th & 40th:</strong> Themed parties reflecting life achievements</li>
        <li><strong>50th & Beyond:</strong> Elegant gatherings with family focus</li>
      </ul>
      
      <h3>Popular Birthday Themes</h3>
      <ul>
        <li>Bollywood Night with music and dance</li>
        <li>Retro themes celebrating different decades</li>
        <li>Garden parties with outdoor settings</li>
        <li>Casino nights for adult celebrations</li>
      </ul>
      
      <h3>Entertainment Options</h3>
      <p>DJ services, live bands, photo booths, games, and interactive activities to keep guests engaged throughout the celebration.</p>
      
      <h3>Catering for Birthday Parties</h3>
      <p>From elaborate buffets to casual finger foods, we customize menus based on guest preferences and party style.</p>
    `,
    author: "Party Planner Team",
    readTime: "5 min read",
    date: "March 10, 2024",
    category: "Birthday Events",
    likes: 67,
    comments: 12,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    title: "Kids Birthday Party Planning: Fun Themes and Activities",
    excerpt: "Create magical birthday experiences for children with engaging themes, entertainment, and age-appropriate activities.",
    content: `
      <h2>Planning Perfect Kids Birthday Parties</h2>
      <p>Children's birthday parties require special attention to safety, entertainment, and age-appropriate activities that create lasting memories.</p>
      
      <h3>Popular Kids Themes</h3>
      <ul>
        <li><strong>Superhero Parties:</strong> Action-packed with costume contests</li>
        <li><strong>Princess Themes:</strong> Magical decorations and dress-up activities</li>
        <li><strong>Cartoon Characters:</strong> Featuring favorite animated friends</li>
        <li><strong>Sports Themes:</strong> Active games and team activities</li>
      </ul>
      
      <h3>Entertainment & Activities</h3>
      <ul>
        <li>Professional entertainers and magicians</li>
        <li>Face painting and balloon artists</li>
        <li>Interactive games and treasure hunts</li>
        <li>Craft stations for creative activities</li>
      </ul>
      
      <h3>Safety Considerations</h3>
      <p>Child-proofed venues, age-appropriate activities, trained staff supervision, and emergency preparedness protocols.</p>
      
      <h3>Party Favors & Memories</h3>
      <p>Customized return gifts, photo sessions, and memory books to help families cherish these special moments.</p>
    `,
    author: "Kids Party Specialist",
    readTime: "6 min read",
    date: "March 6, 2024",
    category: "Birthday Events",
    likes: 89,
    comments: 18,
    image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600"
  },

  // Corporate Events
  {
    id: 6,
    title: "Corporate Event Management: Professional Gatherings That Impress",
    excerpt: "Plan successful corporate events from conferences to team building activities that enhance business relationships.",
    content: `
      <h2>Excellence in Corporate Event Management</h2>
      <p>Corporate events require meticulous planning, professional execution, and attention to business objectives while creating engaging experiences.</p>
      
      <h3>Types of Corporate Events</h3>
      <ul>
        <li><strong>Conferences & Seminars:</strong> Educational and networking focused</li>
        <li><strong>Product Launches:</strong> Brand-focused with media attention</li>
        <li><strong>Annual Meetings:</strong> Formal gatherings for stakeholders</li>
        <li><strong>Team Building:</strong> Activities to strengthen workplace relationships</li>
      </ul>
      
      <h3>Venue Selection</h3>
      <ul>
        <li>Business hotels with conference facilities</li>
        <li>Convention centers for large gatherings</li>
        <li>Unique venues for memorable experiences</li>
        <li>Virtual and hybrid event capabilities</li>
      </ul>
      
      <h3>Technology Integration</h3>
      <p>Audio-visual equipment, live streaming, interactive presentations, and digital registration systems for seamless experiences.</p>
      
      <h3>Professional Services</h3>
      <ul>
        <li>Event coordination and timeline management</li>
        <li>Catering services with business meal options</li>
        <li>Photography and videography for documentation</li>
        <li>Transportation and accommodation coordination</li>
      </ul>
    `,
    author: "Corporate Events Team",
    readTime: "8 min read",
    date: "March 4, 2024",
    category: "Corporate Events",
    likes: 112,
    comments: 24,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    title: "Team Building Events: Strengthening Workplace Relationships",
    excerpt: "Innovative team building activities and corporate retreats that boost morale and improve collaboration.",
    content: `
      <h2>Building Stronger Teams Through Events</h2>
      <p>Team building events are essential for fostering collaboration, improving communication, and boosting employee morale in today's workplace.</p>
      
      <h3>Indoor Team Building Activities</h3>
      <ul>
        <li>Escape rooms and puzzle challenges</li>
        <li>Cooking competitions and workshops</li>
        <li>Professional development workshops</li>
        <li>Creative arts and crafts sessions</li>
      </ul>
      
      <h3>Outdoor Adventures</h3>
      <ul>
        <li>Adventure sports and obstacle courses</li>
        <li>Treasure hunts and scavenger games</li>
        <li>Sports tournaments and competitions</li>
        <li>Nature retreats and camping experiences</li>
      </ul>
      
      <h3>Corporate Retreats</h3>
      <p>Multi-day programs combining business objectives with recreational activities at resort destinations or conference centers.</p>
      
      <h3>Measuring Success</h3>
      <p>Post-event surveys, team performance metrics, and follow-up activities to ensure lasting impact on workplace dynamics.</p>
    `,
    author: "HR Consultant",
    readTime: "6 min read",
    date: "March 2, 2024",
    category: "Corporate Events",
    likes: 78,
    comments: 15,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600"
  },

  // Party Events
  {
    id: 8,
    title: "Social Party Planning: Celebrations for Every Occasion",
    excerpt: "From cocktail parties to themed celebrations, create memorable social gatherings that bring people together.",
    content: `
      <h2>Creating Unforgettable Social Celebrations</h2>
      <p>Social parties are opportunities to bring people together, celebrate life's moments, and create lasting memories through thoughtful planning.</p>
      
      <h3>Types of Social Parties</h3>
      <ul>
        <li><strong>Cocktail Parties:</strong> Elegant evening gatherings with drinks and appetizers</li>
        <li><strong>Dinner Parties:</strong> Intimate dining experiences with curated menus</li>
        <li><strong>Theme Parties:</strong> Creative celebrations with specific concepts</li>
        <li><strong>Holiday Celebrations:</strong> Seasonal parties for festivals and occasions</li>
      </ul>
      
      <h3>Popular Party Themes</h3>
      <ul>
        <li>Masquerade balls with elegant mystery</li>
        <li>Retro decades parties (70s, 80s, 90s)</li>
        <li>Cultural celebrations and festivals</li>
        <li>Garden parties and outdoor gatherings</li>
      </ul>
      
      <h3>Entertainment & Ambiance</h3>
      <p>Live music, DJ services, interactive entertainment, and carefully designed lighting to create the perfect party atmosphere.</p>
      
      <h3>Catering Options</h3>
      <ul>
        <li>Cocktail hour with hors d'oeuvres</li>
        <li>Buffet dining for casual gatherings</li>
        <li>Plated dinners for formal occasions</li>
        <li>Interactive food stations and bars</li>
      </ul>
    `,
    author: "Social Events Coordinator",
    readTime: "7 min read",
    date: "February 28, 2024",
    category: "Party Events",
    likes: 94,
    comments: 21,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 9,
    title: "Festival Celebrations: Traditional and Modern Party Ideas",
    excerpt: "Celebrate Indian festivals and cultural occasions with traditional elements and contemporary party planning.",
    content: `
      <h2>Celebrating Festivals with Style</h2>
      <p>Festival celebrations combine cultural traditions with modern party elements to create meaningful and joyful gatherings for communities and families.</p>
      
      <h3>Popular Festival Celebrations</h3>
      <ul>
        <li><strong>Diwali Parties:</strong> Lights, rangoli, and traditional sweets</li>
        <li><strong>Holi Celebrations:</strong> Color festivals with music and dance</li>
        <li><strong>Navratri Events:</strong> Traditional dance and cultural programs</li>
        <li><strong>New Year Parties:</strong> Modern celebrations with traditional touches</li>
      </ul>
      
      <h3>Traditional Elements</h3>
      <ul>
        <li>Cultural decorations and rangoli designs</li>
        <li>Traditional music and dance performances</li>
        <li>Authentic festival foods and sweets</li>
        <li>Religious ceremonies and rituals</li>
      </ul>
      
      <h3>Modern Party Features</h3>
      <p>Contemporary entertainment, fusion cuisine, modern lighting, and interactive activities that appeal to all age groups.</p>
      
      <h3>Community Engagement</h3>
      <p>Large-scale festival celebrations that bring communities together, featuring cultural programs, food stalls, and family activities.</p>
    `,
    author: "Cultural Events Team",
    readTime: "5 min read",
    date: "February 25, 2024",
    category: "Party Events",
    likes: 126,
    comments: 28,
    image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600"
  },

  // Additional Wedding Content (Priority Service)
  {
    id: 10,
    title: "Wedding Photography: Capturing Your Perfect Day",
    excerpt: "Essential photography tips and shot lists to ensure every precious moment of your Indian wedding is beautifully documented.",
    content: `
      <h2>Preserving Wedding Memories Through Photography</h2>
      <p>Wedding photography is an art that captures not just images, but emotions, traditions, and the essence of your special day.</p>
      
      <h3>Pre-Wedding Photography</h3>
      <ul>
        <li>Engagement shoots and couple portraits</li>
        <li>Mehendi ceremony candid moments</li>
        <li>Getting ready shots for bride and groom</li>
        <li>Family preparation and emotional moments</li>
      </ul>
      
      <h3>Ceremony Coverage</h3>
      <ul>
        <li>Baraat arrival and groom's entrance</li>
        <li>Sacred rituals and traditional ceremonies</li>
        <li>Exchange of garlands and vows</li>
        <li>Family blessings and emotional reactions</li>
      </ul>
      
      <h3>Reception Highlights</h3>
      <ul>
        <li>Grand entrance and first dance</li>
        <li>Speeches and toast moments</li>
        <li>Cake cutting and celebration shots</li>
        <li>Dancing and party atmosphere</li>
      </ul>
      
      <h3>Photography Styles</h3>
      <p>Traditional posed portraits, candid photojournalism, artistic creative shots, and drone photography for aerial perspectives.</p>
    `,
    author: "Wedding Photographer",
    readTime: "6 min read",
    date: "February 22, 2024",
    category: "Wedding Events",
    likes: 143,
    comments: 19,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export const categories = [
  { name: 'All', count: blogPosts.length, color: 'bg-wedding-brown' },
  { name: 'Wedding Events', count: 4, color: 'bg-wedding-rose' },
  { name: 'Birthday Events', count: 2, color: 'bg-wedding-gold' },
  { name: 'Corporate Events', count: 2, color: 'bg-wedding-sage' },
  { name: 'Party Events', count: 2, color: 'bg-wedding-burgundy' }
];