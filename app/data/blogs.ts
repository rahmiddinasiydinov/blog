export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string;
    date: string;
    image: string;
    readTime: string;
}

export const blogs: BlogPost[] = [
    {
        id: "1",
        slug: "will-ai-take-frontend-developers-jobs",
        title: "Will AI Take Frontend Developers' Jobs?",
        description: "Some people have been asking me whether Frontend is dying or what the next step should be for Frontend developers. Even among experienced developers, we are discussing this topic, and indeed, AI has enhanced significantly in a very short time.",
        content: `My answer: In short, not yet. There is a huge gap between the current capabilities of AI and real-world development. That is my perception.

Admittedly, AI is doing 90-95% of my tasks. But there is a key point: If I do not pay attention to the remaining 5%, the entire 90-95% "contribution" by AI may work against me.

Yes, it looks awesome for landing pages and even some mid-level enterprise applications. However, it can simply cause chaos in large enterprise applications, making the development process even slower in some scenarios (because developers are busy cleaning "artifacts" left by AI), and sometimes it creates mismatches between features.

I believe that we, as software engineers, should be one step ahead of AI capabilities. This means focusing more on architectural design and system optimization is required.

In conclusion: Indeed, AI is doing great with common patterns. But I think this is a good thing; it is making room for us to think more about creativity—specifically architectural design, system optimization, and exploring brand-new ways of development.`,
        date: new Date("2025-12-18").toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        image: "/images/blog1.jpg",
        readTime: "3 min read"
    }
];

export const getAllBlogs = () => {
    return blogs;
};

export const getBlogBySlug = (slug: string) => {
    return blogs.find(blog => blog.slug === slug);
};
