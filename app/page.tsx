import VideoBackground from "./components/VideoBackground";
import AudioPlayer from "./components/AudioPlayer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <VideoBackground />

      <main className="min-h-screen pt-20">
        <section className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] px-8 text-center relative">
          <div className="max-w-[800px] animate-in fade-in slide-in-from-bottom-10 duration-800">
            <span className="block text-lg text-amber-500 font-medium mb-2 tracking-wider">
              Welcome, I&apos;m
            </span>
            <h1 className="font-['Outfit'] text-[clamp(3rem,10vw,6rem)] font-extrabold text-amber-50 leading-tight mb-4">
              Rakhmiddin
              <span className="text-amber-500">.</span>
            </h1>
            <p className="text-[clamp(1.25rem,3vw,1.75rem)] text-zinc-400 font-medium mb-6">
              Software Developer & Creative Thinker
            </p>
            <p className="text-lg text-zinc-500 max-w-[600px] mx-auto mb-10 leading-relaxed">
              Building digital experiences with passion and precision.
              Turning ideas into elegant, functional solutions.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold text-base rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,165,116,0.4)]"
              >
                View My Work
              </Link>
              <Link
                href="/cv"
                className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-amber-100 font-semibold text-base rounded-xl border border-amber-700/40 transition-all duration-300 hover:bg-amber-900/20 hover:border-amber-500/60"
              >
                About Me
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 flex flex-col items-center gap-2 opacity-0 animate-in fade-in duration-1000 delay-500 hidden sm:flex">
            <span className="text-xs text-zinc-600 uppercase tracking-widest">
              Scroll to explore
            </span>
            <div className="text-amber-600/50 animate-bounce">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
