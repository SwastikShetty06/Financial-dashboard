/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static export for Capacitor compatibility
    output: 'export',
    // Optional: Disable image optimization if not using next/image, 
    // which is the default for static exports.
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
