import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SkipSizeHelperProps } from "../../types/skip";

const SkipSizeHelper: React.FC<SkipSizeHelperProps> = ({ isOpen, onClose }) => {
const skipSizes = [
    {
        size: 4,
        title: "4 Yard Skip",
        dimensions: "1.8m x 1.5m x 1.2m (L x W x H)",
        volume: "4 cubic yards / 3.1 cubic meters",
        capacity: "Approx. 40 black bags",
        suitableFor:
            "Small garden waste, kitchen/bathroom renovation, small home clear-outs",
        notSuitableFor:
            "Large amounts of heavy materials, large house renovations",
        image: "/assets/skip-4yard-illustration.png",
    },
    {
        size: 6,
        title: "6 Yard Skip",
        dimensions: "2.4m x 1.5m x 1.4m (L x W x H)",
        volume: "6 cubic yards / 4.6 cubic meters",
        capacity: "Approx. 60-70 black bags",
        suitableFor: "Home renovations, medium garden projects, house clearances",
        notSuitableFor: "Very heavy materials in large quantities",
        image: "/assets/skip-6yard-illustration.png",
    },
    {
        size: 8,
        title: "8 Yard Skip",
        dimensions: "3.2m x 1.7m x 1.5m (L x W x H)",
        volume: "8 cubic yards / 6.1 cubic meters",
        capacity: "Approx. 80-90 black bags",
        suitableFor:
            "Medium-large renovations, commercial projects, larger clearances",
        notSuitableFor: "Restricted spaces with limited access",
        image: "/assets/skip-8yard-illustration.png",
    },
    {
        size: 10,
        title: "10 Yard Skip",
        dimensions: "3.6m x 1.8m x 1.6m (L x W x H)",
        volume: "10 cubic yards / 7.6 cubic meters",
        capacity: "Approx. 100 black bags",
        suitableFor:
            "Large building projects, commercial waste, large clearances",
        notSuitableFor: "Small residential spaces, areas with restricted access",
        image: "/assets/skip-10yard-illustration.png",
    },
    {
        size: 12,
        title: "12 Yard Skip",
        dimensions: "3.8m x 1.8m x 1.8m (L x W x H)",
        volume: "12 cubic yards / 9.2 cubic meters",
        capacity: "Approx. 120 black bags",
        suitableFor:
            "Large commercial projects, construction waste, warehouse clearances",
        notSuitableFor: "Residential areas with space constraints, heavy soil or concrete",
        image: "/assets/skip-12yard-illustration.png",
    },
    {
        size: 14,
        title: "14 Yard Skip",
        dimensions: "4.0m x 1.8m x 2.0m (L x W x H)",
        volume: "14 cubic yards / 10.7 cubic meters",
        capacity: "Approx. 140 black bags",
        suitableFor:
            "Major construction projects, large property renovations, industrial clearances",
        notSuitableFor: "Small sites, residential streets with limited access",
        image: "/assets/skip-14yard-illustration.png",
    },
    {
        size: 16,
        title: "16 Yard Skip",
        dimensions: "4.2m x 1.8m x 2.1m (L x W x H)",
        volume: "16 cubic yards / 12.2 cubic meters",
        capacity: "Approx. 160 black bags",
        suitableFor:
            "Factory clearances, large commercial waste, major construction sites",
        notSuitableFor: "Urban residential areas, heavy inert materials",
        image: "/assets/skip-16yard-illustration.png",
    },
    {
        size: 20,
        title: "20 Yard Skip",
        dimensions: "5.0m x 2.3m x 1.8m (L x W x H)",
        volume: "20 cubic yards / 15.3 cubic meters",
        capacity: "Approx. 200 black bags",
        suitableFor:
            "Major commercial developments, industrial waste, large site clearances",
        notSuitableFor: "Residential areas, heavy waste materials, limited access sites",
        image: "/assets/skip-20yard-illustration.png",
    },
    {
        size: 40,
        title: "40 Yard RORO Skip",
        dimensions: "6.1m x 2.5m x 2.7m (L x W x H)",
        volume: "40 cubic yards / 30.6 cubic meters",
        capacity: "Approx. 400 black bags",
        suitableFor:
            "Major industrial waste, large demolition projects, construction site waste",
        notSuitableFor: "Any residential area, sites without heavy machinery access",
        image: "/assets/skip-40yard-illustration.png",
    },
];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.25 }}
          >
            <div className="sticky top-0 p-5 bg-white border-b flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-gray-800">
                Skip Size Guide
              </h2>
              <motion.button
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>

            <div className="p-5">
              <p className="text-gray-600 mb-6">
                Use this guide to help choose the right skip size for your
                project. The right size depends on the amount and type of waste
                you have. If you're still unsure, our customer service team can
                help you make the best choice.
              </p>

              <div className="space-y-8">
                {skipSizes.map((skip, index) => (
                  <motion.div
                    key={skip.size}
                    className="border border-gray-200 rounded-lg p-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/4 mb-4 md:mb-0 flex items-center justify-center bg-gray-100 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-emerald-600">
                            {skip.size}YD
                          </div>
                          <div className="text-gray-500">Skip Size</div>
                        </div>
                      </div>

                      <div className="md:w-3/4 md:pl-5">
                        <h3 className="text-xl font-semibold text-emerald-600">
                          {skip.title}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4 mt-3">
                          <div>
                            <div className="text-sm text-gray-500">
                              Dimensions
                            </div>
                            <div className="font-medium">{skip.dimensions}</div>
                          </div>

                          <div>
                            <div className="text-sm text-gray-500">Volume</div>
                            <div className="font-medium">{skip.volume}</div>
                          </div>

                          <div>
                            <div className="text-sm text-gray-500">
                              Capacity
                            </div>
                            <div className="font-medium">{skip.capacity}</div>
                          </div>
                        </div>

                        <div className="mt-4 grid md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-500">
                              Suitable for
                            </div>
                            <div className="text-green-800 bg-green-50 p-2 rounded mt-1">
                              {skip.suitableFor}
                            </div>
                          </div>

                          <div>
                            <div className="text-sm text-gray-500">
                              Not suitable for
                            </div>
                            <div className="text-red-800 bg-red-50 p-2 rounded mt-1">
                              {skip.notSuitableFor}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-emerald-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg text-emerald-800">
                  Need more help?
                </h3>
                <p className="mt-2 text-emerald-700">
                  If you're still unsure which skip size is right for your
                  needs, our friendly customer service team is available to help
                  you make the best choice.
                </p>
                <button
                  className="mt-3 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  onClick={onClose}
                >
                  Close Guide
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkipSizeHelper;
