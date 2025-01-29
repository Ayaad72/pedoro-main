/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.giphy.com", // already added
      "hebbkx1anhila5yf.public.blob.vercel-storage.com", // add the new domain here
    ],
  },
};

export default nextConfig;
