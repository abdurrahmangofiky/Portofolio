"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-950 pt-28 px-4 sm:px-6 pb-16 relative overflow-hidden">
            {/* Decorative Background Orbs */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto space-y-16 relative z-10">
                {/* Header Section - Premium Design */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center pt-8"
                >
                    {/* Glowing Profile Photo */}
                    <div className="relative mb-8">
                        {/* Animated Glow Ring */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-60 animate-pulse" />
                        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-zinc-800 bg-zinc-900">
                            <Image
                                src="/profil.jpeg"
                                alt="Foto Profil Abdurrahman Gofiky"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Name with Gradient */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400 pb-3">
                        Abdurrahman Gofiky
                    </h1>

                    {/* Role Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-700 mt-4">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-zinc-300 text-sm font-medium">Informatics Engineering Student</span>
                    </div>
                </motion.section>

                {/* About Me Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                        <span className="text-2xl">👋</span> About Me
                    </h2>
                    <div className="p-6 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl space-y-4 hover:border-zinc-700 transition-colors duration-300">
                        <p className="text-zinc-300 leading-relaxed">
                            Hello! I am <span className="text-white font-medium">Abdurrahman Gofiky</span>, an Informatics student from Tasikmalaya with a passion for bridging the gap between Complex Data and Frontend Development.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            My journey began with a fascination for Natural Language Processing (NLP) and Machine Learning, leading me to build intelligent systems like Spam Detectors and Diagnostic Chatbots. However, I believe that powerful AI needs an equally powerful interface, which drove me to master Modern Web Development using Next.js and Laravel.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            When I&apos;m not coding or debugging, you can find me exploring the world of One Piece, enjoying a game of Mobile Legends. I am constantly learning, currently focusing on improving my English and exploring the depths of Deep Learning.
                        </p>
                    </div>
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                        <span className="text-2xl">⚡</span> Skills
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {[
                            { name: "Python", color: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30" },
                            { name: "C#", color: "from-purple-500/20 to-purple-600/20 border-purple-500/30" },
                            { name: "TypeScript", color: "from-blue-500/20 to-blue-600/20 border-blue-500/30" },
                            { name: "JavaScript", color: "from-yellow-400/20 to-yellow-500/20 border-yellow-400/30" },
                            { name: "Next.js", color: "from-zinc-600/30 to-zinc-700/30 border-zinc-500/30" },
                            { name: "Scikit-learn", color: "from-orange-500/20 to-orange-600/20 border-orange-500/30" },
                            { name: "Pandas & Numpy", color: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30" },
                        ].map((skill) => (
                            <span
                                key={skill.name}
                                className={`px-4 py-2 rounded-xl bg-gradient-to-r ${skill.color} border text-zinc-200 text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default`}
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </motion.section>

                {/* Top 10 Watchlist Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6"
                >
                    <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                        <span className="text-2xl">🍿</span> Top 10 Watchlist
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {[
                            { id: 1, title: "One Piece", genre: "Anime", rating: "10/10", image: "/movies/onepiece.jpg" },
                            { id: 2, title: "Frieren Beyond Journey's End", genre: "Anime", rating: "9.6/10", image: "/movies/frieren.jpg" },
                            { id: 3, title: "Mouse", genre: "K-Drama", rating: "9.3/10", image: "/movies/mouse.jpg" },
                            { id: 4, title: "Breaking Bad", genre: "Series", rating: "9.9/10", image: "/movies/breaking bad.jpg" },
                            { id: 5, title: "Shutter Island", genre: "Thriller", rating: "9.2/10", image: "/movies/shutter.jpg" },
                            { id: 6, title: "My Demon", genre: "K-Drama", rating: "8.8/10", image: "/movies/mydemon.jpg" },
                            { id: 7, title: "Demon Slayer", genre: "Anime", rating: "9.1/10", image: "/movies/demonslayer.jpg" },
                            { id: 8, title: "Saw", genre: "Thriller", rating: "8.5/10", image: "/movies/saw.jpg" },
                            { id: 9, title: "Solo Leveling", genre: "Anime", rating: "9.0/10", image: "/movies/sololeveling.jpg" },
                            { id: 10, title: "Boss Baby", genre: "Animation", rating: "8.5/10", image: "/movies/bossbaby.jpg" },
                        ].map((movie) => (
                            <motion.div
                                key={movie.id}
                                whileHover={{ scale: 1.03, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative aspect-[2/3] rounded-xl overflow-hidden group cursor-pointer"
                            >
                                {/* Poster Image */}
                                <Image
                                    src={movie.image}
                                    alt={movie.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Gradient Overlay - Always visible at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                {/* Ranking Badge */}
                                <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-lg border border-white/10">
                                    #{movie.id}
                                </span>

                                {/* Rating Badge */}
                                <span className="absolute top-2 right-2 bg-yellow-500/90 text-black text-xs font-bold px-2 py-1 rounded-lg">
                                    ⭐ {movie.rating.split('/')[0]}
                                </span>

                                {/* Title & Genre - Always visible at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-3">
                                    <h3 className="text-white font-semibold text-sm leading-tight truncate">{movie.title}</h3>
                                    <p className="text-zinc-400 text-xs mt-0.5">{movie.genre}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </main>
    );
}
