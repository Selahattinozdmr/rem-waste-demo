import type { Skip } from "../types/types";

export const calculateTotalPrice = (skip: Skip): number => {
  const priceBeforeVat = skip.price_before_vat;
  const vatRate = skip.vat / 100;
  const vatAmount = priceBeforeVat * vatRate;

  return priceBeforeVat + vatAmount;
};

 //Format a price as a string with currency symbol
 
export const formatPrice = (price: number): string => {
  return `£${price.toFixed(0)}`;
};


