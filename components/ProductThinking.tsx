export default function ProductThinking() {
    const principles = [
        {
            title: "User-Centricity",
            desc: "Deep empathy paired with behavioral data. I don't guess what users want; I watch what they do.",
            icon: "👥"
        },
        {
            title: "Problem > Solution",
            desc: "Falling in love with the problem, not the AI model. If a regex solves it better than a Transformer, we use regex.",
            icon: "🎯"
        },
        {
            title: "Impact Velocity",
            desc: "Shipping is the heartbeat. Iterate fast, measure ruthlessly, and kill features that don't move the needle.",
            icon: "🚀"
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#0B0B0F] border-t border-white/5 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16">
                    How I Think
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {principles.map((img, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                            <div className="text-4xl mb-6">{img.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{img.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {img.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10">
                    <p className="text-lg md:text-xl font-medium text-gray-200">
                        &quot;AI is not a strategy. It's a lever. The strategy is helping customers win.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
