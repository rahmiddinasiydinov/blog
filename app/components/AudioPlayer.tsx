"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
    audioSrc?: string;
    trackName?: string;
    artistName?: string;
}

export default function AudioPlayer({
    audioSrc = "/audio/coward1.mp3",
    trackName = "Coward",
    artistName = "Hans Zimmer",
}: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPrompt, setShowPrompt] = useState(true);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(() => {
                    console.log("Autoplay was prevented");
                });
            }
            setIsPlaying(!isPlaying);
            setShowPrompt(false);
        }
    };


    return (
        <>
            <audio ref={audioRef} src={audioSrc} />

            <div className="fixed bottom-6 right-6 flex items-center gap-4 z-50">
                {showPrompt && (
                    <button
                        onClick={togglePlay}
                        className="flex items-center gap-2 px-6 py-3 bg-amber-900/20 backdrop-blur-xl border border-amber-700/30 rounded-full cursor-pointer animate-pulse hover:bg-amber-900/30 hover:scale-[1.02] transition-all duration-2000"
                    >
                        <span className="text-xl">🎵</span>
                        <span className="text-amber-100 text-sm font-medium whitespace-nowrap">
                            Click for immersive experience
                        </span>
                    </button>
                )}

                <button
                    className={cn(
                        "flex items-center justify-center w-14 h-14 rounded-full border cursor-pointer transition-all duration-100 hover:scale-105",
                        isPlaying
                            ? "bg-gradient-to-r from-amber-600 to-amber-800 border-transparent shadow-[0_0_20px_rgba(212,165,116,0.4)]"
                            : "bg-amber-900/20 backdrop-blur-xl border-amber-700/30 hover:border-amber-500"
                    )}
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                >
                    {isPlaying ? (
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-amber-200" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </button>
            </div>
        </>
    );
}
