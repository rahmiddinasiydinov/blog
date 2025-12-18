import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "../data/blogs";

export const metadata: Metadata = {
    title: "Blog | Rakhmiddin Asiydinov",
    description: "Insights on software development, technology trends, and creative problem-solving.",
};

export default function BlogsPage() {
    const blogs = getAllBlogs();

    return (
        <main className="min-h-screen bg-[#030303] relative overflow-hidden pt-32 pb-20 px-6">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-10 duration-700">
                    <h1 className="font-['Outfit'] text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-amber-50 mb-4">
                        Latest
                        <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent"> Insights</span>
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Thoughts on software development, AI, and the future of tech.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <Link
                            href={`/blogs/${blog.slug}`}
                            key={blog.id}
                            className="group block bg-[#0a0908] border border-amber-900/20 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-2 animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative h-60 w-full overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] to-transparent opacity-60" />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs font-medium text-amber-500 mb-3">
                                    <span>{blog.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-amber-500/50" />
                                    <span>{blog.readTime}</span>
                                </div>

                                <h2 className="font-['Outfit'] text-xl font-bold text-amber-50 mb-3 leading-tight group-hover:text-amber-400 transition-colors">
                                    {blog.title}
                                </h2>

                                <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">
                                    {blog.description}
                                </p>

                                <div className="mt-6 flex items-center text-sm font-medium text-white group-hover:text-amber-400 transition-colors">
                                    Read Article
                                    <svg
                                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-[500px] h-[500px] -top-[100px] -right-[200px] rounded-full bg-amber-600/10 blur-[100px]" />
                <div className="absolute w-[400px] h-[400px] bottom-0 left-0 rounded-full bg-amber-900/10 blur-[100px]" />
            </div>
        </main>
    );
}
