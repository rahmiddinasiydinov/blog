import { Metadata } from "next";
import { getAllCertifications } from "../data/certifications";
import CertificationCard from "../components/CertificationCard";

export const metadata: Metadata = {
    title: "Certifications | Rakhmiddin Asiydinov",
    description: "Professional certifications and credentials - verified skills in cloud computing, AI, and software development.",
};

export default function CertificationsPage() {
    const certifications = getAllCertifications();

    return (
        <main className="min-h-screen pt-20 pb-16 bg-[#030303]">
            <div className="max-w-[1200px] mx-auto px-6">
                <header className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-600">
                    <h1 className="font-['Outfit'] text-[clamp(2rem,5vw,3rem)] font-bold text-amber-50 mb-4">
                        Certifications
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-[600px] mx-auto leading-relaxed">
                        Professional credentials and certifications that validate my skills
                        in cloud computing, artificial intelligence, and software development.
                    </p>
                </header>

                <section className="flex flex-col gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="animate-in fade-in slide-in-from-bottom-8 duration-600"
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                        >
                            <CertificationCard
                                slug={cert.slug}
                                name={cert.name}
                                issuer={cert.issuer}
                                date={cert.date}
                                image={cert.image}
                                skills={cert.skills}
                            />
                        </div>
                    ))}
                </section>

                {certifications.length === 0 && (
                    <div className="text-center py-16 text-zinc-500 text-xl">
                        <p>Certifications coming soon...</p>
                    </div>
                )}
            </div>
        </main>
    );
}
