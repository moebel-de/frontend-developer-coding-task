import { getWeeklyForecast } from "./get-weekly-forecast";

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

beforeAll(() => jest.spyOn(window, "fetch"));

const CITY_NAME = "Hamburg";
const HAMBURG_COORD = { lat: 53.55, lon: 10 };
const ERROR_MESSAGE = "Something went wrong! Please try again.";

interface Data {
  current: { name: string };
  lat: number;
  lon: number;
}

const data: Data = {
  current: { name: CITY_NAME },
  lat: 53.55,
  lon: 10,
};

describe("get weekly forecast data", () => {
  test("fetch Paris weather", async () => {
    (window.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => data,
    });

    const url = `${API_URL}/onecall?lat=${HAMBURG_COORD.lat}&lon=${HAMBURG_COORD.lon}&exclude=minutely,hourly&units=metric&APPID=${API_TOKEN}`;

    expect.assertions(4);
    await expect(
      getWeeklyForecast(HAMBURG_COORD.lat, HAMBURG_COORD.lon)
    ).resolves.toMatchObject(data);
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveReturned();
  });

  test("returns city not found error", async () => {
    (window.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: "Not Found",
      json: async () => ({
        cod: "404",
        message: ERROR_MESSAGE,
      }),
    });

    expect.assertions(1);
    await expect(getWeeklyForecast(12, 13)).rejects.toEqual(
      new Error(ERROR_MESSAGE)
    );
  });
});
