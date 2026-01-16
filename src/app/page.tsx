import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { BentoGrid } from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-blue-500/30">

      {/* Background decoration */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <TechStack />
        <BentoGrid />

        <footer className="py-10 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Fiky. Built with Next.js & Tailwind.</p>
        </footer>
      </div>
    </main>
  );
}
