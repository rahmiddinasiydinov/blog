import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "../../data/blogs";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const blogs = getAllBlogs();
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const blog = getBlogBySlug(resolvedParams.slug);

    if (!blog) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${blog.title} | Rakhmiddin Asiydinov`,
        description: blog.description,
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const resolvedParams = await params;
    const blog = getBlogBySlug(resolvedParams.slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#030303] pb-20">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-black/30 backdrop-blur-[1px]" />

                <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6">
                    <div className="max-w-[800px] mx-auto w-full">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-zinc-300 font-medium mb-8 transition-all duration-250 hover:text-amber-400 group backdrop-blur-md bg-black/30 px-4 py-2 rounded-full border border-white/10 w-fit"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="transition-transform duration-250 group-hover:-translate-x-1"
                            >
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            <span>Back to Blogs</span>
                        </Link>

                        <div className="flex items-center gap-4 text-sm font-medium text-amber-500 mb-4">
                            <span>{blog.date}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span>{blog.readTime}</span>
                        </div>

                        <h1 className="font-['Outfit'] text-[clamp(2rem,5vw,3.5rem)] font-bold text-amber-50 leading-tight drop-shadow-lg">
                            {blog.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-[800px] mx-auto px-6 relative z-10">
                <div className="prose prose-invert prose-amber max-w-none">
                    <div className="space-y-8 text-lg text-zinc-300 leading-relaxed whitespace-pre-line">
                        {blog.content}
                    </div>
                </div>

                {/* Author / Footer */}
                <div className="mt-16 pt-8 border-t border-amber-900/20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-xl">
                            R
                        </div>
                        <div>
                            <p className="text-amber-50 font-medium">Rakhmiddin Asiydinov</p>
                            <p className="text-sm text-zinc-500">Frontend Engineer</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {/* Social Share links could go here */}
                    </div>
                </div>
            </article>
        </main>
    );
}
