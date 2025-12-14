interface VideoBackgroundProps {
    videoSrc?: string;
    fallbackImage?: string;
}

export default function VideoBackground({
    videoSrc = "/videos/ocean1.mp4",
    fallbackImage = "/images/ocean-fallback.jpg",
}: VideoBackgroundProps) {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <video
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster={fallbackImage}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-[#0a0a0f]/70 backdrop-blur-sm" />
        </div>
    );
}
