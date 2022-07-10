/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: 'mongodb://localhost:8000/blogDbOne?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
