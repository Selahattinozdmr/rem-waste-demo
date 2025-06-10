import React from "react";
import { motion } from "framer-motion";
import type { SkipCardProps } from "../../types/types";
import { calculateTotalPrice, formatPrice } from "../../utils/skip-helper";

const SkipCard: React.FC<SkipCardProps> = ({
  skip,
  isSelected,
  onSelect,
  viewMode,
}) => {
  const totalPrice = calculateTotalPrice(skip);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" },
  };

  const listVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    hover: { backgroundColor: "rgba(16, 185, 129, 0.05)" },
  };

  // Image based on skip size
  const skipImage = `/4-yarder-skip.jpg`;
  const fallbackImage =
    "https://placehold.co/300x200/e9e9e9/10b981?text=Skip+Image";

  if (viewMode === "card") {
    return (
      <motion.div
        className={`rounded-xl overflow-hidden ${
          isSelected ? "ring-2 ring-emerald-500" : "border border-gray-200"
        }`}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{ duration: 0.3 }}
        onClick={() => onSelect(skip)}
      >
        <div className="relative">
          {/* Skip size badge */}
          <div className="absolute top-3 right-3 bg-emerald-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
            {skip.size} Yards
          </div>

          {/* Skip image */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
            <img
              src={skipImage}
              alt={`${skip.size} Yard Skip`}
              className="object-contain h-40 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackImage;
              }}
            />
          </div>
        </div>

        <div className="p-5 bg-white">
          <h3 className="text-xl font-bold text-gray-800">
            {skip.size} Yard Skip
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {skip.hire_period_days} day hire period
          </p>

          <div className="mt-3 space-y-2">
            <div className="flex items-center">
              <div
                className={`w-3 h-3 rounded-full mr-2 ${
                  skip.allowed_on_road ? "bg-emerald-500" : "bg-gray-300"
                }`}
              />
              <span className="text-sm text-gray-600">
                {skip.allowed_on_road
                  ? "Allowed on road"
                  : "Not allowed on road"}
              </span>
            </div>
            <div className="flex items-center">
              <div
                className={`w-3 h-3 rounded-full mr-2 ${
                  skip.allows_heavy_waste ? "bg-emerald-500" : "bg-gray-300"
                }`}
              />
              <span className="text-sm text-gray-600">
                {skip.allows_heavy_waste
                  ? "Allows heavy waste"
                  : "No heavy waste"}
              </span>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-bold text-emerald-600">
              {formatPrice(totalPrice)}
            </span>

            <motion.button
              className={`px-4 py-2 rounded-lg ${
                isSelected
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-emerald-100 hover:text-emerald-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSelected ? "Selected" : "Select"}
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  // List view
  return (
    <motion.div
      className={`p-4 flex items-center rounded-lg cursor-pointer ${
        isSelected
          ? "bg-emerald-50 border-2 border-emerald-500"
          : "border border-gray-200 bg-white"
      }`}
      variants={listVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ duration: 0.2 }}
      onClick={() => onSelect(skip)}
    >
      <div className="bg-gray-100 rounded-lg h-16 w-16 flex items-center justify-center mr-4">
        <span className="text-lg font-bold">{skip.size}Y</span>
      </div>

      <div className="flex-grow">
        <h3 className="font-medium text-gray-800">{skip.size} Yard Skip</h3>
        <div className="flex space-x-4 text-xs text-gray-500 mt-1">
          <span>{skip.hire_period_days} days</span>
          <span>
            {skip.allowed_on_road ? "✅ Road allowed" : "❌ Private only"}
          </span>
          <span>
            {skip.allows_heavy_waste ? "✅ Heavy waste" : "❌ No heavy waste"}
          </span>
        </div>
      </div>

      <div className="text-right">
        <div className="text-lg font-bold text-emerald-600">
          {formatPrice(totalPrice)}
        </div>
        <div className="text-xs text-gray-500">Inc. VAT</div>
      </div>
    </motion.div>
  );
};

export default SkipCard;
