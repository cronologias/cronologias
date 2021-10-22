module.exports = {
  reactStrictMode: true,
}

// Cloudinary configure images
const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  images: {
    domains: [
      'res.cloudinary.com'
    ]
  }
}