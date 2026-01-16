"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center p-4 pt-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 h-[120px] md:h-[auto] flex items-center justify-center">
                    <TypeAnimation
                        sequence={[
                            "Halo, saya Fiky",
                            1500,
                            "Selamat datang di website saya",
                            1500,
                            "Software Engineer",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        cursor={true}
                    />
                </div>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Fokus pada pengembangan NLP, AI, dan Web Development.
                </p>
            </motion.div>
        </section>
    );
};
