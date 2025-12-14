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
  },
  {
    id: "3",
    slug: "project-three",
    title: "Project Three",
    shortDescription: "A creative design portfolio showcasing artistic vision and technical skills.",
    fullDescription: `A stunning portfolio website that combines artistic design with technical excellence.

Highlights:
- Custom animations and transitions
- Interactive gallery with filtering
- Optimized image loading
- SEO-friendly architecture

The design process focused on creating a memorable user experience that reflects creative thinking.`,
    image: "/images/project-3.jpg",
    technologies: ["Next.js", "Framer Motion", "CSS Modules", "Vercel"],
    links: {
      live: "https://portfolio.example.com",
    },
    featured: false,
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
