import { iconsById } from "./icons-by-id";

export function getIconPathById(id: number): string | null {
  const item = iconsById.find((item) => item.ids.includes(id));

  return item?.path || null;
}
