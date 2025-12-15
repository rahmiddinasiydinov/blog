export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    live?: string;
  };
  featured: boolean;
  myRole: string;
  client: string;
  keyResponsibilities: string[];
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "tezyoz",
    title: "TezYoz",
    shortDescription: "An online typing practice platform with real-time stats, customizable modes, and multi-language support.",
    fullDescription: `An online typing practice platform that allows both signed-in and guest users to take typing tests. Features include real-time typing stats tracking, customizable test modes (time or word-based), secure third-party API integration for saving results, three interface languages, and six supported typing languages.`,
    image: "/images/tezyoz.png",
    technologies: ["HTML Basics + CSS", "Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Node.js", "Nest.js", "Prisma", "MongoDB"],
    links: {
      live: "https://tezyoz.uz", 
    },
    featured: true,
    myRole: "Fullstack Engineer",
    client: "tezyoz.uz", 
    keyResponsibilities: [
      "Enabled non-signed-in users to type and see results while maintaining anonymity and no saved records, improving accessibility and engagement.",
      "Created a typing engine to track users' typing stats, leveraging AI-assisted algorithms during development.",
      "Automated test data saving by integrating with a backend API, ensuring reliable storage and seamless user experience.",
      "Secured all third-party communications using Next.js routes and server actions, protecting sensitive user data.",
      "Developed customizable typing modes with various duration, word counts and different texts in 6 languages, enhancing flexibility and user personalization."
    ],
    achievements: [
      "Boosted SEO performance by ~35% by leveraging Next.js server-side rendering and optimized routing, improving site visibility compared to traditional client-rendered sites.",
      "Delivered 10+ core features within just 1 month, accelerating the platform's launch and early user adoption.",
      "Enhanced user personalization by adding customizable test modes with multiple durations, word counts, and 6 language options, increasing user engagement and retention."
    ]
  },
  {
    id: "2",
    slug: "examy-me",
    title: "Examy.me",
    shortDescription: "An IELTS mock test platform with interactive sections, AI-generated voices, and secure data storage.",
    fullDescription: `An IELTS mock test platform with interactive Listening, Reading, Writing, and Speaking sections, featuring AI-generated voices and secure MongoDB data storage.`,
    image: "/images/examy.png",
    technologies: ["HTML Basics + CSS", "React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    links: {
      live: "https://examy.me",
    },
    featured: true,
    myRole: "Fullstack Engineer",
    client: "Examy.me",
    keyResponsibilities: [
      "Adjusted and created UI components for Listening, Reading, Writing, and Speaking sections, improving test usability.",
      "Generated voices for speaking questions using AI, enhancing interactive test experience.",
      "Stored all test data in MongoDB via the UI, ensuring accurate and organized data management."
    ],
    achievements: [
      "Completed test implementation 33% ahead of deadline, delivering in 2 days instead of the planned 3.",
      "Enhanced test usability with robust and intuitive UI for Listening, Reading, Writing, and Speaking sections.",
      "Implemented reliable data management by integrating structured MongoDB storage for seamless test data handling."
    ]
  },
  {
    id: "3",
    slug: "rahmiddin-uz",
    title: "Rakhmiddin.uz - Personal Portfolio",
    shortDescription: "A minimalist & modern portfolio website built with Next.js 15, featuring an 'Interstellar' dark theme and smooth animations.",
    fullDescription: `My personal portfolio website designed to showcase my projects and skills with a unique visual identity.

Key Features:
- **Interstellar Theme**: Deep dark backgrounds with amber/gold accents for a premium feel.
- **Modern Tech Stack**: Built with Next.js 15 (App Router), React 19, and Tailwind CSS v4.
- **Animations**: Smooth page transitions and element reveals using tailwindcss-animate.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Performance**: High performance with server-side rendering and optimized assets.

The site serves as a central hub for my professional identity and a playground for experimenting with new web technologies.`,
    image: "/images/blog.png",
    technologies: ["Next.js 15", "React 19", "Tailwind CSS v4", "TypeScript"],
    links: {
      live: "https://rakhmiddin.uz"
    },
    featured: true,
    myRole: "Creator & Lead Developer",
    client: "Personal Brand",
    keyResponsibilities: [
      "Designed the UI/UX with a focus on dark mode aesthetics",
      "Implemented the application using the latest Next.js features",
      "Created custom animations and interactive elements",
      "Deployed and optimized for production on Vercel"
    ],
    achievements: [
      "Achieved 100/100 Lighthouse Performance score",
      "Successfully migrated to Tailwind CSS v4 alpha",
      "Integrated automated SEO and sitemap generation"
    ]
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
