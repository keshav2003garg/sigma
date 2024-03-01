'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { GoogleGeminiEffect } from '../ui/google-gemini-effect';

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(
        scrollYProgress,
        [0, 0.8],
        [0.15, 1.2],
    );
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(
        scrollYProgress,
        [0, 0.8],
        [0.05, 1.2],
    );
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
    return (
        <div
            className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] relative pt-40 overflow-clip"
            ref={ref}
        >
            <GoogleGeminiEffect
                title="Video Processing with Sigma"
                description="Sigma is a video processing api service that allows you to process videos into different resolutions with subtitles."
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
            />
        </div>
    );
};
