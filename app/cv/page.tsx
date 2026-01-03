import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CV | Rakhmiddin Asiydinov",
    description: "Full-Stack Engineer specialized in TypeScript ecosystems, with a proven track record of optimizing API efficiency by 40% and leading architectural transformations for the pharma and energy sectors.",
};

const technologies = [
    "JavaScript", "TypeScript", "HTML", "CSS",
    "React", "Next.js", "Redux", "Express.js", "Nest.js", "Tailwind CSS",
    "MongoDB", "PostgreSQL", "Drizzle",
    "Git", "Docker", "Postman", "Linux"
];

const keySkills = [
    "English",
    "Uzbek",
    "Russian",
];

const experiences = [
    {
        title: "Full-Stack Engineer",
        company: "Vention",
        period: "Jun 2025 – Present",
        bullets: [
            "Engineered an AI-driven sentiment analysis platform, architecting secure end-to-end authentication protocols and developing interactive data visualization dashboards to transform complex feedback into actionable business insights.",
            "Optimized system-wide resource allocation by reducing redundant API overhead by 40% through the implementation of robust client-side validation logic for complex file uploads, significantly decreasing server-side load.",
        ],
        technologies: "React, Next.js, TypeScript, Tailwind CSS, Nest.js, Drizzle, PostgreSQL, Turborepo.",
    },
    {
        title: "Full-Stack Engineer (Project-based)",
        company: "\"Andijan Green Energy\" LLC",
        period: "Mar 2025 – Jun 2025",
        bullets: [
            "Collaborated on 70% of critical architectural design choices, establishing a scalable technical roadmap and a robust full-stack blueprint that reduced future development friction and technical debt.",
            "Architected the foundational API layer for the project's MVP, establishing seamless data synchronization between the React frontend and backend services to accelerate early-stage prototyping.",
        ],
        technologies: "React, Next.js, Node.js, Express.js, MongoDB.",
    },
    {
        title: "Frontend Engineer",
        company: "Itransition",
        period: "Aug 2022 – Jul 2024",
        bullets: [
            "Modernized the testing infrastructure of a pharmaceutical platform by migrating 100+ legacy tests from Enzyme to React Testing Library, resulting in a 30% improvement in test reliability.",
            "Facilitated a seamless transition to a new corporate brand by executing 50% of the UI/UX overhaul, implementing a scalable theme-provider architecture in React that allowed for a zero-downtime identity shift for the UK-based client.",
        ],
        technologies: "JavaScript, React, Redux, React Testing Library, Enzyme, Node.js, Express.js.",
    },
];

const education = [
    {
        degree: "Bachelor of E-commerce",
        school: "Tashkent University of Information Technologies",
        period: "Jun 2024",
        description: "Concentrations: Software Engineering & Digital Marketing. GPA: 4.59 / 5.0",
    },
];

const projects = [
    {
        title: "Full-Stack Engineer",
        project: "Pentagol Football data platform",
        url: "https://pentagol.uz",
        period: "Dec 2025 – Present",
        bullets: [
            "Built a high-performance football news engine with a Next.js frontend and Nest.js backend, delivering real-time match schedules and league standings.",
            "Maintained production-ready infrastructure using Docker, Nginx reverse proxy, and SSL.",
        ],
    },
];

