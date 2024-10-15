import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Mail, User, Send } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="border border-gray-200 rounded-lg overflow-hidden mb-4"
            initial={false}
        >
            <motion.button
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-left">{question}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </motion.button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-6 py-4 bg-orange-50">
                            <p className="text-gray-700">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const HelpCenterPage = () => {
    const faqs = [
        {
            question: "How do I create a family tree?",
            answer: "You can create a family tree by navigating to the 'Family Tree' section and clicking on the 'Create New Tree' button. Follow the step-by-step guide to add family members and their relationships."
        },
        {
            question: "How secure is my data?",
            answer: "Your data is stored securely using industry-standard encryption. We employ strict access controls and regular security audits to ensure your information remains private and protected."
        },
        {
            question: "Can I share my family tree with others?",
            answer: "Yes, you can share your family tree with specific individuals or make it public. Go to the 'Share' settings in your family tree view to manage access permissions."
        },
        // Add more FAQs as needed
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-orange-800 mb-12">Help Center</h1>

                {/* FAQs Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-orange-700">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

                {/* Contact Form */}
                <section className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-orange-700">Contact Us</h2>
                    <form className="space-y-4">
                        <div className="relative">
                            <User className="absolute top-3 left-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div className="relative">
                            <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        ></textarea>
                        <motion.button
                            type="submit"
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Send className="mr-2" size={20} />
                            Submit
                        </motion.button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default HelpCenterPage;
