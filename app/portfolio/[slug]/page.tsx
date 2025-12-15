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
        <main className="min-h-screen bg-[#030303] pb-16">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent backdrop-blur-[2px] from-10% via-30%" />

                <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
                    <div className="max-w-[1200px] mx-auto w-full">
                        <Link
                            href="/portfolio"
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
                            <span>Back to Portfolio</span>
                        </Link>

                        <h1 className="font-['Outfit'] text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-amber-50 mb-6 leading-tight drop-shadow-lg">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl leading-relaxed drop-shadow-md">
                            {project.shortDescription}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 -mt-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-600 delay-200">
                        {/* Project Overview */}
                        <section className="bg-[#0a0908] border border-amber-900/20 rounded-2xl p-8 backdrop-blur-sm">
                            <h2 className="font-['Outfit'] text-2xl font-bold text-amber-50 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-amber-500 rounded-full" />
                                Project Overview
                            </h2>
                            <div className="text-zinc-400 leading-relaxed text-lg space-y-6">
                                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </section>

                        {/* Key Responsibilities */}
                        <section>
                            <h2 className="font-['Outfit'] text-2xl font-bold text-amber-50 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-amber-500 rounded-full" />
                                Key Responsibilities
                            </h2>
                            <ul className="grid gap-4">
                                {project.keyResponsibilities?.map((resp, index) => (
                                    <li key={index} className="flex items-start gap-4 p-4 bg-[#0a0908]/50 border border-amber-900/10 rounded-xl hover:border-amber-500/20 transition-colors">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                                        <span className="text-zinc-400 leading-relaxed">{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Achievements */}
                        <section>
                            <h2 className="font-['Outfit'] text-2xl font-bold text-amber-50 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-amber-500 rounded-full" />
                                Key Achievements
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.achievements?.map((achievement, index) => (
                                    <div key={index} className="p-5 bg-gradient-to-br from-[#0a0908] to-[#1a1814] border border-amber-900/20 rounded-xl">
                                        <div className="mb-3 text-2xl">🏆</div>
                                        <p className="text-zinc-400 leading-relaxed">{achievement}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-600 delay-300">
                        {/* Project Info Card */}
                        <div className="bg-[#0a0908] border border-amber-900/20 rounded-2xl p-6 space-y-6 sticky top-24">
                            <div>
                                <h3 className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-2">My Role</h3>
                                <p className="text-amber-50 text-lg font-medium">{project.myRole || "Developer"}</p>
                            </div>

                            <div className="w-full h-px bg-amber-900/20" />

                            <div>
                                <h3 className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-2">Client</h3>
                                <p className="text-amber-50 text-lg font-medium">{project.client || "Confidential"}</p>
                            </div>

                            <div className="w-full h-px bg-amber-900/20" />

                            <div>
                                <h3 className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-3">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm font-medium bg-amber-900/20 text-amber-400 border border-amber-800/30 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full h-px bg-amber-900/20" />

                            <div className="flex flex-col gap-3 pt-2">
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,165,116,0.4)]"
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
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-amber-100 font-semibold rounded-xl border border-amber-700/40 transition-all duration-300 hover:bg-amber-900/20 hover:border-amber-500/60"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
