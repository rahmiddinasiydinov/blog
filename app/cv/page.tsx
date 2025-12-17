import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Rakhmiddin Asiydinov",
    description: "FullStack Web Developer (JavaScript) - Experienced Software Engineer specializing in Fullstack Web Development.",
};

const technologies = [
    "HTML5", "CSS3", "TailwindCSS", "JavaScript", "TypeScript",
    "ReactJs", "NextJs", "React Testing Library", "Git(version control)",
    "Nodejs", "Nest.js", "TypeORM", "Drizzle ORM", "Docker",
    "PostgreSQL", "MongoDB"
];

const keySkills = [
    "Successful working in a team environment, as well as independently",
    "Communication and networking skills",
    "The ability to follow recommendations, instructions and deliver high-qualified results",
    "Uzbek - Native",
    "English - C1 (IELTS overall 7.5, issued on 7.04.2024)",
    "Russian - Elementary, B1"
];

const experiences = [
    {
        title: "Fullstack Software Engineer",
        company: "“Vention”FE LLC",
        period: "June 2025 - Present",
        description: "An AI based customer feedback analysis project. Technologies: Nextjs, Reactjs, Typescript, TailwindCSS, Nest.js, Drizzle, PostgreSQL",
    },
    {
        title: "Freelance",
        company: "Self-employed",
        period: "May 2025 - Present",
        description: "Contributed to Examy.uz. Developed Tezyoz.uz.",
    },
    {
        title: "Software engineer",
        company: "“Andijan Yashil Energiya” LLC",
        period: "Apr 2025 - June 2025",
        description: "Nextjs, Reactjs, Nodejs, MongoDB.",
    },
    {
        title: "Frontend Developer",
        company: "Itransition",
        period: "Aug 2022 - Jul 2024",
        description: "Working on a pharma project by UK company. Reactjs patterns & best practices; Unit & Integration testing; Migration from enzyme to RTL - testing; CI/CD.",
    },
    {
        title: "Intern Frontend Developer",
        company: "Itransition Group",
        period: "May 2022 - Aug 2022",
        description: "Successful internship program project.",
    },
];

const education = [
    {
        degree: "Bachelor of E-commerce",
        school: "Tashkent University of Information Technologies",
        period: "Aug 2020 - Jun 2024",
        description: "Major in Software engineering and marketing. Final CGPA: 4.59/5",
    },
    {
        degree: "Fullstack web development",
        school: "Najot ta'lim education center",
        period: "Jun 2021 - May 2022",
        description: "Certificate of successful completion of the program",
    },
];

const socialLinks = [
    { name: "GitHub", url: "https://github.com/rahmiddinasiydinov", icon: "github" }, // Assuming github username based on email/name, user can correct if needed or provided later
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rahmiddin-asiydinov-779075227/", icon: "linkedin" }, // Assuming linkedin
    { name: "Email", url: "mailto:rahmiddinasiydinov@gmail.com", icon: "email" },
    { name: "Telegram", url: "https://t.me/programmerTeacher", icon: "telegram" },
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
                            RAHMIDDIN ASIYDINOV
                        </h1>
                        <h2 className="text-xl text-amber-500 font-medium mb-6">FullStack Web Developer (JavaScript)</h2>
                        <div className="flex justify-center gap-6 text-zinc-400 mb-8 flex-wrap">
                            <a href="mailto:rahmiddinasiydinov@gmail.com" className="hover:text-amber-400 transition-colors">rahmiddinasiydinov@gmail.com</a>
                            <span className="text-zinc-600">|</span>
                            <a href="tel:+998947076772" className="hover:text-amber-400 transition-colors">+998947076772</a>
                        </div>
                        <p className="text-lg text-zinc-400 leading-relaxed mb-4 text-justify">
                            A developer with strong background in fullstack web application development, looking for new opportunities to create impact and make a difference.

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
                                href="mailto:rahmiddinasiydinov@gmail.com"
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

                {/* Key Skills Section */}
                <section className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <h2 className="font-['Outfit'] text-[1.75rem] font-bold text-amber-50 mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-[3px] after:bg-gradient-to-r after:from-amber-500 after:to-amber-700 after:rounded-full">
                        Key Skills
                    </h2>
                    <div className="bg-[#0a0908] border border-amber-900/20 rounded-xl p-8 hover:border-amber-600/30 transition-colors duration-300">
                        <ul className="space-y-3">
                            {keySkills.map((skill, index) => (
                                <li key={index} className="flex items-start gap-3 text-zinc-400">
                                    <span className="mt-2 w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed">{skill}</span>
                                </li>
                            ))}
                        </ul>
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
                                    <p className="text-zinc-500 leading-relaxed text-sm lg:text-base border-t border-amber-900/10 pt-3">{exp.description}</p>
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
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
