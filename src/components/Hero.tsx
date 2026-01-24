"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

// Dynamic import for GlobeDemo to avoid SSR issues with Three.js
const GlobeDemo = dynamic(() => import("./Globe3D").then(mod => ({ default: mod.GlobeDemo })), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        </div>
    ),
});

export const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center text-center relative pt-28 md:pt-0 md:justify-center">
            {/* 3D Globe - Background - Hidden on small mobile, visible on larger screens */}
            <div className="absolute inset-0 z-0 hidden sm:block">
                <GlobeDemo />
            </div>

            {/* Hero Text Content - Foreground */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4 sm:space-y-5 relative z-20 mt-0 sm:mt-[35vh] px-6"
            >
                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                    Hi, I&apos;m Gofiky.
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl mx-auto px-4">
                    Web Developer | AI Enthusiast & NLP
                </p>

                {/* Typewriter Effect */}
                <div className="text-lg sm:text-xl md:text-2xl text-zinc-300 pt-2 sm:pt-4">
                    <span>I&apos;m obsessed with </span>
                    <span className="text-blue-400 font-medium">
                        <TypeAnimation
                            sequence={[
                                "building",
                                2000,
                                "learning",
                                2000,
                                "creating",
                                2000,
                                "coding",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </span>
                </div>

                {/* Social Links */}
                <div className="flex justify-center items-center gap-6 pt-6 sm:pt-8">
                    <a
                        href="https://www.linkedin.com/in/abdgof"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a
                        href="https://github.com/abdurrahmangofiky"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a
                        href="mailto:abdurrahman.gofikyy@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/zoldyckgfky_?igsh=ZzZtZ2JnaWM5cTdj&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
