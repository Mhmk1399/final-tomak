interface BlogSchemaProps {
  title: string;
  url: string;
  images: string[];
  sections: {
    heading: string;
    content: string;
    images?: string[];
    lists?: string[];
  }[];
}

export function generateBlogSchema(blogData: BlogSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.tomakdigitalagency.ir/${blogData.url}`,
    },
    headline: blogData.title,
    image: blogData.images,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Tomak",
      url: "https://www.tomakdigitalagency.ir/",
    },
    publisher: {
      "@type": "Organization",
      name: "Tomak",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tomakdigitalagency.ir/",
      },
    },
    articleBody: blogData.sections.map((section) => section.content).join(" "),
  };
}
