/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    Mongo_DB_Connection : process.env.Mongo_DB_Connection
  }
}

module.exports = nextConfig


