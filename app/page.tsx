import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProductThinking from "@/components/ProductThinking";

export default function Home() {
  return (
    <main className="bg-[#0B0B0F] text-white">
      <ScrollyCanvas />

      <Projects />

      <ExperienceTimeline />

      <ProductThinking />

      <section className="py-24 px-6 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to build impact?</h2>
          <a
            href="mailto:contact@ritesh.com"
            suppressHydrationWarning
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Ritesh. Product Leadership & AI.</p>
      </footer>
    </main>
  );
}
