import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.tomakdigitalagency.ir/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.tomakdigitalagency.ir/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.tomakdigitalagency.ir/services',
      lastModified: new Date(),
    },
    {
      url: 'https://www.tomakdigitalagency.ir/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://www.tomakdigitalagency.ir/blog',
      lastModified: new Date(),
    },

    // Add more URLs as needed
  ]
}
