"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a1120] via-[#0f1a30] to-[#0a0f1a] text-white flex justify-center items-center px-4 py-16 md:py-24 relative overflow-hidden">

            {/* ✨ Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#38bdf822,transparent_60%),radial-gradient(circle_at_bottom_left,#2563eb22,transparent_60%)] pointer-events-none"></div>

            <div className="relative max-w-5xl w-full grid md:grid-cols-2 gap-10 z-10">

                {/* 📬 Left Side - Contact Info */}
                <div className="flex flex-col justify-center space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Have a question or just want to say hi? We&apos;d love to hear from you.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <ContactItem
                            icon={<Mail size={20} />}
                            title="Email"
                            content="mrpatra.web@gmail.com"
                            link="mailto:mrpatra.web@gmail.com"
                        />
                        <ContactItem
                            icon={<Phone size={20} />}
                            title="Phone"
                            content="+91 8144129955"
                            link="tel:+918144129955"
                        />
                        <ContactItem
                            icon={<FaWhatsapp size={20} />}
                            title="WhatsApp"
                            content="Chat on WhatsApp"
                            link="https://wa.me/8144129955"
                        />
                        <ContactItem
                            icon={<MapPin size={20} />}
                            title="Location"
                            content="Bhubaneswar, Odisha"
                        />
                    </div>
                </div>

                {/* 📝 Right Side - Contact Form */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-gray-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-gray-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                rows="4"
                                placeholder="How can we help?"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-cyan-500 transition-colors resize-none placeholder:text-gray-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}

function ContactItem({ icon, title, content, link }) {
    const Wrapper = link ? "a" : "div";
    return (
        <Wrapper
            href={link}
            target={link ? "_blank" : undefined}
            rel={link ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors ${link ? 'cursor-pointer' : ''}`}
        >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400">
                {icon}
            </div>
            <div>
                <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
                <p className="text-white font-semibold">{content}</p>
            </div>
        </Wrapper>
    );
}
