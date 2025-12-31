import Link from "next/link";
import Image from "next/image";

interface CertificationCardProps {
    slug: string;
    name: string;
    issuer: string;
    date: string;
    image: string;
    skills: string[];
}

export default function CertificationCard({
    slug,
    name,
    issuer,
    date,
    image,
    skills,
}: CertificationCardProps) {
    return (
        <Link href={`/certifications/${slug}`}>
            <article className="group flex flex-col md:flex-row bg-[#0a0908] border border-amber-900/20 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber-600/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(212,165,116,0.15)]">
                {/* Certificate Image */}
                <div className="relative w-full md:w-[320px] lg:w-[400px] aspect-[4/3] md:aspect-auto md:min-h-[200px] flex-shrink-0 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1814] to-[#0a0908]">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0908]/50 hidden md:block" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-amber-500 text-sm font-medium">{issuer}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-500 text-sm">{date}</span>
                    </div>

                    <h3 className="font-['Outfit'] text-xl lg:text-2xl font-bold text-amber-50 mb-4 group-hover:text-amber-300 transition-colors duration-250">
                        {name}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {skills.slice(0, 4).map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 text-xs font-medium bg-amber-900/20 text-amber-300 border border-amber-800/30 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                        {skills.length > 4 && (
                            <span className="px-3 py-1 text-xs font-medium bg-amber-900/20 text-amber-300 border border-amber-800/30 rounded-full">
                                +{skills.length - 4}
                            </span>
                        )}
                    </div>

                    <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm transition-all duration-250 group-hover:gap-4 group-hover:text-amber-300">
                        <span>View Certificate</span>
                        <svg className="w-[18px] h-[18px] transition-transform duration-250 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </article>
        </Link>
    );
}
