export interface Certification {
  id: string;
  slug: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl: string;
  skills: string[];
  description: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    slug: "introduction-to-generative-ai",
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "December 2025",
    image: "/images/certifications/generative-ai-google.png",
    verifyUrl: "https://coursera.org/share/451327a432b6a779311eb93c5d61b3c6",
    skills: ["Generative AI", "Machine Learning", "Large Language Models", "Google Cloud"],
    description: `This course introduces the fundamentals of Generative AI, explaining what it is, how it's used, and how it differs from traditional machine learning methods.

The course covers:
- **What is Generative AI**: Understanding the core concepts and capabilities of generative artificial intelligence
- **How Generative AI Works**: Learning about the underlying mechanisms including large language models (LLMs) and their training processes
- **Applications of Gen AI**: Exploring real-world use cases and applications across various industries
- **Google Cloud AI Tools**: Introduction to Google Cloud's suite of AI tools and services for building generative AI applications

This certification validates understanding of generative AI concepts and Google Cloud's AI ecosystem, essential knowledge for modern software development and AI integration.`
  },
  {
    id: "2",
    slug: "nextjs-app-router-fundamentals",
    name: "Next.js App Router Fundamentals",
    issuer: "Vercel",
    date: "August 2025",
    image: "/images/certifications/nextjs-app-router-vercel.png",
    verifyUrl: "https://nextjs.org/learn/certificate?course=dashboard-app&user=88750&certId=dashboard-app-88750-1755503860132",
    skills: ["Next.js", "React", "App Router", "Server Components", "TypeScript"],
    description: `This certification validates proficiency in building modern web applications using Next.js App Router.

The course covers:
- **App Router Architecture**: Understanding the new file-based routing system and nested layouts
- **Server Components**: Leveraging React Server Components for improved performance and reduced client-side JavaScript
- **Data Fetching**: Implementing efficient data fetching patterns with async/await in server components
- **Streaming & Suspense**: Using streaming and React Suspense for progressive page rendering
- **Server Actions**: Handling form submissions and mutations with server actions
- **Authentication & Authorization**: Implementing secure user authentication patterns
- **Database Integration**: Connecting and querying databases in a Next.js application

Issued by Guillermo Rauch, CEO of Vercel, this certification demonstrates expertise in building production-ready applications with Next.js.`
  },
];

export function getCertificationBySlug(slug: string): Certification | undefined {
  return certifications.find((cert) => cert.slug === slug);
}

export function getAllCertifications(): Certification[] {
  return certifications;
}
