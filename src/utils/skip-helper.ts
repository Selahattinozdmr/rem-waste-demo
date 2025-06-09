import type { Skip } from "../types/skip";

/**
 * Calculate the total price including VAT
 */
export const calculateTotalPrice = (skip: Skip): number => {
  const priceBeforeVat = skip.price_before_vat;
  const vatRate = skip.vat / 100;
  const vatAmount = priceBeforeVat * vatRate;

  return priceBeforeVat + vatAmount;
};

/**
 * Format a price as a string with currency symbol
 */
export const formatPrice = (price: number): string => {
  return `£${price.toFixed(0)}`;
};

/**
 * Get description text based on skip size
 */
export const getSkipSizeDescription = (size: number): string => {
  const descriptions: Record<number, string> = {
    4: "Ideal for small garden cleanups and minor renovations.",
    5: "Perfect for medium-sized household waste and small construction projects.",
    6: "Great for house renovations and garden landscaping projects.",
    8: "Suitable for larger renovation projects and construction waste.",
    10: "Best for major construction or commercial projects.",
  };

  return descriptions[size] || "Custom sized skip for your specific needs";
};

/**
 * Get appropriate skip image based on size
 */
export const getSkipImage = (size: number): string => {
  return `/4-yarder-skip.jpg`;
};

/**
 * Get the estimated capacity in terms of bin bags
 */
export const getEstimatedCapacity = (size: number): number => {
  // Rough estimate - number of standard bin bags
  const estimatedBags: Record<number, number> = {
    4: 40,
    5: 50,
    6: 60,
    8: 80,
    10: 100,
  };

  return estimatedBags[size] || size * 10;
};
