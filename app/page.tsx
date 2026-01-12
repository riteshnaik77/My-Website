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
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="mailto:contact@ritesh.com"
              suppressHydrationWarning
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/ritesh-naik/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all group"
            >
              <svg className="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Ritesh. Product Leadership & AI.</p>
      </footer>
    </main>
  );
}
