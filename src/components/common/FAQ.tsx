import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQProps } from "../../types/types";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "How do I choose the right skip size?",
      answer:
        "Consider the amount and type of waste you have. Small skips (4 yards) are good for minor home projects, medium skips (5-6 yards) for home renovations, and larger skips (8-10 yards) for major construction or clearance projects.",
    },
    {
      question: "Do I need a permit for placing a skip?",
      answer:
        "If the skip will be placed on a public road, you will need a permit. Skips placed on private property (like your driveway) don't require permits.",
    },
    {
      question: 'What does "allows heavy waste" mean?',
      answer:
        "Skips that allow heavy waste are designed to handle materials like soil, rubble, concrete, and bricks. If your waste includes these materials, make sure to select a skip that allows heavy waste.",
    },
    {
      question: "How long can I keep the skip?",
      answer:
        "Our standard hire period is 14 days, but this can be extended for an additional fee if needed. Please contact our customer service team to arrange an extension.",
    },
    {
      question: "What types of waste are prohibited in skips?",
      answer:
        "Prohibited items include hazardous waste, electronics, batteries, tires, liquids, gas cylinders, asbestos, plasterboard (in some cases), and certain types of chemicals. Check with us before disposing of any questionable items.",
    },
  ];

  return (
    <motion.div
      className={`max-w-3xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-lg bg-white overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <button
              className="w-full px-5 py-3 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-700">{item.question}</span>
              <span
                className={`transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-5 h-5 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 py-3 bg-gray-50 text-gray-600">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
