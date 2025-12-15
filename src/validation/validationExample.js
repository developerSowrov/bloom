const { validateThemeConfig } = require('./validator');
const schema = require('./public/schema.json');

// Example theme data
const themeData = {
  header: {
    logo: {
      url: 'https://example.com/logo.png',
      alt: 'My Logo'
    },
    navigations: [
      {
        title: 'Home',
        url: 'https://example.com'
      },
      {
        title: 'About',
        url: 'https://example.com/about'
      }
    ],
    searchbar: {
      enabled: true,
      searchOn: ['category', 'popular'],
      preference: 'category'
    },
    commerce: {
      cart: {
        enabled: true,
        behaviour: 'mini-cart'
      },
      favourite: {
        enabled: true,
        behaviour: 'mini-panel'
      }
    }
  },
  hero: {
    enabled: true,
    layout: 'simple',
    alignment: 'center',
    title: 'Welcome to Our Store',
    subtitle: 'Find amazing products',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    buttons: [
      {
        label: 'Shop Now',
        url: 'https://example.com/shop',
        variant: 'primary'
      }
    ]
  },
  footer: {
    brand: {
      logo: {
        url: 'https://example.com/footer-logo.png',
        alt: 'Footer Logo'
      },
      description: 'Your trusted e-commerce platform for quality products.',
      socialLinks: [
        {
          platform: 'facebook',
          url: 'https://facebook.com/example'
        }
      ]
    },
    columns: [
      {
        title: 'Company',
        links: [
          {
            label: 'About Us',
            url: 'https://example.com/about'
          }
        ]
      }
    ],
    legal: {
      copyright: '© 2025 Example Company. All rights reserved.',
      links: [
        {
          label: 'Privacy Policy',
          url: 'https://example.com/privacy'
        }
      ]
    }
  }
};

// Validate the data
const result = validateThemeConfig(themeData, schema);

if (result.isValid) {
  console.log('✅ Validation successful!');
} else {
  console.log('❌ Validation failed with errors:');
  result.errors.forEach(error => console.log('  - ' + error));
}