"use client";
import { motion } from "framer-motion";
import {
    Code2,
    Brain,
    Atom,
    Wind,
    Layers
} from "lucide-react";

const stacks = [
    { name: "Python", icon: Code2, color: "text-yellow-400" },
    { name: "TensorFlow", icon: Brain, color: "text-orange-500" },
    { name: "Next.js", icon: Layers, color: "text-white" },
    { name: "React", icon: Atom, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: Wind, color: "text-cyan-400" },
];

export const TechStack = () => {
    return (
        <section className="py-10">
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {stacks.map((stack, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-full backdrop-blur-sm hover:border-zinc-700 hover:bg-zinc-800 transition-all"
                    >
                        <stack.icon className={`w-5 h-5 ${stack.color}`} />
                        <span className="font-medium text-zinc-300">{stack.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
