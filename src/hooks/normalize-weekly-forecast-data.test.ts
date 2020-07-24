import fakeData from "../api/mock-weekly-forecast-data.json";
import { normalizeWeeklyForecastData } from "./normalize-weekly-forecast-data";

test("returns normalized weekly forecast data", () => {
  const data = normalizeWeeklyForecastData(fakeData, 4);

  expect(data).toHaveProperty("today");
  expect(data).toHaveProperty("nextDays");
  expect(data.nextDays).toHaveLength(4);
});
