const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL, // ✅ expose to build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;