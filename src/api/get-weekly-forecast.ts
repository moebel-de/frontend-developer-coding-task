import { WeeklyForecast } from "./types";

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export async function getWeeklyForecast(
  lat: number,
  lon: number
): Promise<WeeklyForecast> {
  const url = `${API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&APPID=${API_TOKEN}`;

  try {
    const response = await fetch(url);

    if (response.status === 200) {
      return response.json();
    }

    throw new Error("Something went wrong! Please try again.");
  } catch (error) {
    throw error;
  }
}
