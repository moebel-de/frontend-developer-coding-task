import { Coordinate } from "../types/coordinate";

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export async function getCityCoordinates(city: string): Promise<Coordinate> {
  const url = `${API_URL}/weather?q=${city}&units=metric&APPID=${API_TOKEN}`;

  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const { coord } = await response.json();

      return coord;
    }

    if (response.status === 404) {
      throw new Error("City Not Found!");
    }

    throw new Error("Something went wrong! Please try again.");
  } catch (error) {
    throw error;
  }
}
