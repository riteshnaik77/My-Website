"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        role: "Product Manager – AI & Automation",
        company: "PeopleLogic Business Solutions",
        period: "Oct 2022 – Present",
        desc: "Owning AI product portfolio (RAG systems, automation). Managing 4+ direct reports. Launched 'HR Assist' policy copilot & AI recruiter toolkit.",
        skills: ["GenAI", "RAG", "Product Strategy", "Team Leadership"]
    },
    {
        role: "Business Development Specialist",
        company: "Open Financial Technologies",
        period: "Nov 2020 – Sep 2022",
        desc: "Partnered with product/data teams on fintech growth experiments. Increased ARPA by 20% through pricing feature iteration.",
        skills: ["Growth Strategy", "Fintech", "Experimentation"]
    },
    {
        role: "Co-Founder",
        company: "PocketTrucks Services Pvt Ltd",
        period: "Feb 2018 – Oct 2020",
        desc: "Built logistics marketplace MVP. Reached 80% fleet utilization in 60 days. Secured ₹10L seed funding.",
        skills: ["Founder Mindset", "0-1", "Marketplace Operations"]
    },
    {
        role: "Procurement Engineer",
        company: "LKQ India Pvt Ltd",
        period: "Jul 2016 – Jan 2018",
        desc: "Designed analytics-powered sourcing workflows. Increased procurement productivity by 70%.",
        skills: ["Analytics", "Supply Chain", "Process Optimization"]
    },
    {
        role: "Graduate Apprentice Trainee",
        company: "Volvo Busses India Pvt Ltd",
        period: "Dec 2014 – Nov 2015",
        desc: "Contributed to new product development for BRT and SLF bus prototypes tailored to Indian market.",
        skills: ["Product Development", "Automotive", "Engineering"]
    }
];

export default function ExperienceTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    return (
        <section ref={containerRef} className="py-32 px-6 bg-[#0B0B0F] relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="mb-20 text-center">
                    <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4 block">The Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Experience Map
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 md:-translate-x-1/2" />

                    <div className="space-y-24">
                        {experiences.map((exp, i) => (
                            <TimelineItem key={i} data={exp} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ data, index }: { data: any; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center`}
        >
            {/* Date Marker (Center) */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0B0B0F] md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)] transform -translate-x-1/2 md:translate-x-0 ml-[1px] md:ml-0 top-0 md:top-8" />

            {/* Content Spacer */}
            <div className="flex-1 w-full md:w-1/2" />

            {/* Content Card */}
            <div className={`flex-1 w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-16 text-left' : 'md:pl-16 text-left'}`}>
                <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors backdrop-blur-sm">
                    <span className="text-blue-400 font-mono text-xs tracking-wider uppercase mb-2 block">
                        {data.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                        {data.role}
                    </h3>
                    <div className="text-gray-400 text-sm font-medium mb-4">
                        {data.company}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {data.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill: string, s: number) => (
                            <span key={s} className="px-2 py-1 rounded-md bg-white/5 text-[10px] uppercase tracking-wider text-gray-300 border border-white/5">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
