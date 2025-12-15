const navigations = [
    // Primary Navigation - Most Critical (1-10)
    {
        title: "Home",
        url: "/",
        sequence: 1,
        placements: ["logo", "header-navigation", "footer"],
        enabled: true,
        group: "primary"
    },
    {
        title: "Search",
        url: "/search",
        sequence: 2,
        placements: ["top-bar", "header-navigation", "icon-menu", "mobile-menu"],
        enabled: true,
        group: "primary"
    },
    {
        title: "Quick Order",
        url: "/quick-order",
        sequence: 3,
        placements: ["top-bar", "header-navigation", "mobile-menu"],
        enabled: true,
        group: "primary"
    },
    {
        title: "Cart",
        url: "/cart",
        sequence: 4,
        placements: ["top-bar", "icon-menu", "mobile-menu", "sticky-header"],
        enabled: true,
        group: "primary"
    },
    {
        title: "Notifications",
        url: "/notifications",
        sequence: 5,
        placements: ["top-bar", "icon-menu", "mobile-menu"],
        enabled: true,
        group: "primary"
    },
    {
        title: "Women",
        url: "/products?q=women",
        sequence: 6,
        placements: ["mega-menu", "sidebar", "header-navigation"],
        enabled: true,
        group: "category"
    },
    {
        title: "Men",
        url: "/products?q=men",
        sequence: 7,
        placements: ["mega-menu", "sidebar", "header-navigation"],
        enabled: true,
        group: "category"
    },
    {
        title: "Kids",
        url: "/products?q=kids",
        sequence: 8,
        placements: ["mega-menu", "sidebar", "header-navigation"],
        enabled: true,
        group: "category"
    },
    {
        title: "Products",
        url: "/products",
        sequence: 9,
        placements: ["header-navigation", "footer", "mobile-menu"],
        enabled: true,
        group: "primary"
    },
    {
        title: "Categories",
        url: "/categories",
        sequence: 10,
        placements: ["header-navigation", "footer", "mega-menu", "mobile-menu"],
        enabled: true,
        group: "primary"
    },
    {
        title: "Deals",
        url: "/products?q=deals",
        sequence: 11,
        placements: ["header-navigation", "banner", "top-bar", "mobile-menu"],
        enabled: true,
        group: "promo"
    },
    {
        title: "Wishlist",
        url: "/wishlist",
        sequence: 12,
        placements: ["user-menu", "top-bar", "icon-menu", "mobile-menu"],
        enabled: true,
        group: "wishlist"   // mutually exclusive
    },
    {
        title: "New Arrivals",
        url: "/products?q=new-arrivals",
        sequence: 13,
        placements: ["header-navigation", "banner", "sidebar", "mobile-menu"],
        enabled: true,
        group: "promo"
    },
    {
        title: "Best Sellers",
        url: "/products?q=best-sellers",
        sequence: 14,
        placements: ["header-navigation", "banner", "sidebar"],
        enabled: true,
        group: "promo"
    },

    // Authentication (15–17)
    {
        title: "Login",
        url: "/login",
        sequence: 15,
        placements: ["user-menu", "top-bar", "mobile-menu", "cta-button"],
        enabled: true,
        group: "auth"
    },
    {
        title: "Register",
        url: "/register",
        sequence: 16,
        placements: ["user-menu", "top-bar", "cta-button", "mobile-menu"],
        enabled: true,
        group: "auth"
    },
    {
        title: "Logout",
        url: "/logout",
        sequence: 17,
        placements: ["user-menu", "dropdown"],
        enabled: true,
        group: "auth"
    },

    // User Account Features (18–25)
    {
        title: "My Orders",
        url: "/my-orders",
        sequence: 18,
        placements: ["user-menu", "dropdown", "mobile-menu"],
        enabled: true,
        group: "user-account"
    },
    {
        title: "Track Order",
        url: "/track-order",
        sequence: 19,
        placements: ["user-menu", "dropdown", "footer", "mobile-menu", "header-navigation"],
        enabled: true,
        group: "user-account"
    },
    {
        title: "My Addresses",
        url: "/addresses",
        sequence: 20,
        placements: ["user-menu", "dropdown"],
        enabled: true,
        group: "user-account"
    },
    {
        title: "Recently Viewed",
        url: "/products?q=recently-viewed",
        sequence: 21,
        placements: ["user-menu", "dropdown", "sidebar"],
        enabled: true,
        group: "user-account"
    },
    {
        title: "Saved Items",
        url: "/products?q=saved-items",
        sequence: 22,
        placements: ["user-menu", "dropdown"],
        enabled: true,
        group: "wishlist"   // mutually exclusive
    },
    {
        title: "Reward Points",
        url: "/reward-points",
        sequence: 23,
        placements: ["user-menu", "dropdown", "top-bar"],
        enabled: true,
        group: "user-account"
    },
    {
        title: "Gift Cards",
        url: "/gift-cards",
        sequence: 24,
        placements: ["header-navigation", "footer", "sidebar"],
        enabled: true,
        group: "promo"
    },

    // Promotional/Discovery (25–31)
    {
        title: "Sale",
        url: "/products?q=sale",
        sequence: 25,
        placements: ["header-navigation", "banner", "top-bar", "mobile-menu"],
        enabled: true,
        group: "promo"
    },
    {
        title: "Today's Deals",
        url: "/products?q=todays-deals",
        sequence: 26,
        placements: ["banner", "top-bar", "sidebar"],
        enabled: true,
        group: "promo"
    },
    {
        title: "Featured",
        url: "/products?q=featured",
        sequence: 27,
        placements: ["header-navigation", "banner"],
        enabled: true,
        group: "promo"
    },
    {
        title: "Trending",
        url: "/products?q=trending",
        sequence: 28,
        placements: ["sidebar", "mobile-menu"],
        enabled: true,
        group: "promo"
    },
    {
        title: "Offers",
        url: "/products?q=offers",
        sequence: 29,
        placements: ["banner", "sidebar"],
        enabled: true,
        group: "promo"
    },
    {
        title: "Clearance",
        url: "/products?q=clearance",
        sequence: 30,
        placements: ["sidebar", "footer"],
        enabled: true,
        group: "promo"
    },
    {
        title: "Brands",
        url: "/brands",
        sequence: 31,
        placements: ["header-navigation", "footer", "mega-menu"],
        enabled: true,
        group: "primary"
    },

    // Main Categories (32–47)
    {
        title: "Electronics",
        url: "/products?q=electronics",
        sequence: 32,
        placements: ["mega-menu", "sidebar", "footer", "header-navigation"],
        enabled: true,
        group: "category"
    },
    {
        title: "Beauty",
        url: "/products?q=beauty",
        sequence: 33,
        placements: ["mega-menu", "sidebar", "header-navigation"],
        enabled: true,
        group: "category"
    },
    {
        title: "Sports",
        url: "/products?q=sports",
        sequence: 34,
        placements: ["mega-menu", "sidebar", "header-navigation"],
        enabled: true,
        group: "category"
    },
    {
        title: "Fashion",
        url: "/products?q=fashion",
        sequence: 35,
        placements: ["mega-menu", "sidebar", "footer"],
        enabled: true,
        group: "category"
    },
    {
        title: "Home & Living",
        url: "/products?q=home-living",
        sequence: 36,
        placements: ["mega-menu", "sidebar", "footer"],
        enabled: true,
        group: "category"
    },
    {
        title: "Footwear",
        url: "/products?q=footwear",
        sequence: 37,
        placements: ["mega-menu", "sidebar"],
        enabled: true,
        group: "category"
    },
    {
        title: "Accessories",
        url: "/products?q=accessories",
        sequence: 38,
        placements: ["mega-menu", "sidebar"],
        enabled: true,
        group: "category"
    },
    {
        title: "Jewellery",
        url: "/products?q=jewellery",
        sequence: 39,
        placements: ["mega-menu", "sidebar"],
        enabled: true,
        group: "category"
    },
    {
        title: "Health & Wellness",
        url: "/products?q=health-wellness",
        sequence: 40,
        placements: ["mega-menu", "sidebar"],
        enabled: true,
        group: "category"
    },
    {
        title: "Books",
        url: "/products?q=books",
        sequence: 41,
        placements: ["mega-menu", "sidebar"],
        enabled: true,
        group: "category"
    },
    {
        title: "Grocery",
        url: "/products?q=grocery",
        sequence: 42,
        placements: ["mega-menu", "sidebar"],
        enabled: true,
        group: "category"
    },
    {
        title: "Outdoor",
        url: "/products?q=outdoor",
        sequence: 43,
        placements: ["mega-menu", "sidebar"],
        enabled: true,
        group: "category"
    },
    {
        title: "Pets",
        url: "/products?q=pets",
        sequence: 44,
        placements: ["mega-menu", "sidebar"],
        enabled: true,
        group: "category"
    },
    {
        title: "Automotive",
        url: "/products?q=automotive",
        sequence: 45,
        placements: ["mega-menu", "sidebar"],
        enabled: true,
        group: "category"
    },

    // Secondary Navigation (46–48)
    {
        title: "Collections",
        url: "/products?q=collections",
        sequence: 46,
        placements: ["header-navigation", "sidebar"],
        enabled: true,
        group: "primary"
    },
    {
        title: "Explore",
        url: "/explore",
        sequence: 47,
        placements: ["header-navigation", "sidebar"],
        enabled: true,
        group: "primary"
    },
    {
        title: "Checkout",
        url: "/checkout",
        sequence: 48,
        placements: ["cart-page", "cta-button"],
        enabled: true,
        group: "primary"
    },

    // Customer Support (49–55)
    {
        title: "Contact Us",
        url: "/contact-us",
        sequence: 49,
        placements: ["footer", "mobile-menu"],
        enabled: true,
        group: "support"
    },
    {
        title: "Help Center",
        url: "/help-center",
        sequence: 50,
        placements: ["footer", "user-menu", "mobile-menu"],
        enabled: true,
        group: "support"
    },
    {
        title: "Support Chat",
        url: "/support-chat",
        sequence: 51,
        placements: ["floating-button", "footer"],
        enabled: true,
        group: "support"
    },
    {
        title: "FAQs",
        url: "/faqs",
        sequence: 52,
        placements: ["footer", "sidebar"],
        enabled: true,
        group: "support"
    },
    {
        title: "Shipping Info",
        url: "/shipping-info",
        sequence: 53,
        placements: ["footer", "sidebar"],
        enabled: true,
        group: "support"
    },
    {
        title: "Returns & Refunds",
        url: "/returns-refunds",
        sequence: 54,
        placements: ["footer", "user-menu"],
        enabled: true,
        group: "support"
    },

    // Company Information (55–58)
    {
        title: "About Us",
        url: "/about-us",
        sequence: 55,
        placements: ["header-navigation", "footer"],
        enabled: true,
        group: "company"
    },
    {
        title: "Blog",
        url: "/blog",
        sequence: 56,
        placements: ["header-navigation", "footer"],
        enabled: true,
        group: "company"
    },
    {
        title: "Careers",
        url: "/careers",
        sequence: 57,
        placements: ["footer"],
        enabled: true,
        group: "company"
    },
    {
        title: "Press",
        url: "/press",
        sequence: 58,
        placements: ["footer"],
        enabled: true,
        group: "company"
    },

    // Legal (59–62)
    {
        title: "Terms & Conditions",
        url: "/terms-conditions",
        sequence: 59,
        placements: ["footer"],
        enabled: true,
        group: "legal"
    },
    {
        title: "Privacy Policy",
        url: "/privacy-policy",
        sequence: 60,
        placements: ["footer"],
        enabled: true,
        group: "legal"
    },
    {
        title: "Cookie Policy",
        url: "/cookie-policy",
        sequence: 61,
        placements: ["footer"],
        enabled: true,
        group: "legal"
    },
    {
        title: "Disclaimer",
        url: "/disclaimer",
        sequence: 62,
        placements: ["footer"],
        enabled: true,
        group: "legal"
    },

    // Localization & Settings (63–64)
    {
        title: "Change Language",
        url: "/change-language",
        sequence: 63,
        placements: ["top-bar", "footer", "dropdown"],
        enabled: true,
        group: "language"
    },
    {
        title: "Change Currency",
        url: "/change-currency",
        sequence: 64,
        placements: ["top-bar", "footer", "dropdown"],
        enabled: true,
        group: "currency"
    },

    // App Promotion (65)
    {
        title: "Download App",
        url: "/download-app",
        sequence: 65,
        placements: ["banner", "footer", "sidebar", "mobile-menu"],
        enabled: true,
        group: "promo"
    }
];



