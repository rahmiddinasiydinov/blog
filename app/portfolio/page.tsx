import { Metadata } from "next";
import { getAllProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export const metadata: Metadata = {
    title: "Portfolio | Rakhmiddin Asiydinov",
    description: "Explore my projects and work - a collection of web applications and software solutions.",
};

export default function PortfolioPage() {
    const projects = getAllProjects();

    return (
        <main className="min-h-screen pt-20 pb-16 bg-[#030303]">
            <div className="max-w-[1200px] mx-auto px-6">
                <header className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <h1 className="font-['Outfit'] text-[clamp(2rem,5vw,3rem)] font-bold text-amber-50 mb-4">
                        My Portfolio
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-[600px] mx-auto leading-relaxed">
                        A collection of projects I&apos;ve worked on. Each project represents
                        a unique challenge and learning experience.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-600"
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                        >
                            <ProjectCard
                                slug={project.slug}
                                title={project.title}
                                description={project.shortDescription}
                                image={project.image}
                                technologies={project.technologies}
                            />
                        </div>
                    ))}
                </section>

                {projects.length === 0 && (
                    <div className="text-center py-16 text-zinc-500 text-xl">
                        <p>Projects coming soon...</p>
                    </div>
                )}
            </div>
        </main>
    );
}
