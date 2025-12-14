import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Rakhmiddin Asiydinov",
    description: "Blog posts and articles coming soon. Stay tuned for insights and ideas.",
};

export default function BlogsPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#030303] relative overflow-hidden">
            <div className="w-full max-w-[600px] p-8 text-center relative z-10">
                <div className="animate-in fade-in slide-in-from-bottom-10 duration-800">

                    <h1 className="font-['Outfit'] text-[clamp(2.5rem,8vw,4rem)] font-extrabold text-amber-50 leading-tight mb-6">
                        Coming
                        <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent"> Soon</span>
                    </h1>

                    <p className="text-lg text-zinc-400 leading-relaxed max-w-[500px] mx-auto mb-10">
                        I&apos;m working on some exciting blog posts and articles.
                        Stay tuned for insights on software development, technology trends,
                        and creative problem-solving.
                    </p>

                    {/* Loading dots animation */}
                    <div className="flex justify-center gap-3 mb-10">
                        <div
                            className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"
                            style={{ animationDelay: '0s' }}
                        />
                        <div
                            className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"
                            style={{ animationDelay: '0.2s' }}
                        />
                        <div
                            className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"
                            style={{ animationDelay: '0.4s' }}
                        />
                    </div>
                </div>
            </div>

            {/* Decorative circles - Interstellar amber glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-[400px] h-[400px] -top-[200px] -right-[100px] rounded-full bg-gradient-to-r from-amber-600 to-amber-900 opacity-[0.07] blur-[80px]"
                    style={{ animation: 'pulse 8s ease-in-out infinite' }}
                />
                <div
                    className="absolute w-[300px] h-[300px] -bottom-[150px] -left-[100px] rounded-full bg-gradient-to-r from-amber-600 to-amber-900 opacity-[0.07] blur-[80px]"
                    style={{ animation: 'pulse 10s ease-in-out infinite 2s' }}
                />
                <div
                    className="absolute w-[200px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-600 to-amber-900 opacity-[0.05] blur-[60px]"
                    style={{ animation: 'pulse 12s ease-in-out infinite 4s' }}
                />
            </div>
        </main>
    );
}
