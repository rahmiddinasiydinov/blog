import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "../../data/projects";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Rakhmiddin Asiydinov`,
        description: project.shortDescription,
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 pb-16 bg-[#030303]">
            <div className="max-w-[900px] mx-auto px-6">
                <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-zinc-400 font-medium mb-8 transition-all duration-250 hover:text-amber-400 group"
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
                    <span>Back to Portfolio</span>
                </Link>

                <article className="animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <header className="mb-10">
                        <h1 className="font-['Outfit'] text-[clamp(2rem,5vw,3rem)] font-bold text-amber-50 mb-4">
                            {project.title}
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                            {project.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-1.5 text-sm font-medium bg-amber-900/20 text-amber-400 border border-amber-800/30 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </header>

                    <div className="w-full mb-10 rounded-xl overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-[#1a1814] to-[#0a0908] flex flex-col items-center justify-center gap-4">
                            <span className="text-7xl opacity-50">🚀</span>
                            <span className="text-zinc-600">Project Preview</span>
                        </div>
                    </div>

                    <section className="mb-10">
                        <h2 className="font-['Outfit'] text-2xl font-bold text-amber-50 mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-[50px] after:h-[3px] after:bg-gradient-to-r after:from-amber-500 after:to-amber-700 after:rounded-full">
                            About This Project
                        </h2>
                        <div className="text-zinc-400 leading-relaxed text-lg space-y-6">
                            {project.fullDescription.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    <section className="pt-8 border-t border-amber-900/20">
                        <h2 className="font-['Outfit'] text-2xl font-bold text-amber-50 mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-[50px] after:h-[3px] after:bg-gradient-to-r after:from-amber-500 after:to-amber-700 after:rounded-full">
                            Links
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {project.links.live && (
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,165,116,0.4)]"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                    Live Demo
                                </a>
                            )}
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-amber-100 font-semibold rounded-xl border border-amber-700/40 transition-all duration-300 hover:bg-amber-900/20 hover:border-amber-500/60"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View Code
                                </a>
                            )}
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-amber-100 font-semibold rounded-xl border border-amber-700/40 transition-all duration-300 hover:bg-amber-900/20 hover:border-amber-500/60"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                    Demo
                                </a>
                            )}
                        </div>
                    </section>
                </article>
            </div>
        </main>
    );
}
