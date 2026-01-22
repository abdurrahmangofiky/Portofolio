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
                <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 h-[120px] md:h-[auto] flex items-center justify-center pb-2">
                    <TypeAnimation
                        sequence={[
                            "Hello, I'm Abdurrahman Gofiky",
                            1500,
                            "I Build Modern Websites",
                            1500,
                            "I Develop AI & NLP Models",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        cursor={true}
                    />
                </div>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Aspiring Web Developer with a solid background in Informatics. Skilled in building responsive and dynamic websites using Laravel and modern frontend frameworks like Next.js. Committed to writing clean code and creating user-friendly interfaces, with a continuous drive to learn new technologies and improve web performance.
                </p>
            </motion.div>
        </section>
    );
};
