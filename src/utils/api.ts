import type { Skip } from "../types/skip";

const API_BASE_URL = "https://app.wewantwaste.co.uk/api";

export const fetchSkipsByLocation = async (
  postcode: string,
  area: string
): Promise<Skip[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching skips:", error);
    throw error;
  }
};

// Mock data for development and testing
export const getMockSkips = (): Skip[] => {
  return [
    {
      id: 17936,
      size: 4,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 211,
      vat: 20,
      postcode: "NR32",
      area: "Lowestoft",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.339",
      allowed_on_road: true,
      allows_heavy_waste: false,
    },
    {
      id: 17937,
      size: 5,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 241,
      vat: 20,
      postcode: "NR32",
      area: "Lowestoft",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.339",
      allowed_on_road: false,
      allows_heavy_waste: true,
    },
    {
      id: 17938,
      size: 6,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 264,
      vat: 20,
      postcode: "NR32",
      area: "Lowestoft",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.339",
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 17939,
      size: 8,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 320,
      vat: 20,
      postcode: "NR32",
      area: "Lowestoft",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.339",
      allowed_on_road: false,
      allows_heavy_waste: true,
    },
    {
      id: 17940,
      size: 10,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 400,
      vat: 20,
      postcode: "NR32",
      area: "Lowestoft",
      forbidden: false,
      created_at: "2025-04-03T13:51:46.897146",
      updated_at: "2025-04-07T13:16:53.339",
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
  ];
};
