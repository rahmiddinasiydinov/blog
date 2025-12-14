"use client";

import { TypeAnimation } from "react-type-animation";
import { ComponentProps } from "react";

interface TypingTextProps {
    text: string;
    speed?: ComponentProps<typeof TypeAnimation>["speed"];
}

export default function TypingText({ text, speed = 50 }: TypingTextProps) {
    return (
        <h1 className="text-4xl md:text-5xl font-semibold text-black text-center">
            <TypeAnimation
                sequence={[text]}
                speed={speed}
                cursor={true}
                repeat={0}
            />
        </h1>
    );
}
