export default function Projects() {
    const projects = [
        {
            title: "HR RAG Assistant",
            tag: "Enterprise AI",
            problem: "Policy lookup took 20+ mins per employee query.",
            solution: "Built RAG pipeline on internal wikis with 95% accuracy.",
            impact: "90% reduction in query time. 20+ daily active users.",
            color: "from-blue-500/10 to-blue-900/5",
            border: "hover:border-blue-500/50"
        },
        {
            title: "Resume Evaluator",
            tag: "Recruitment Tech",
            problem: "Screening resumes manually was unscalable (15m/resume).",
            solution: "LLM-based multi-agent system to score and rank candidates.",
            impact: "Screening time cut 15m → 3m. 2x candidate throughput.",
            color: "from-purple-500/10 to-purple-900/5",
            border: "hover:border-purple-500/50"
        },
        {
            title: "SpringBoard Platform",
            tag: "Workflow Automation",
            problem: "Manual provisioning of dev environments took 5 hours.",
            solution: "Self-serve platform orchestrating AWS/K8s resources.",
            impact: "5 hours → 5 minutes. Zero-touch automation.",
            color: "from-emerald-500/10 to-emerald-900/5",
            border: "hover:border-emerald-500/50"
        },
        {
            title: "Founder: PocketTrucks",
            tag: "Logistics Startup",
            problem: "Fleet utilization was <40% due to manual dispatch.",
            solution: "Uber-like dispatch algorithm for inter-city logistics.",
            impact: "Raised Seed. Increased fleet utilization by 60%.",
            color: "from-orange-500/10 to-orange-900/5",
            border: "hover:border-orange-500/50"
        }
    ];

    return (
        <section className="relative z-10 py-32 px-6 bg-[#0B0B0F] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">Case Studies</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Selected Work
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className={`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br ${p.color} backdrop-blur-md transition-all duration-300 ${p.border}`}>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                            <span className="text-xs font-mono tracking-widest uppercase text-white/50 mb-6 block border-b border-white/10 pb-4">
                                {p.tag}
                            </span>

                            <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors">
                                {p.title}
                            </h3>

                            <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
                                <div>
                                    <span className="text-blue-400/80 uppercase text-[10px] font-bold tracking-wider block mb-2">Problem</span>
                                    {p.problem}
                                </div>
                                <div>
                                    <span className="text-purple-400/80 uppercase text-[10px] font-bold tracking-wider block mb-2">Solution</span>
                                    {p.solution}
                                </div>
                                <div>
                                    <span className="text-green-400/80 uppercase text-[10px] font-bold tracking-wider block mb-2">Impact</span>
                                    <span className="text-white font-medium text-lg">{p.impact}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
