import { getCityCoordinates } from "./get-city-coordinates";

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

beforeAll(() => jest.spyOn(window, "fetch"));

describe("get city api", () => {
  test("fetch Paris coords", async () => {
    const INITIAL_CITY = "Paris";
    const PARIS_COORDS = { lon: 2.35, lat: 48.85 };

    (window.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ coord: PARIS_COORDS }),
    });

    const url = `${API_URL}/weather?q=${INITIAL_CITY}&units=metric&APPID=${API_TOKEN}`;

    expect.assertions(4);
    await expect(getCityCoordinates(INITIAL_CITY)).resolves.toMatchObject(
      PARIS_COORDS
    );
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
        message: "city not found",
      }),
    });

    expect.assertions(1);
    await expect(getCityCoordinates("")).rejects.toEqual(
      new Error("City Not Found!")
    );
  });

  test("returns went wrong", async () => {
    (window.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 401,
      statusText: "Unauthorized",
      json: async () => ({
        cod: "401",
        message: "Something went wrong! Please try again.",
      }),
    });

    expect.assertions(1);
    await expect(getCityCoordinates("")).rejects.toEqual(
      new Error("Something went wrong! Please try again.")
    );
  });
});
