import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.tomakdigitalagency.ir/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.tomakdigitalagency.ir/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 2,
    },
    {
      url: 'https://www.tomakdigitalagency.ir/services',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 3,
    },
    {
      url: 'https://www.tomakdigitalagency.ir/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 3,
    },
    {
      url: 'https://www.tomakdigitalagency.ir/blog',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 4,
    },

    // Add more URLs as needed
  ]
}
