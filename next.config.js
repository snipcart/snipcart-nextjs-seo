const sitemap = require('nextjs-sitemap-generator');  
const withSass = require('@zeit/next-sass')

sitemap({  
  baseUrl: 'https://snipcart-nextjs-seo.netlify.com',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
});

module.exports = withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  }
});