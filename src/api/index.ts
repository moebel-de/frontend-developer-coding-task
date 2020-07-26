import { WeatherDataForCity } from "../types";
import { API_URL, API_TOKEN } from "../config";

export async function fetchToJSON<T>(url: string): Promise<T | undefined> {
  let response: undefined | Response = undefined;
  let jsonResult: undefined | any = undefined;
  let apiError: Error | undefined;
  try {
    response = await fetch(url);
    if (response.status === 200) {
      jsonResult = await response.json();
    }
    if (response.status === 404) {
      return undefined;
    }
  } catch (e) {
    apiError = e;
  }

  if (response && response.status === 401) {
    throw new Error("unauthorized");
  }

  if (
    apiError ||
    !response ||
    response.status !== 200 ||
    !jsonResult ||
    !Array.isArray(jsonResult.list) ||
    !jsonResult.list.length
  ) {
    throw new Error("something went wrong");
  }
  return jsonResult as T;
}

export const getWeatherData = (city: string) => {
  const url = `${API_URL}daily?q=${city}&cnt=16&units=metric&appid=${API_TOKEN}`;
  return fetchToJSON<WeatherDataForCity>(url);
};
