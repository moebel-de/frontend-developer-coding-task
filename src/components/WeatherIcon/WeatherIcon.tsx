import React, { useMemo } from "react";

import { WeatherIconProps, IconSize } from "./types";
import { getIconPathById } from "./get-icon-path-by-id";
import { getIconDimensions } from "./get-icon-dimensions";

function WeatherIcon({
  id,
  iconId,
  title,
  description,
  size = IconSize.xlarge,
  color = "currentColor",
  style = {},
}: WeatherIconProps) {
  const path = useMemo(() => getIconPathById(iconId), [iconId]);
  const widthHeight = useMemo(() => getIconDimensions(size), [size]);

  if (!path) {
    return null;
  }

  let ariaLabelledby;
  let labelledById = `icon_labelledby_${id}`;
  let describedById = `icon_describedby_${id}`;
  let role;

  if (title) {
    ariaLabelledby = description
      ? `${labelledById} ${describedById}`
      : labelledById;
  } else {
    role = "presentation";
    if (description) {
      throw new Error("title attribute required when description is set");
    }
  }

  if (widthHeight) {
    style = {
      ...widthHeight,
      ...style,
    };
  }

  return (
    <svg
      aria-labelledby={ariaLabelledby}
      fill={color}
      role={role}
      style={style}
      viewBox="0 0 30 30"
    >
      {title && <title id={labelledById}>{title}</title>}
      {description && <desc id={describedById}>{description}</desc>}
      <path d={path} />
    </svg>
  );
}

WeatherIcon.displayName = "WeatherIcon";

export default WeatherIcon;
