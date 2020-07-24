import { getIconDimensions } from "./get-icon-dimensions";
import { IconSize } from "./types";
import { iconSizes } from "./constants";

describe("icon dimensions", () => {
  test("should return the small dimension", () => {
    const dimension = getIconDimensions(IconSize.small);
    const smallSize = iconSizes.small;

    expect(dimension).toMatchObject({
      width: smallSize,
      height: smallSize,
    });
  });

  test("should return null", () => {
    const dimension = getIconDimensions("invalid size" as any);

    expect(dimension).toBeNull();
  });
});
