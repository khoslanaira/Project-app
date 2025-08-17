import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('perfume-gift-set');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // All products data
  const allProducts = [
    {
      id: 1,
      title: "Luxury Perfume Gift Set For Men - 4 x 20ml",
      subtitle: "Gift set for men",
      rating: "4.7",
      reviews: "1.3K",
      salePrice: "₹549.00",
      regularPrice: "₹849.00",
      discount: "36% OFF",
      badge: "bestseller",
      image: "https://via.placeholder.com/300x300/2c3e50/ffffff?text=Luxury+Gift+Set"
    },
    {
      id: 2,
      title: "CEO Man Perfume - 100ml",
      subtitle: "Eau De Parfum",
      rating: "4.8",
      reviews: "1.1K",
      salePrice: "₹499.00",
      regularPrice: "₹899.00",
      discount: "45% OFF",
      badge: "bestseller",
      image: "https://via.placeholder.com/300x300/c62828/ffffff?text=CEO+Man"
    },
    {
      id: 3,
      title: "Hydrating Sunscreen SPF 50 PA++++ - 50ml",
      subtitle: "24hr Hydration | Broad Spectrum Protection",
      rating: "4.6",
      reviews: "856",
      salePrice: "₹399.00",
      regularPrice: "₹799.00",
      discount: "51% OFF",
      badge: "new",
      image: "https://via.placeholder.com/300x300/4caf50/ffffff?text=Sunscreen"
    },
    {
      id: 4,
      title: "Luxury Perfume Gift Set For Women - 4 x 20ml",
      subtitle: "Gift set for women",
      rating: "4.7",
      reviews: "1.1K",
      salePrice: "₹549.00",
      regularPrice: "₹899.00",
      discount: "40% OFF",
      badge: "bestseller",
      image: "https://via.placeholder.com/300x300/e91e63/ffffff?text=Women+Gift+Set"
    },
    {
      id: 5,
      title: "Luxury Perfume Gift Set Unisex - 4 x 20ml",
      subtitle: "Gift set for everyone",
      rating: "4.6",
      reviews: "987",
      salePrice: "₹549.00",
      regularPrice: "₹849.00",
      discount: "35% OFF",
      badge: "bestseller",
      image: "https://via.placeholder.com/300x300/9c27b0/ffffff?text=Unisex+Gift"
    },
    {
      id: 6,
      title: "Travel Kit Gift Set - 3 x 15ml",
      subtitle: "Perfect for travel",
      rating: "4.5",
      reviews: "654",
      salePrice: "₹399.00",
      regularPrice: "₹569.00",
      discount: "30% OFF",
      badge: "new",
      image: "https://via.placeholder.com/300x300/ff9800/ffffff?text=Travel+Kit"
    },
    {
      id: 7,
      title: "Bella Mood Gift Set - 4 x 20ml",
      subtitle: "Mood collection for her",
      rating: "4.7",
      reviews: "1.2K",
      salePrice: "₹599.00",
      regularPrice: "₹999.00",
      discount: "40% OFF",
      badge: "bestseller",
      image: "https://via.placeholder.com/300x300/ff5722/ffffff?text=Mood+Gift"
    },
    {
      id: 8,
      title: "Attar Gift Set - 3 x 10ml",
      subtitle: "Traditional fragrances",
      rating: "4.6",
      reviews: "789",
      salePrice: "₹449.00",
      regularPrice: "₹699.00",
      discount: "36% OFF",
      badge: "new",
      image: "https://via.placeholder.com/300x300/795548/ffffff?text=Attar+Gift"
    },
    {
      id: 9,
      title: "Premium Gift Set - 5 x 25ml",
      subtitle: "Premium collection",
      rating: "4.8",
      reviews: "1.5K",
      salePrice: "₹799.00",
      regularPrice: "₹1299.00",
      discount: "38% OFF",
      badge: "bestseller",
      image: "https://via.placeholder.com/300x300/607d8b/ffffff?text=Premium+Gift"
    }
  ];

  // Product categories for the top row
  const productCategories = [
    {
      id: 'travel-kit',
      title: 'Travel Kit',
      image: 'https://via.placeholder.com/120x120/4fc3f7/ffffff?text=Travel+Kit'
    },
    {
      id: 'skincare',
      title: 'Skincare',
      image: 'https://via.placeholder.com/120x120/fff176/333333?text=Sunscreen'
    },
    {
      id: 'attars',
      title: 'Attars',
      image: 'https://via.placeholder.com/120x120/ffd54f/333333?text=TAAJ+Gold'
    },
    {
      id: 'perfume-gift-set',
      title: 'Perfume Gift Set',
      image: 'https://via.placeholder.com/120x120/424242/ffffff?text=CEO+MAN'
    },
    {
      id: 'cosmetics',
      title: 'Cosmetics',
      image: 'https://via.placeholder.com/120x120/f44336/ffffff?text=Lipstick'
    },
    {
      id: 'personalized',
      title: 'Personalized',
      image: 'https://via.placeholder.com/120x120/9c27b0/ffffff?text=DATE+WOMAN'
    },
    {
      id: 'deodorants',
      title: 'Deodorants',
      image: 'https://via.placeholder.com/120x120/ffffff/333333?text=OUD+WHITE'
    }
  ];

  // Products for each category
  const categoryProducts = {
    'travel-kit': [
      {
        id: 1,
        title: "Travel Kit Gift Set - 3 x 15ml",
        subtitle: "PERFECT FOR TRAVEL",
        discount: "30% OFF",
        image: "https://via.placeholder.com/200x200/4fc3f7/ffffff?text=Travel+Kit"
      },
      {
        id: 2,
        title: "Mini Perfume Travel Set",
        subtitle: "COMPACT TRAVEL SIZE",
        discount: "25% OFF",
        image: "https://via.placeholder.com/200x200/29b6f6/ffffff?text=Mini+Travel"
      },
      {
        id: 3,
        title: "Travel Essential Kit",
        subtitle: "ALL TRAVEL NEEDS",
        discount: "35% OFF",
        image: "https://via.placeholder.com/200x200/0277bd/ffffff?text=Travel+Essentials"
      },
      {
        id: 4,
        title: "Weekend Travel Pack",
        subtitle: "WEEKEND GETAWAY",
        discount: "28% OFF",
        image: "https://via.placeholder.com/200x200/01579b/ffffff?text=Weekend+Pack"
      }
    ],
    'skincare': [
      {
        id: 1,
        title: "Hydrating Sunscreen SPF 50",
        subtitle: "24HR HYDRATION",
        discount: "51% OFF",
        image: "https://via.placeholder.com/200x200/fff176/333333?text=Sunscreen"
      },
      {
        id: 2,
        title: "Face Wash Gift Set",
        subtitle: "CLEANSE & NOURISH",
        discount: "40% OFF",
        image: "https://via.placeholder.com/200x200/fff59d/333333?text=Face+Wash"
      },
      {
        id: 3,
        title: "Lip Care Collection",
        subtitle: "MOISTURIZING LIPS",
        discount: "45% OFF",
        image: "https://via.placeholder.com/200x200/fff9c4/333333?text=Lip+Care"
      },
      {
        id: 4,
        title: "Skin Essential Combo",
        subtitle: "COMPLETE SKIN CARE",
        discount: "38% OFF",
        image: "https://via.placeholder.com/200x200/fffde7/333333?text=Skin+Essentials"
      }
    ],
    'attars': [
      {
        id: 1,
        title: "TAAJ Gold Oudh Attar",
        subtitle: "TRADITIONAL FRAGRANCE",
        discount: "36% OFF",
        image: "https://via.placeholder.com/200x200/ffd54f/333333?text=TAAJ+Gold"
      },
      {
        id: 2,
        title: "Royal Oudh Collection",
        subtitle: "LUXURY ATTARS",
        discount: "42% OFF",
        image: "https://via.placeholder.com/200x200/ffca28/333333?text=Royal+Oudh"
      },
      {
        id: 3,
        title: "Traditional Attar Set",
        subtitle: "HERITAGE FRAGRANCES",
        discount: "33% OFF",
        image: "https://via.placeholder.com/200x200/ffc107/333333?text=Traditional+Attar"
      },
      {
        id: 4,
        title: "Premium Attar Gift",
        subtitle: "EXCLUSIVE COLLECTION",
        discount: "39% OFF",
        image: "https://via.placeholder.com/200x200/ffb300/333333?text=Premium+Attar"
      }
    ],
    'perfume-gift-set': [
      {
        id: 1,
        title: "Luxury Perfume Gift Set For Men",
        subtitle: "GIFT SET FOR MEN",
        discount: "36% OFF",
        image: "https://via.placeholder.com/200x200/2c3e50/ffffff?text=Men+Gift+Set"
      },
      {
        id: 2,
        title: "Luxury Unisex Perfume Gift Set",
        subtitle: "EAU DE PARFUM",
        discount: "36% OFF",
        image: "https://via.placeholder.com/200x200/9c27b0/ffffff?text=Unisex+Gift"
      },
      {
        id: 3,
        title: "Luxury Perfume Gift Set For Women",
        subtitle: "EAU DE PARFUM",
        discount: "36% OFF",
        image: "https://via.placeholder.com/200x200/e91e63/ffffff?text=Women+Gift"
      },
      {
        id: 4,
        title: "Premium Perfume Collection",
        subtitle: "LUXURY COLLECTION",
        discount: "40% OFF",
        image: "https://via.placeholder.com/200x200/607d8b/ffffff?text=Premium+Collection"
      }
    ],
    'cosmetics': [
      {
        id: 1,
        title: "Liquid Lipstick Collection",
        subtitle: "LONG LASTING COLOR",
        discount: "45% OFF",
        image: "https://via.placeholder.com/200x200/f44336/ffffff?text=Liquid+Lipstick"
      },
      {
        id: 2,
        title: "Makeup Brush Set",
        subtitle: "PROFESSIONAL BRUSHES",
        discount: "38% OFF",
        image: "https://via.placeholder.com/200x200/e53935/ffffff?text=Brush+Set"
      },
      {
        id: 3,
        title: "Face Blush Collection",
        subtitle: "NATURAL GLOW",
        discount: "42% OFF",
        image: "https://via.placeholder.com/200x200/d32f2f/ffffff?text=Face+Blush"
      },
      {
        id: 4,
        title: "Kajal & Eyeliner Set",
        subtitle: "SMOKY EYES",
        discount: "35% OFF",
        image: "https://via.placeholder.com/200x200/c62828/ffffff?text=Kajal+Set"
      }
    ],
    'personalized': [
      {
        id: 1,
        title: "DATE WOMAN Perfume",
        subtitle: "PERSONALIZED FRAGRANCE",
        discount: "40% OFF",
        image: "https://via.placeholder.com/200x200/9c27b0/ffffff?text=DATE+WOMAN"
      },
      {
        id: 2,
        title: "Custom Name Perfume",
        subtitle: "YOUR NAME PERFUME",
        discount: "45% OFF",
        image: "https://via.placeholder.com/200x200/8e24aa/ffffff?text=Custom+Name"
      },
      {
        id: 3,
        title: "Personalized Gift Box",
        subtitle: "SPECIAL MESSAGE",
        discount: "38% OFF",
        image: "https://via.placeholder.com/200x200/7b1fa2/ffffff?text=Personalized+Box"
      },
      {
        id: 4,
        title: "Custom Fragrance Blend",
        subtitle: "UNIQUE SCENT",
        discount: "50% OFF",
        image: "https://via.placeholder.com/200x200/6a1b9a/ffffff?text=Custom+Blend"
      }
    ],
    'deodorants': [
      {
        id: 1,
        title: "Deodorant Gift Set For Men",
        subtitle: "BODY DEODORANTS FOR MEN",
        discount: "34% OFF",
        image: "https://via.placeholder.com/200x200/607d8b/ffffff?text=Deo+Gift"
      },
      {
        id: 2,
        title: "OUD WHITE Deo Parfum",
        subtitle: "LUXURY DEODORANT",
        discount: "30% OFF",
        image: "https://via.placeholder.com/200x200/546e7a/ffffff?text=OUD+WHITE"
      },
      {
        id: 3,
        title: "Fresh Deodorant Pack",
        subtitle: "ALL DAY FRESHNESS",
        discount: "36% OFF",
        image: "https://via.placeholder.com/200x200/455a64/ffffff?text=Fresh+Pack"
      },
      {
        id: 4,
        title: "Deodorant Combo Set",
        subtitle: "MULTI PACK OFFER",
        discount: "42% OFF",
        image: "https://via.placeholder.com/200x200/37474f/ffffff?text=Combo+Set"
      }
    ]
  };

  const productsPerSlide = 3;
  const totalSlides = Math.ceil(allProducts.length / productsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  // Get current category products
  const currentCategoryProducts = categoryProducts[selectedCategory] || [];

  return (
    <div className="App">
      {/* Top Black Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <button className="nav-arrow">‹</button>
          <span className="promo-text">Get any 2 100ml PERFUMES for just ₹949</span>
          <button className="nav-arrow">›</button>
        </div>
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <div className="search-section">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search for products..." />
            </div>
          </div>
          
          <div className="logo-section">
            <h1 className="brand-logo">Bella Vita Organic</h1>
          </div>
          
          <div className="user-section">
            <button className="user-icon">👤</button>
            <button className="cart-icon">🛒</button>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="navigation">
          <a href="/crazy-deals" className="nav-link">CRAZY DEALS</a>
          <a href="/shop-all" className="nav-link">SHOP ALL</a>
          <a href="/bestsellers" className="nav-link">BESTSELLERS</a>
          <a href="/perfumes" className="nav-link">PERFUMES</a>
          <a href="/bath-body" className="nav-link">BATH & BODY</a>
          <a href="/cosmetics" className="nav-link">COSMETICS</a>
          <a href="/new-arrivals" className="nav-link">NEW ARRIVALS</a>
          <a href="/skincare" className="nav-link">SKINCARE</a>
          <a href="/gifting" className="nav-link active">GIFTING</a>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        {/* Page Title */}
        <div className="page-title">
          <h1>Gifting</h1>
        </div>

        {/* Banner Section */}
        <div className="banner-section">
          <div className="banner-image">
            {/* Placeholder for your banner image */}
            <img 
              src="https://via.placeholder.com/1200x400/f4e4c1/333333?text=Gifting+Banner+Image" 
              alt="Gifting Banner" 
              className="banner-img"
            />
            <div className="banner-overlay">
              <div className="banner-content">
                <h2 className="banner-title">Perfect Gifts for Every Occasion</h2>
                <p className="banner-subtitle">Discover our curated collection of luxury perfumes and gift sets</p>
                <button className="banner-cta">Shop Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Slideshow */}
        <div className="slideshow-container">
          <div className="slideshow-header">
            <h2>BESTSELLERS</h2>
            <div className="slideshow-controls">
              <button 
                className="slide-arrow prev" 
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                ‹
              </button>
              <div className="slide-indicators">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    ●
                  </button>
                ))}
              </div>
              <button 
                className="slide-arrow next" 
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
              >
                ›
              </button>
            </div>
          </div>

          <div className="slideshow-wrapper">
            <div 
              className="slideshow-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="slide">
                  <div className="product-grid">
                    {allProducts
                      .slice(slideIndex * productsPerSlide, (slideIndex + 1) * productsPerSlide)
                      .map((product) => (
                        <div key={product.id} className="product-card">
                          <div className="product-image">
                            <div className={`product-badge ${product.badge}`}>
                              {product.badge === 'bestseller' ? 'Bestseller' : 'New'}
                            </div>
                            <div className="product-discount">{product.discount}</div>
                            <img src={product.image} alt={product.title} />
                          </div>
                          <div className="product-info">
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-subtitle">{product.subtitle}</p>
                            <div className="product-rating">
                              <span className="stars">★★★★★</span>
                              <span className="rating-text">{product.rating} | ({product.reviews} Reviews)</span>
                            </div>
                            <div className="product-price">
                              <span className="sale-price">{product.salePrice}</span>
                              <span className="regular-price">{product.regularPrice}</span>
                            </div>
                            <button className="add-to-cart-btn">Add to cart</button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Discover The Best Section */}
        <div className="discover-section">
          <div className="discover-container">
            <h2 className="discover-title">DISCOVER THE BEST</h2>
            
            {/* Product Categories Row */}
            <div className="categories-row">
              {productCategories.map((category) => (
                <div 
                  key={category.id}
                  className={`category-card ${selectedCategory === category.id ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <img src={category.image} alt={category.title} className="category-image" />
                  <h3 className="category-title">{category.title}</h3>
                </div>
              ))}
            </div>

            {/* Gift Set Products Row */}
            <div className="gift-sets-row">
              {currentCategoryProducts.map((product) => (
                <div key={product.id} className="gift-set-card">
                  <div className="gift-set-image">
                    <div className="gift-set-badge">BESTSELLER</div>
                    <img src={product.image} alt={product.title} />
                    <div className="gift-set-discount">{product.discount}</div>
                  </div>
                  <div className="gift-set-info">
                    <p className="gift-set-subtitle">{product.subtitle}</p>
                    <h3 className="gift-set-title">{product.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="features-container">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  {/* Gift box with bow */}
                  <rect x="15" y="25" width="30" height="25" rx="2" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <rect x="15" y="35" width="30" height="15" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <path d="M15 35H45" stroke="#8B4513" strokeWidth="2"/>
                  <path d="M30 25V15" stroke="#8B4513" strokeWidth="2"/>
                  <path d="M25 15H35" stroke="#8B4513" strokeWidth="2"/>
                  {/* Bow */}
                  <path d="M20 15C20 12 22 10 25 10C28 10 30 12 30 15C30 12 32 10 35 10C38 10 40 12 40 15" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <circle cx="30" cy="15" r="2" stroke="#8B4513" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="feature-title">Elegant Packaging</h3>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  {/* Diamond/sparkle */}
                  <path d="M30 5L35 20L50 25L35 30L30 45L25 30L10 25L25 20L30 5Z" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <path d="M30 15L32 25L42 30L32 35L30 45L28 35L18 30L28 25L30 15Z" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <circle cx="30" cy="30" r="3" stroke="#8B4513" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="feature-title">Premium Product</h3>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  {/* Hand with heart */}
                  <path d="M20 35C20 30 25 25 30 25C35 25 40 30 40 35C40 40 35 45 30 45C25 45 20 40 20 35Z" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <path d="M25 40C25 35 30 30 35 30C40 30 45 35 45 40" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <path d="M30 25C30 20 35 15 40 15C45 15 50 20 50 25" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  <path d="M25 20C25 15 30 10 35 10C40 10 45 15 45 20" stroke="#8B4513" strokeWidth="2" fill="none"/>
                  {/* Heart in palm */}
                  <path d="M28 32C28 30 29 29 30 29C31 29 32 30 32 32C32 34 30 36 30 36C30 36 28 34 28 32Z" stroke="#8B4513" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="feature-title">Thoughtful Selection</h3>
            </div>
          </div>
        </div>

        {/* Customer Love Section */}
        <div className="customer-love-section">
          <div className="customer-love-container">
            <h2 className="customer-love-title">CUSTOMER LOVE</h2>
            
            <div className="testimonials-grid">
              {/* Testimonial 1 - Aarav Sharma */}
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img 
                    src="https://via.placeholder.com/200x150/fff5f5/ff69b4?text=Gift+Box+with+Perfumes" 
                    alt="Gift Box with Perfumes" 
                  />
                </div>
                <div className="testimonial-content">
                  <h3 className="customer-name">Aarav Sharma</h3>
                  <p className="testimonial-text">Absolutely loved the engraving! A perfect personal touch to my perfume.</p>
                  <div className="testimonial-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-count">(5)</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 - Neha Kapoor */}
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img 
                    src="https://via.placeholder.com/200x150/fff0f5/da70d6?text=Perfume+Bottles" 
                    alt="Perfume Bottles" 
                  />
                </div>
                <div className="testimonial-content">
                  <h3 className="customer-name">Neha Kapoor</h3>
                  <p className="testimonial-text">Loved seeing my name on my favorite perfume bottle! Feels special. ❤️</p>
                  <div className="testimonial-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-count">(5)</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 - Rohan Mehta */}
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img 
                    src="https://via.placeholder.com/200x150/f0f8ff/9370db?text=DATE+WOMAN+Perfume" 
                    alt="DATE WOMAN Perfume" 
                  />
                </div>
                <div className="testimonial-content">
                  <h3 className="customer-name">Rohan Mehta</h3>
                  <p className="testimonial-text">Engraving was flawless, and delivery was super fast! 🚀</p>
                  <div className="testimonial-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-count">(5)</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 - Priya Verma */}
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <img 
                    src="https://via.placeholder.com/200x150/fffaf0/ffa500?text=HONEY+OUD+Perfume" 
                    alt="HONEY OUD Perfume" 
                  />
                </div>
                <div className="testimonial-content">
                  <h3 className="customer-name">Priya Verma</h3>
                  <p className="testimonial-text">A perfect personalized gift! My friend absolutely loved it. 🎁</p>
                  <div className="testimonial-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-count">(5)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="faq-container">
            <h2 className="faq-title">FAQ</h2>
            
            <div className="faq-list">
              {/* FAQ Item 1 */}
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(0)}>
                  <h3>Can I gift these perfume sets directly to someone?</h3>
                  <span className="faq-icon">{expandedFAQ === 0 ? '−' : '+'}</span>
                </div>
                {expandedFAQ === 0 && (
                  <div className="faq-answer">
                    <p>Absolutely! Our gift sets are beautifully packaged and ready to be gifted as soon as they arrive.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(1)}>
                  <h3>Are your perfumes suitable for both men and women?</h3>
                  <span className="faq-icon">{expandedFAQ === 1 ? '−' : '+'}</span>
                </div>
                {expandedFAQ === 1 && (
                  <div className="faq-answer">
                    <p>Yes! We offer a wide range of unisex fragrances, as well as specific collections for men and women. Our gift sets are perfect for any gender.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(2)}>
                  <h3>Do you offer gift wrapping?</h3>
                  <span className="faq-icon">{expandedFAQ === 2 ? '−' : '+'}</span>
                </div>
                {expandedFAQ === 2 && (
                  <div className="faq-answer">
                    <p>Yes! All our gift sets come with elegant gift wrapping and a personalized message card at no additional cost.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(3)}>
                  <h3>How do I choose the right perfume gift set?</h3>
                  <span className="faq-icon">{expandedFAQ === 3 ? '−' : '+'}</span>
                </div>
                {expandedFAQ === 3 && (
                  <div className="faq-answer">
                    <p>Consider the recipient's preferences, occasion, and your budget. We offer various collections from luxury to budget-friendly options, all with detailed descriptions to help you choose.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 5 */}
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(4)}>
                  <h3>Do you offer any combo deals for gifting?</h3>
                  <span className="faq-icon">{expandedFAQ === 4 ? '−' : '+'}</span>
                </div>
                {expandedFAQ === 4 && (
                  <div className="faq-answer">
                    <p>Yes! We have special combo deals and bundle offers that provide great value for money. Check our "Crazy Deals" section for the latest offers.</p>
                  </div>
                )}
              </div>

              {/* FAQ Item 6 */}
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(5)}>
                  <h3>I am looking for gift sets on a budget. Do you have any affordable ones available?</h3>
                  <span className="faq-icon">{expandedFAQ === 5 ? '−' : '+'}</span>
                </div>
                {expandedFAQ === 5 && (
                  <div className="faq-answer">
                    <p>Absolutely! We offer a range of affordable gift sets starting from ₹399. Our budget-friendly options maintain the same quality and elegant packaging.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          {/* Upper Section - Five Columns */}
          <div className="footer-columns">
            {/* BESTSELLERS Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">BESTSELLERS</h3>
              <ul className="footer-links">
                <li><a href="/ultimate-perfume-box">Ultimate Perfume Box</a></li>
                <li><a href="/perfume-gift-set-men">Perfume Gift Set For Men</a></li>
                <li><a href="/perfume-gift-set-women">Perfume Gift Set For Women</a></li>
                <li><a href="/under-eye-cream">Under Eye Cream for Dark Circles</a></li>
                <li><a href="/perfume-men">Perfume For Men</a></li>
                <li><a href="/perfume-women">Perfume For Women</a></li>
                <li><a href="/unisex-perfume">Unisex Perfume</a></li>
              </ul>
            </div>

            {/* INFORMATION Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">INFORMATION</h3>
              <ul className="footer-links">
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/newsroom">Newsroom</a></li>
                <li><a href="/terms-conditions">Terms & Conditions</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/refund-return">Refund and Return</a></li>
                <li><a href="/shipping-policy">Shipping Policy</a></li>
                <li><a href="/bulk-order">Bulk Order - GST Invoice</a></li>
              </ul>
            </div>

            {/* SUPPORT Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">SUPPORT</h3>
              <ul className="footer-links">
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/order-tracking">Order Tracking</a></li>
                <li><a href="/all-products">All Products</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/sitemap">Sitemap</a></li>
              </ul>
            </div>

            {/* CONTACT US Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">CONTACT US</h3>
              <div className="contact-info">
                <p className="contact-item">
                  <strong>Office Location:</strong><br />
                  Plot no. 417, Udyog Vihar Phase III,<br />
                  Gurgaon, Haryana, India.
                </p>
                <p className="contact-item">
                  <strong>Contact Us on WhatsApp:</strong><br />
                  <a href="https://wa.me/919810154380" className="whatsapp-link">WhatsApp</a>
                </p>
                <p className="contact-item">
                  <strong>Phone Number:</strong><br />
                  +91-9810154380
                </p>
                <p className="contact-item">
                  <strong>Timing:</strong><br />
                  10:00 AM to 7:00 PM, Monday to Sunday.
                </p>
              </div>
            </div>

            {/* EXCLUSIVE Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">EXCLUSIVE</h3>
              <div className="newsletter-section">
                <div className="newsletter-input">
                  <input 
                    type="email" 
                    placeholder="Enter email here" 
                    className="email-input"
                  />
                  <button className="newsletter-btn">→</button>
                </div>
                <p className="newsletter-text">
                  Sign up here to get the latest news, updates and special offers delivered to your inbox.
                </p>
                <p className="newsletter-text">
                  Plus, you'll be the first to know about our discounts!
                </p>
                <div className="social-icons">
                  <a href="https://facebook.com" className="social-icon">📘</a>
                  <a href="https://twitter.com" className="social-icon">🐦</a>
                  <a href="https://pinterest.com" className="social-icon">📌</a>
                  <a href="https://instagram.com" className="social-icon">📷</a>
                  <a href="https://youtube.com" className="social-icon">📺</a>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Section - Scam Alert */}
          <div className="scam-alert">
            <div className="scam-alert-content">
              <div className="scam-alert-header">
                <span className="warning-icon">⚠️</span>
                <h3 className="scam-alert-title">A Scam Alert</h3>
              </div>
              <div className="scam-alert-text">
                <p>
                  We have noticed a rise in fraudulent activities through calls, SMS, WhatsApp messages, emails, and other mediums.
                </p>
                <p>
                  Please be aware that BELLAVITA and its employees never ask for your financial details for contests or deals outside our official platform. We also never request payments for any promotional activities through unauthorised channels.
                </p>
                <p>
                  If you receive any such communication, stay cautious and reach out to us immediately at our customer care number <strong>+91 9810154380</strong> or email us at <strong>shop@bellavitaorganic.com</strong>.
                </p>
                <p>
                  If you suspect any scam, kindly report it to the Department of Telecommunications (DoT).
                </p>
                <p><strong>Stay safe!</strong></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
