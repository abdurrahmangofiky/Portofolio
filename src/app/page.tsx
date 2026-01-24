import { Hero } from "@/components/Hero";


export default function Home() {
  const experiences = [
    {
      title: "Frontend Web Developer Intern",
      company: "BPS (Badan Pusat Statistik)",
      period: "June - August 2025",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-blue-500/30 relative overflow-x-hidden overflow-y-auto">
      {/* Blue glow effect - edges */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(30,64,175,0.15)_100%)]" />
      </div>

      <div className="relative z-10">
        <Hero />

        {/* Experiences Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center sm:text-left">Experiences</h2>
          <div className="space-y-4 md:space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 text-center sm:text-left">
                  <h3 className="text-base sm:text-lg md:text-xl font-medium text-white group-hover:text-blue-400 transition-colors">
                    {exp.title} <span className="text-zinc-500">@</span>{" "}
                    <span className="text-zinc-300">{exp.company}</span>
                  </h3>
                  <span className="text-xs sm:text-sm text-zinc-500">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
