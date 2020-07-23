export enum BreakPoints {
  mobileLarge = "mobileLarge",
  laptop = "laptop",
}

const breakPoints: {
  [key in BreakPoints]: string;
} = {
  mobileLarge: "480px",
  laptop: "1024px",
};

export const device: {
  [key in BreakPoints]: string;
} = {
  mobileLarge: getMQ(BreakPoints.mobileLarge),
  laptop: getMQ(BreakPoints.laptop),
};

function getMQ(breakPoint: BreakPoints) {
  return `(min-width: ${breakPoints[breakPoint]})`;
}
