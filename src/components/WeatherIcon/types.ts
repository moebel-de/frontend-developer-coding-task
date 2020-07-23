import { CSSProperties, AriaAttributes } from "react";

interface HTMLProps extends AriaAttributes {
  className?: string;
}

export interface WeatherIconProps extends HTMLProps {
  color?: string;
  description: string;
  id: string;
  iconId: number;
  size?: IconSize;
  style?: CSSProperties;
  title: string;
}

export enum IconSize {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
  xxlarge = "xxlarge",
}
