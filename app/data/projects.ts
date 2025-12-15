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
    slug: "project-one",
    title: "Project One",
    shortDescription: "A modern web application built with cutting-edge technologies for seamless user experience.",
    fullDescription: `This project showcases modern web development practices using React and Next.js. 
    
The application features:
- Responsive design that works across all devices
- Real-time data synchronization
- Optimized performance with lazy loading
- Intuitive user interface with smooth animations

The main challenge was implementing a scalable architecture that could handle high traffic while maintaining fast response times.`,
    image: "/images/project-1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/username/project-one",
      live: "https://project-one.example.com",
    },
    featured: true,
    myRole: "Lead Frontend Developer",
    client: "TechSolutions Inc.",
    keyResponsibilities: [
      "Designed and implemented the user interface using React and Tailwind CSS",
      "Optimized application performance achieving a 98/100 Lighthouse score",
      "Mentored junior developers and conducted code reviews",
      "Integrated RESTful APIs for real-time data fetching"
    ],
    achievements: [
      "Reduced page load time by 40%",
      "Successfully launched MVP 2 weeks ahead of schedule",
      "Implemented a custom design system used across 3 other internal projects"
    ]
  },
  {
    id: "2",
    slug: "project-two",
    title: "Project Two",
    shortDescription: "An innovative mobile-first solution designed to streamline workflow and boost productivity.",
    fullDescription: `A comprehensive productivity application that helps teams collaborate more effectively.

Key features include:
- Task management with priority levels
- Team collaboration tools
- Progress tracking and analytics
- Integration with popular third-party services

This project demonstrates expertise in building complex, feature-rich applications.`,
    image: "/images/project-2.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    links: {
      github: "https://github.com/username/project-two",
    },
    featured: true,
    myRole: "Full Stack Developer",
    client: "ProductivityPlus",
    keyResponsibilities: [
      "Built the backend REST API using Node.js and Express",
      "Implemented real-time collaboration features using Socket.io",
      "Designed the database schema in MongoDB for efficient data retrieval"
    ],
    achievements: [
      "Scaled the application to support 10,000+ concurrent users",
      "Implemented an automated testing pipeline reducing bug reports by 60%",
      "Developed a robust plugin system for third-party integrations"
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
      live: "https://rakhmiddin.uz",
      github: "https://github.com/rahmiddin/portfolio-v2"
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
