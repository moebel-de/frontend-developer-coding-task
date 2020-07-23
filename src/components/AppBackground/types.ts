import { palette } from "./palette";

export type BackgroundType = "cold" | "hot";

export enum BackgroundTypes {
  cold = "cold",
  hot = "hot",
}
export interface Gradient {
  top: palette;
  bottom: palette;
}

export type Gradients = {
  [key in BackgroundType]: Gradient;
};