const allNavigations = [
    // Shop / Browser Navigations
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Products",
        url: "/products"
    },
    {
        title: "New Arrivals",
        url: "/products?q=new-arrivals"
    },
    {
        title: "Best Sellers",
        url: "/products?q=best-sellers"
    },
    {
        title: "Featured",
        url: "/products?q=featured"
    },
    {
        title: "Trending",
        url: "/products?q=trending"
    },
    {
        title: "Deals",
        url: "/products?q=deals"
    },
    {
        title: "Sale",
        url: "/products?q=sale"
    },
    {
        title: "Clearance",
        url: "/products?q=clearance"
    },
    {
        title: "Today’s Deals",
        url: "/products?q=todays-deals"
    },
    {
        title: "Categories",
        url: "/categories"
    },



    // Popular Category Navigation
    {
        title: "Men",
        url: "/products?q=men"
    },
    {
        title: "Women",
        url: "/products?q=women"
    },
    {
        title: "Kids",
        url: "/products?q=kids"
    },
    {
        title: "Electronics",
        url: "/products?q=electronics"
    },
    {
        title: "Home & Living",
        url: "/products?q=home-living"
    },
    {
        title: "Beauty",
        url: "/products?q=beauty"
    },
    {
        title: "Sports",
        url: "/products?q=sports"
    },
    {
        title: "Outdoor",
        url: "/products?q=outdoor"
    },
    {
        title: "Grocery",
        url: "/products?q=grocery"
    },
    {
        title: "Books",
        url: "/products?q=books"
    },
    {
        title: "Accessories",
        url: "/products?q=accessories"
    },
    {
        title: "Footwear",
        url: "/products?q=footwear"
    },
    {
        title: "Jewellery",
        url: "/products?q=jewellery"
    },
    {
        title: "Pets",
        url: "/products?q=pets"
    },
    {
        title: "Automotive",
        url: "/products?q=automotive"
    },
    {
        title: "Health & Wellness",
        url: "/products?q=health-wellness"
    },



    // Account & User Menu
    {
        title: "Brands",
        url: "/brands"
    },
    {
        title: "Collections",
        url: "/products?q=collections"
    },
    {
        title: "Explore",
        url: "/explore"
    },
    {
        title: "Login",
        url: "/login"
    },
    {
        title: "Register",
        url: "/register"
    },
    {
        title: "My Account",
        url: "/my-account"
    },
    {
        title: "My Orders",
        url: "/my-orders"
    },
    {
        title: "Wishlist",
        url: "/wishlist"
    },
    {
        title: "Saved Items",
        url: "/products?q=saved-items"
    },
    {
        title: "Recently Viewed",
        url: "/products?q=recently-viewed"
    },
    {
        title: "My Addresses",
        url: "/addresses"
    },
    {
        title: "Track Order",
        url: "/products?q=track-order"
    },
    {
        title: "Gift Cards",
        url: "/gift-cards"
    },
    {
        title: "Logout",
        url: "/logout"
    },



    // Cart & Checkout Navigations
    {
        title: "Cart",
        url: "/cart"
    },
    {
        title: "Checkout",
        url: "/checkout"
    },
    {
        title: "Reward Points",
        url: "/reward-points"
    },


    // Search & Discovery
    {
        title: "Search",
        url: "/search"
    },


    //  Support & Help
    {
        title: "Help Center",
        url: "/help-center"
    },
    {
        title: "Contact Us",
        url: "/contact-us"
    },
    {
        title: "FAQs",
        url: "/faqs"
    },
    {
        title: "Returns & Refunds",
        url: "/returns-refunds"
    },

    {
        title: "Shipping Info",
        url: "/shipping-info"
    },
    {
        title: "Support Chat",
        url: "/support-chat"
    },


    //  Informational / Company
    {
        title: "About Us",
        url: "/about-us"
    },
    {
        title: "Careers",
        url: "/careers"
    },
    {
        title: "Blog",
        url: "/blog"
    },
    {
        title: "Press",
        url: "/press"
    },
    {
        title: "Terms & Conditions",
        url: "/terms-conditions"
    },


    // Legal
    {
        title: "Privacy Policy",
        url: "/privacy-policy"
    },
    {
        title: "Cookie Policy",
        url: "/cookie-policy"
    },
    {
        title: "Disclaimer",
        url: "/about-us"
    },


    // Localization Options
    {
        title: "Change Language",
        url: "/change-language"
    },
    {
        title: "Change Currency",
        url: "/change-currency"
    },


    //Mobile App Promotion
    {
        title: "Download App",
        url: "/download-app"
    },
]