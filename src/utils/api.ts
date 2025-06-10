import type { Skip } from "../types/types";

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

