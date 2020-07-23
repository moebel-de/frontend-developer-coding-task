import * as icons from "./icons-path";

export interface IconsById {
  path: string;
  ids: number[];
}

export const iconsById: IconsById[] = [
  {
    path: icons.wiThunderstorm,
    ids: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
  },
  {
    path: icons.wiShowers,
    ids: [300, 301, 302, 310, 311, 312, 313, 314, 321, 520, 521, 522, 531],
  },
  {
    path: icons.wiDaySprinkle,
    ids: [500, 501, 502, 503, 504],
  },
  {
    path: icons.wiSnow,
    ids: [511, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
  },
  {
    path: icons.wiFog,
    ids: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
  },
  {
    path: icons.wiDaySunny,
    ids: [800],
  },
  {
    path: icons.widayCloudy,
    ids: [801],
  },
  {
    path: icons.wiCloud,
    ids: [802],
  },
  {
    path: icons.wiCloudy,
    ids: [803, 804],
  },
];
