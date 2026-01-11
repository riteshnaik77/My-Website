"use client";

import { MotionValue, useTransform, motion } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
    // Section 1: Intro (0-20%)
    const opacity1 = useTransform(progress, [0, 0.15, 0.2], [1, 1, 0]);
    const y1 = useTransform(progress, [0, 0.2], [0, -50]);
    const pointerEvents1 = useTransform(progress, (v) => v < 0.2 ? 'auto' : 'none');

    // Section 2: Founder (25-45%)
    const opacity2 = useTransform(progress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
    const x2 = useTransform(progress, [0.2, 0.25], [-50, 0]);

    // Section 3: AI Products (50-65%)
    const opacity3 = useTransform(progress, [0.45, 0.5, 0.6, 0.65], [0, 1, 1, 0]);
    const x3 = useTransform(progress, [0.45, 0.5], [50, 0]);

    // Section 4: Metrics (70-90%) - Slightly readjusted to stay visible longer or transition out
    const opacity4 = useTransform(progress, [0.65, 0.7], [0, 1]);
    const y4 = useTransform(progress, [0.65, 0.7], [50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-center items-center text-white">
            {/* Section 1 - Intro */}
            <motion.div
                style={{ opacity: opacity1, y: y1, pointerEvents: pointerEvents1 as any }}
                className="absolute text-center max-w-4xl px-6"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
                    Ritesh
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide mb-4">
                    AI Product Manager & Former Founder
                </p>
                <div className="h-1 w-24 bg-blue-500 mx-auto mb-6 rounded-full opacity-80" />
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Building AI platforms, workflows, and products that move business metrics.
                </p>
            </motion.div>

            {/* Section 2 - Founder */}
            <motion.div
                style={{ opacity: opacity2, x: x2 }}
                className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 max-w-xl px-6"
            >
                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2 block">The Journey</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    From Founder to <br /> Product Leader
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed border-l-2 border-white/20 pl-6">
                    Built and shut down a logistics startup. <br />
                    Learned <span className="text-white font-semibold">ownership</span>, <span className="text-white font-semibold">velocity</span>, and <span className="text-white font-semibold">survival</span>.
                </p>
            </motion.div>

            {/* Section 3 - AI Products */}
            <motion.div
                style={{ opacity: opacity3, x: x3 }}
                className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 max-w-xl px-6 text-right"
            >
                <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2 block">The Focus</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    AI Products. <br /> Real Impact.
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed border-r-2 border-white/20 pr-6">
                    RAG, workflow automation, internal platforms.<br />
                    Not demos — <span className="text-white font-semibold">production systems</span>.
                </p>
            </motion.div>

            {/* Section 4 - Metrics */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute bottom-24 md:bottom-24 text-center max-w-4xl px-6"
            >
                <h2 className="text-5xl md:text-7xl font-bold mb-12">
                    I don’t ship features. <br /> I move metrics.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                        <span className="block text-5xl font-bold text-blue-400 mb-2">90%</span>
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Time Saved</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                        <span className="block text-5xl font-bold text-purple-400 mb-2">80%</span>
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Automation</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                        <span className="block text-5xl font-bold text-green-400 mb-2">95%</span>
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">CSAT</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
