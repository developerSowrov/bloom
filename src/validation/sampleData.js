const data ={
              "header": {
                                "enabled": true,
                          "propertyOrder": ["logo", "navigations", "searchbar", "commerce"],
                                 "logo": {
                                           "url": "https://app.apidoxy.com/api/v1/image/cmhnndigk0000e6llv4f4qqwe/products/69132d3a5976f45d91c8e1dd.jpg",
                                           "alt": "Bloom Store Logo"
                                         },
                          "navigations": [
                                            {
                                              "sequence": 1,
                                                 "title": "Products",
                                                   "url": "/products"
                                            },
                                            {
                                              "sequence": 2,
                                                 "title": "Top Sale",
                                                   "url": "/products?q=top-selling"
                                            },
                                            {
                                              "sequence": 3,
                                                 "title": "New Arrivals",
                                                   "url": "/products?q=new-arrivals"
                                            },
                                            {
                                              "sequence": 4,
                                                 "title": "Brands",
                                                   "url": "/brands"
                                            }
                                         ],
                            "searchbar": {
                                               "enabled": true,
                                              "searchOn": ["category", "popular", "recent"],
                                            "preference": "category"
                                          },
                             "commerce": {
                                                 "enabled": true,
                                           "propertyOrder": ["favourite", "cart"],
                                                   "items": {
                                                                   "cart": {
                                                                             "enabled": true,
                                                                               "click": {
                                                                                         "invoke": true,
                                                                                         "behaviour": "mini-panel"
                                                                                        },
                                                                               "hover": {
                                                                                         "invoke": false,
                                                                                         "behaviour": "mini-panel"
                                                                                        }
                                                                           },
                                                              "favourite": {
                                                                             "enabled": true,
                                                                               "click": {
                                                                                             "invoke": false,
                                                                                          "behaviour": "overlay"
                                                                                        },
                                                                               "hover": {
                                                                                             "invoke": false,
                                                                                          "behaviour": "mini-panel"
                                                                                        }
                                                                          }
                                                            }
                                         }
                        },
  "hero": {
    "enabled": true,
    "layout": "simple",
    "alignment": "center",
    "title": "Welcome to Bloom Store",
    "subtitle": "Discover Amazing Products",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "buttons": [
      {
        "label": "Shop Now",
        "url": "https://example.com/shop",
        "variant": "primary"
      },
      {
        "label": "Learn More",
        "url": "https://example.com/about",
        "variant": "secondary"
      }
    ],
    "background": {
      "type": "image",
      "url": "https://example.com/assets/hero-bg.jpg",
      "alt": "Hero Background"
    }
  },
  "features": {
    "enabled": true,
    "title": "Why Choose Us",
    "subtitle": "Our Core Features",
    "layout": "grid",
    "items": [
      {
        "title": "Free Shipping",
        "description": "Free shipping on all orders over $50",
        "icon": {
          "type": "image",
          "url": "https://example.com/icons/shipping.svg",
          "alt": "Free Shipping Icon"
        }
      },
      {
        "title": "24/7 Support",
        "description": "Round the clock customer support",
        "icon": {
          "type": "image",
          "url": "https://example.com/icons/support.svg",
          "alt": "Support Icon"
        }
      },
      {
        "title": "Secure Payment",
        "description": "100% secure payment processing",
        "icon": {
          "type": "image",
          "url": "https://example.com/icons/security.svg",
          "alt": "Security Icon"
        }
      },
      {
        "title": "Easy Returns",
        "description": "30-day money back guarantee",
        "icon": {
          "type": "image",
          "url": "https://example.com/icons/returns.svg",
          "alt": "Returns Icon"
        }
      }
    ]
  },
  "products": {
    "enabled": true,
    "title": "Featured Products",
    "subtitle": "Our Best Sellers",
    "layout": "grid",
    "columns": 4,
    "items": [
      {
        "id": "prod-001",
        "title": "Premium Headphones",
        "description": "High-quality wireless headphones with noise cancellation",
        "price": 199.99,
        "currency": "USD",
        "image": {
          "url": "https://example.com/products/headphones.jpg",
          "alt": "Premium Headphones"
        },
        "category": "Electronics",
        "rating": 4.5,
        "inStock": true
      },
      {
        "id": "prod-002",
        "title": "Smart Watch",
        "description": "Feature-rich smartwatch with health tracking",
        "price": 299.99,
        "currency": "USD",
        "image": {
          "url": "https://example.com/products/smartwatch.jpg",
          "alt": "Smart Watch"
        },
        "category": "Electronics",
        "rating": 4.8,
        "inStock": true
      },
      {
        "id": "prod-003",
        "title": "Leather Bag",
        "description": "Genuine leather messenger bag",
        "price": 149.99,
        "currency": "USD",
        "image": {
          "url": "https://example.com/products/bag.jpg",
          "alt": "Leather Bag"
        },
        "category": "Accessories",
        "rating": 4.3,
        "inStock": true
      },
      {
        "id": "prod-004",
        "title": "Running Shoes",
        "description": "Comfortable athletic running shoes",
        "price": 89.99,
        "currency": "USD",
        "image": {
          "url": "https://example.com/products/shoes.jpg",
          "alt": "Running Shoes"
        },
        "category": "Sports",
        "rating": 4.6,
        "inStock": false
      }
    ]
  },
  "categories": {
    "enabled": true,
    "title": "Shop by Category",
    "subtitle": "Explore Our Collections",
    "layout": "grid",
    "items": [
      {
        "name": "Electronics",
        "description": "Latest gadgets and tech products",
        "image": {
          "url": "https://example.com/categories/electronics.jpg",
          "alt": "Electronics Category"
        },
        "url": "https://example.com/categories/electronics"
      },
      {
        "name": "Fashion",
        "description": "Trendy clothing and accessories",
        "image": {
          "url": "https://example.com/categories/fashion.jpg",
          "alt": "Fashion Category"
        },
        "url": "https://example.com/categories/fashion"
      },
      {
        "name": "Home & Living",
        "description": "Furniture and home decor",
        "image": {
          "url": "https://example.com/categories/home.jpg",
          "alt": "Home Category"
        },
        "url": "https://example.com/categories/home"
      },
      {
        "name": "Sports",
        "description": "Sports equipment and fitness gear",
        "image": {
          "url": "https://example.com/categories/sports.jpg",
          "alt": "Sports Category"
        },
        "url": "https://example.com/categories/sports"
      }
    ]
  },
  "testimonials": {
    "enabled": true,
    "title": "What Our Customers Say",
    "subtitle": "Real Reviews from Real People",
    "layout": "carousel",
    "items": [
      {
        "name": "John Smith",
        "role": "Verified Buyer",
        "content": "Amazing quality products and fast shipping. I'm extremely satisfied with my purchase and will definitely shop here again!",
        "rating": 5,
        "avatar": {
          "url": "https://example.com/avatars/john.jpg",
          "alt": "John Smith"
        },
        "date": "2025-01-15"
      },
      {
        "name": "Sarah Johnson",
        "role": "Premium Member",
        "content": "Best online shopping experience I've ever had. The customer service team was incredibly helpful and responsive.",
        "rating": 5,
        "avatar": {
          "url": "https://example.com/avatars/sarah.jpg",
          "alt": "Sarah Johnson"
        },
        "date": "2025-02-10"
      },
      {
        "name": "Michael Chen",
        "role": "Verified Buyer",
        "content": "Great selection of products and competitive prices. The website is easy to navigate and checkout was smooth.",
        "rating": 4,
        "avatar": {
          "url": "https://example.com/avatars/michael.jpg",
          "alt": "Michael Chen"
        },
        "date": "2025-03-05"
      }
    ]
  },
  "cta": {
    "enabled": true,
    "title": "Ready to Start Shopping?",
    "description": "Join thousands of satisfied customers and discover amazing products at unbeatable prices. Sign up today and get 10% off your first order!",
    "buttons": [
      {
        "label": "Get Started",
        "url": "https://example.com/signup",
        "variant": "primary"
      },
      {
        "label": "Browse Products",
        "url": "https://example.com/products",
        "variant": "secondary"
      }
    ],
    "background": {
      "type": "color",
      "value": "#4F46E5"
    }
  },
  "newsletter": {
    "enabled": true,
    "title": "Subscribe to Our Newsletter",
    "description": "Get the latest updates on new products, exclusive offers, and shopping tips delivered straight to your inbox.",
    "placeholder": "Enter your email address",
    "buttonText": "Subscribe",
    "privacy": "We respect your privacy. Unsubscribe at any time.",
    "successMessage": "Thank you for subscribing!",
    "errorMessage": "Please enter a valid email address."
  },
  "footer": {
    "brand": {
      "logo": {
        "url": "https://example.com/assets/footer-logo.svg",
        "alt": "Bloom Store"
      },
      "description": "Your trusted online destination for quality products at competitive prices. Shop with confidence and enjoy exceptional customer service.",
      "socialLinks": [
        {
          "platform": "facebook",
          "url": "https://facebook.com/bloomstore"
        },
        {
          "platform": "twitter",
          "url": "https://twitter.com/bloomstore"
        },
        {
          "platform": "instagram",
          "url": "https://instagram.com/bloomstore"
        },
        {
          "platform": "linkedin",
          "url": "https://linkedin.com/company/bloomstore"
        }
      ]
    },
    "columns": [
      {
        "title": "Company",
        "links": [
          {
            "label": "About Us",
            "url": "https://example.com/about"
          },
          {
            "label": "Careers",
            "url": "https://example.com/careers"
          },
          {
            "label": "Press",
            "url": "https://example.com/press"
          },
          {
            "label": "Blog",
            "url": "https://example.com/blog"
          }
        ]
      },
      {
        "title": "Support",
        "links": [
          {
            "label": "Help Center",
            "url": "https://example.com/help"
          },
          {
            "label": "Contact Us",
            "url": "https://example.com/contact"
          },
          {
            "label": "Shipping Info",
            "url": "https://example.com/shipping"
          },
          {
            "label": "Returns",
            "url": "https://example.com/returns"
          }
        ]
      },
      {
        "title": "Shop",
        "links": [
          {
            "label": "All Products",
            "url": "https://example.com/products"
          },
          {
            "label": "Categories",
            "url": "https://example.com/categories"
          },
          {
            "label": "Best Sellers",
            "url": "https://example.com/bestsellers"
          },
          {
            "label": "New Arrivals",
            "url": "https://example.com/new"
          }
        ]
      },
      {
        "title": "Legal",
        "links": [
          {
            "label": "Privacy Policy",
            "url": "https://example.com/privacy"
          },
          {
            "label": "Terms of Service",
            "url": "https://example.com/terms"
          },
          {
            "label": "Cookie Policy",
            "url": "https://example.com/cookies"
          }
        ]
      }
    ],
    "legal": {
      "copyright": "© 2025 Bloom Store. All rights reserved.",
      "links": [
        {
          "label": "Privacy Policy",
          "url": "https://example.com/privacy"
        },
        {
          "label": "Terms of Service",
          "url": "https://example.com/terms"
        },
        {
          "label": "Cookie Settings",
          "url": "https://example.com/cookies"
        }
      ]
    }
  }
}