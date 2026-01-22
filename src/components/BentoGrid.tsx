"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";

type Project = {
    id?: number;
    title: string;
    tag: string;
    description: string;
    tech: string[];
    colSpan: string;
    githubUrl?: string;
    demoUrl?: string;
};

interface BentoGridProps {
    items: Project[];
}

export const BentoGrid = ({ items }: BentoGridProps) => {
    return (
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                {items.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className={`glass-card p-8 rounded-2xl flex flex-col justify-between ${project.colSpan} group relative overflow-hidden`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Gradient Blob for Glass Effect */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors duration-500" />

                        <div className="z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest border border-blue-500/30 px-2 py-1 rounded">
                                    {project.tag}
                                </span>
                                <div className="flex gap-2">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white"
                                        >
                                            {project.githubUrl.includes("github.com") ? (
                                                <Github className="w-4 h-4" />
                                            ) : (
                                                <Globe className="w-4 h-4" />
                                            )}
                                        </a>
                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white"
                                        >
                                            <Globe className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold text-zinc-50 mb-3 group-hover:text-blue-300 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 z-10 mt-auto">
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-xs text-zinc-500 bg-zinc-950/50 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
