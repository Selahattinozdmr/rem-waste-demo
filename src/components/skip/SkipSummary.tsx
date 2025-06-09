import React from "react";
import { motion } from "framer-motion";
import type { SkipSummaryProps } from "../../types/skip";
import {
  calculateTotalPrice,
  formatPrice,
  getSkipImage,
} from "../../utils/skip-helper";

const wideContainerStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  maxWidth: "calc(100% + 2rem)",
  marginLeft: "-1rem",
  marginRight: "-1rem",
  backdropFilter: "blur(8px)",
  background: "rgba(255, 255, 255, 0.95)",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
};

const SkipSummary: React.FC<SkipSummaryProps> = ({
  skip,
  onContinue,
  onBack,
}) => {
  if (!skip) {
    return null;
  }
  const totalPrice = calculateTotalPrice(skip);
  const vatAmount = skip.price_before_vat * (skip.vat / 100);
  const skipImageUrl = getSkipImage(skip.size);

  // Fallback image in case the skip image is not found
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src =
      "https://placehold.co/600x200/e2e8f0/64748b?text=Skip+Image";
  };
  return (
    <motion.div
      className="overflow-hidden w-full"
      style={wideContainerStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {" "}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-4 flex justify-between items-center shadow-sm">
        <h2 className="font-bold text-lg tracking-wide">Your Selection</h2>
        <div className="text-right">
          <div className="text-xl font-bold">{formatPrice(totalPrice)}</div>
          <div className="text-xs text-emerald-100 tracking-wider">
            inc. VAT
          </div>
        </div>
      </div>{" "}
      <div className="p-4">
        {" "}
        <div className="flex flex-wrap border-b border-gray-100 pb-3 mb-3">
          <div className="w-2/4">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mr-4">
              <img
                src={skipImageUrl}
                alt={`${skip.size} Yard Skip`}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                style={{ maxHeight: "180px" }}
                onError={handleImageError}
              />
            </div>
          </div>
          <div className="w-2/4 flex justify-around items-center">
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-0.5">
                {skip.size} Yard Skip
              </h3>
              <p className="text-gray-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Hire Period: {skip.hire_period_days} days
              </p>
            </div>
            <div className="hidden sm:block text-right mt-0">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">
                {formatPrice(totalPrice)}
              </div>
              <div className="text-xs text-gray-500 -mt-1">Includes VAT</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          {" "}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-2 rounded-lg border-l-2 border-emerald-400">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Postcode
                </span>
                <p className="font-medium text-sm mt-1">{skip.postcode}</p>
              </div>

              {skip.area && (
                <div className="bg-gray-50 p-2 rounded-lg border-l-2 border-emerald-400">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    Area
                  </span>
                  <p className="font-medium text-sm mt-1">{skip.area}</p>
                </div>
              )}
            </div>{" "}
            <div className="flex space-x-4">
              <div className="flex items-center">
                <span
                  className={`inline-flex items-center text-xs px-2.5 py-1 rounded-full shadow-sm ${
                    skip.allowed_on_road
                      ? "bg-gradient-to-r from-green-100 to-green-50 text-green-800 border border-green-200"
                      : "bg-gradient-to-r from-red-100 to-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  {skip.allowed_on_road
                    ? "Road: Permitted"
                    : "Road: Not Permitted"}
                </span>
              </div>
              <div className="flex items-center">
                <span
                  className={`inline-flex items-center text-xs px-2.5 py-1 rounded-full shadow-sm ${
                    skip.allows_heavy_waste
                      ? "bg-gradient-to-r from-green-100 to-green-50 text-green-800 border border-green-200"
                      : "bg-gradient-to-r from-red-100 to-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  {skip.allows_heavy_waste
                    ? "Heavy Waste: OK"
                    : "Heavy Waste: Not Allowed"}
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-3 border border-gray-100 shadow-sm">
            <div className=" font-medium mb-1 text-gray-500 uppercase tracking-wider text-xs">
              Price Details
            </div>
            <div className="grid grid-cols-2 text-sm gap-y-1">
              <div className="text-gray-600 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Price (excl. VAT):
              </div>
              <div className="text-right font-medium">
                {formatPrice(skip.price_before_vat)}
              </div>
              <div className="text-gray-600 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                  />
                </svg>
                VAT ({skip.vat}%):
              </div>
              <div className="text-right font-medium">
                {formatPrice(vatAmount)}
              </div>
            </div>
            <div className="flex justify-between border-t border-gray-200 mt-2 pt-2 font-medium">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Total:
              </span>
              <span className="text-emerald-600 font-bold">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col-reverse sm:flex-row gap-4 mt-4">
          <motion.button
            className="w-full sm:w-2/5 py-3 px-4 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg flex items-center justify-center text-sm font-medium shadow-sm border border-gray-200"
            onClick={onBack}
            whileHover={{
              backgroundColor: "#e5e7eb",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            }}
            transition={{ duration: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </motion.button>

          <motion.button
            className="w-full sm:w-3/5 py-3 px-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-medium shadow-md"
            onClick={onContinue}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 4px 12px rgba(5, 150, 105, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Continue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SkipSummary;