const socialLinks = [
    { name: "GitHub", url: "https://github.com/rahmiddinasiydinov", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rakhmiddin", icon: "linkedin" },
    { name: "Email", url: "mailto:rahmiddinasiydinov@gmail.com", icon: "email" },
    { name: "Telegram", url: "https://t.me/programmerTeacher", icon: "telegram" },
    { name: "Website", url: "https://rakhmiddin.uz", icon: "website" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen p-[100px] bg-[#030303] flex justify-center">
            <div className="max-w-[900px] mx-auto px-6">
                {/* Hero Section */}
                <section className="flex flex-col items-center text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <div className="mb-8">
                        <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center font-['Outfit'] text-6xl font-bold text-amber-50 shadow-[0_0_50px_rgba(212,165,116,0.3)]">
                            R
                        </div>
                    </div>
                    <div className="max-w-[800px]">
                        <h1 className="font-['Outfit'] text-[clamp(2rem,5vw,3rem)] font-bold text-amber-50 mb-2">
                            RAKHMIDDIN ASIYDINOV
                        </h1>
                        <h2 className="text-xl text-amber-500 font-medium mb-6">Full-Stack Engineer</h2>
                        <div className="flex justify-center gap-6 text-zinc-400 mb-8 flex-wrap">
                            <span>Tashkent, Uzbekistan</span>
                            <span className="text-zinc-600">|</span>
                            <a href="tel:+998947076772" className="hover:text-amber-400 transition-colors">+998 (94) 707-6772</a>
                            <span className="text-zinc-600">|</span>
                            <a href="mailto:rahmiddinasiydinov@gmail.com" className="hover:text-amber-400 transition-colors">rahmiddinasiydinov@gmail.com</a>
                        </div>
                        <p className="text-lg text-zinc-400 leading-relaxed mb-4 text-justify">
                            Full-Stack Engineer specialized in TypeScript ecosystems, with a proven track record of optimizing API efficiency by 40% and leading architectural transformations for the pharma and energy sectors.
                        </p>

                        <div className="flex gap-4 justify-center mt-10 flex-wrap">
                            <a
                                href="/rakhmiddin_cv.pdf"
                                download
                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,165,116,0.4)]"
                            >
                                Download CV
                            </a>
                            <a
                                href="https://t.me/programmerTeacher"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-amber-100 font-semibold rounded-xl border border-amber-700/40 transition-all duration-300 hover:bg-amber-900/20 hover:border-amber-500/60"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <h2 className="font-['Outfit'] text-[1.75rem] font-bold text-amber-50 mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-amber-500 after:to-amber-700 after:rounded-full">
                        Technologies
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-[#0a0908] border border-amber-900/20 rounded-lg text-amber-100 font-medium transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-900/10 hover:-translate-y-1 cursor-default shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Languages Section */}
                <section className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <h2 className="font-['Outfit'] text-[1.75rem] font-bold text-amber-50 mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-amber-500 after:to-amber-700 after:rounded-full">
                        Languages
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {keySkills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-[#0a0908] border border-amber-900/20 rounded-lg text-amber-100 font-medium transition-all duration-300 hover:border-amber-500/50 hover:bg-amber-900/10 cursor-default shadow-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <h2 className="font-['Outfit'] text-[1.75rem] font-bold text-amber-50 mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-amber-500 after:to-amber-700 after:rounded-full">
                        Work Experience
                    </h2>
                    <div className="relative pl-8 before:content-[''] before:absolute before:left-[6px] before:top-0 before:bottom-0 before:w-0.5 before:bg-amber-900/30">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative mb-8 last:mb-0">
                                <div className="absolute -left-8 top-1.5 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(212,165,116,0.5)]" />
                                <div className="bg-[#0a0908] border border-amber-900/20 rounded-xl p-6 transition-all duration-300 hover:border-amber-600/40 group">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                                        <h3 className="text-xl font-semibold text-amber-50 group-hover:text-amber-200 transition-colors">{exp.title}</h3>
                                        <span className="text-sm text-amber-500 font-medium whitespace-nowrap bg-amber-950/30 px-3 py-1 rounded-full border border-amber-900/30">{exp.period}</span>
                                    </div>
                                    <p className="text-lg text-zinc-300 mb-3 font-medium">{exp.company}</p>
                                    <div className="border-t border-amber-900/10 pt-3">
                                        <ul className="space-y-2 text-zinc-500 text-sm lg:text-base">
                                            {exp.bullets.map((bullet, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="mt-2 w-1 h-1 bg-amber-500 rounded-full flex-shrink-0" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-xs text-zinc-600 mt-3">Technologies: {exp.technologies}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <h2 className="font-['Outfit'] text-[1.75rem] font-bold text-amber-50 mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-amber-500 after:to-amber-700 after:rounded-full">
                        Education
                    </h2>
                    <div className="relative pl-8 before:content-[''] before:absolute before:left-[6px] before:top-0 before:bottom-0 before:w-0.5 before:bg-amber-900/30">
                        {education.map((edu, index) => (
                            <div key={index} className="relative mb-8 last:mb-0">
                                <div className="absolute -left-8 top-1.5 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(212,165,116,0.5)]" />
                                <div className="bg-[#0a0908] border border-amber-900/20 rounded-xl p-6 transition-all duration-300 hover:border-amber-600/40 group">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                                        <h3 className="text-xl font-semibold text-amber-50 group-hover:text-amber-200 transition-colors">{edu.degree}</h3>
                                        <span className="text-sm text-amber-500 font-medium whitespace-nowrap bg-amber-950/30 px-3 py-1 rounded-full border border-amber-900/30">{edu.period}</span>
                                    </div>
                                    <p className="text-lg text-zinc-300 mb-2 font-medium">{edu.school}</p>
                                    <p className="text-zinc-500 leading-relaxed text-sm border-t border-amber-900/10 pt-3">{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <h2 className="font-['Outfit'] text-[1.75rem] font-bold text-amber-50 mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-amber-500 after:to-amber-700 after:rounded-full">
                        Projects
                    </h2>
                    <div className="relative pl-8 before:content-[''] before:absolute before:left-[6px] before:top-0 before:bottom-0 before:w-0.5 before:bg-amber-900/30">
                        {projects.map((proj, index) => (
                            <div key={index} className="relative mb-8 last:mb-0">
                                <div className="absolute -left-8 top-1.5 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(212,165,116,0.5)]" />
                                <div className="bg-[#0a0908] border border-amber-900/20 rounded-xl p-6 transition-all duration-300 hover:border-amber-600/40 group">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                                        <h3 className="text-xl font-semibold text-amber-50 group-hover:text-amber-200 transition-colors">{proj.title}</h3>
                                        <span className="text-sm text-amber-500 font-medium whitespace-nowrap bg-amber-950/30 px-3 py-1 rounded-full border border-amber-900/30">{proj.period}</span>
                                    </div>
                                    <a
                                        href={proj.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-amber-400 mb-3 font-medium hover:underline inline-block"
                                    >
                                        {proj.project}
                                    </a>
                                    <div className="border-t border-amber-900/10 pt-3">
                                        <ul className="space-y-2 text-zinc-500 text-sm lg:text-base">
                                            {proj.bullets.map((bullet, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="mt-2 w-1 h-1 bg-amber-500 rounded-full flex-shrink-0" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Social Links */}
                <section className="animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <h2 className="font-['Outfit'] text-[1.75rem] font-bold text-amber-50 mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-amber-500 after:to-amber-700 after:rounded-full">
                        Connect With Me
                    </h2>
                    <div className="flex gap-4 flex-wrap">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                className="flex items-center gap-3 px-6 py-4 bg-[#0a0908] border border-amber-900/20 rounded-xl text-amber-100 font-medium transition-all duration-300 hover:bg-amber-900/15 hover:border-amber-600/40 hover:-translate-y-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.icon === "github" && (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                )}
                                {link.icon === "linkedin" && (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                )}
                                {link.icon === "email" && (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400">
                                        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                                    </svg>
                                )}
                                {link.icon === "telegram" && (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg>
                                )}
                                {link.icon === "website" && (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                                    </svg>
                                )}
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
