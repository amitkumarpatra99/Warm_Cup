"use client";

import React from "react";
import { ExternalLink, Code2, Paintbrush, Rocket } from "lucide-react";
import Link from "next/link";

export default function Gallery() {
    const projects = [
        {
            id: 1,
            title: "Warm Cup",
            description: "A platform for creators to receive support and appreciation from their audience.",
            category: "Full Stack",
            icon: <Rocket size={24} className="text-cyan-400" />,
            link: "/",
        },
        {
            id: 2,
            title: "Portfolio V1",
            description: "My personal developer portfolio showcasing skills, experience, and creative work.",
            category: "Frontend",
            icon: <Code2 size={24} className="text-purple-400" />,
            link: "https://mrpatra.vercel.app/",
        },
        {
            id: 3,
            title: "Creative UI Kit",
            description: "A collection of modern, glassmorphism UI components built with Tailwind CSS.",
            category: "Design",
            icon: <Paintbrush size={24} className="text-pink-400" />,
            link: "#",
        },
        // Add more projects here
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a1120] via-[#0f1a30] to-[#0a0f1a] text-white px-6 py-24 md:py-32 relative overflow-hidden">

            {/* ✨ Background Glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#38bdf815,transparent_50%),radial-gradient(circle_at_bottom_left,#2563eb15,transparent_50%)] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                        Project Gallery
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of my latest work, experiments, and creative endeavors.
                        Built with passion and coffee ☕
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col"
                        >
                            <div className="mb-6 flex items-start justify-between">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {project.icon}
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            <Link
                                href={project.link}
                                target={project.link.startsWith("http") ? "_blank" : "_self"}
                                className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                                View Project <ExternalLink size={14} />
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
