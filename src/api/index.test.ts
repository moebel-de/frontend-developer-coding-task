import { getWeatherData } from ".";
import fetch from "jest-fetch-mock";
import { API_URL, API_TOKEN } from "../config";

const dummyCity = "Hamburg";

describe("testing weather api", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("call weather for " + dummyCity, async () => {
    const dummyData = { list: [{}] };
    // test succesfull response
    fetch.mockResponseOnce(JSON.stringify(dummyData), { status: 200 });

    const res = await getWeatherData(dummyCity);
    // shoud return hamburg data
    expect(res).toEqual(dummyData);

    // assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);

    // check url -> dos it make sense?
    expect(fetch.mock.calls[0][0]).toEqual(
      `${API_URL}daily?q=${dummyCity}&cnt=16&units=metric&appid=${API_TOKEN}`,
    );
  });
  it("test empty response", async () => {
    // test succesfull response
    fetch.mockResponseOnce("q39048ut3q41", { status: 200 });

    try {
      await getWeatherData(dummyCity);
    } catch (e) {
      expect(e.message).toEqual("something went wrong");
    }
  });
  it("test fetch error", async () => {
    fetch.mockRejectOnce(new Error("fake error message"));

    try {
      await getWeatherData(dummyCity);
    } catch (e) {
      expect(e.message).toEqual("something went wrong");
    }

    // assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);

    // check url -> dos it make sense?
    expect(fetch.mock.calls[0][0]).toEqual(
      `${API_URL}daily?q=${dummyCity}&cnt=16&units=metric&appid=${API_TOKEN}`,
    );
  });
  it("test api error 404", async () => {
    // send status 404
    fetch.mockResponseOnce("whatever", { status: 404 });

    const res = await getWeatherData(dummyCity);
    // shoud return undefined
    expect(res).toEqual(undefined);

    // assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
  });
  it("test api error 500", async () => {
    // simulate server error
    fetch.mockResponseOnce("whatever", { status: 500 });

    try {
      await getWeatherData(dummyCity);
    } catch (e) {
      expect(e.message).toEqual("something went wrong");
    }

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
  });
  it("test api unauthorized", async () => {
    // simulate server error
    fetch.mockResponseOnce("whatever", { status: 401 });

    try {
      await getWeatherData(dummyCity);
    } catch (e) {
      expect(e.message).toEqual("unauthorized");
    }
    expect(fetch.mock.calls.length).toEqual(1);
  });
});
