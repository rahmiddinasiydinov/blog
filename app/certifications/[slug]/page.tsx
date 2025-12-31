import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCertificationBySlug, getAllCertifications } from "../../data/certifications";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const certifications = getAllCertifications();
    return certifications.map((cert) => ({
        slug: cert.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const certification = getCertificationBySlug(slug);

    if (!certification) {
        return {
            title: "Certification Not Found",
        };
    }

    return {
        title: `${certification.name} | Certifications`,
        description: `${certification.name} certification from ${certification.issuer} - ${certification.description.slice(0, 150)}...`,
    };
}

export default async function CertificationPage({ params }: PageProps) {
    const { slug } = await params;
    const certification = getCertificationBySlug(slug);

    if (!certification) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-20 pb-16 bg-[#030303]">
            <div className="max-w-[1000px] mx-auto px-6">
                {/* Back Link */}
                <Link
                    href="/certifications"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors duration-250 mb-8"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Certifications</span>
                </Link>

                {/* Certificate Image */}
                <div className="relative w-full aspect-[4/3] mb-8 rounded-xl overflow-hidden border border-amber-900/30 bg-[#0a0908] animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <Image
                        src={certification.image}
                        alt={certification.name}
                        fill
                        className="object-contain p-4"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-600" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                    {/* Header */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-amber-500 font-medium">{certification.issuer}</span>
                            <span className="text-zinc-600">•</span>
                            <span className="text-zinc-500">{certification.date}</span>
                        </div>
                        <h1 className="font-['Outfit'] text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-amber-50 mb-4">
                            {certification.name}
                        </h1>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {certification.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 text-sm font-medium bg-amber-900/20 text-amber-300 border border-amber-800/30 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="prose prose-invert prose-amber max-w-none mb-8">
                        <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
                            {certification.description.split('\n').map((paragraph, index) => (
                                <p key={index} className="mb-4" dangerouslySetInnerHTML={{
                                    __html: paragraph
                                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-200">$1</strong>')
                                        .replace(/- /g, '• ')
                                }} />
                            ))}
                        </div>
                    </div>

                    {/* Verify Button */}
                    <a
                        href={certification.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,165,116,0.3)]"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Verify Certificate</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </main>
    );
}
