import { renderHook, act } from "@testing-library/react-hooks";

import { getWeeklyForecast, getCityCoordinates } from "../api";
import { useWeeklyForecast } from "./use-weekly-forecast";
import { normalizeWeeklyForecastData } from "./normalize-weekly-forecast-data";

jest.mock("../api");
jest.mock("./normalize-weekly-forecast-data");

const mockGetWeeklyForecast = getWeeklyForecast as jest.Mock;
const mockGetCityCoordinates = getCityCoordinates as jest.Mock;
const mockNormalizeData = normalizeWeeklyForecastData as jest.Mock;

afterEach(() => jest.clearAllMocks());

const INITIAL_CITY = "Paris";
const UPDATED_CITY = "Hamburg";
const PARIS_COORDS = { lon: 2.35, lat: 48.85 };

describe("use weekly forecast hook", () => {
  test("should initialize and returns the new state successfully", async () => {
    mockNormalizeData.mockReturnValueOnce(PARIS_COORDS);
    mockGetCityCoordinates.mockResolvedValueOnce(PARIS_COORDS);
    mockGetWeeklyForecast.mockResolvedValueOnce({ ...PARIS_COORDS });

    const { result, waitForNextUpdate } = renderHook(() =>
      useWeeklyForecast(INITIAL_CITY)
    );

    expect(result.current[0]).toMatchObject({
      data: null,
      error: null,
      isFetching: true,
    });

    await waitForNextUpdate();

    expect(mockGetCityCoordinates).toHaveBeenCalledTimes(1);
    expect(mockGetCityCoordinates).toHaveBeenCalledWith(INITIAL_CITY);
    expect(mockGetCityCoordinates).toHaveReturned();
    expect(mockGetCityCoordinates).toHaveReturnedTimes(1);

    expect(mockGetWeeklyForecast).toHaveBeenCalledTimes(1);
    expect(mockGetWeeklyForecast).toHaveBeenCalledWith(
      PARIS_COORDS.lat,
      PARIS_COORDS.lon
    );
    expect(mockGetWeeklyForecast).toHaveReturned();
    expect(mockGetCityCoordinates).toHaveReturnedTimes(1);

    expect(result.current[0]).toMatchObject({
      data: PARIS_COORDS,
      error: null,
      isFetching: false,
    });
  });

  test("should return not found error for an unknown city", async () => {
    const ERROR = "City Not Found";
    const UNKNOWN_CITY = "CITY OF GOD";

    mockGetWeeklyForecast.mockResolvedValueOnce({});
    mockGetCityCoordinates.mockRejectedValueOnce(new Error(ERROR));

    const { result, waitForNextUpdate } = renderHook(() =>
      useWeeklyForecast(UNKNOWN_CITY)
    );

    expect(result.current[0]).toMatchObject({
      data: null,
      error: null,
      isFetching: true,
    });

    await waitForNextUpdate();

    expect(mockGetCityCoordinates).toHaveBeenCalledWith(UNKNOWN_CITY);
    expect(mockGetCityCoordinates).toHaveBeenCalledTimes(1);
    expect(mockGetWeeklyForecast).toHaveBeenCalledTimes(0);

    expect(result.current[0]).toMatchObject({
      data: null,
      error: ERROR,
      isFetching: false,
    });
  });

  test("should set Hamburg as the new city", async () => {
    mockGetCityCoordinates.mockResolvedValueOnce({ lon: 10, lat: 53.55 });

    const { result, waitForNextUpdate } = renderHook(() =>
      useWeeklyForecast(INITIAL_CITY)
    );

    await waitForNextUpdate();

    expect(mockGetCityCoordinates).toHaveBeenCalledWith(INITIAL_CITY);
    expect(mockGetCityCoordinates).toHaveBeenCalledTimes(1);

    act(() => {
      const [, setCity] = result.current;
      setCity(UPDATED_CITY);
    });

    await waitForNextUpdate();

    expect(mockGetCityCoordinates).toHaveBeenCalledWith(UPDATED_CITY);
    expect(mockGetCityCoordinates).toHaveBeenCalledTimes(2);
  });
});
