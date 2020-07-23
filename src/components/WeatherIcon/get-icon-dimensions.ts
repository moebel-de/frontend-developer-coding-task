import { IconSize } from "./types";
import { iconSizes } from "./constants";

export function getIconDimensions(
  type: IconSize
): {
  width: string;
  height: string;
} | null {
  const size: string = iconSizes[type];

  if (!size) {
    return null;
  }

  return {
    width: size,
    height: size,
  };
}
