import React from "react";
import { render, screen } from "@testing-library/react";

import mockData from "../../api/mock-weekly-forecast-data.json";
import { normalizeDailyModel, normalizeCurrentModel } from "../../api";
import ForecastBoard from "./ForecastBoard";

const today = normalizeCurrentModel(mockData.current);
const nextDays = normalizeDailyModel(mockData.daily.slice(1, 5));

describe("<ForecastBoard />", () => {
  test("should render the featured days and the next days list without crash", async () => {
    render(
      <ForecastBoard
        today={today}
        nextDays={nextDays}
        isBlurred={false}
        isLoading={false}
      />
    );
    expect(screen.getByTestId("forecast-board-wrapper")).toHaveStyle({
      filter: "blur(0)",
    });
  });

  test("should render <Loading /> when data is loading", () => {
    render(<ForecastBoard isBlurred={false} isLoading={true} />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.getByTestId("forecast-board-wrapper")).toHaveStyle({
      filter: "blur(0)",
    });
  });

  test("should render blurred view of the board", () => {
    render(
      <ForecastBoard
        isBlurred={true}
        isLoading={false}
        today={today}
        nextDays={nextDays}
      />
    );

    expect(screen.getByTestId("forecast-board-wrapper")).toHaveStyle({
      filter: "blur(12px)",
    });
  });
});
