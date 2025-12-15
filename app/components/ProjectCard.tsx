import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectCardProps {
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

export default function ProjectCard({
    slug,
    title,
    description,
    image,
    technologies,
}: ProjectCardProps) {
    return (
        <article className="group bg-[#0a0908] border border-amber-900/20 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-amber-600/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(212,165,116,0.15)]">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1814] to-[#0a0908]">
                    {image ? <Image src={image} alt={title} fill className="object-cover" /> : <span className="text-5xl opacity-50">🚀</span>}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/90 to-transparent" />
            </div>

            <div className="p-6">
                <h3 className="font-['Outfit'] text-xl font-bold text-amber-50 mb-2">
                    {title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-amber-900/20 text-amber-300 border border-amber-800/30 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                    {technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium bg-amber-900/20 text-amber-300 border border-amber-800/30 rounded-full">
                            +{technologies.length - 3}
                        </span>
                    )}
                </div>

                <Link
                    href={`/portfolio/${slug}`}
                    className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm transition-all duration-250 hover:gap-4 hover:text-amber-300"
                >
                    <span>View Details</span>
                    <svg className="w-[18px] h-[18px] transition-transform duration-250 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </article>
    );
}
