"use client";

import { BentoGrid } from "@/components/BentoGrid";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-zinc-950 pt-32 px-6 pb-12">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 pb-2">
                        My Projects
                    </h1>
                    <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                        Here is a collection of my technical projects, ranging from Machine Learning and NLP to Web Development.
                    </p>
                </div>

                <BentoGrid items={projects} />
            </div>
        </main>
    );
}
