"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
    const faqs = [
        {
            question: "What is Warm Cup?",
            answer: "Warm Cup is a platform designed to help creators, developers, and artists receive support from their audience. It's a simple way to say 'thank you' with a virtual cup of coffee."
        },
        {
            question: "How do payments work?",
            answer: "We use Razorpay for secure and instant payments. When you support a creator, the money goes directly to them. We do not store any card details."
        },
        {
            question: "Is there a fee for using Warm Cup?",
            answer: "Warm Cup is currently free to use for supporters. Standard payment gateway charges may apply depending on the payment method used."
        },
        {
            question: "Can I support anonymously?",
            answer: "Yes! You can choose to leave the name field blank or use a nickname when sending a Warm Cup."
        },
        {
            question: "How can I contact the developer?",
            answer: "You can reach out via the Contact page or email us directly at mrpatra.web@gmail.com for any queries or collaborations."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a1120] via-[#0f1a30] to-[#0a0f1a] text-white px-6 py-24 md:py-32 flex justify-center relative overflow-hidden">

            {/* ✨ Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,#38bdf815,transparent_50%),radial-gradient(circle_at_top_right,#2563eb15,transparent_50%)] pointer-events-none"></div>

            <div className="relative max-w-3xl w-full z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 mb-6">
                        <HelpCircle size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Everything you need to know about Warm Cup and how it works.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

            </div>
        </div>
    );
}

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <span className="text-lg font-medium text-white">{question}</span>
                <span className={`p-2 rounded-full bg-white/5 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-500/20' : ''}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
