import React from "react";
import type { LoaderProps } from "../../types/types";

const Loader: React.FC<LoaderProps> = ({ size = "md", color = "emerald" }) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  };

  const colorClasses = {
    emerald: "border-emerald-500",
    blue: "border-blue-500",
    indigo: "border-indigo-500",
    purple: "border-purple-500",
    gray: "border-gray-500",
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div
        className={`rounded-full border-t-transparent ${
          colorClasses[color as keyof typeof colorClasses] ||
          "border-emerald-500"
        } border-4 animate-spin ${sizeClasses[size]}`}
      />
    </div>
  );
};

export default Loader;
