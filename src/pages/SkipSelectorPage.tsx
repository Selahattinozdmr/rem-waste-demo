import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Skip } from "../types/skip";
import { fetchSkipsByLocation } from "../utils/api";
import ProgressBar from "../components/common/ProgressBar";
import SkipCard from "../components/skip/SkipCard";
import SkipSizeHelper from "../components/skip/SkipSizeHelper";
import SkipSummary from "../components/skip/SkipSummary";
import FAQ from "../components/common/FAQ";
import Loader from "../components/common/Loader";

const SkipSelectorPage: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [filteredSkips, setFilteredSkips] = useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showSizeHelper, setShowSizeHelper] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"card" | "list">("card");

  const [filters, setFilters] = useState({
    allowedOnRoad: false,
    allowsHeavyWaste: false,
  });

  useEffect(() => {
    const loadSkips = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchSkipsByLocation("NR32", "Lowestoft");
        setSkips(data);
        setFilteredSkips(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching skips:", err);
        setError("Failed to load available skips. Please try again.");
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  
  useEffect(() => {
    let filtered = [...skips];

    if (filters.allowedOnRoad) {
      filtered = filtered.filter((skip) => skip.allowed_on_road);
    }

    if (filters.allowsHeavyWaste) {
      filtered = filtered.filter((skip) => skip.allows_heavy_waste);
    }

    setFilteredSkips(filtered);
  }, [filters, skips]);

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip(skip);
    setTimeout(() => {
      document
        .getElementById("summary-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleFilterChange = (filterName: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleContinue = () => {
    console.log("Continuing with selected skip:", selectedSkip);
    alert("Moving to the next step with your selected skip.");
  };

  const handleBack = () => {
    console.log("Going back to previous step");
    alert("Going back to the previous step.");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader size="lg" color="emerald" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg">
          <div className="text-red-500 text-lg mb-3">Error</div>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <ProgressBar currentStep={2} totalSteps={6} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-extrabold text-gray-900">
            Choose Your Skip Size
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Select the skip size that best suits your needs
          </p>
          <button
            className="mt-3 inline-flex items-center text-emerald-600 hover:text-emerald-800"
            onClick={() => setShowSizeHelper(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Help me choose the right skip size
          </button>
        </motion.div>

        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* View mode toggle */}
          <div className="flex items-center space-x-2 p-1 bg-gray-100 rounded-lg">
            <button
              className={`px-3 py-1 rounded-md ${
                viewMode === "card"
                  ? "bg-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setViewMode("card")}
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Cards
              </span>
            </button>
            <button
              className={`px-3 py-1 rounded-md ${
                viewMode === "list"
                  ? "bg-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setViewMode("list")}
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                List
              </span>
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-emerald-600 rounded"
                checked={filters.allowedOnRoad}
                onChange={() => handleFilterChange("allowedOnRoad")}
              />
              <span className="ml-2 text-sm text-gray-700">
                Allowed on road
              </span>
            </label>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-emerald-600 rounded"
                checked={filters.allowsHeavyWaste}
                onChange={() => handleFilterChange("allowsHeavyWaste")}
              />
              <span className="ml-2 text-sm text-gray-700">
                Allows heavy waste
              </span>
            </label>
          </div>
        </div>

        {/* Skip Cards */}
        {filteredSkips.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600">
              No skips match your current filters. Please adjust your criteria.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              onClick={() =>
                setFilters({ allowedOnRoad: false, allowsHeavyWaste: false })
              }
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === "card"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-3"
            }
          >
            <AnimatePresence>
              {filteredSkips.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isSelected={selectedSkip?.id === skip.id}
                  onSelect={handleSelectSkip}
                  viewMode={viewMode}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Summary Section - only shown when a skip is selected */}
        <div id="summary-section" className="mt-10 ml-5 xl:ml-auto">
          <AnimatePresence>
            {selectedSkip && (
              <SkipSummary
                skip={selectedSkip}
                onContinue={handleContinue}
                onBack={handleBack}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons - only shown when no skip is selected */}
        {!selectedSkip && (
          <div className="mt-10 max-w-md mx-auto flex justify-between">
            <motion.button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg flex items-center"
              onClick={handleBack}
              whileHover={{ backgroundColor: "#d1d5db" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </motion.button>

            <motion.button
              className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
              disabled
            >
              Continue
            </motion.button>
          </div>
        )}

        {/* FAQ Section */}
        <FAQ className="mt-16" />
      </main>

      {/* Size Helper Modal */}
      <SkipSizeHelper
        isOpen={showSizeHelper}
        onClose={() => setShowSizeHelper(false)}
      />
    </div>
  );
};

export default SkipSelectorPage;
