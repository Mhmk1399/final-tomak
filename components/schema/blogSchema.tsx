import { generateBlogSchema } from "../../lib/blogGenerator";
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

export function BlogSchema({ blogData }: { blogData: BlogSchemaProps }) {
  const schema = generateBlogSchema(blogData);
  console.log(schema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
