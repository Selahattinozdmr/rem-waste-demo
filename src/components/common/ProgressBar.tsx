import React from "react";
import { motion } from "framer-motion";
import type { ProgressBarProps } from "../../types/types";

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const steps = [
    { icon: "📍", label: "Postcode" },
    { icon: "🗑️", label: "Waste Type" },
    { icon: "📦", label: "Select Skip" },
    { icon: "🔍", label: "Permit Check" },
    { icon: "📅", label: "Choose Date" },
    { icon: "💳", label: "Payment" },
  ];

  return (
    <div className="w-full">
      <div className="relative">
        {/* Progress line */}
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200">
          <motion.div
            className="h-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Steps */}
        <div className="flex justify-between relative">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <motion.div
                  className={`rounded-full h-10 w-10 flex items-center justify-center mb-2
                    ${
                      isCompleted
                        ? "bg-emerald-500 text-white"
                        : isActive
                        ? "bg-emerald-100 border-2 border-emerald-500 text-emerald-700"
                        : "bg-white border-2 border-gray-300 text-gray-400"
                    }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{step.icon}</span>
                </motion.div>
                <span
                  className={`text-xs font-medium ${
                    isCompleted || isActive ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
