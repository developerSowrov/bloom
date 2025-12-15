import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/premium_photo**',
      },
    ],
  },
};

export default nextConfig;



// import type { NextConfig } from "next";
// import PWA from "@ducanh2912/next-pwa";

// const withPWA = PWA({
//    dest: "public",
//    cacheOnFrontEndNav: true,
//    aggressiveFrontEndNavCaching: true,
//    reloadOnOnline: true,
//   //  swcMinify: true,
//   //  disable: process.env.NODE_ENV === "development",
//   disable: false,
//    workboxOptions: {
//       disableDevLogs: true,
//    },
// });


// const nextConfig: NextConfig = {
//   output: "standalone",
//   webpack: () => ({}), // needed by some PWA setups
//   turbopack: {},
// };

// export default withPWA(nextConfig);

