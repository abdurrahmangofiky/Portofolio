"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const socials = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/abdgof",
        },
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/abdurrahmangofiky",
        },
        {
            name: "Email Me",
            icon: Mail,
            url: "mailto:abdurrahman.gofikyy@gmail.com",
        },
        {
            name: "Instagram",
            icon: Instagram,
            url: "https://www.instagram.com/zoldyckgfky_?igsh=ZzZtZ2JnaWM5cTdj&utm_source=qr",
        },
    ];

    return (
        <main className="min-h-screen bg-zinc-950 pt-32 px-6 pb-12">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header Section */}
                <section className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    {/* Foto Profil */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                        <Image
                            src="/profil.jpeg"
                            alt="Foto Profil Abdurrahman Gofiky"
                            fill
                            className="object-cover rounded-full border-2 border-zinc-700"
                        />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 pb-2">
                            Abdurrahman Gofiky
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed">
                            Informatics Engineering Student
                        </p>
                    </div>
                </section>

                {/* Bio Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight text-white">About Me</h2>
                    <div className="p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 space-y-4">
                        <p className="text-zinc-400 leading-relaxed">
                            "Hello! I am Abdurrahman Gofiky, an Informatics student from Tasikmalaya with a passion for bridging the gap between Complex Data and Frontend Developer.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            My journey began with a fascination for Natural Language Processing (NLP) and Machine Learning, leading me to build intelligent systems like Spam Detectors and Diagnostic Chatbots. However, I believe that powerful AI needs an equally powerful interface, which drove me to master Modern Web Development using Next.js and Laravel.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            When I'm not coding or debugging, you can find me exploring the world of One Piece, enjoying a game of Mobile Legends, and i really like watching . I am constantly learning, currently focusing on improving my English and exploring the depths of Deep Learning."
                        </p>
                    </div>
                </section>

                {/* Connect & Socials Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight text-white">Connect & Socials</h2>
                    <div className="flex flex-wrap gap-4">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 group"
                            >
                                <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                                <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">
                                    {social.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight text-white">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {["Python", "C#", "Typescript", "Javascript", "Next.js", "Scikit-learn", "Pandas & Numpy"].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm hover:bg-zinc-800 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Experience Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight text-white">Experience</h2>
                    <div className="p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-medium text-white">BPS Website Development</h3>
                            <span className="text-sm text-zinc-500">Internship (KP)</span>
                        </div>
                        <p className="text-blue-400 mb-4">Frontend Web Developer Intern (BPS)</p>
                        <p className="text-zinc-400 leading-relaxed">
                            Developed the frontend interface for the "Organizational Culture Survey" (Survei Budaya Organisasi) application, aiming to automate and digitize the internal employee survey process.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
